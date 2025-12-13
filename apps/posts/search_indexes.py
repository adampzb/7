from haystack import indexes
from apps.posts.models import Post


class PostIndex(indexes.SearchIndex, indexes.Indexable):
    """
    Search index for Post model
    """
    text = indexes.CharField(document=True, use_template=True)
    title = indexes.CharField(model_attr='title')
    content = indexes.CharField(model_attr='content')
    author = indexes.CharField(model_attr='author__username')
    created_at = indexes.DateTimeField(model_attr='created_at')
    tags = indexes.MultiValueField()
    
    def get_model(self):
        return Post
    
    def prepare_tags(self, obj):
        return [tag.name for tag in obj.tags.all()]
    
    def index_queryset(self, using=None):
        """Used when the entire index for model is updated."""
        return self.get_model().objects.filter(status='PUBLIC')


class PostCommentIndex(indexes.SearchIndex, indexes.Indexable):
    """
    Search index for PostComment model
    """
    text = indexes.CharField(document=True, use_template=True)
    content = indexes.CharField(model_attr='content')
    user = indexes.CharField(model_attr='user__username')
    post = indexes.CharField(model_attr='post__title')
    created_at = indexes.DateTimeField(model_attr='created_at')
    
    def get_model(self):
        from apps.posts.models import PostComment
        return PostComment
    
    def index_queryset(self, using=None):
        """Used when the entire index for model is updated."""
        return self.get_model().objects.all()