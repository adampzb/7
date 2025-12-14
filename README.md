# Project Structure Documentation

This document provides a detailed overview of the file structure for the 7 project.

## Root Directory Structure

```
7/
├── .github/
│   ├── CI_CD_README.md
│   └── workflows/
│       ├── angular-ci-cd.yml
│       ├── django-ci-cd.yml
│       └── security-scan.yml
├── apps/
│   ├── bookmarks/
│   ├── comments/
│   ├── core/
│   ├── followers/
│   ├── groups/
│   ├── locations/
│   ├── media/
│   ├── posts/
│   ├── profiles/
│   ├── reports/
│   └── tags/
├── discussit/
├── screenshots/
├── static/
│   ├── drf-yasg/
│   ├── frontend/
│   └── guardian/
├── templates/
│   └── search_indexes/
│       └── posts/
├── .env.example
├── .gitignore
├── docker-compose.yml
├── Dockerfile
├── entrypoint.sh
├── gunicorn_config.py
├── manage.py
└── requirements.txt
```

## Detailed File Structure

### Django Backend (Python)

#### Core App (`apps/core/`)
- `admin.py` - Django admin configurations
- `apps.py` - App configuration
- `management/commands/` - Custom management commands
  - `populate_groups.py`
  - `populate_members.py`
  - `populate_posts.py`
  - `populate_report_types.py`
  - `populate_tags.py`
  - `populate_users.py`
  - `posts.py`
- `migrations/` - Database migrations
- `mixins.py` - Reusable mixins
- `models.py` - Core data models
- `notifications.py` - Notification system
- `serializers.py` - DRF serializers
- `services.py` - Business logic services
- `tests.py` - Test cases
- `views.py` - API views

#### Followers App (`apps/followers/`)
- `abstracts.py` - Abstract models
- `admin.py` - Admin configurations
- `apps.py` - App configuration
- `models.py` - Follower models
- `router.py` - API routing
- `serializers.py` - Serializers
- `tests.py` - Tests
- `urls.py` - URL configurations
- `views.py` - API views
- `migrations/` - Database migrations

#### Groups App (`apps/groups/`)
- `models/` - Group models
- `serializers/` - Serializers
- `views/` - API views
- `admin.py` - Admin configurations
- `apps.py` - App configuration
- `migrations/` - Database migrations
- `tests.py` - Tests
- `urls.py` - URL configurations

#### Posts App (`apps/posts/`)
- `admin.py` - Admin configurations
- `apps.py` - App configuration
- `models.py` - Post models
- `serializers.py` - Serializers
- `tests.py` - Tests
- `urls.py` - URL configurations
- `views.py` - API views
- `migrations/` - Database migrations

#### Profiles App (`apps/profiles/`)
- `admin.py` - Admin configurations
- `apps.py` - App configuration
- `models.py` - Profile models
- `serializers.py` - Serializers
- `tests.py` - Tests
- `urls.py` - URL configurations
- `views.py` - API views
- `migrations/` - Database migrations

#### Reports App (`apps/reports/`)
- `models/` - Report models
- `serializers/` - Serializers
- `views/` - API views
- `admin.py` - Admin configurations
- `apps.py` - App configuration
- `migrations/` - Database migrations
- `tests.py` - Tests
- `urls.py` - URL configurations

#### Tags App (`apps/tags/`)
- `admin.py` - Admin configurations
- `apps.py` - App configuration
- `models.py` - Tag models
- `serializers.py` - Serializers
- `tests.py` - Tests
- `urls.py` - URL configurations
- `views.py` - API views
- `migrations/` - Database migrations

#### Bookmarks App (`apps/bookmarks/`)
- `admin.py` - Admin configurations
- `apps.py` - App configuration
- `models.py` - Bookmark models
- `serializers.py` - Serializers
- `tests.py` - Tests
- `urls.py` - URL configurations
- `views.py` - API views
- `migrations/` - Database migrations

#### Comments App (`apps/comments/`)
- `admin.py` - Admin configurations
- `apps.py` - App configuration
- `models.py` - Comment models
- `serializers.py` - Serializers
- `tests.py` - Tests
- `urls.py` - URL configurations
- `views.py` - API views
- `migrations/` - Database migrations

#### Locations App (`apps/locations/`)
- `admin.py` - Admin configurations
- `apps.py` - App configuration
- `models.py` - Location models
- `serializers.py` - Serializers
- `tests.py` - Tests
- `urls.py` - URL configurations
- `views.py` - API views
- `migrations/` - Database migrations

