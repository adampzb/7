from django.test import TestCase
from apps.tags.models import Tag, TagType


class TagTypeTests(TestCase):
    """Test cases for TagType model"""
    
    def test_tag_type_creation(self):
        """Test creating a tag type"""
        tag_type = TagType.objects.create(title='Category')
        
        self.assertEqual(tag_type.title, 'Category')
        self.assertIsNotNone(tag_type.created_at)
        self.assertIsNotNone(tag_type.updated_at)
    
    def test_tag_type_str_representation(self):
        """Test the string representation of TagType"""
        tag_type = TagType.objects.create(title='Category')
        self.assertEqual(str(tag_type), 'Category')
    
    def test_tag_type_verbose_names(self):
        """Test the verbose names for TagType"""
        self.assertEqual(TagType._meta.verbose_name, 'Tag Type')
        self.assertEqual(TagType._meta.verbose_name_plural, 'Tag Types')
    
    def test_tag_type_timestamps(self):
        """Test that TagType has proper timestamps"""
        from django.utils import timezone
        
        tag_type = TagType.objects.create(title='Category')
        
        self.assertIsNotNone(tag_type.created_at)
        self.assertIsNotNone(tag_type.updated_at)
        
        # Test that created_at and updated_at are close for new objects
        self.assertAlmostEqual(
            tag_type.created_at, 
            tag_type.updated_at, 
            delta=timezone.timedelta(seconds=1)
        )


class TagTests(TestCase):
    """Test cases for Tag model"""
    
    def setUp(self):
        # Create a tag type for testing
        self.tag_type = TagType.objects.create(title='Category')
    
    def test_tag_creation_without_tag_type(self):
        """Test creating a tag without a tag type"""
        tag = Tag.objects.create(name='python')
        
        self.assertEqual(tag.name, 'python')
        self.assertIsNone(tag.tag_type)
        self.assertIsNotNone(tag.created_at)
        self.assertIsNotNone(tag.updated_at)
    
    def test_tag_creation_with_tag_type(self):
        """Test creating a tag with a tag type"""
        tag = Tag.objects.create(name='python', tag_type=self.tag_type)
        
        self.assertEqual(tag.name, 'python')
        self.assertEqual(tag.tag_type, self.tag_type)
        self.assertIsNotNone(tag.created_at)
        self.assertIsNotNone(tag.updated_at)
    
    def test_tag_str_representation(self):
        """Test the string representation of Tag"""
        tag = Tag.objects.create(name='python')
        self.assertEqual(str(tag), 'python')
    
    def test_tag_verbose_names(self):
        """Test the verbose names for Tag"""
        self.assertEqual(Tag._meta.verbose_name, 'Tag')
        self.assertEqual(Tag._meta.verbose_name_plural, 'Tags')
    
    def test_tag_timestamps(self):
        """Test that Tag has proper timestamps"""
        from django.utils import timezone
        
        tag = Tag.objects.create(name='python')
        
        self.assertIsNotNone(tag.created_at)
        self.assertIsNotNone(tag.updated_at)
        
        # Test that created_at and updated_at are close for new objects
        self.assertAlmostEqual(
            tag.created_at, 
            tag.updated_at, 
            delta=timezone.timedelta(seconds=1)
        )
    
    def test_tag_with_tag_type_relationship(self):
        """Test the relationship between tag and tag type"""
        tag = Tag.objects.create(name='python', tag_type=self.tag_type)
        
        # Test that we can access tags through the tag type
        tag_type_tags = self.tag_type.tags.all()
        self.assertEqual(tag_type_tags.count(), 1)
        self.assertEqual(tag_type_tags.first(), tag)
    
    def test_multiple_tags_with_same_tag_type(self):
        """Test multiple tags with the same tag type"""
        tag1 = Tag.objects.create(name='python', tag_type=self.tag_type)
        tag2 = Tag.objects.create(name='django', tag_type=self.tag_type)
        tag3 = Tag.objects.create(name='javascript', tag_type=self.tag_type)
        
        tag_type_tags = self.tag_type.tags.all()
        self.assertEqual(tag_type_tags.count(), 3)
        self.assertIn(tag1, tag_type_tags)
        self.assertIn(tag2, tag_type_tags)
        self.assertIn(tag3, tag_type_tags)


class TagIntegrationTests(TestCase):
    """Integration tests for tag models"""
    
    def setUp(self):
        # Create tag types
        self.category_type = TagType.objects.create(title='Category')
        self.language_type = TagType.objects.create(title='Language')
        
        # Create tags
        self.python_tag = Tag.objects.create(name='python', tag_type=self.language_type)
        self.django_tag = Tag.objects.create(name='django', tag_type=self.language_type)
        self.webdev_tag = Tag.objects.create(name='webdev', tag_type=self.category_type)
    
    def test_tag_type_deletion_with_tags(self):
        """Test what happens when a tag type with tags is deleted"""
        # Verify tags exist
        self.assertEqual(Tag.objects.count(), 3)
        
        # Delete the language tag type
        self.language_type.delete()
        
        # Tags should still exist but with tag_type set to None
        self.assertEqual(Tag.objects.count(), 3)
        
        # Check that the tags that had the language type now have None
        python_tag = Tag.objects.get(name='python')
        django_tag = Tag.objects.get(name='django')
        self.assertIsNone(python_tag.tag_type)
        self.assertIsNone(django_tag.tag_type)
        
        # The webdev tag should still have its tag type
        webdev_tag = Tag.objects.get(name='webdev')
        self.assertEqual(webdev_tag.tag_type, self.category_type)
    
    def test_tag_creation_and_retrieval(self):
        """Test creating and retrieving tags"""
        # Create additional tags
        backend_tag = Tag.objects.create(name='backend', tag_type=self.category_type)
        frontend_tag = Tag.objects.create(name='frontend', tag_type=self.category_type)
        
        # Retrieve all tags
        all_tags = Tag.objects.all()
        self.assertEqual(all_tags.count(), 5)
        
        # Retrieve tags by type
        category_tags = Tag.objects.filter(tag_type=self.category_type)
        self.assertEqual(category_tags.count(), 3)  # webdev, backend, frontend
        
        language_tags = Tag.objects.filter(tag_type=self.language_type)
        self.assertEqual(language_tags.count(), 2)  # python, django
        
        # Retrieve tags without type
        no_type_tags = Tag.objects.filter(tag_type__isnull=True)
        self.assertEqual(no_type_tags.count(), 0)
    
    def test_tag_search_by_name(self):
        """Test searching for tags by name"""
        # Search for python tag
        python_tags = Tag.objects.filter(name='python')
        self.assertEqual(python_tags.count(), 1)
        self.assertEqual(python_tags.first().name, 'python')
        
        # Search for non-existent tag
        nonexistent_tags = Tag.objects.filter(name='nonexistent')
        self.assertEqual(nonexistent_tags.count(), 0)
    
    def test_tag_type_search_by_title(self):
        """Test searching for tag types by title"""
        # Search for Category tag type
        category_types = TagType.objects.filter(title='Category')
        self.assertEqual(category_types.count(), 1)
        self.assertEqual(category_types.first().title, 'Category')
        
        # Search for non-existent tag type
        nonexistent_types = TagType.objects.filter(title='Nonexistent')
        self.assertEqual(nonexistent_types.count(), 0)