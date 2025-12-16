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
│   │   │   └── settings/
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

## 🚀 Deployment Instructions

### Prerequisites

- Docker and Docker Compose installed
- Git installed
- Basic knowledge of command line

### Quick Start (Development)

```bash
# Clone the repository
git clone https://github.com/adampzb/ds.git
cd ds

# Build and start the containers
sudo docker-compose down -v && sudo docker-compose up -d --build

# Wait for services to be ready (check with)
sudo docker-compose logs -f

# Access the application
http://localhost:8000
```

### Production Deployment

```bash
# Clone the repository
git clone https://github.com/adampzb/ds.git
cd ds

# Set up environment variables
cp .env.example .env
# Edit .env with your production settings

# Build Angular frontend (optional - done automatically in development)
./build_angular.sh

# Build and start production containers
sudo docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build

# Run migrations
sudo docker-compose exec web python manage.py migrate

# Create admin user
sudo docker-compose exec web python manage.py createsuperuser

# Collect static files
sudo docker-compose exec web python manage.py collectstatic --noinput
```

### Angular Development

```bash
# Navigate to Angular app
cd static/frontend/app

# Install dependencies
npm install

# Start development server (separate from Django)
ng serve

# Build for production
ng build --configuration=production --base-href=/ --deploy-url=/
```

### Docker Services

- **Web**: Django backend with Gunicorn (port 8000)
- **PostgreSQL**: Database (port 5433)
- **Redis**: Cache backend (port 6380)

### Access URLs

- **Application**: `http://localhost:8000` or `http://your-server-ip:8000`
- **Admin**: `http://localhost:8000/admin/`
- **API Docs**: `http://localhost:8000/api/swagger/`
- **PostgreSQL**: `localhost:5433` (user: discussit_user, password: discussit_password_2024)
- **Redis**: `localhost:6380`

### Troubleshooting

**Issue: Angular files not loading**
- Run `./build_angular.sh` to rebuild frontend
- Ensure symlinks exist: `ls -la *.js *.css index.html`

**Issue: Database connection failed**
- Check PostgreSQL is running: `sudo docker-compose logs db`
- Wait for health check: `sudo docker-compose logs db | grep "healthy"`

**Issue: MIME type errors**
- Ensure Angular files are built and symlinked
- Check file permissions: `ls -la staticfiles/`

**Issue: CORS errors**
- Add your domain to `CORS_ALLOWED_ORIGINS` in settings.py
- Or set `CORS_ORIGIN_ALLOW_ALL = True` for development

### Maintenance

**Update dependencies**
```bash
# Python dependencies
pip install --upgrade -r requirements.txt

# JavaScript dependencies
cd static/frontend/app
npm update
```

**Run tests**
```bash
# Django tests
sudo docker-compose exec web python manage.py test

# Angular tests
cd static/frontend/app
ng test
```

### Environment Variables

Create a `.env` file based on `.env.example`:

```env
# Django settings
DEBUG=False
SECRET_KEY=your-secret-key-here
ALLOWED_HOSTS=yourdomain.com,localhost

# Database
DATABASE_URL=postgres://discussit_user:discussit_password_2024@db:5432/discussit

# Security
CSRF_TRUSTED_ORIGINS=http://yourdomain.com,http://localhost
CORS_ALLOWED_ORIGINS=http://yourdomain.com,http://localhost
```

## 🚀 Build and Deployment Instructions

### 🧹 Complete Clean Build (Recommended for Fresh Start)

```bash
# Clean ALL old builds and cache
cd /root/7
echo "🧹 Cleaning ALL old builds and cache..."
rm -rf staticfiles/
rm -rf index.html main.js polyfills.js runtime.js styles.css
rm -rf static/frontend/app/dist/
rm -rf static/frontend/app/node_modules/
rm -rf static/frontend/app/.angular/
rm -f static/frontend/app/package-lock.json
rm -rf whoosh_index/
find . -name "*.pyc" -delete
find . -name "__pycache__" -type d -exec rm -rf {} +
rm -rf *.sqlite3
echo "✅ Complete cleanup finished!"
```

### 🚀 Frontend Build (Angular)

```bash
# Install npm dependencies and build Angular app
cd static/frontend/app
npm install
ng build --configuration=production --base-href=/ --deploy-url=/

# Copy built files to staticfiles and create symlinks
cp -r dist/* ../../staticfiles/
cd ../../..
ln -sf staticfiles/runtime.js runtime.js
ln -sf staticfiles/polyfills.js polyfills.js
ln -sf staticfiles/main.js main.js
ln -sf staticfiles/styles.css styles.css
ln -sf staticfiles/index.html index.html
echo "✅ Frontend build completed!"
```

### 🐍 Backend Setup (Django)

```bash
# Install Python dependencies
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Collect static files
python manage.py collectstatic --noinput

# Create superuser (optional)
# python manage.py createsuperuser
echo "✅ Backend setup completed!"
```

### 🐳 Docker Build and Deployment

```bash
# Build Docker images
docker-compose build

# Start containers
docker-compose up -d

# Check running containers
docker-compose ps
echo "✅ Docker deployment completed!"
```

### 🔍 Verification Commands

```bash
# Check frontend files
ls -la staticfiles/
ls -la | grep -E "(index\.html|main\.js|polyfills\.js|runtime\.js|styles\.css)"

# Check backend
python manage.py check

# Check Docker containers
docker-compose logs --tail=20

# Test API
curl -I http://localhost:8000/api/
echo "✅ Verification complete!"
```

### 📋 Quick Reference Cheat Sheet

**Clean Everything:**
```bash
rm -rf staticfiles/ index.html main.js polyfills.js runtime.js styles.css static/frontend/app/{dist,node_modules,.angular,package-lock.json} whoosh_index/ && find . -name "*.pyc" -delete && find . -name "__pycache__" -type d -exec rm -rf {} +
```

**Frontend Only:**
```bash
cd static/frontend/app && npm install && ng build --configuration=production --base-href=/ --deploy-url=/ && cp -r dist/* ../../staticfiles/ && cd ../../.. && ln -sf staticfiles/{runtime,polyfills,main,styles,index.html}.{js,css,html} ./
```

**Backend Only:**
```bash
pip install -r requirements.txt && python manage.py migrate && python manage.py collectstatic --noinput
```

**Docker Only:**
```bash
docker-compose build && docker-compose up -d
```

## 📚 Additional Documentation

- **CI/CD Guide**: See `.github/CI_CD_README.md`
- **Database Setup**: See `DATABASE_SETUP_GUIDE.md`
- **Deployment Guide**: See `DEPLOYMENT_GUIDE.md`
=======
