from django.test import TestCase
from django.contrib.auth.models import User
from apps.comments.models import PostComment, PostCommentVote
from apps.posts.models import Post
from apps.tags.models import Tag
import uuid


class PostCommentTests(TestCase):
    """Test cases for PostComment model"""
    
    def setUp(self):
        # Create users
        self.user1 = User.objects.create_user(username='user1', password='testpass123')
        self.user2 = User.objects.create_user(username='user2', password='testpass123')
        self.user3 = User.objects.create_user(username='user3', password='testpass123')
        
        # Create a tag
        self.tag = Tag.objects.create(name='test')
        
        # Create a post
        self.post = Post.objects.create(
            title='Test Post',
            content='Test content',
            author=self.user1,
            uuid=uuid.uuid4()
        )
        self.post.tags.add(self.tag)
    
    def test_post_comment_creation(self):
        """Test creating a post comment"""
        comment = PostComment.objects.create(
            post=self.post,
            user=self.user2,
            _comment='This is a test comment',
            is_removed=False,
            is_nesting_permitted=True,
            flair='Test flair'
        )
        
        self.assertEqual(comment.post, self.post)
        self.assertEqual(comment.user, self.user2)
        self.assertEqual(comment._comment, 'This is a test comment')
        self.assertEqual(comment.comment, 'This is a test comment')  # Test the property
        self.assertFalse(comment.is_removed)
        self.assertTrue(comment.is_nesting_permitted)
        self.assertEqual(comment.flair, 'Test flair')
        self.assertIsNotNone(comment.created_at)
        self.assertIsNotNone(comment.updated_at)
    
    def test_post_comment_str_representation(self):
        """Test the string representation of PostComment"""
        comment = PostComment.objects.create(
            post=self.post,
            user=self.user2,
            _comment='Test comment'
        )
        
        expected_str = f"Comment: {self.post.title} by {self.user2.username}"
        self.assertEqual(str(comment), expected_str)
    
    def test_post_comment_comment_property(self):
        """Test the comment property with removed comments"""
        # Test normal comment
        normal_comment = PostComment.objects.create(
            post=self.post,
            user=self.user2,
            _comment='Normal comment'
        )
        self.assertEqual(normal_comment.comment, 'Normal comment')
        
        # Test removed comment
        removed_comment = PostComment.objects.create(
            post=self.post,
            user=self.user2,
            _comment='Bad comment',
            is_removed=True
        )
        self.assertEqual(removed_comment.comment, 'This comment has been removed')
    
    def test_post_comment_relationship(self):
        """Test the relationship between post and comments"""
        comment1 = PostComment.objects.create(
            post=self.post,
            user=self.user2,
            _comment='First comment'
        )
        
        comment2 = PostComment.objects.create(
            post=self.post,
            user=self.user3,
            _comment='Second comment'
        )
        
        # Test that we can access comments through the post
        post_comments = self.post.comments.all()
        self.assertEqual(post_comments.count(), 2)
        self.assertIn(comment1, post_comments)
        self.assertIn(comment2, post_comments)
    
    def test_post_comment_ordering(self):
        """Test that post comments are ordered by created_at"""
        comment1 = PostComment.objects.create(
            post=self.post,
            user=self.user2,
            _comment='First comment'
        )
        
        # Add a small delay
        import time
        time.sleep(0.01)
        
        comment2 = PostComment.objects.create(
            post=self.post,
            user=self.user3,
            _comment='Second comment'
        )
        
        post_comments = self.post.comments.all()
        self.assertEqual(post_comments.first(), comment1)  # First created should be first
        self.assertEqual(post_comments.last(), comment2)   # Last created should be last
    
    def test_post_comment_mentioned_users(self):
        """Test mentioned users in comments"""
        comment = PostComment.objects.create(
            post=self.post,
            user=self.user2,
            _comment='Test comment'
        )
        
        # Add mentioned users
        comment.mentioned_users.add(self.user1, self.user3)
        
        self.assertEqual(comment.mentioned_users.count(), 2)
        self.assertIn(self.user1, comment.mentioned_users.all())
        self.assertIn(self.user3, comment.mentioned_users.all())
    
    def test_post_comment_parent_child_relationship(self):
        """Test parent-child relationship between comments"""
        # Create parent comment
        parent_comment = PostComment.objects.create(
            post=self.post,
            user=self.user2,
            _comment='Parent comment',
            is_nesting_permitted=True
        )
        
        # Create child comment
        child_comment = PostComment.objects.create(
            post=self.post,
            user=self.user3,
            _comment='Child comment',
            parent=parent_comment
        )
        
        # Test the relationship
        self.assertEqual(child_comment.parent, parent_comment)
        
        # Test that we can access child comments through parent
        parent_children = parent_comment.comments.all()
        self.assertEqual(parent_children.count(), 1)
        self.assertEqual(parent_children.first(), child_comment)
    
    def test_post_comment_score_property(self):
        """Test the score property"""
        comment = PostComment.objects.create(
            post=self.post,
            user=self.user2,
            _comment='Test comment'
        )
        
        # Initial score should be 0
        self.assertEqual(comment.score, 0)
        
        # Add some votes
        PostCommentVote.objects.create(user=self.user1, post_comment=comment, vote=1)
        PostCommentVote.objects.create(user=self.user3, post_comment=comment, vote=-1)
        
        # Refresh the comment to get updated score
        comment.refresh_from_db()
        self.assertEqual(comment.score, 0)  # 1 + (-1) = 0
        
        # Add another upvote
        user4 = User.objects.create_user(username='user4', password='testpass123')
        PostCommentVote.objects.create(user=user4, post_comment=comment, vote=1)
        
        comment.refresh_from_db()
        self.assertEqual(comment.score, 1)  # 1 + (-1) + 1 = 1


