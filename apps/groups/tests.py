from django.test import TestCase
from django.contrib.auth.models import User
from apps.groups.models import Group, GroupMember, GroupInvite, MemberRequest, GroupRule
from apps.tags.models import Tag


class GroupTests(TestCase):
    """Test cases for Group model"""
    
    def setUp(self):
        # Create a tag for testing
        self.tag = Tag.objects.create(name='test-tag')
        
        # Create a user for testing
        self.user = User.objects.create_user(username='testuser', password='testpass123')
    
    def test_group_creation(self):
        """Test creating a group"""
        group = Group.objects.create(
            name='Test Group',
            description='Test description',
            group_type=Group.Type.PUBLIC,
        )
        
        self.assertEqual(group.name, 'Test Group')
        self.assertEqual(group.description, 'Test description')
        self.assertEqual(group.group_type, Group.Type.PUBLIC)
        self.assertFalse(group.archive_posts)
        self.assertIsNotNone(group.created_at)
        self.assertIsNotNone(group.updated_at)
    
    def test_group_str_representation(self):
        """Test the string representation of Group"""
        group = Group.objects.create(
            name='Test Group',
            description='Test description',
            group_type=Group.Type.PUBLIC,
        )
        self.assertEqual(str(group), 'Group: Test Group')
    
    def test_group_types(self):
        """Test different group types"""
        public_group = Group.objects.create(
            name='Public Group',
            group_type=Group.Type.PUBLIC,
        )
        
        restricted_group = Group.objects.create(
            name='Restricted Group',
            group_type=Group.Type.RESTRICTED,
        )
        
        private_group = Group.objects.create(
            name='Private Group',
            group_type=Group.Type.PRIVATE,
        )
        
        self.assertEqual(public_group.group_type, Group.Type.PUBLIC)
        self.assertEqual(restricted_group.group_type, Group.Type.RESTRICTED)
        self.assertEqual(private_group.group_type, Group.Type.PRIVATE)
    
    def test_group_with_topics(self):
        """Test group with topics (tags)"""
        tag2 = Tag.objects.create(name='programming')
        
        group = Group.objects.create(
            name='Programming Group',
            group_type=Group.Type.PUBLIC,
        )
        
        group.topics.add(self.tag, tag2)
        
        self.assertEqual(group.topics.count(), 2)
        self.assertIn(self.tag, group.topics.all())
        self.assertIn(tag2, group.topics.all())
    
    def test_group_verbose_names(self):
        """Test the verbose names for Group"""
        self.assertEqual(Group._meta.verbose_name, 'Group')
        self.assertEqual(Group._meta.verbose_name_plural, 'Groups')
    
    def test_group_ordering(self):
        """Test that groups are ordered by -created_at"""
        group1 = Group.objects.create(name='Group 1', group_type=Group.Type.PUBLIC)
        group2 = Group.objects.create(name='Group 2', group_type=Group.Type.PUBLIC)
        
        # Add a small delay
        import time
        time.sleep(0.01)
        
        group3 = Group.objects.create(name='Group 3', group_type=Group.Type.PUBLIC)
        
        groups = Group.objects.all()
        self.assertEqual(groups.first(), group3)  # Most recent should be first
        self.assertEqual(groups.last(), group1)   # Oldest should be last


class GroupMemberTests(TestCase):
    """Test cases for GroupMember model"""
    
    def setUp(self):
        # Create users
        self.user1 = User.objects.create_user(username='user1', password='testpass123')
        self.user2 = User.objects.create_user(username='user2', password='testpass123')
        
        # Create a group
        self.group = Group.objects.create(
            name='Test Group',
            group_type=Group.Type.PUBLIC,
        )
    
    def test_group_member_creation(self):
        """Test creating a group member"""
        member = GroupMember.objects.create(
            group=self.group,
            user=self.user1,
            member_type=GroupMember.MemberTypes.MEMBER,
            status=GroupMember.Status.ACTIVE
        )
        
        self.assertEqual(member.group, self.group)
        self.assertEqual(member.user, self.user1)
        self.assertEqual(member.member_type, GroupMember.MemberTypes.MEMBER)
        self.assertEqual(member.status, GroupMember.Status.ACTIVE)
    
    def test_group_member_str_representation(self):
        """Test the string representation of GroupMember"""
        member = GroupMember.objects.create(
            group=self.group,
            user=self.user1,
            member_type=GroupMember.MemberTypes.ADMIN,
        )
        
        expected_str = f"{self.user1.username} added to {self.group.name} as {GroupMember.MemberTypes.ADMIN}"
        self.assertEqual(str(member), expected_str)
    
    def test_group_member_types(self):
        """Test different member types"""
        admin = GroupMember.objects.create(
            group=self.group,
            user=self.user1,
            member_type=GroupMember.MemberTypes.ADMIN,
        )
        
        moderator = GroupMember.objects.create(
            group=self.group,
            user=self.user2,
            member_type=GroupMember.MemberTypes.MODERATOR,
        )
        
        self.assertEqual(admin.member_type, GroupMember.MemberTypes.ADMIN)
        self.assertEqual(moderator.member_type, GroupMember.MemberTypes.MODERATOR)
    
    def test_group_member_statuses(self):
        """Test different member statuses"""
        active_member = GroupMember.objects.create(
            group=self.group,
            user=self.user1,
            status=GroupMember.Status.ACTIVE,
        )
        
        banned_member = GroupMember.objects.create(
            group=self.group,
            user=self.user2,
            status=GroupMember.Status.BANNED,
        )
        
        self.assertEqual(active_member.status, GroupMember.Status.ACTIVE)
        self.assertEqual(banned_member.status, GroupMember.Status.BANNED)
    
    def test_group_member_relationship(self):
        """Test the relationship between group and members"""
        member1 = GroupMember.objects.create(
            group=self.group,
            user=self.user1,
            member_type=GroupMember.MemberTypes.MEMBER,
        )
        
        member2 = GroupMember.objects.create(
            group=self.group,
            user=self.user2,
            member_type=GroupMember.MemberTypes.MEMBER,
        )
        
        # Test that we can access members through the group
        group_members = self.group.members.all()
        self.assertEqual(group_members.count(), 2)
        self.assertIn(member1, group_members)
        self.assertIn(member2, group_members)


