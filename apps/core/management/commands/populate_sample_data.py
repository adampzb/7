#!/usr/bin/env python
"""
Django management command to populate sample data for DiscussIt.
This command can be run on any deployment to create test data.
"""

from django.core.management.base import BaseCommand
from django.contrib.auth.models import User
from apps.posts.models import Post
from apps.groups.models.group import Group
from apps.groups.models.member import GroupMember
from apps.profiles.models import UserMetaInfo


class Command(BaseCommand):
    help = 'Populates the database with sample data for testing and development'

    def add_arguments(self, parser):
        parser.add_argument(
            '--force',
            action='store_true',
            help='Force creation of sample data even if data already exists',
        )

    def handle(self, *args, **options):
        force = options['force']
        
        self.stdout.write(self.style.SUCCESS('🌱 Starting sample data population...'))
        
        # Check if data already exists
        if not force and (Post.objects.exists() or Group.objects.exists()):
            self.stdout.write(self.style.WARNING('⚠️  Sample data already exists. Use --force to overwrite.'))
            return
        
        # Create or get a test user
        user, created = User.objects.get_or_create(
            username='testuser',
            defaults={
                'email': 'test@example.com',
                'first_name': 'Test',
                'last_name': 'User'
            }
        )
        
        if created:
            user.set_password('testpassword123')
            user.save()
            self.stdout.write(self.style.SUCCESS('✅ Created test user: testuser'))
        else:
            self.stdout.write(self.style.SUCCESS('✅ Using existing test user: testuser'))
        
        # Create sample posts
        posts_data = [
            {
                'title': 'Welcome to DiscussIt!',
                'content': 'This is the first post on our platform. Feel free to share your thoughts and ideas!',
                'author': user,
                'status': 'PUBLIC'
            },
            {
                'title': 'Getting Started with Django',
                'content': 'Django is a powerful Python web framework. Here are some tips for beginners:',
                'author': user,
                'status': 'PUBLIC'
            },
            {
                'title': 'Angular vs React: Which to Choose?',
                'content': 'Both Angular and React are popular frontend frameworks. What are your thoughts?',
                'author': user,
                'status': 'PUBLIC'
            },
            {
                'title': 'DevOps Best Practices',
                'content': 'Continuous Integration and Deployment are essential for modern development.',
                'author': user,
                'status': 'PUBLIC'
            },
            {
                'title': 'Python Tips and Tricks',
                'content': 'Here are some useful Python programming tips for developers of all levels.',
                'author': user,
                'status': 'PUBLIC'
            }
        ]
        
        for post_data in posts_data:
            post = Post(**post_data)
            post.save()
            self.stdout.write(self.style.SUCCESS(f'✅ Created post: {post.title}'))
        
        # Create sample groups
        groups_data = [
            {
                'name': 'Web Development',
                'description': 'Discussions about web development technologies including HTML, CSS, JavaScript, and frameworks.',
                'group_type': 'PUBLIC'
            },
            {
                'name': 'Python Programmers',
                'description': 'A community for Python developers and enthusiasts to share knowledge.',
                'group_type': 'PUBLIC'
            },
            {
                'name': 'DevOps & Cloud',
                'description': 'Cloud computing, DevOps practices, and infrastructure as code discussions.',
                'group_type': 'PUBLIC'
            },
            {
                'name': 'Data Science',
                'description': 'Machine learning, data analysis, and artificial intelligence topics.',
                'group_type': 'PUBLIC'
            }
        ]
        
        for group_data in groups_data:
            group = Group(**group_data)
            group.save()
            
            # Add the test user as an admin to each group
            GroupMember.objects.create(
                group=group,
                user=user,
                member_type='ADMIN',
                status='ACTIVE'
            )
            
            self.stdout.write(self.style.SUCCESS(f'✅ Created group: {group.name}'))
        
        self.stdout.write(self.style.SUCCESS('🎉 Sample data population completed successfully!'))
        self.stdout.write(self.style.SUCCESS('📊 Created: 5 posts, 4 groups, 1 user'))
        self.stdout.write(self.style.SUCCESS('🔑 Test user credentials: testuser/testpassword123'))