class PostCommentVoteTests(TestCase):
    """Test cases for PostCommentVote model"""
    
    def setUp(self):
        # Create users
        self.user1 = User.objects.create_user(username='user1', password='testpass123')
        self.user2 = User.objects.create_user(username='user2', password='testpass123')
        self.user3 = User.objects.create_user(username='user3', password='testpass123')
        
        # Create a tag
        self.tag = Tag.objects.create(name='test')
        
        # Create a post
        self.post = Post.objects.create(
            title='Test Post',
            content='Test content',
            author=self.user1,
            uuid=uuid.uuid4()
        )
        self.post.tags.add(self.tag)
        
        # Create a comment
        self.comment = PostComment.objects.create(
            post=self.post,
            user=self.user2,
            _comment='Test comment'
        )
    
    def test_post_comment_vote_creation(self):
        """Test creating a post comment vote"""
        vote = PostCommentVote.objects.create(
            user=self.user3,
            post_comment=self.comment,
            vote=1
        )
        
        self.assertEqual(vote.user, self.user3)
        self.assertEqual(vote.post_comment, self.comment)
        self.assertEqual(vote.vote, 1)
        self.assertIsNotNone(vote.created_at)
        self.assertIsNotNone(vote.updated_at)
    
    def test_post_comment_vote_str_representation(self):
        """Test the string representation of PostCommentVote"""
        vote = PostCommentVote.objects.create(
            user=self.user3,
            post_comment=self.comment,
            vote=1
        )
        
        expected_str = f"{vote.vote} point by {self.user3.username}"
        self.assertEqual(str(vote), expected_str)
    
    def test_post_comment_vote_values(self):
        """Test different vote values"""
        upvote = PostCommentVote.objects.create(
            user=self.user3,
            post_comment=self.comment,
            vote=1
        )
        
        downvote = PostCommentVote.objects.create(
            user=self.user1,  # Comment author can also vote on their own comment
            post_comment=self.comment,
            vote=-1
        )
        
        neutral_vote = PostCommentVote.objects.create(
            user=User.objects.create_user(username='user4', password='testpass123'),
            post_comment=self.comment,
            vote=0
        )
        
        self.assertEqual(upvote.vote, 1)
        self.assertEqual(downvote.vote, -1)
        self.assertEqual(neutral_vote.vote, 0)
    
    def test_post_comment_vote_validation(self):
        """Test vote validation"""
        # Test valid votes
        for vote_value in [-1, 0, 1]:
            vote = PostCommentVote.objects.create(
                user=self.user3,
                post_comment=self.comment,
                vote=vote_value
            )
            self.assertEqual(vote.vote, vote_value)
        
        # Test invalid votes (should raise ValidationError)
        with self.assertRaises(Exception):
            vote = PostCommentVote.objects.create(
                user=self.user3,
                post_comment=self.comment,
                vote=2  # Invalid vote value
            )
    
    def test_post_comment_vote_relationship(self):
        """Test the relationship between comment and votes"""
        user4 = User.objects.create_user(username='user4', password='testpass123')
        user5 = User.objects.create_user(username='user5', password='testpass123')
        
        vote1 = PostCommentVote.objects.create(user=self.user3, post_comment=self.comment, vote=1)
        vote2 = PostCommentVote.objects.create(user=user4, post_comment=self.comment, vote=-1)
        vote3 = PostCommentVote.objects.create(user=user5, post_comment=self.comment, vote=1)
        
        # Test that we can access votes through the comment
        comment_votes = self.comment.votes.all()
        self.assertEqual(comment_votes.count(), 3)
        self.assertIn(vote1, comment_votes)
        self.assertIn(vote2, comment_votes)
        self.assertIn(vote3, comment_votes)
    
    def test_post_comment_vote_ordering(self):
        """Test that post comment votes are ordered by created_at"""
        user4 = User.objects.create_user(username='user4', password='testpass123')
        user5 = User.objects.create_user(username='user5', password='testpass123')
        
        vote1 = PostCommentVote.objects.create(user=self.user3, post_comment=self.comment, vote=1)
        
        # Add a small delay
        import time
        time.sleep(0.01)
        
        vote2 = PostCommentVote.objects.create(user=user4, post_comment=self.comment, vote=-1)
        
        # Add another delay
        time.sleep(0.01)
        
        vote3 = PostCommentVote.objects.create(user=user5, post_comment=self.comment, vote=1)
        
        comment_votes = self.comment.votes.all()
        self.assertEqual(comment_votes.first(), vote1)  # First created should be first
        self.assertEqual(comment_votes.last(), vote3)   # Last created should be last


