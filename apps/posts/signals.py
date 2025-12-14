from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from django.contrib.auth import get_user_model

from .models import Post, PostVote
from apps.comments.models import PostComment
from apps.core.notifications import create_notification

User = get_user_model()


@receiver(post_save, sender=Post)
def notify_post_created(sender, instance, created, **kwargs):
    """
    Notify followers when a new post is created
    """
    if created:
        # Notify group members if post is in a group
        if instance.group:
            for member in instance.group.members.all():
                if member != instance.author:
                    create_notification(
                        recipient=member,
                        actor=instance.author,
                        verb='created a post',
                        target=instance,
                        description=f'New post in {instance.group.name}',
                        notification_type='system'
                    )


@receiver(post_save, sender=PostComment)
def notify_comment_created(sender, instance, created, **kwargs):
    """
    Notify post author when someone comments on their post
    """
    if created:
        # Notify post author
        create_notification(
            recipient=instance.post.author,
            actor=instance.user,
            verb='commented on',
            target=instance.post,
            description=f'New comment: {instance._comment[:50]}...',
            notification_type='comment'
        )
        
        # Notify post commenters (except the current user)
        for comment in instance.post.comments.exclude(user=instance.user):
            create_notification(
                recipient=comment.user,
                actor=instance.user,
                verb='also commented on',
                target=instance.post,
                description=f'New comment: {instance._comment[:50]}...',
                notification_type='comment'
            )


@receiver(post_save, sender=PostVote)
def notify_vote_created(sender, instance, created, **kwargs):
    """
    Notify post author when someone votes on their post
    """
    if created:
        if instance.vote == 1:  # Upvote
            verb = 'upvoted'
        else:  # Downvote
            verb = 'downvoted'
            
        create_notification(
            recipient=instance.post.author,
            actor=instance.user,
            verb=verb,
            target=instance.post,
            description=f'Your post received a {verb}',
            notification_type='vote'
        )


@receiver(post_delete, sender=Post)
def notify_post_deleted(sender, instance, **kwargs):
    """
    Notify group members when a post is deleted
    """
    if instance.group:
        for member in instance.group.members.all():
            if member != instance.author:
                create_notification(
                    recipient=member,
                    actor=instance.author,
                    verb='deleted a post',
                    target=instance,
                    description=f'Post removed from {instance.group.name}',
                    notification_type='system'
                )
