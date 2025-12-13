from rest_framework.routers import DefaultRouter
from apps.followers.views import PostFollowerViewSet, UserFollowerViewSet

router = DefaultRouter()
router.register(r'posts/(?P<post_uuid>[^/.]+)/followers', PostFollowerViewSet, basename='post-follower')
router.register(r'users/(?P<user_username>[^/.]+)/followers', UserFollowerViewSet, basename='user-follower')
