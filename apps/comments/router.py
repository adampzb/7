from rest_framework.routers import DefaultRouter
from apps.comments.views import PostCommentViewSet

router = DefaultRouter()
router.register(r'posts/(?P<post_uuid>[^/.]+)/comments', PostCommentViewSet, basename='post-comment')
