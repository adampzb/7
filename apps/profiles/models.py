from django.db import models

from apps.core.models import TimeStampedModel
from django.contrib.auth.models import User
from apps.tags.models import Tag


class UserMetaInfo(TimeStampedModel):
    user = models.OneToOneField(
        User,
        verbose_name="user",
        related_name="meta_info",
        on_delete=models.CASCADE
    )
    username_changed = models.DateField(
        null=True, blank=True,
        verbose_name="username_changed",
    )
    bio = models.TextField(blank=True)
    dob = models.DateField(null=True)
    dob_visible = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)
    is_banned = models.BooleanField(default=False)
    is_requesting_delete = models.BooleanField(default=False)
    
    # Notification preferences
    notify_on_comment = models.BooleanField(default=True, verbose_name="Notify on comments")
    notify_on_vote = models.BooleanField(default=True, verbose_name="Notify on votes")
    notify_on_mention = models.BooleanField(default=True, verbose_name="Notify on mentions")
    notify_on_follow = models.BooleanField(default=True, verbose_name="Notify on follows")
    notify_email = models.BooleanField(default=False, verbose_name="Email notifications")

    class Meta:
        verbose_name = "User Meta Info"
        verbose_name_plural = "User Meta Info"

    def __str__(self):
        return f"Profile Info: {self.user.username}"
