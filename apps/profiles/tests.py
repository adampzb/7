from django.test import TestCase
from django.contrib.auth.models import User
from apps.profiles.models import UserMetaInfo
from django.utils import timezone
import datetime


class UserMetaInfoTests(TestCase):
    """Test cases for UserMetaInfo model"""
    
    def setUp(self):
        # Create a user for testing
        self.user = User.objects.create_user(username='testuser', password='testpass123')
    
    def test_user_meta_info_creation(self):
        """Test creating user meta info"""
        meta_info = UserMetaInfo.objects.create(
            user=self.user,
            bio='Test bio',
            dob=timezone.now().date() - datetime.timedelta(days=365*25),  # 25 years ago
            dob_visible=True,
            is_admin=False,
            is_banned=False,
            is_requesting_delete=False,
            notify_on_comment=True,
            notify_on_vote=True,
            notify_on_mention=True,
            notify_on_follow=True,
            notify_email=False
        )
        
        self.assertEqual(meta_info.user, self.user)
        self.assertEqual(meta_info.bio, 'Test bio')
        self.assertIsNotNone(meta_info.dob)
        self.assertTrue(meta_info.dob_visible)
        self.assertFalse(meta_info.is_admin)
        self.assertFalse(meta_info.is_banned)
        self.assertFalse(meta_info.is_requesting_delete)
        self.assertTrue(meta_info.notify_on_comment)
        self.assertTrue(meta_info.notify_on_vote)
        self.assertTrue(meta_info.notify_on_mention)
        self.assertTrue(meta_info.notify_on_follow)
        self.assertFalse(meta_info.notify_email)
        self.assertIsNotNone(meta_info.created_at)
        self.assertIsNotNone(meta_info.updated_at)
    
    def test_user_meta_info_str_representation(self):
        """Test the string representation of UserMetaInfo"""
        meta_info = UserMetaInfo.objects.create(
            user=self.user,
            bio='Test bio'
        )
        
        expected_str = f"Profile Info: {self.user.username}"
        self.assertEqual(str(meta_info), expected_str)
    
    def test_user_meta_info_verbose_names(self):
        """Test the verbose names for UserMetaInfo"""
        self.assertEqual(UserMetaInfo._meta.verbose_name, 'User Meta Info')
        self.assertEqual(UserMetaInfo._meta.verbose_name_plural, 'User Meta Info')
    
    def test_user_meta_info_timestamps(self):
        """Test that UserMetaInfo has proper timestamps"""
        meta_info = UserMetaInfo.objects.create(
            user=self.user,
            bio='Test bio'
        )
        
        self.assertIsNotNone(meta_info.created_at)
        self.assertIsNotNone(meta_info.updated_at)
        
        # Test that created_at and updated_at are close for new objects
        self.assertAlmostEqual(
            meta_info.created_at, 
            meta_info.updated_at, 
            delta=timezone.timedelta(seconds=1)
        )
    
    def test_user_meta_info_default_values(self):
        """Test default values for UserMetaInfo"""
        meta_info = UserMetaInfo.objects.create(user=self.user)
        
        self.assertIsNone(meta_info.username_changed)
        self.assertEqual(meta_info.bio, '')
        self.assertIsNone(meta_info.dob)
        self.assertFalse(meta_info.dob_visible)
        self.assertFalse(meta_info.is_admin)
        self.assertFalse(meta_info.is_banned)
        self.assertFalse(meta_info.is_requesting_delete)
        self.assertTrue(meta_info.notify_on_comment)
        self.assertTrue(meta_info.notify_on_vote)
        self.assertTrue(meta_info.notify_on_mention)
        self.assertTrue(meta_info.notify_on_follow)
        self.assertFalse(meta_info.notify_email)
    
    def test_user_meta_info_relationship(self):
        """Test the one-to-one relationship between User and UserMetaInfo"""
        meta_info = UserMetaInfo.objects.create(
            user=self.user,
            bio='Test bio'
        )
        
        # Test that we can access meta_info through the user
        user_meta_info = self.user.meta_info
        self.assertEqual(user_meta_info, meta_info)
        
        # Test that we can access user through meta_info
        self.assertEqual(meta_info.user, self.user)
    
    def test_user_meta_info_update(self):
        """Test updating user meta info"""
        meta_info = UserMetaInfo.objects.create(
            user=self.user,
            bio='Original bio',
            is_admin=False
        )
        
        original_updated_at = meta_info.updated_at
        
        # Update the meta info
        meta_info.bio = 'Updated bio'
        meta_info.is_admin = True
        meta_info.save()
        
        meta_info.refresh_from_db()
        
        self.assertEqual(meta_info.bio, 'Updated bio')
        self.assertTrue(meta_info.is_admin)
        self.assertGreater(meta_info.updated_at, original_updated_at)


