from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from django.contrib.auth import get_user_model
from notifications.signals import notify

from .models import Post, PostVote
from apps.comments.models import PostComment

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
                    notify.send(
                        instance.author,
                        recipient=member,
                        verb='created a post',
                        target=instance,
                        description=f'New post in {instance.group.name}'
                    )


@receiver(post_save, sender=PostComment)
def notify_comment_created(sender, instance, created, **kwargs):
    """
    Notify post author when someone comments on their post
    """
    if created:
        # Notify post author
        notify.send(
            instance.user,
            recipient=instance.post.author,
            verb='commented on',
            target=instance.post,
            description=f'New comment: {instance._comment[:50]}...'
        )
        
        # Notify post commenters (except the current user)
        for comment in instance.post.comments.exclude(user=instance.user):
            notify.send(
                instance.user,
                recipient=comment.user,
                verb='also commented on',
                target=instance.post,
                description=f'New comment: {instance._comment[:50]}...'
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
            
        notify.send(
            instance.user,
            recipient=instance.post.author,
            verb=verb,
            target=instance.post,
            description=f'Your post received a {verb}'
        )


@receiver(post_delete, sender=Post)
def notify_post_deleted(sender, instance, **kwargs):
    """
    Notify group members when a post is deleted
    """
    if instance.group:
        for member in instance.group.members.all():
            if member != instance.author:
                notify.send(
                    instance.author,
                    recipient=member,
                    verb='deleted a post',
                    target=instance,
                    description=f'Post removed from {instance.group.name}'
                )