class CommentIntegrationTests(TestCase):
    """Integration tests for comment models"""
    
    def setUp(self):
        # Create users
        self.author = User.objects.create_user(username='author', password='testpass123')
        self.commenter1 = User.objects.create_user(username='commenter1', password='testpass123')
        self.commenter2 = User.objects.create_user(username='commenter2', password='testpass123')
        self.commenter3 = User.objects.create_user(username='commenter3', password='testpass123')
        self.voter1 = User.objects.create_user(username='voter1', password='testpass123')
        self.voter2 = User.objects.create_user(username='voter2', password='testpass123')
        
        # Create tags
        self.tag1 = Tag.objects.create(name='programming')
        self.tag2 = Tag.objects.create(name='python')
        
        # Create a post
        self.post = Post.objects.create(
            title='Test Post for Comments',
            content='This post is for testing comments',
            author=self.author,
            uuid=uuid.uuid4()
        )
        self.post.tags.add(self.tag1, self.tag2)
    
    def test_complete_comment_workflow(self):
        """Test a complete comment workflow with nesting and voting"""
        # 1. Create a parent comment
        parent_comment = PostComment.objects.create(
            post=self.post,
            user=self.commenter1,
            _comment='This is the parent comment',
            is_nesting_permitted=True,
            flair='Discussion'
        )
        
        # 2. Verify parent comment
        self.assertEqual(parent_comment.post, self.post)
        self.assertEqual(parent_comment.user, self.commenter1)
        self.assertEqual(parent_comment.comment, 'This is the parent comment')
        self.assertTrue(parent_comment.is_nesting_permitted)
        
        # 3. Create child comments
        child_comment1 = PostComment.objects.create(
            post=self.post,
            user=self.commenter2,
            _comment='First child comment',
            parent=parent_comment
        )
        
        child_comment2 = PostComment.objects.create(
            post=self.post,
            user=self.commenter3,
            _comment='Second child comment',
            parent=parent_comment
        )
        
        # 4. Verify child comments
        self.assertEqual(child_comment1.parent, parent_comment)
        self.assertEqual(child_comment2.parent, parent_comment)
        
        # 5. Verify parent has children
        self.assertEqual(parent_comment.comments.count(), 2)
        
        # 6. Add votes to comments
        # Votes on parent comment
        PostCommentVote.objects.create(user=self.voter1, post_comment=parent_comment, vote=1)
        PostCommentVote.objects.create(user=self.voter2, post_comment=parent_comment, vote=1)
        
        # Votes on child comments
        PostCommentVote.objects.create(user=self.voter1, post_comment=child_comment1, vote=1)
        PostCommentVote.objects.create(user=self.voter2, post_comment=child_comment1, vote=-1)
        
        PostCommentVote.objects.create(user=self.voter1, post_comment=child_comment2, vote=-1)
        
        # 7. Verify comment scores
        parent_comment.refresh_from_db()
        child_comment1.refresh_from_db()
        child_comment2.refresh_from_db()
        
        self.assertEqual(parent_comment.score, 2)  # 1 + 1 = 2
        self.assertEqual(child_comment1.score, 0)  # 1 + (-1) = 0
        self.assertEqual(child_comment2.score, -1) # -1 = -1
        
        # 8. Test mentioned users
        child_comment1.mentioned_users.add(self.author, self.commenter1)
        
        self.assertEqual(child_comment1.mentioned_users.count(), 2)
        
        # 9. Verify all relationships
        self.assertEqual(self.post.comments.count(), 3)  # parent + 2 children
        
        # 10. Verify timestamps on all models
        from django.utils import timezone
        
        for model_instance in [parent_comment, child_comment1, child_comment2]:
            self.assertIsNotNone(model_instance.created_at)
            self.assertIsNotNone(model_instance.updated_at)
            self.assertAlmostEqual(
                model_instance.created_at, 
                model_instance.updated_at, 
                delta=timezone.timedelta(seconds=1)
            )
    
    def test_comment_deletion_cascades_to_votes(self):
        """Test that comment deletion cascades to votes"""
        comment = PostComment.objects.create(
            post=self.post,
            user=self.commenter1,
            _comment='Test comment'
        )
        
        # Add votes
        vote1 = PostCommentVote.objects.create(user=self.voter1, post_comment=comment, vote=1)
        vote2 = PostCommentVote.objects.create(user=self.voter2, post_comment=comment, vote=-1)
        
        # Verify votes exist
        self.assertEqual(PostCommentVote.objects.count(), 2)
        
        # Delete the comment
        comment.delete()
        
        # Votes should also be deleted (cascade)
        self.assertEqual(PostCommentVote.objects.count(), 0)
    
    def test_comment_deletion_cascades_to_children(self):
        """Test that comment deletion cascades to child comments"""
        # Create parent comment
        parent_comment = PostComment.objects.create(
            post=self.post,
            user=self.commenter1,
            _comment='Parent comment',
            is_nesting_permitted=True
        )
        
        # Create child comments
        child1 = PostComment.objects.create(
            post=self.post,
            user=self.commenter2,
            _comment='Child comment 1',
            parent=parent_comment
        )
        
        child2 = PostComment.objects.create(
            post=self.post,
            user=self.commenter3,
            _comment='Child comment 2',
            parent=parent_comment
        )
        
        # Verify all comments exist
        self.assertEqual(PostComment.objects.count(), 3)
        
        # Delete the parent comment
        parent_comment.delete()
        
        # All comments should be deleted (cascade)
        self.assertEqual(PostComment.objects.count(), 0)