class UserMetaInfoNotificationTests(TestCase):
    """Test cases for notification preferences in UserMetaInfo"""
    
    def setUp(self):
        # Create a user for testing
        self.user = User.objects.create_user(username='testuser', password='testpass123')
    
    def test_notification_preferences_defaults(self):
        """Test default notification preferences"""
        meta_info = UserMetaInfo.objects.create(user=self.user)
        
        self.assertTrue(meta_info.notify_on_comment)
        self.assertTrue(meta_info.notify_on_vote)
        self.assertTrue(meta_info.notify_on_mention)
        self.assertTrue(meta_info.notify_on_follow)
        self.assertFalse(meta_info.notify_email)
    
    def test_notification_preferences_custom(self):
        """Test custom notification preferences"""
        meta_info = UserMetaInfo.objects.create(
            user=self.user,
            notify_on_comment=False,
            notify_on_vote=False,
            notify_on_mention=True,
            notify_on_follow=False,
            notify_email=True
        )
        
        self.assertFalse(meta_info.notify_on_comment)
        self.assertFalse(meta_info.notify_on_vote)
        self.assertTrue(meta_info.notify_on_mention)
        self.assertFalse(meta_info.notify_on_follow)
        self.assertTrue(meta_info.notify_email)
    
    def test_notification_preferences_update(self):
        """Test updating notification preferences"""
        meta_info = UserMetaInfo.objects.create(user=self.user)
        
        # Initially all should be True except notify_email
        self.assertTrue(meta_info.notify_on_comment)
        self.assertTrue(meta_info.notify_on_vote)
        self.assertTrue(meta_info.notify_on_mention)
        self.assertTrue(meta_info.notify_on_follow)
        self.assertFalse(meta_info.notify_email)
        
        # Update preferences
        meta_info.notify_on_comment = False
        meta_info.notify_on_vote = False
        meta_info.notify_on_mention = False
        meta_info.notify_on_follow = False
        meta_info.notify_email = True
        meta_info.save()
        
        meta_info.refresh_from_db()
        
        self.assertFalse(meta_info.notify_on_comment)
        self.assertFalse(meta_info.notify_on_vote)
        self.assertFalse(meta_info.notify_on_mention)
        self.assertFalse(meta_info.notify_on_follow)
        self.assertTrue(meta_info.notify_email)


class UserMetaInfoAdminTests(TestCase):
    """Test cases for admin-related fields in UserMetaInfo"""
    
    def setUp(self):
        # Create a user for testing
        self.user = User.objects.create_user(username='testuser', password='testpass123')
    
    def test_admin_flags(self):
        """Test admin-related flags"""
        meta_info = UserMetaInfo.objects.create(
            user=self.user,
            is_admin=True,
            is_banned=False,
            is_requesting_delete=False
        )
        
        self.assertTrue(meta_info.is_admin)
        self.assertFalse(meta_info.is_banned)
        self.assertFalse(meta_info.is_requesting_delete)
    
    def test_banned_user(self):
        """Test banned user flag"""
        meta_info = UserMetaInfo.objects.create(
            user=self.user,
            is_banned=True
        )
        
        self.assertTrue(meta_info.is_banned)
        
        # Banned users should still be able to have other flags
        meta_info.is_admin = True
        meta_info.save()
        
        meta_info.refresh_from_db()
        self.assertTrue(meta_info.is_banned)
        self.assertTrue(meta_info.is_admin)
    
    def test_delete_request(self):
        """Test delete request flag"""
        meta_info = UserMetaInfo.objects.create(
            user=self.user,
            is_requesting_delete=True
        )
        
        self.assertTrue(meta_info.is_requesting_delete)
        
        # Test toggling the flag
        meta_info.is_requesting_delete = False
        meta_info.save()
        
        meta_info.refresh_from_db()
        self.assertFalse(meta_info.is_requesting_delete)