#### Media App (`apps/media/`)
- `admin.py` - Admin configurations
- `apps.py` - App configuration
- `models.py` - Media models
- `serializers.py` - Serializers
- `tests.py` - Tests
- `urls.py` - URL configurations
- `views.py` - API views
- `migrations/` - Database migrations

### Django Project Configuration (`discussit/`)
- `__init__.py` - Python package initialization
- `asgi.py` - ASGI configuration
- `settings.py` - Django settings
- `urls.py` - Main URL routing
- `wsgi.py` - WSGI configuration
- `views.py` - Project views

### Frontend (Angular)

#### Static Files (`static/frontend/`)
```
static/frontend/
├── app/
│   ├── src/
│   │   ├── app/
│   │   │   ├── auth/
│   │   │   │   ├── sign-in/
│   │   │   │   ├── sign-out/
│   │   │   │   └── sign-up/
│   │   │   ├── components/
│   │   │   │   └── report-dialog/
│   │   │   ├── core/
│   │   │   │   ├── guards/
│   │   │   │   │   └── auth/
│   │   │   │   ├── models/
│   │   │   │   ├── pipes/
│   │   │   │   │   ├── safe-content/
│   │   │   │   │   └── time-since/
│   │   │   │   └── services/
│   │   │   │       ├── activity/
│   │   │   │       ├── comment/
│   │   │   │       ├── group/
│   │   │   │       ├── permissions/
│   │   │   │       ├── post/
│   │   │   │       ├── report/
│   │   │   │       ├── search/
│   │   │   │       ├── security/
│   │   │   │       ├── storage/
│   │   │   │       └── user/
│   │   │   ├── feed/
│   │   │   ├── group/
│   │   │   │   ├── create-group/
│   │   │   │   ├── group/
│   │   │   │   ├── group-feed/
│   │   │   │   ├── group-post/
│   │   │   │   ├── group-router/
│   │   │   │   └── group-search/
│   │   │   ├── post/
│   │   │   │   ├── create-post/
│   │   │   │   ├── post-detail/
│   │   │   │   ├── post-loader/
│   │   │   │   └── post/
│   │   │   ├── profiles/
│   │   │   │   ├── add-interest-dialog/
│   │   │   │   ├── profile-bookmarks/
│   │   │   │   ├── profile-comments/
│   │   │   │   ├── profile-downvotes/
│   │   │   │   ├── profile-history/
│   │   │   │   ├── profile-overview/
│   │   │   │   ├── profile-posts/
│   │   │   │   ├── profile-upvotes/
│   │   │   │   └── profiles/
│   │   │   └── setttings/
│   │   ├── assets/
│   │   ├── environments/
│   │   └── styles/
│   └── e2e/
│       └── src/
└── angular.json
```

### Configuration Files

#### Root Configuration
- `.env.example` - Environment variables template
- `.gitignore` - Git ignore patterns
- `docker-compose.yml` - Docker Compose configuration
- `Dockerfile` - Docker build configuration
- `entrypoint.sh` - Docker entrypoint script
- `gunicorn_config.py` - Gunicorn configuration
- `manage.py` - Django management script
- `requirements.txt` - Python dependencies

#### GitHub Workflows (`.github/workflows/`)
- `angular-ci-cd.yml` - Angular CI/CD pipeline
- `django-ci-cd.yml` - Django CI/CD pipeline
- `security-scan.yml` - Security scanning workflow

### Templates (`templates/`)
- `search_indexes/` - Search index templates
  - `posts/` - Post search templates

### Documentation
- `.github/CI_CD_README.md` - CI/CD documentation

## File Count Summary

The project contains approximately **1,484 files** organized across multiple Django apps and an Angular frontend application.

## Key Features

1. **Modular Django Backend**: Organized into multiple apps (core, followers, groups, posts, profiles, etc.)
2. **Angular Frontend**: Comprehensive frontend with multiple modules and components
3. **CI/CD Pipelines**: Separate workflows for Django backend and Angular frontend
4. **Docker Support**: Containerized deployment with Docker and Docker Compose
5. **Comprehensive Testing**: Test files present in each Django app
6. **Database Migrations**: Version-controlled database schema changes
7. **API Documentation**: Swagger/OpenAPI documentation support

## Technical Stack

- **Backend**: Django, Django REST Framework
- **Frontend**: Angular
- **Database**: PostgreSQL (configured in Docker)
- **Deployment**: Docker, Gunicorn, Nginx
- **Testing**: Django test framework, Angular testing utilities
- **CI/CD**: GitHub Actions
