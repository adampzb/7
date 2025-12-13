from django.db import models
from django.contrib.auth import get_user_model
from django.urls import reverse
import datetime


class TimeStampedModel(models.Model):
    """
    An abstract base class model that provides self-updated ``created_at``
    and ``updated_at`` fields
    """

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    visitable = False

    class Meta:
        abstract = True

    def is_edited(self):
        return (self.updated_at - self.created_at).total_seconds() > 1
    edited = property(is_edited)

    def get_absolute_url(self):
        """Base URL method to be overridden by child models"""
        return reverse('home')

    def get_notification_message(self, action):
        """Base notification message method"""
        return f"{action} on {self.__class__.__name__}"


class ActivityModel(models.Model):
    """
    Abstract base class for models that need activity tracking
    """
    activity_count = models.PositiveIntegerField(default=0)
    last_activity_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True

    def increment_activity(self):
        """Increment activity count"""
        self.activity_count += 1
        self.save(update_fields=['activity_count', 'last_activity_at'])
