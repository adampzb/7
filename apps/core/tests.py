from django.test import TestCase
from django.contrib.auth.models import User
from django.utils import timezone
from django.db import models
from apps.core.models import TimeStampedModel, ActivityModel
from unittest.mock import Mock
import datetime


class TimeStampedModelTests(TestCase):
    """Test cases for TimeStampedModel abstract base class"""
    
    def setUp(self):
        # Create a concrete implementation of TimeStampedModel for testing
        class TestTimeStampedModel(TimeStampedModel):
            title = models.CharField(max_length=100)
            
            class Meta:
                app_label = 'core'
        
        self.TestModel = TestTimeStampedModel
        
    def test_created_at_and_updated_at_on_create(self):
        """Test that created_at and updated_at are set on creation"""
        obj = self.TestModel.objects.create(title="Test Object")
        
        self.assertIsNotNone(obj.created_at)
        self.assertIsNotNone(obj.updated_at)
        self.assertAlmostEqual(obj.created_at, obj.updated_at, delta=datetime.timedelta(seconds=1))
    
    def test_updated_at_on_save(self):
        """Test that updated_at is updated on save"""
        obj = self.TestModel.objects.create(title="Test Object")
        original_updated_at = obj.updated_at
        
        # Simulate some time passing
        timezone.now()  # Just to ensure we're not in the same microsecond
        
        obj.title = "Updated Title"
        obj.save()
        
        obj.refresh_from_db()
        self.assertGreater(obj.updated_at, original_updated_at)
    
    def test_is_edited_property(self):
        """Test the is_edited property"""
        obj = self.TestModel.objects.create(title="Test Object")
        
        # Should not be edited immediately after creation
        self.assertFalse(obj.edited)
        
        # Simulate an edit after some time
        obj.created_at = timezone.now() - datetime.timedelta(hours=1)
        obj.save()
        
        obj.refresh_from_db()
        self.assertTrue(obj.edited)
    
    def test_get_absolute_url(self):
        """Test the get_absolute_url method"""
        obj = self.TestModel.objects.create(title="Test Object")
        url = obj.get_absolute_url()
        self.assertEqual(url, '/')  # Should return reverse('home')
    
    def test_get_notification_message(self):
        """Test the get_notification_message method"""
        obj = self.TestModel.objects.create(title="Test Object")
        message = obj.get_notification_message("created")
        self.assertEqual(message, "created on TestTimeStampedModel")


class ActivityModelTests(TestCase):
    """Test cases for ActivityModel abstract base class"""
    
    def setUp(self):
        # Create a concrete implementation of ActivityModel for testing
        class TestActivityModel(ActivityModel):
            title = models.CharField(max_length=100)
            
            class Meta:
                app_label = 'core'
        
        self.TestModel = TestActivityModel
        
    def test_activity_count_default(self):
        """Test that activity_count defaults to 0"""
        obj = self.TestModel.objects.create(title="Test Object")
        self.assertEqual(obj.activity_count, 0)
    
    def test_increment_activity(self):
        """Test the increment_activity method"""
        obj = self.TestModel.objects.create(title="Test Object")
        
        # Initial count should be 0
        self.assertEqual(obj.activity_count, 0)
        
        # Increment once
        obj.increment_activity()
        obj.refresh_from_db()
        self.assertEqual(obj.activity_count, 1)
        
        # Increment again
        obj.increment_activity()
        obj.refresh_from_db()
        self.assertEqual(obj.activity_count, 2)
    
    def test_last_activity_at_updated(self):
        """Test that last_activity_at is updated when activity is incremented"""
        obj = self.TestModel.objects.create(title="Test Object")
        original_last_activity = obj.last_activity_at
        
        # Simulate some time passing
        timezone.now()
        
        obj.increment_activity()
        obj.refresh_from_db()
        
        self.assertGreater(obj.last_activity_at, original_last_activity)


class CoreModelsIntegrationTests(TestCase):
    """Integration tests for core models working together"""
    
    def test_timestamps_with_user_relationship(self):
        """Test TimeStampedModel with user relationships"""
        # Create a user
        user = User.objects.create_user(username='testuser', password='testpass123')
        
        # Create a test model with user relationship
        class TestUserModel(TimeStampedModel):
            user = models.ForeignKey(User, on_delete=models.CASCADE)
            content = models.TextField()
            
            class Meta:
                app_label = 'core'
        
        obj = TestUserModel.objects.create(user=user, content="Test content")
        
        self.assertEqual(obj.user, user)
        self.assertIsNotNone(obj.created_at)
        self.assertIsNotNone(obj.updated_at)
        
        # Test that timestamps work correctly with user relationships
        original_updated = obj.updated_at
        obj.content = "Updated content"
        obj.save()
        
        obj.refresh_from_db()
        self.assertGreater(obj.updated_at, original_updated)
        self.assertEqual(obj.user, user)