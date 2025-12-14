from django.test import TestCase
from django.contrib.auth.models import User
from apps.posts.models import Post, PostVote
from apps.tags.models import Tag
from apps.groups.models import Group
import uuid


class PostTests(TestCase):
    """Test cases for Post model"""
    
    def setUp(self):
        # Create a user for testing
        self.user = User.objects.create_user(username='testuser', password='testpass123')
        
        # Create tags for testing
        self.tag1 = Tag.objects.create(name='python')
        self.tag2 = Tag.objects.create(name='django')
        
        # Create a group for testing
        self.group = Group.objects.create(
            name='Test Group',
            group_type=Group.Type.PUBLIC
        )
    
    def test_post_creation(self):
        """Test creating a post"""
        post = Post.objects.create(
            title='Test Post',
            content='Test content',
            author=self.user,
            uuid=uuid.uuid4()
        )
        
        self.assertEqual(post.title, 'Test Post')
        self.assertEqual(post.content, 'Test content')
        self.assertEqual(post.author, self.user)
        self.assertIsNotNone(post.uuid)
        self.assertEqual(post.status, Post.STATUS.PUBLIC)
        self.assertIsNone(post.group)
        self.assertIsNotNone(post.created_at)
        self.assertIsNotNone(post.updated_at)
        self.assertEqual(post.activity_count, 0)
    
    def test_post_str_representation(self):
        """Test the string representation of Post"""
        post = Post.objects.create(
            title='Test Post',
            content='Test content',
            author=self.user,
            uuid=uuid.uuid4()
        )
        
        expected_str = f"Post: {post.uuid} published by {self.user.username}"
        self.assertEqual(str(post), expected_str)
    
    def test_post_statuses(self):
        """Test different post statuses"""
        draft_post = Post.objects.create(
            title='Draft Post',
            content='Draft content',
            author=self.user,
            uuid=uuid.uuid4(),
            status=Post.STATUS.DRAFT
        )
        
        public_post = Post.objects.create(
            title='Public Post',
            content='Public content',
            author=self.user,
            uuid=uuid.uuid4(),
            status=Post.STATUS.PUBLIC
        )
        
        archived_post = Post.objects.create(
            title='Archived Post',
            content='Archived content',
            author=self.user,
            uuid=uuid.uuid4(),
            status=Post.STATUS.ARCHIVED
        )
        
        self.assertEqual(draft_post.status, Post.STATUS.DRAFT)
        self.assertEqual(public_post.status, Post.STATUS.PUBLIC)
        self.assertEqual(archived_post.status, Post.STATUS.ARCHIVED)
    
    def test_post_with_tags(self):
        """Test post with tags"""
        post = Post.objects.create(
            title='Test Post',
            content='Test content',
            author=self.user,
            uuid=uuid.uuid4()
        )
        
        post.tags.add(self.tag1, self.tag2)
        
        self.assertEqual(post.tags.count(), 2)
        self.assertIn(self.tag1, post.tags.all())
        self.assertIn(self.tag2, post.tags.all())
    
    def test_post_with_group(self):
        """Test post with group"""
        post = Post.objects.create(
            title='Test Post',
            content='Test content',
            author=self.user,
            uuid=uuid.uuid4(),
            group=self.group
        )
        
        self.assertEqual(post.group, self.group)
    
    def test_post_verbose_names(self):
        """Test the verbose names for Post"""
        self.assertEqual(Post._meta.verbose_name, 'Post')
        self.assertEqual(Post._meta.verbose_name_plural, 'Posts')
    
    def test_post_ordering(self):
        """Test that posts are ordered by -created_at"""
        post1 = Post.objects.create(
            title='Post 1',
            content='Content 1',
            author=self.user,
            uuid=uuid.uuid4()
        )
        
        post2 = Post.objects.create(
            title='Post 2',
            content='Content 2',
            author=self.user,
            uuid=uuid.uuid4()
        )
        
        # Add a small delay
        import time
        time.sleep(0.01)
        
        post3 = Post.objects.create(
            title='Post 3',
            content='Content 3',
            author=self.user,
            uuid=uuid.uuid4()
        )
        
        posts = Post.objects.all()
        self.assertEqual(posts.first(), post3)  # Most recent should be first
        self.assertEqual(posts.last(), post1)   # Oldest should be last
    
    def test_post_get_absolute_url(self):
        """Test the get_absolute_url method"""
        post = Post.objects.create(
            title='Test Post',
            content='Test content',
            author=self.user,
            uuid=uuid.uuid4()
        )
        
        url = post.get_absolute_url()
        self.assertEqual(url, f'/posts/{post.uuid}/')
    
    def test_post_score_property(self):
        """Test the score property"""
        post = Post.objects.create(
            title='Test Post',
            content='Test content',
            author=self.user,
            uuid=uuid.uuid4()
        )
        
        # Initial score should be 0
        self.assertEqual(post.score, 0)
        
        # Add some votes
        user2 = User.objects.create_user(username='user2', password='testpass123')
        user3 = User.objects.create_user(username='user3', password='testpass123')
        
        PostVote.objects.create(user=user2, post=post, vote=1)
        PostVote.objects.create(user=user3, post=post, vote=-1)
        
        # Refresh the post to get updated score
        post.refresh_from_db()
        self.assertEqual(post.score, 0)  # 1 + (-1) = 0
        
        # Add another upvote
        user4 = User.objects.create_user(username='user4', password='testpass123')
        PostVote.objects.create(user=user4, post=post, vote=1)
        
        post.refresh_from_db()
        self.assertEqual(post.score, 1)  # 1 + (-1) + 1 = 1