class UserMetaInfoIntegrationTests(TestCase):
    """Integration tests for UserMetaInfo"""
    
    def test_user_meta_info_with_user_deletion(self):
        """Test what happens when a user with meta info is deleted"""
        user = User.objects.create_user(username='testuser', password='testpass123')
        meta_info = UserMetaInfo.objects.create(
            user=user,
            bio='Test bio'
        )
        
        # Verify meta info exists
        self.assertEqual(UserMetaInfo.objects.count(), 1)
        
        # Delete the user
        user.delete()
        
        # Meta info should also be deleted (cascade)
        self.assertEqual(UserMetaInfo.objects.count(), 0)
    
    def test_multiple_users_with_meta_info(self):
        """Test multiple users with meta info"""
        user1 = User.objects.create_user(username='user1', password='testpass123')
        user2 = User.objects.create_user(username='user2', password='testpass123')
        user3 = User.objects.create_user(username='user3', password='testpass123')
        
        meta_info1 = UserMetaInfo.objects.create(user=user1, bio='Bio 1')
        meta_info2 = UserMetaInfo.objects.create(user=user2, bio='Bio 2')
        meta_info3 = UserMetaInfo.objects.create(user=user3, bio='Bio 3')
        
        # Verify all meta infos exist
        self.assertEqual(UserMetaInfo.objects.count(), 3)
        
        # Verify each user has their own meta info
        self.assertEqual(user1.meta_info, meta_info1)
        self.assertEqual(user2.meta_info, meta_info2)
        self.assertEqual(user3.meta_info, meta_info3)
    
    def test_user_meta_info_creation_with_all_fields(self):
        """Test creating user meta info with all fields"""
        user = User.objects.create_user(username='completeuser', password='testpass123')
        
        dob = timezone.now().date() - datetime.timedelta(days=365*30)  # 30 years ago
        username_changed_date = timezone.now().date() - datetime.timedelta(days=30)
        
        meta_info = UserMetaInfo.objects.create(
            user=user,
            username_changed=username_changed_date,
            bio='Complete bio with all fields',
            dob=dob,
            dob_visible=True,
            is_admin=True,
            is_banned=False,
            is_requesting_delete=False,
            notify_on_comment=True,
            notify_on_vote=True,
            notify_on_mention=True,
            notify_on_follow=True,
            notify_email=True
        )
        
        # Verify all fields are set correctly
        self.assertEqual(meta_info.user, user)
        self.assertEqual(meta_info.username_changed, username_changed_date)
        self.assertEqual(meta_info.bio, 'Complete bio with all fields')
        self.assertEqual(meta_info.dob, dob)
        self.assertTrue(meta_info.dob_visible)
        self.assertTrue(meta_info.is_admin)
        self.assertFalse(meta_info.is_banned)
        self.assertFalse(meta_info.is_requesting_delete)
        self.assertTrue(meta_info.notify_on_comment)
        self.assertTrue(meta_info.notify_on_vote)
        self.assertTrue(meta_info.notify_on_mention)
        self.assertTrue(meta_info.notify_on_follow)
        self.assertTrue(meta_info.notify_email)
        
        # Verify timestamps
        self.assertIsNotNone(meta_info.created_at)
        self.assertIsNotNone(meta_info.updated_at)