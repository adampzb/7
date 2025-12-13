"""
Custom notification system to replace django-notifications-hq
"""
from django.db import models
from django.contrib.auth import get_user_model
from django.contrib.contenttypes.models import ContentType
from django.contrib.contenttypes.fields import GenericForeignKey

User = get_user_model()


class Notification(models.Model):
    """
    Custom notification model
    """
    NOTIFICATION_TYPES = (
        ('comment', 'Comment'),
        ('vote', 'Vote'),
        ('mention', 'Mention'),
        ('follow', 'Follow'),
        ('system', 'System'),
    )
    
    recipient = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='notifications',
        verbose_name='Recipient'
    )
    actor = models.ForeignKey(
        User,
        on_delete=models.SET_NULL,
        null=True, blank=True,
        related_name='sent_notifications',
        verbose_name='Actor'
    )
    verb = models.CharField(max_length=100, verbose_name='Action')
    
    # Generic relation to the target object
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE)
    object_id = models.PositiveIntegerField()
    target = GenericForeignKey('content_type', 'object_id')
    
    description = models.TextField(blank=True, null=True, verbose_name='Description')
    
    # Read status
    unread = models.BooleanField(default=True, verbose_name='Unread')
    
    # Timestamps
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Created at')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Updated at')
    
    # Notification type
    notification_type = models.CharField(
        max_length=20,
        choices=NOTIFICATION_TYPES,
        default='system',
        verbose_name='Type'
    )
    
    class Meta:
        verbose_name = 'Notification'
        verbose_name_plural = 'Notifications'
        ordering = ['-created_at']
        indexes = [
            models.Index(fields=['recipient', 'unread']),
            models.Index(fields=['created_at']),
        ]
    
    def __str__(self):
        return f"{self.actor} {self.verb} {self.target}"
    
    def mark_as_read(self):
        """Mark notification as read"""
        self.unread = False
        self.save(update_fields=['unread', 'updated_at'])
    
    def get_absolute_url(self):
        """Get URL to the target object"""
        if hasattr(self.target, 'get_absolute_url'):
            return self.target.get_absolute_url()
        return '#'


def create_notification(recipient, actor=None, verb='', target=None, description='', notification_type='system'):
    """
    Helper function to create notifications
    """
    notification = Notification(
        recipient=recipient,
        actor=actor,
        verb=verb,
        description=description,
        notification_type=notification_type
    )
    
    if target is not None:
        notification.content_type = ContentType.objects.get_for_model(target)
        notification.object_id = target.pk
    
    notification.save()
    return notification


def notify_post_comment(recipient, actor, post, comment):
    """
    Notify user when someone comments on their post
    """
    return create_notification(
        recipient=recipient,
        actor=actor,
        verb='commented on',
        target=post,
        description=f'New comment: {comment.content[:50]}...',
        notification_type='comment'
    )


def notify_post_vote(recipient, actor, post, vote_type):
    """
    Notify user when someone votes on their post
    """
    verb = 'upvoted' if vote_type == 1 else 'downvoted'
    return create_notification(
        recipient=recipient,
        actor=actor,
        verb=verb,
        target=post,
        description=f'Your post received a {verb}',
        notification_type='vote'
    )


def notify_mention(recipient, actor, post, content):
    """
    Notify user when they are mentioned
    """
    return create_notification(
        recipient=recipient,
        actor=actor,
        verb='mentioned you',
        target=post,
        description=f'You were mentioned: {content[:50]}...',
        notification_type='mention'
    )


def notify_follow(recipient, actor):
    """
    Notify user when someone follows them
    """
    return create_notification(
        recipient=recipient,
        actor=actor,
        verb='started following you',
        description='You have a new follower',
        notification_type='follow'
    )