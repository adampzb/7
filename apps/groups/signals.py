from django.db.models.signals import post_save, pre_save
from django.dispatch import receiver
from apps.groups.models import Group, GroupMember, MemberRequest
from groups.services import assign_permissions

@receiver(post_save, sender=MemberRequest)
def member_request_created_hook(sender, instance, created, **kwargs):
    if created and instance:
        if instance.group.group_type == "PUBLIC":
            member, member_created = GroupMember.objects.get_or_create(
                group=instance.group,
                user=instance.user
            )

# Temporarily disabled - requires custom permissions to be set up
# @receiver(post_save, sender=GroupMember)
# def permissions_for_member_type(sender, instance, created, **kwargs):
#     if created:
#         assign_permissions(
#             instance.member_type,
#             instance.user,
#             instance.group
#         )