class PostVoteTests(TestCase):
    """Test cases for PostVote model"""
    
    def setUp(self):
        # Create users
        self.user1 = User.objects.create_user(username='user1', password='testpass123')
        self.user2 = User.objects.create_user(username='user2', password='testpass123')
        
        # Create a post
        self.post = Post.objects.create(
            title='Test Post',
            content='Test content',
            author=self.user1,
            uuid=uuid.uuid4()
        )
    
    def test_post_vote_creation(self):
        """Test creating a post vote"""
        vote = PostVote.objects.create(
            user=self.user2,
            post=self.post,
            vote=1
        )
        
        self.assertEqual(vote.user, self.user2)
        self.assertEqual(vote.post, self.post)
        self.assertEqual(vote.vote, 1)
        self.assertIsNotNone(vote.created_at)
        self.assertIsNotNone(vote.updated_at)
    
    def test_post_vote_str_representation(self):
        """Test the string representation of PostVote"""
        vote = PostVote.objects.create(
            user=self.user2,
            post=self.post,
            vote=1
        )
        
        expected_str = f"{vote.vote}  point by  {self.user2.username}"
        self.assertEqual(str(vote), expected_str)
    
    def test_post_vote_values(self):
        """Test different vote values"""
        upvote = PostVote.objects.create(
            user=self.user2,
            post=self.post,
            vote=1
        )
        
        downvote = PostVote.objects.create(
            user=self.user1,  # Author can also vote on their own post
            post=self.post,
            vote=-1
        )
        
        neutral_vote = PostVote.objects.create(
            user=User.objects.create_user(username='user3', password='testpass123'),
            post=self.post,
            vote=0
        )
        
        self.assertEqual(upvote.vote, 1)
        self.assertEqual(downvote.vote, -1)
        self.assertEqual(neutral_vote.vote, 0)
    
    def test_post_vote_validation(self):
        """Test vote validation"""
        # Test valid votes
        for vote_value in [-1, 0, 1]:
            vote = PostVote.objects.create(
                user=self.user2,
                post=self.post,
                vote=vote_value
            )
            self.assertEqual(vote.vote, vote_value)
        
        # Test invalid votes (should raise ValidationError)
        with self.assertRaises(Exception):
            vote = PostVote.objects.create(
                user=self.user2,
                post=self.post,
                vote=2  # Invalid vote value
            )
    
    def test_post_vote_relationship(self):
        """Test the relationship between post and votes"""
        user3 = User.objects.create_user(username='user3', password='testpass123')
        user4 = User.objects.create_user(username='user4', password='testpass123')
        
        vote1 = PostVote.objects.create(user=self.user2, post=self.post, vote=1)
        vote2 = PostVote.objects.create(user=user3, post=self.post, vote=-1)
        vote3 = PostVote.objects.create(user=user4, post=self.post, vote=1)
        
        # Test that we can access votes through the post
        post_votes = self.post.votes.all()
        self.assertEqual(post_votes.count(), 3)
        self.assertIn(vote1, post_votes)
        self.assertIn(vote2, post_votes)
        self.assertIn(vote3, post_votes)
    
    def test_post_vote_ordering(self):
        """Test that post votes are ordered by created_at"""
        user3 = User.objects.create_user(username='user3', password='testpass123')
        user4 = User.objects.create_user(username='user4', password='testpass123')
        
        vote1 = PostVote.objects.create(user=self.user2, post=self.post, vote=1)
        
        # Add a small delay
        import time
        time.sleep(0.01)
        
        vote2 = PostVote.objects.create(user=user3, post=self.post, vote=-1)
        
        # Add another delay
        time.sleep(0.01)
        
        vote3 = PostVote.objects.create(user=user4, post=self.post, vote=1)
        
        post_votes = self.post.votes.all()
        self.assertEqual(post_votes.first(), vote1)  # First created should be first
        self.assertEqual(post_votes.last(), vote3)   # Last created should be last


