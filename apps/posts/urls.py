from django.urls import path, include
from apps.posts.router import router, post_router
from apps.posts.api_views import (
    PostListCreateView, PostRetrieveUpdateDestroyView,
    PostCommentListCreateView, PostVoteCreateView,
    user_notifications, mark_notification_read, search_posts
)

urlpatterns = [
    path('api/v1/', include(router.urls)),
    path('api/v1/', include(post_router.urls)),
    
    # Enhanced API endpoints
    path('api/v1/posts/', PostListCreateView.as_view(), name='post-list-create'),
    path('api/v1/posts/<uuid:uuid>/', PostRetrieveUpdateDestroyView.as_view(), name='post-retrieve-update-destroy'),
    path('api/v1/posts/<uuid:post_uuid>/comments/', PostCommentListCreateView.as_view(), name='post-comment-list-create'),
    path('api/v1/posts/<uuid:post_uuid>/votes/', PostVoteCreateView.as_view(), name='post-vote-create'),
    path('api/v1/notifications/', user_notifications, name='user-notifications'),
    path('api/v1/notifications/<int:notification_id>/read/', mark_notification_read, name='mark-notification-read'),
    path('api/v1/search/', search_posts, name='search-posts'),
]
