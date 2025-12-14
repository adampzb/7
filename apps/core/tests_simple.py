from django.test import TestCase
from django.contrib.auth.models import User
from django.utils import timezone
from apps.posts.models import Post
from apps.tags.models import Tag
from apps.profiles.models import UserMetaInfo
import uuid
import datetime


class CoreFunctionalityTests(TestCase):
    """Simple tests for core functionality using existing models"""
    
    def setUp(self):
        # Create a test user
        self.user = User.objects.create_user(username='testuser', password='testpass123')
        
        # Create a test tag
        self.tag = Tag.objects.create(name='test-tag')
        
        # Create a test post
        self.post = Post.objects.create(
            title='Test Post',
            content='Test content',
            author=self.user,
            uuid=uuid.uuid4()
        )
        self.post.tags.add(self.tag)
    
    def test_user_creation(self):
        """Test that users can be created"""
        # There might be existing users from migrations, so check that our user exists
        self.assertTrue(User.objects.filter(username='testuser').exists())
        self.assertEqual(self.user.username, 'testuser')
    
    def test_tag_creation(self):
        """Test that tags can be created"""
        self.assertEqual(Tag.objects.count(), 1)
        self.assertEqual(self.tag.name, 'test-tag')
    
    def test_post_creation(self):
        """Test that posts can be created"""
        self.assertEqual(Post.objects.count(), 1)
        self.assertEqual(self.post.title, 'Test Post')
        self.assertEqual(self.post.author, self.user)
    
    def test_post_tag_relationship(self):
        """Test that posts and tags have proper relationships"""
        self.assertEqual(self.post.tags.count(), 1)
        self.assertIn(self.tag, self.post.tags.all())
    
    def test_post_timestamps(self):
        """Test that posts have proper timestamps"""
        self.assertIsNotNone(self.post.created_at)
        self.assertIsNotNone(self.post.updated_at)
        
        # Test that created_at and updated_at are close for new objects
        self.assertAlmostEqual(
            self.post.created_at, 
            self.post.updated_at, 
            delta=datetime.timedelta(seconds=1)
        )
    
    def test_post_activity_tracking(self):
        """Test that posts have activity tracking"""
        self.assertEqual(self.post.activity_count, 0)
        
        # Test incrementing activity
        self.post.increment_activity()
        self.post.refresh_from_db()
        self.assertEqual(self.post.activity_count, 1)
    
    def test_user_meta_info_creation(self):
        """Test that user meta info can be created"""
        meta_info = UserMetaInfo.objects.create(
            user=self.user,
            bio='Test bio'
        )
        
        self.assertEqual(UserMetaInfo.objects.count(), 1)
        self.assertEqual(meta_info.user, self.user)
        self.assertEqual(meta_info.bio, 'Test bio')
        
        # Test timestamps
        self.assertIsNotNone(meta_info.created_at)
        self.assertIsNotNone(meta_info.updated_at)
    
    def test_user_meta_info_relationship(self):
        """Test that user and meta info have proper relationship"""
        meta_info = UserMetaInfo.objects.create(
            user=self.user,
            bio='Test bio'
        )
        
        # Test that we can access meta_info through the user
        self.assertEqual(self.user.meta_info, meta_info)
    
    def test_post_updated_at_changes(self):
        """Test that updated_at changes when post is modified"""
        original_updated_at = self.post.updated_at
        
        # Simulate some time passing
        timezone.now()
        
        self.post.title = 'Updated Title'
        self.post.save()
        
        self.post.refresh_from_db()
        self.assertGreater(self.post.updated_at, original_updated_at)
    
    def test_post_absolute_url(self):
        """Test that posts have proper absolute URLs"""
        url = self.post.get_absolute_url()
        # The URL format might be /api/v1/posts/uuid/ or /posts/uuid/
        self.assertTrue(url.endswith(f'{self.post.uuid}/'))
        self.assertTrue('/posts/' in url or '/api/v1/posts/' in url)


class CoreIntegrationTests(TestCase):
    """Integration tests for core functionality"""
    
    def test_complete_workflow(self):
        """Test a complete workflow from user creation to post with tags"""
        # Create user
        user = User.objects.create_user(username='workflowuser', password='testpass123')
        
        # Create tags
        tag1 = Tag.objects.create(name='programming')
        tag2 = Tag.objects.create(name='python')
        
        # Create post
        post = Post.objects.create(
            title='Integration Test Post',
            content='This is an integration test post',
            author=user,
            uuid=uuid.uuid4()
        )
        post.tags.add(tag1, tag2)
        
        # Create user meta info
        meta_info = UserMetaInfo.objects.create(
            user=user,
            bio='Integration test bio',
            is_admin=True
        )
        
        # Verify all relationships (there might be existing users from migrations)
        self.assertEqual(Tag.objects.count(), 2)
        self.assertEqual(Post.objects.count(), 1)
        self.assertEqual(UserMetaInfo.objects.count(), 1)
        self.assertTrue(User.objects.filter(username='workflowuser').exists())
        
        # Verify post has both tags
        self.assertEqual(post.tags.count(), 2)
        
        # Verify user has meta info
        self.assertEqual(user.meta_info, meta_info)
        
        # Verify timestamps on models that have them
        for model_instance in [tag1, tag2, post, meta_info]:
            self.assertIsNotNone(model_instance.created_at)
            self.assertIsNotNone(model_instance.updated_at)
        
        # User model doesn't have timestamps by default, but should exist
        self.assertIsNotNone(user)