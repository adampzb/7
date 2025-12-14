from django.test import TestCase
from django.contrib.auth.models import User
from apps.bookmarks.models import PostBookmark
from apps.posts.models import Post
from apps.tags.models import Tag
import uuid


class PostBookmarkTests(TestCase):
    """Test cases for PostBookmark model"""
    
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
    
    def test_post_bookmark_creation(self):
        """Test creating a post bookmark"""
        bookmark = PostBookmark.objects.create(
            post=self.post,
            user=self.user2
        )
        
        self.assertEqual(bookmark.post, self.post)
        self.assertEqual(bookmark.user, self.user2)
        self.assertIsNotNone(bookmark.created_at)
        self.assertIsNotNone(bookmark.updated_at)
    
    def test_post_bookmark_str_representation(self):
        """Test the string representation of PostBookmark"""
        bookmark = PostBookmark.objects.create(
            post=self.post,
            user=self.user2
        )
        
        expected_str = f"Bookmark: {self.post.title} by {self.user2.username}"
        self.assertEqual(str(bookmark), expected_str)
    
    def test_post_bookmark_relationship(self):
        """Test the relationship between post and bookmarks"""
        bookmark = PostBookmark.objects.create(
            post=self.post,
            user=self.user2
        )
        
        # Test that we can access bookmarks through the post
        post_bookmarks = self.post.bookmarks.all()
        self.assertEqual(post_bookmarks.count(), 1)
        self.assertEqual(post_bookmarks.first(), bookmark)
    
    def test_post_bookmark_unique_constraint(self):
        """Test that a user can only bookmark a post once"""
        # Create first bookmark
        bookmark1 = PostBookmark.objects.create(
            post=self.post,
            user=self.user2
        )
        
        # Try to create a duplicate bookmark - should raise IntegrityError
        with self.assertRaises(Exception):
            bookmark2 = PostBookmark.objects.create(
                post=self.post,
                user=self.user2
            )
        
        # Verify only one bookmark exists
        self.assertEqual(self.post.bookmarks.count(), 1)
    
    def test_multiple_users_bookmark_same_post(self):
        """Test that multiple users can bookmark the same post"""
        user3 = User.objects.create_user(username='user3', password='testpass123')
        
        bookmark1 = PostBookmark.objects.create(
            post=self.post,
            user=self.user2
        )
        
        bookmark2 = PostBookmark.objects.create(
            post=self.post,
            user=user3
        )
        
        # Both bookmarks should exist
        self.assertEqual(self.post.bookmarks.count(), 2)
        self.assertIn(bookmark1, self.post.bookmarks.all())
        self.assertIn(bookmark2, self.post.bookmarks.all())
    
    def test_user_can_bookmark_multiple_posts(self):
        """Test that a user can bookmark multiple posts"""
        # Create another post
        post2 = Post.objects.create(
            title='Test Post 2',
            content='Test content 2',
            author=self.user1,
            uuid=uuid.uuid4()
        )
        post2.tags.add(self.tag)
        
        bookmark1 = PostBookmark.objects.create(
            post=self.post,
            user=self.user2
        )
        
        bookmark2 = PostBookmark.objects.create(
            post=post2,
            user=self.user2
        )
        
        # User should have 2 bookmarks
        user_bookmarks = PostBookmark.objects.filter(user=self.user2)
        self.assertEqual(user_bookmarks.count(), 2)
        self.assertIn(bookmark1, user_bookmarks)
        self.assertIn(bookmark2, user_bookmarks)
    
    def test_post_bookmark_ordering(self):
        """Test that post bookmarks are ordered by created_at"""
        user3 = User.objects.create_user(username='user3', password='testpass123')
        
        bookmark1 = PostBookmark.objects.create(
            post=self.post,
            user=self.user2
        )
        
        # Add a small delay to ensure different created_at times
        import time
        time.sleep(0.01)
        
        bookmark2 = PostBookmark.objects.create(
            post=self.post,
            user=user3
        )
        
        post_bookmarks = self.post.bookmarks.all()
        self.assertEqual(post_bookmarks.first(), bookmark1)  # First created should be first
        self.assertEqual(post_bookmarks.last(), bookmark2)   # Last created should be last


class BookmarkIntegrationTests(TestCase):
    """Integration tests for bookmark models"""
    
    def setUp(self):
        # Create test users
        self.user1 = User.objects.create_user(username='user1', password='testpass123')
        self.user2 = User.objects.create_user(username='user2', password='testpass123')
        
        # Create test posts
        self.tag = Tag.objects.create(name='test-tag')
        self.post1 = Post.objects.create(
            title='Test Post 1',
            content='Test content 1',
            author=self.user1,
            uuid=uuid.uuid4()
        )
        self.post1.tags.add(self.tag)
        
        self.post2 = Post.objects.create(
            title='Test Post 2',
            content='Test content 2',
            author=self.user1,
            uuid=uuid.uuid4()
        )
        self.post2.tags.add(self.tag)
    
    def test_bookmark_timestamps(self):
        """Test that bookmark models have proper timestamps"""
        from django.utils import timezone
        
        bookmark = PostBookmark.objects.create(
            post=self.post1,
            user=self.user2
        )
        
        # Test that timestamps are set
        self.assertIsNotNone(bookmark.created_at)
        self.assertIsNotNone(bookmark.updated_at)
        
        # Test that created_at and updated_at are close for new objects
        self.assertAlmostEqual(
            bookmark.created_at, 
            bookmark.updated_at, 
            delta=timezone.timedelta(seconds=1)
        )
    
    def test_bookmark_deletion_cascade(self):
        """Test that bookmarks are deleted when post is deleted"""
        bookmark = PostBookmark.objects.create(
            post=self.post1,
            user=self.user2
        )
        
        # Verify bookmark exists
        self.assertEqual(PostBookmark.objects.count(), 1)
        
        # Delete the post
        self.post1.delete()
        
        # Bookmark should also be deleted (cascade)
        self.assertEqual(PostBookmark.objects.count(), 0)
    
    def test_bookmark_user_deletion_cascade(self):
        """Test that bookmarks are deleted when user is deleted"""
        bookmark = PostBookmark.objects.create(
            post=self.post1,
            user=self.user2
        )
        
        # Verify bookmark exists
        self.assertEqual(PostBookmark.objects.count(), 1)
        
        # Delete the user
        self.user2.delete()
        
        # Bookmark should also be deleted (cascade)
        self.assertEqual(PostBookmark.objects.count(), 0)
    
    def test_bookmark_creation_and_retrieval(self):
        """Test creating and retrieving bookmarks"""
        # Create bookmarks
        bookmark1 = PostBookmark.objects.create(
            post=self.post1,
            user=self.user2
        )
        
        bookmark2 = PostBookmark.objects.create(
            post=self.post2,
            user=self.user2
        )
        
        # Retrieve user's bookmarks
        user_bookmarks = PostBookmark.objects.filter(user=self.user2)
        self.assertEqual(user_bookmarks.count(), 2)
        
        # Retrieve post1's bookmarks
        post1_bookmarks = self.post1.bookmarks.all()
        self.assertEqual(post1_bookmarks.count(), 1)
        self.assertEqual(post1_bookmarks.first(), bookmark1)
        
        # Retrieve post2's bookmarks
        post2_bookmarks = self.post2.bookmarks.all()
        self.assertEqual(post2_bookmarks.count(), 1)
        self.assertEqual(post2_bookmarks.first(), bookmark2)