class GroupInviteTests(TestCase):
    """Test cases for GroupInvite model"""
    
    def setUp(self):
        # Create users
        self.user1 = User.objects.create_user(username='user1', password='testpass123')
        self.user2 = User.objects.create_user(username='user2', password='testpass123')
        
        # Create a group
        self.group = Group.objects.create(
            name='Test Group',
            group_type=Group.Type.PUBLIC,
        )
    
    def test_group_invite_creation(self):
        """Test creating a group invite"""
        invite = GroupInvite.objects.create(
            group=self.group,
            created_by=self.user1,
            user=self.user2,
            invite_as=GroupInvite.InviteAs.MEMBER
        )
        
        self.assertEqual(invite.group, self.group)
        self.assertEqual(invite.created_by, self.user1)
        self.assertEqual(invite.user, self.user2)
        self.assertEqual(invite.invite_as, GroupInvite.InviteAs.MEMBER)
    
    def test_group_invite_str_representation(self):
        """Test the string representation of GroupInvite"""
        invite = GroupInvite.objects.create(
            group=self.group,
            created_by=self.user1,
            user=self.user2,
            invite_as=GroupInvite.InviteAs.MODERATOR
        )
        
        expected_str = f"{self.user1.username} has invited {self.user2.username} to join {self.group.name} as a {GroupInvite.InviteAs.MODERATOR}."
        self.assertEqual(str(invite), expected_str)
    
    def test_group_invite_types(self):
        """Test different invite types"""
        member_invite = GroupInvite.objects.create(
            group=self.group,
            created_by=self.user1,
            user=self.user2,
            invite_as=GroupInvite.InviteAs.MEMBER
        )
        
        moderator_invite = GroupInvite.objects.create(
            group=self.group,
            created_by=self.user1,
            user=self.user2,
            invite_as=GroupInvite.InviteAs.MODERATOR
        )
        
        self.assertEqual(member_invite.invite_as, GroupInvite.InviteAs.MEMBER)
        self.assertEqual(moderator_invite.invite_as, GroupInvite.InviteAs.MODERATOR)


class MemberRequestTests(TestCase):
    """Test cases for MemberRequest model"""
    
    def setUp(self):
        # Create users
        self.user = User.objects.create_user(username='testuser', password='testpass123')
        
        # Create a group
        self.group = Group.objects.create(
            name='Test Group',
            group_type=Group.Type.PUBLIC,
        )
    
    def test_member_request_creation(self):
        """Test creating a member request"""
        request = MemberRequest.objects.create(
            group=self.group,
            user=self.user,
            is_approved=False
        )
        
        self.assertEqual(request.group, self.group)
        self.assertEqual(request.user, self.user)
        self.assertFalse(request.is_approved)
    
    def test_member_request_str_representation(self):
        """Test the string representation of MemberRequest"""
        request = MemberRequest.objects.create(
            group=self.group,
            user=self.user,
        )
        
        expected_str = f"{self.user.username} sent a request to join {self.group.name}"
        self.assertEqual(str(request), expected_str)
    
    def test_member_request_approval(self):
        """Test approving a member request"""
        request = MemberRequest.objects.create(
            group=self.group,
            user=self.user,
            is_approved=False
        )
        
        self.assertFalse(request.is_approved)
        
        request.is_approved = True
        request.save()
        
        request.refresh_from_db()
        self.assertTrue(request.is_approved)


