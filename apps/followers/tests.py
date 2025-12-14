from django.test import TestCase
from django.contrib.auth.models import User
from apps.followers.models import PostFollower, UserFollower
from apps.posts.models import Post
from apps.tags.models import Tag
import uuid


class PostFollowerTests(TestCase):
    """Test cases for PostFollower model"""
    
    def setUp(self):
        # Create test users
        self.user1 = User.objects.create_user(username='user1', password='testpass123')
        self.user2 = User.objects.create_user(username='user2', password='testpass123')
        
        # Create a test post
        self.tag = Tag.objects.create(name='test-tag')
        self.post = Post.objects.create(
            title='Test Post',
            content='Test content',
            author=self.user1,
            uuid=uuid.uuid4()
        )
        self.post.tags.add(self.tag)
    
    def test_post_follower_creation(self):
        """Test creating a post follower"""
        follower = PostFollower.objects.create(
            post=self.post,
            follower=self.user2
        )
        
        self.assertEqual(follower.post, self.post)
        self.assertEqual(follower.follower, self.user2)
        self.assertIsNotNone(follower.created_at)
        self.assertIsNotNone(follower.updated_at)
    
    def test_post_follower_str_representation(self):
        """Test the string representation of PostFollower"""
        follower = PostFollower.objects.create(
            post=self.post,
            follower=self.user2
        )
        
        expected_str = f"{self.user2.username} started following {self.post.title}"
        self.assertEqual(str(follower), expected_str)
    
    def test_post_follower_relationship(self):
        """Test the relationship between post and followers"""
        follower1 = PostFollower.objects.create(
            post=self.post,
            follower=self.user2
        )
        
        # Test that we can access followers through the post
        post_followers = self.post.followers.all()
        self.assertEqual(post_followers.count(), 1)
        self.assertEqual(post_followers.first(), follower1)
    
    def test_multiple_post_followers(self):
        """Test multiple followers for a single post"""
        user3 = User.objects.create_user(username='user3', password='testpass123')
        
        follower1 = PostFollower.objects.create(
            post=self.post,
            follower=self.user2
        )
        
        follower2 = PostFollower.objects.create(
            post=self.post,
            follower=user3
        )
        
        post_followers = self.post.followers.all()
        self.assertEqual(post_followers.count(), 2)
        self.assertIn(follower1, post_followers)
        self.assertIn(follower2, post_followers)
    
    def test_post_follower_ordering(self):
        """Test that post followers are ordered by -created_at"""
        user3 = User.objects.create_user(username='user3', password='testpass123')
        
        follower1 = PostFollower.objects.create(
            post=self.post,
            follower=self.user2
        )
        
        # Add a small delay to ensure different created_at times
        import time
        time.sleep(0.01)
        
        follower2 = PostFollower.objects.create(
            post=self.post,
            follower=user3
        )
        
        post_followers = self.post.followers.all()
        self.assertEqual(post_followers.first(), follower2)  # Most recent should be first
        self.assertEqual(post_followers.last(), follower1)   # Oldest should be last


