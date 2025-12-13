#!/usr/bin/env python
"""
Script to create sample data for DiscussIt application testing
"""
import os
import django
import random
from faker import Faker
from datetime import timedelta

# Setup Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'discussit.settings')
django.setup()

from django.contrib.auth.models import User
from django.utils import timezone
from apps.posts.models import Post, PostVote
from apps.comments.models import PostComment, PostCommentVote
from apps.tags.models import Tag
from apps.groups.models import Group
from apps.bookmarks.models import PostBookmark
from apps.followers.models import PostFollower, UserFollower
from apps.profiles.models import UserMetaInfo

fake = Faker()

def create_users(num=5):
    """Create sample users"""
    print(f"Creating {num} sample users...")
    users = []
    
    # Create users
    for i in range(num):
        username = f"user{i+1}"
        email = f"user{i+1}@example.com"
        password = "password123"
        
        user = User.objects.create_user(
            username=username,
            email=email,
            password=password
        )
        
        # Create user meta info
        UserMetaInfo.objects.create(
            user=user,
            bio=fake.text(max_nb_chars=200),
            dob=fake.date_of_birth(minimum_age=18, maximum_age=60),
            dob_visible=True
        )
        
        users.append(user)
        print(f"  Created user: {username}")
    
    return users

def create_tags(num=10):
    """Create sample tags"""
    print(f"Creating {num} sample tags...")
    tags = []
    
    tag_names = [
        "technology", "programming", "python", "javascript", "webdev",
        "news", "science", "space", "health", "fitness",
        "books", "movies", "music", "gaming", "travel"
    ]
    
    for tag_name in tag_names[:num]:
        tag, created = Tag.objects.get_or_create(
            name=tag_name
        )
        tags.append(tag)
        print(f"  Created tag: {tag_name}")
    
    return tags

def create_groups(num=3):
    """Create sample groups"""
    print(f"Creating {num} sample groups...")
    groups = []
    
    group_data = [
        {"name": "TechEnthusiasts", "description": "For technology lovers", "group_type": "PUBLIC"},
        {"name": "BookWorms", "description": "Book discussions and reviews", "group_type": "PUBLIC"},
        {"name": "FitnessGurus", "description": "Health and fitness community", "group_type": "RESTRICTED"}
    ]
    
    for i, data in enumerate(group_data[:num]):
        group = Group.objects.create(
            name=data["name"],
            description=data["description"],
            group_type=data["group_type"]
        )
        groups.append(group)
        print(f"  Created group: {data['name']}")
    
    return groups

def create_posts(users, tags, groups, num=10):
    """Create sample posts"""
    print(f"Creating {num} sample posts...")
    posts = []
    
    for i in range(num):
        user = random.choice(users)
        title = fake.sentence(nb_words=6)[:-1]  # Remove period
        content = fake.text(max_nb_chars=500)
        status = random.choice(["PUBLIC", "DRAFT"])
        
        post = Post.objects.create(
            title=title,
            content=content,
            author=user,
            status=status,
            group=random.choice([None] + groups)  # 50% chance of no group
        )
        
        # Add random tags (1-3 tags per post)
        num_tags = random.randint(1, 3)
        post_tags = random.sample(tags, num_tags)
        post.tags.set(post_tags)
        
        posts.append(post)
        print(f"  Created post: {title[:50]}...")
    
    return posts

def create_comments(users, posts, num=20):
    """Create sample comments"""
    print(f"Creating {num} sample comments...")
    comments = []
    
    for i in range(num):
        user = random.choice(users)
        post = random.choice(posts)
        
        # 70% chance of being a top-level comment, 30% chance of being a reply
        if random.random() < 0.7 or len(comments) == 0:
            parent = None
        else:
            parent = random.choice(comments)
        
        comment = PostComment.objects.create(
            user=user,
            post=post,
            parent=parent,
            _comment=fake.text(max_nb_chars=200)
        )
        
        comments.append(comment)
        print(f"  Created comment on post: {post.title[:30]}...")
    
    return comments

def create_votes(users, posts, comments):
    """Create sample votes"""
    print("Creating sample votes...")
    
    # Post votes
    for post in posts:
        num_votes = random.randint(0, 5)
        voters = random.sample(users, min(num_votes, len(users)))
        
        for user in voters:
            vote_value = random.choice([-1, 1])  # -1 for downvote, 1 for upvote
            PostVote.objects.create(
                user=user,
                post=post,
                vote=vote_value
            )
    
    # Comment votes
    for comment in comments:
        num_votes = random.randint(0, 3)
        voters = random.sample(users, min(num_votes, len(users)))
        
        for user in voters:
            vote_value = random.choice([-1, 1])
            PostCommentVote.objects.create(
                user=user,
                post_comment=comment,
                vote=vote_value
            )
    
    print(f"  Created votes for {len(posts)} posts and {len(comments)} comments")

def create_bookmarks(users, posts):
    """Create sample bookmarks"""
    print("Creating sample bookmarks...")
    
    for user in users:
        num_bookmarks = random.randint(0, 3)
        bookmarked_posts = random.sample(posts, min(num_bookmarks, len(posts)))
        
        for post in bookmarked_posts:
            PostBookmark.objects.get_or_create(
                user=user,
                post=post
            )
    
    print(f"  Created bookmarks for users")

def create_followers(users, posts):
    """Create sample followers"""
    print("Creating sample followers...")
    
    # User followers
    for user in users:
        num_following = random.randint(0, 2)
        users_to_follow = [u for u in users if u != user]  # Don't follow self
        following = random.sample(users_to_follow, min(num_following, len(users_to_follow)))
        
        for followed_user in following:
            UserFollower.objects.get_or_create(
                follower=user,
                followed_user=followed_user
            )
    
    # Post followers
    for post in posts:
        num_followers = random.randint(0, 3)
        post_followers = random.sample(users, min(num_followers, len(users)))
        
        for user in post_followers:
            PostFollower.objects.get_or_create(
                follower=user,
                post=post
            )
    
    print(f"  Created user and post followers")

def main():
    """Main function to create all sample data"""
    print("🚀 Starting DiscussIt sample data creation...")
    print("=" * 50)
    
    # Clear existing data (optional - comment out to keep existing data)
    print("Clearing existing data...")
    PostCommentVote.objects.all().delete()
    PostVote.objects.all().delete()
    PostBookmark.objects.all().delete()
    PostFollower.objects.all().delete()
    UserFollower.objects.all().delete()
    PostComment.objects.all().delete()
    Post.objects.all().delete()
    UserMetaInfo.objects.all().delete()
    User.objects.exclude(username='admin').delete()
    Tag.objects.all().delete()
    Group.objects.all().delete()
    
    # Create sample data
    users = create_users(5)
    tags = create_tags(10)
    groups = create_groups(3)
    posts = create_posts(users, tags, groups, 10)
    comments = create_comments(users, posts, 20)
    create_votes(users, posts, comments)
    create_bookmarks(users, posts)
    create_followers(users, posts)
    
    print("=" * 50)
    print("✅ Sample data creation completed successfully!")
    print(f"📊 Summary:")
    print(f"   - Users: {len(users)}")
    print(f"   - Tags: {len(tags)}")
    print(f"   - Groups: {len(groups)}")
    print(f"   - Posts: {len(posts)}")
    print(f"   - Comments: {len(comments)}")
    print(f"   - Bookmarks: {PostBookmark.objects.count()}")
    print(f"   - User Followers: {UserFollower.objects.count()}")
    print(f"   - Post Followers: {PostFollower.objects.count()}")

if __name__ == '__main__':
    main()