from django.apps import AppConfig


class PostsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'apps.posts'
    
    def ready(self):
        # Import and register signals
        import apps.posts.signals
        
        # Register models with actstream for activity tracking
        from actstream import registry
        from apps.posts.models import Post, PostVote
        from apps.comments.models import PostComment, PostCommentVote
        
        registry.register(Post)
        registry.register(PostComment)
        registry.register(PostVote)
        registry.register(PostCommentVote)
