from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from django.contrib.auth import get_user_model
# from notifications.models import Notification  # Temporarily disabled

from .models import Post, PostVote
from apps.comments.models import PostComment
from .serializers import PostSerializer, PostVoteSerializer
from apps.comments.serializers import PostCommentSerializer

User = get_user_model()


class PostListCreateView(generics.ListCreateAPIView):
    """
    API endpoint for listing and creating posts
    """
    queryset = Post.objects.filter(status='PUBLIC')
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    
    def perform_create(self, serializer):
        post = serializer.save(author=self.request.user)
        post.increment_activity()  # Track activity


class PostRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    """
    API endpoint for retrieving, updating, and deleting posts
    """
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    lookup_field = 'uuid'
    
    def perform_update(self, serializer):
        post = serializer.save()
        post.increment_activity()


class PostCommentListCreateView(generics.ListCreateAPIView):
    """
    API endpoint for listing and creating post comments
    """
    queryset = PostComment.objects.all()
    serializer_class = PostCommentSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    
    def get_queryset(self):
        post_uuid = self.kwargs.get('post_uuid')
        return PostComment.objects.filter(post__uuid=post_uuid)
    
    def perform_create(self, serializer):
        post = Post.objects.get(uuid=self.kwargs.get('post_uuid'))
        comment = serializer.save(post=post, user=self.request.user)
        post.increment_activity()


class PostVoteCreateView(generics.CreateAPIView):
    """
    API endpoint for creating post votes
    """
    queryset = PostVote.objects.all()
    serializer_class = PostVoteSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def perform_create(self, serializer):
        post = Post.objects.get(uuid=self.kwargs.get('post_uuid'))
        # Check if user already voted
        if PostVote.objects.filter(post=post, user=self.request.user).exists():
            return Response(
                {'error': 'You have already voted on this post'},
                status=status.HTTP_400_BAD_REQUEST
            )
        vote = serializer.save(post=post, user=self.request.user)
        post.increment_activity()


@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated])
def user_notifications(request):
    """
    API endpoint for getting user notifications (temporarily simplified)
    """
    # Temporarily return empty list until notifications are fixed
    return Response([])


@api_view(['POST'])
@permission_classes([permissions.IsAuthenticated])
def mark_notification_read(request, notification_id):
    """
    API endpoint for marking notifications as read (temporarily disabled)
    """
    return Response({'status': 'success'})


@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated])
def search_posts(request):
    """
    API endpoint for searching posts
    """
    from haystack.query import SearchQuerySet
    
    query = request.GET.get('q', '')
    if not query:
        return Response({'error': 'No search query provided'}, status=status.HTTP_400_BAD_REQUEST)
    
    results = SearchQuerySet().models(Post).filter(content=query)
    serializer = PostSerializer([result.object for result in results], many=True)
    return Response(serializer.data)