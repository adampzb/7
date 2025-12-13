from rest_framework.routers import DefaultRouter
from apps.bookmarks.views import PostBookmarkViewSet

router = DefaultRouter()
router.register(r'posts/(?P<post_uuid>[^/.]+)/bookmarks', PostBookmarkViewSet, basename='post-bookmark')