class UserFollowerTests(TestCase):
    """Test cases for UserFollower model"""
    
    def setUp(self):
        # Create test users
        self.user1 = User.objects.create_user(username='user1', password='testpass123')
        self.user2 = User.objects.create_user(username='user2', password='testpass123')
        self.user3 = User.objects.create_user(username='user3', password='testpass123')
    
    def test_user_follower_creation(self):
        """Test creating a user follower"""
        follower = UserFollower.objects.create(
            followed_user=self.user1,
            follower=self.user2
        )
        
        self.assertEqual(follower.followed_user, self.user1)
        self.assertEqual(follower.follower, self.user2)
        self.assertIsNotNone(follower.created_at)
        self.assertIsNotNone(follower.updated_at)
    
    def test_user_follower_str_representation(self):
        """Test the string representation of UserFollower"""
        follower = UserFollower.objects.create(
            followed_user=self.user1,
            follower=self.user2
        )
        
        expected_str = f"{self.user2.username} started following {self.user1.username}"
        self.assertEqual(str(follower), expected_str)
    
    def test_user_follower_relationship(self):
        """Test the relationship between user and followers"""
        follower = UserFollower.objects.create(
            followed_user=self.user1,
            follower=self.user2
        )
        
        # Test that we can access followers through the user
        user_followers = self.user1.followers.all()
        self.assertEqual(user_followers.count(), 1)
        self.assertEqual(user_followers.first(), follower)
    
    def test_multiple_user_followers(self):
        """Test multiple followers for a single user"""
        follower1 = UserFollower.objects.create(
            followed_user=self.user1,
            follower=self.user2
        )
        
        follower2 = UserFollower.objects.create(
            followed_user=self.user1,
            follower=self.user3
        )
        
        user_followers = self.user1.followers.all()
        self.assertEqual(user_followers.count(), 2)
        self.assertIn(follower1, user_followers)
        self.assertIn(follower2, user_followers)
    
    def test_user_follower_ordering(self):
        """Test that user followers are ordered by -created_at"""
        follower1 = UserFollower.objects.create(
            followed_user=self.user1,
            follower=self.user2
        )
        
        # Add a small delay to ensure different created_at times
        import time
        time.sleep(0.01)
        
        follower2 = UserFollower.objects.create(
            followed_user=self.user1,
            follower=self.user3
        )
        
        user_followers = self.user1.followers.all()
        self.assertEqual(user_followers.first(), follower2)  # Most recent should be first
        self.assertEqual(user_followers.last(), follower1)   # Oldest should be last


class FollowerIntegrationTests(TestCase):
    """Integration tests for follower models"""
    
    def setUp(self):
        # Create test users
        self.user1 = User.objects.create_user(username='user1', password='testpass123')
        self.user2 = User.objects.create_user(username='user2', password='testpass123')
        
        # Create a test post
        self.tag = Tag.objects.create(name='test-tag')
        self.post = Post.objects.create(
            title='Test Post',
            content='Test content',
            author=self.user1,
            uuid=uuid.uuid4()
        )
        self.post.tags.add(self.tag)
    
    def test_user_can_follow_both_users_and_posts(self):
        """Test that a user can follow both other users and posts"""
        # User follows another user
        user_follower = UserFollower.objects.create(
            followed_user=self.user1,
            follower=self.user2
        )
        
        # User follows a post
        post_follower = PostFollower.objects.create(
            post=self.post,
            follower=self.user2
        )
        
        # Verify both relationships exist
        self.assertEqual(self.user1.followers.count(), 1)
        self.assertEqual(self.post.followers.count(), 1)
        
        # Verify the follower is the same user
        self.assertEqual(user_follower.follower, self.user2)
        self.assertEqual(post_follower.follower, self.user2)
    
    def test_follower_timestamps(self):
        """Test that follower models have proper timestamps"""
        from django.utils import timezone
        
        # Create followers
        user_follower = UserFollower.objects.create(
            followed_user=self.user1,
            follower=self.user2
        )
        
        post_follower = PostFollower.objects.create(
            post=self.post,
            follower=self.user2
        )
        
        # Test that timestamps are set
        self.assertIsNotNone(user_follower.created_at)
        self.assertIsNotNone(user_follower.updated_at)
        self.assertIsNotNone(post_follower.created_at)
        self.assertIsNotNone(post_follower.updated_at)
        
        # Test that created_at and updated_at are close for new objects
        self.assertAlmostEqual(
            user_follower.created_at, 
            user_follower.updated_at, 
            delta=timezone.timedelta(seconds=1)
        )
        self.assertAlmostEqual(
            post_follower.created_at, 
            post_follower.updated_at, 
            delta=timezone.timedelta(seconds=1)
        )