class PostIntegrationTests(TestCase):
    """Integration tests for post models"""
    
    def setUp(self):
        # Create users
        self.author = User.objects.create_user(username='author', password='testpass123')
        self.user1 = User.objects.create_user(username='user1', password='testpass123')
        self.user2 = User.objects.create_user(username='user2', password='testpass123')
        self.user3 = User.objects.create_user(username='user3', password='testpass123')
        
        # Create tags
        self.tag1 = Tag.objects.create(name='programming')
        self.tag2 = Tag.objects.create(name='python')
        self.tag3 = Tag.objects.create(name='webdev')
        
        # Create groups
        self.public_group = Group.objects.create(
            name='Public Group',
            group_type=Group.Type.PUBLIC
        )
        
        self.private_group = Group.objects.create(
            name='Private Group',
            group_type=Group.Type.PRIVATE
        )
    
    def test_complete_post_workflow(self):
        """Test a complete post workflow"""
        # 1. Create a post with tags and group
        post = Post.objects.create(
            title='Complete Post',
            content='This is a complete post with all features',
            author=self.author,
            uuid=uuid.uuid4(),
            status=Post.STATUS.PUBLIC,
            group=self.public_group
        )
        
        post.tags.add(self.tag1, self.tag2, self.tag3)
        
        # 2. Verify post attributes
        self.assertEqual(post.title, 'Complete Post')
        self.assertEqual(post.author, self.author)
        self.assertEqual(post.status, Post.STATUS.PUBLIC)
        self.assertEqual(post.group, self.public_group)
        self.assertEqual(post.tags.count(), 3)
        
        # 3. Add votes to the post
        vote1 = PostVote.objects.create(user=self.user1, post=post, vote=1)
        vote2 = PostVote.objects.create(user=self.user2, post=post, vote=1)
        vote3 = PostVote.objects.create(user=self.user3, post=post, vote=-1)
        
        # 4. Verify votes
        self.assertEqual(post.votes.count(), 3)
        
        # 5. Verify score calculation
        post.refresh_from_db()
        self.assertEqual(post.score, 1)  # 1 + 1 + (-1) = 1
        
        # 6. Test activity tracking
        self.assertEqual(post.activity_count, 0)
        
        # Increment activity (simulating some activity)
        post.increment_activity()
        post.increment_activity()
        
        post.refresh_from_db()
        self.assertEqual(post.activity_count, 2)
        
        # 7. Verify timestamps on all models
        from django.utils import timezone
        
        for model_instance in [post, vote1, vote2, vote3]:
            self.assertIsNotNone(model_instance.created_at)
            self.assertIsNotNone(model_instance.updated_at)
            self.assertAlmostEqual(
                model_instance.created_at, 
                model_instance.updated_at, 
                delta=timezone.timedelta(seconds=1)
            )
    
    def test_post_with_different_statuses_and_groups(self):
        """Test posts with different statuses and groups"""
        # Create posts with different combinations
        public_post_no_group = Post.objects.create(
            title='Public Post No Group',
            content='Public post without group',
            author=self.author,
            uuid=uuid.uuid4(),
            status=Post.STATUS.PUBLIC
        )
        
        draft_post_with_group = Post.objects.create(
            title='Draft Post With Group',
            content='Draft post with group',
            author=self.author,
            uuid=uuid.uuid4(),
            status=Post.STATUS.DRAFT,
            group=self.private_group
        )
        
        archived_post_with_group = Post.objects.create(
            title='Archived Post With Group',
            content='Archived post with group',
            author=self.author,
            uuid=uuid.uuid4(),
            status=Post.STATUS.ARCHIVED,
            group=self.public_group
        )
        
        # Verify the posts
        self.assertEqual(public_post_no_group.status, Post.STATUS.PUBLIC)
        self.assertIsNone(public_post_no_group.group)
        
        self.assertEqual(draft_post_with_group.status, Post.STATUS.DRAFT)
        self.assertEqual(draft_post_with_group.group, self.private_group)
        
        self.assertEqual(archived_post_with_group.status, Post.STATUS.ARCHIVED)
        self.assertEqual(archived_post_with_group.group, self.public_group)
    
    def test_post_deletion_cascades_to_votes(self):
        """Test that post deletion cascades to votes"""
        post = Post.objects.create(
            title='Test Post',
            content='Test content',
            author=self.author,
            uuid=uuid.uuid4()
        )
        
        # Add votes
        vote1 = PostVote.objects.create(user=self.user1, post=post, vote=1)
        vote2 = PostVote.objects.create(user=self.user2, post=post, vote=-1)
        
        # Verify votes exist
        self.assertEqual(PostVote.objects.count(), 2)
        
        # Delete the post
        post.delete()
        
        # Votes should also be deleted (cascade)
        self.assertEqual(PostVote.objects.count(), 0)