class GroupRuleTests(TestCase):
    """Test cases for GroupRule model"""
    
    def setUp(self):
        # Create a group
        self.group = Group.objects.create(
            name='Test Group',
            group_type=Group.Type.PUBLIC,
        )
    
    def test_group_rule_creation(self):
        """Test creating a group rule"""
        rule = GroupRule.objects.create(
            group=self.group,
            title='Be respectful',
            description='All members must be respectful to each other',
            rule_type=GroupRule.RuleType.BOTH
        )
        
        self.assertEqual(rule.group, self.group)
        self.assertEqual(rule.title, 'Be respectful')
        self.assertEqual(rule.description, 'All members must be respectful to each other')
        self.assertEqual(rule.rule_type, GroupRule.RuleType.BOTH)
    
    def test_group_rule_str_representation(self):
        """Test the string representation of GroupRule"""
        rule = GroupRule.objects.create(
            group=self.group,
            title='Be respectful',
            description='All members must be respectful to each other',
            rule_type=GroupRule.RuleType.BOTH
        )
        
        expected_str = f"{self.group.name} rule : Be respectful"
        self.assertEqual(str(rule), expected_str)
    
    def test_group_rule_types(self):
        """Test different rule types"""
        posts_rule = GroupRule.objects.create(
            group=self.group,
            title='Post rule',
            rule_type=GroupRule.RuleType.POSTS
        )
        
        comments_rule = GroupRule.objects.create(
            group=self.group,
            title='Comment rule',
            rule_type=GroupRule.RuleType.COMMENTS
        )
        
        both_rule = GroupRule.objects.create(
            group=self.group,
            title='Both rule',
            rule_type=GroupRule.RuleType.BOTH
        )
        
        self.assertEqual(posts_rule.rule_type, GroupRule.RuleType.POSTS)
        self.assertEqual(comments_rule.rule_type, GroupRule.RuleType.COMMENTS)
        self.assertEqual(both_rule.rule_type, GroupRule.RuleType.BOTH)


class GroupIntegrationTests(TestCase):
    """Integration tests for group models"""
    
    def setUp(self):
        # Create users
        self.admin_user = User.objects.create_user(username='admin', password='testpass123')
        self.member_user = User.objects.create_user(username='member', password='testpass123')
        self.guest_user = User.objects.create_user(username='guest', password='testpass123')
        
        # Create a group
        self.group = Group.objects.create(
            name='Test Group',
            description='A test group for integration testing',
            group_type=Group.Type.RESTRICTED,
        )
        
        # Create tags
        self.tag1 = Tag.objects.create(name='test')
        self.tag2 = Tag.objects.create(name='integration')
        
        # Add tags to group
        self.group.topics.add(self.tag1, self.tag2)
    
    def test_complete_group_workflow(self):
        """Test a complete group workflow from creation to membership"""
        # 1. Group should have topics
        self.assertEqual(self.group.topics.count(), 2)
        
        # 2. Create group rules
        rule1 = GroupRule.objects.create(
            group=self.group,
            title='Be respectful',
            description='All members must be respectful',
            rule_type=GroupRule.RuleType.BOTH
        )
        
        rule2 = GroupRule.objects.create(
            group=self.group,
            title='No spam',
            description='No spam posts or comments',
            rule_type=GroupRule.RuleType.POSTS
        )
        
        self.assertEqual(self.group.rules.count(), 2)
        
        # 3. Admin joins as admin
        admin_member = GroupMember.objects.create(
            group=self.group,
            user=self.admin_user,
            member_type=GroupMember.MemberTypes.ADMIN,
            status=GroupMember.Status.ACTIVE
        )
        
        # 4. Member sends join request
        member_request = MemberRequest.objects.create(
            group=self.group,
            user=self.member_user,
            is_approved=False
        )
        
        # 5. Admin invites guest user
        guest_invite = GroupInvite.objects.create(
            group=self.group,
            created_by=self.admin_user,
            user=self.guest_user,
            invite_as=GroupInvite.InviteAs.MEMBER
        )
        
        # 6. Verify all relationships
        self.assertEqual(self.group.members.count(), 1)
        self.assertEqual(self.group.member_requests.count(), 1)
        self.assertEqual(self.group.invites.count(), 1)
        
        # 7. Verify timestamps on all models
        from django.utils import timezone
        
        for model_instance in [self.group, admin_member, member_request, guest_invite, rule1, rule2]:
            self.assertIsNotNone(model_instance.created_at)
            self.assertIsNotNone(model_instance.updated_at)
            self.assertAlmostEqual(
                model_instance.created_at, 
                model_instance.updated_at, 
                delta=timezone.timedelta(seconds=1)
            )