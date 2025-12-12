# DiscussIt

[![Python](https://img.shields.io/badge/Python-3.12-blue?style=flat&logo=python&logoColor=white)](https://www.python.org/)
[![Django](https://img.shields.io/badge/Django-5.2.8-brightgreen?style=flat&logo=django&logoColor=white)](https://www.djangoproject.com/)
[![Django Rest Framework](https://img.shields.io/badge/Django_Rest_Framework-3.16.1-red?style=flat&logo=django&logoColor=white)](https://www.django-rest-framework.org/)
[![Angular](https://img.shields.io/badge/Angular-21.0.1-blueviolet?style=flat&logo=angular&logoColor=white)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

A **modern full-stack discussion platform** built with **Django REST Framework** backend and **Angular** frontend. This application provides a complete social media platform with user authentication, community features, and real-time interactions, now updated to the latest framework versions for enhanced security and performance.

**🎉 Recently Fixed & Improved:**
- ✅ Fixed all Python import issues in tests and apps
- ✅ Resolved Angular standalone component conflicts
- ✅ Upgraded Angular to 21.0.3 with security patches
- ✅ Fixed all npm security vulnerabilities
- ✅ Added ESLint configuration for code quality
- ✅ Verified database setup with sample data
- ✅ Ensured all dependencies match requirements exactly

## ✨ Recent Updates (December 2025)

### 🔄 Major Framework Updates
- **Angular**: Updated from 19.2.16 → **21.0.3** (latest secure version)
- **Django**: Updated from 5.1.3 → **5.2.8** (latest stable)
- **TypeScript**: Updated to **5.9.3** for modern JavaScript features
- **Dependencies**: All packages updated to latest secure versions

### 🛡️ Security Improvements
- **Vulnerability Resolution**: 
  - Replaced CKEditor with Quill.js to resolve npm security issues
  - Fixed Angular XSS vulnerabilities by upgrading to 21.0.3
  - All security patches applied to backend and frontend
- **Package Updates**: All dependencies updated to latest versions with security patches
- **Authentication**: Updated to dj-rest-auth 7.0.1 with enhanced security features

### 🚀 Performance Enhancements
- **Build Optimization**: Improved bundle sizes and lazy loading
- **Modern JavaScript**: TypeScript 5.9.3 with latest language features
- **Framework Benefits**: Angular 21.0.3 performance improvements and Django 5.2.8 optimizations

### 🐛 Bug Fixes & Improvements
- **Import Issues**: Fixed all Python import paths in test files and app configurations
- **Component Architecture**: Resolved standalone component conflicts in Angular
- **Database Setup**: Verified and documented proper database configuration
- **Dependency Management**: Ensured all packages match requirements exactly

### 📝 Code Quality Improvements
- **Linting Configuration**: Added ESLint with Angular-specific rules
- **TypeScript Configuration**: Optimized tsconfig.json for Angular 21
- **Component Cleanup**: Removed unnecessary standalone declarations
- **Build Optimization**: Cleaned up old build artifacts

## 🚀 Features

- **User Authentication**: Sign up, log in, and manage accounts securely.
- **Create & Interact with Posts**: Standalone and group-based posts with threaded discussions.
- **Community Features**: Users can create and join groups (public, private, or restricted).
- **Engagement Mechanisms**: Upvote/downvote system for posts and comments.
- **Social Interaction**: Follow users and posts.
- **Content Moderation**: Report inappropriate content.
- **Bookmarks & Saves**: Users can save their favorite posts.
- **Invites & Membership Requests**: Manage group access through invites and requests.


## 📸 Screenshots

![DiscussIt Sign In Page](screenshots/image01.png?raw=true "DiscussIt Sign In")

![DiscussIt Feed](screenshots/image02.png?raw=true "DiscussIt Feed")

![DiscussIt Group](screenshots/image03.png?raw=true "DiscussIt Group")

![DiscussIt User Feed](screenshots/image04.png?raw=true "DiscussIt User Feed")

<br>

## 🔧 Requirements

### Backend
- Python 3.12+
- Django 5.2.8 (latest stable)
- Django REST Framework 3.16.1
- SQLite (default) or PostgreSQL

### Frontend
- **Node.js**: 22.12.0+ (LTS recommended) - **CRITICAL: Angular 21 requires Node.js 22.12.0 or higher**
- **Angular**: 21.0.1 (latest stable)
- **Angular CLI**: 21.0.1
- **TypeScript**: 5.9.3
- **npm**: 10.0.0+

#### ⚠️ Version Compatibility Matrix
| Angular Version | Node.js Version | TypeScript Version | Status |
|----------------|-----------------|-------------------|---------|
| 21.0.x | ^22.12.0 \|\| ^24.0.0 | >=5.9.0 <6.0.0 | ✅ Current |
| 20.x | ^20.19.0 \|\| ^22.12.0 \|\| ^24.0.0 | >=5.8.0 <6.0.0 | ✅ Supported |
| 19.x | ^18.19.1 \|\| ^20.11.1 \|\| ^22.0.0 | >=5.5.0 <5.9.0 | ⚠️ Legacy |

## ⚙️ Quick Start

### 1. Clone and Setup Backend
```bash
git clone https://github.com/sherrlock1/discuss.git
cd discuss

# Install Python dependencies
pip install -r requirements.txt

# Apply database migrations
python manage.py migrate

# Create superuser (optional)
python manage.py createsuperuser

# Populate sample data (optional)
python manage.py shell
# Run the sample data creation commands (see Management Commands section)

# Start Django server
python manage.py runserver 0.0.0.0:8000
```

### 2. Setup Frontend

#### ⚠️ IMPORTANT: Node.js Version Check
```bash
# Check Node.js version (MUST be 22.12.0 or higher for Angular 21)
node --version
# If version is lower than 22.12.0, install Node.js 22 LTS:
# curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
# sudo apt-get install -y nodejs

# Verify npm version (should be 10.0.0+)
npm --version
```

#### Frontend Installation
```bash
# Navigate to frontend directory
cd static/frontend/reddit-app

# Clean install (recommended for version compatibility)
rm -rf node_modules package-lock.json
npm install

# Build for production
npm run build

# OR start Angular development server
ng serve --host 0.0.0.0 --port 4200
```

#### 🔧 Troubleshooting Node.js/Angular Issues
If you encounter engine compatibility warnings:

1. **Check versions**: Ensure Node.js >= 22.12.0 and npm >= 10.0.0
2. **Clean install**: Delete `node_modules` and `package-lock.json`, then `npm install`
3. **Use .nvmrc**: The project includes `.nvmrc` file specifying Node.js 22.21.0
4. **Engine requirements**: Check `package.json` engines field for exact requirements

📖 **For detailed compatibility information, see [NODEJS_ANGULAR_COMPATIBILITY.md](NODEJS_ANGULAR_COMPATIBILITY.md)**

### 3. Access the Application
- **Frontend**: http://localhost:4200/
- **Backend API**: http://localhost:8000/api/v1/
- **Admin Panel**: http://localhost:8000/admin/

## 🚀 Deployment Configuration

The application is configured for deployment with the following features:

### Backend (Django)
- **CORS Headers**: Configured for cross-origin requests
- **Static Files**: Whitenoise middleware for serving static files
- **Database**: SQLite with sample data populated
- **API Documentation**: Available at `/api/swagger/` and `/api/redoc/`

### Frontend (Angular)
- **Environment Configuration**: Separate development and production environments
- **TypeScript**: Configured with compatibility flags for legacy dependencies
- **Build Optimization**: Production-ready build configuration

### Sample Data Included
- **Users**: admin/admin123, user1-3/password123
- **Posts**: Sample posts with comments and votes
- **Groups**: Various public and private communities
- **Tags**: Categorized content tags

## 📝 API Documentation

The API documentation is available via **Swagger**:

- **Swagger UI:** `http://localhost:8000/api/swagger/`
- **Redoc:** `http://localhost:8000/api/redoc/`

## 📀 Database Setup

### Default Configuration
The application uses SQLite by default with the following configuration:

```python
# settings.py
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}
```

### Database Initialization
1. **Automatic Setup**: Database is created automatically on first run
2. **Migrations Applied**: All 45 migrations across 20+ apps
3. **Sample Data**: Includes initial users, posts, groups, and tags

### Admin Access
- **Username**: `admin`
- **Password**: `admin123`
- **URL**: `/admin/`

### Production Database (PostgreSQL)
For production, configure PostgreSQL in `.env`:

```bash
# .env
DATABASE_URL=postgres://username:password@localhost:5432/database_name
```

Then update `settings.py`:

```python
# settings.py
import dj_database_url
DATABASES = {
    'default': dj_database_url.parse(os.environ.get('DATABASE_URL'))
}
```

## 📈 Management Commands

### Populate Sample Data
```python
# Run in Django shell: python manage.py shell
from django.contrib.auth.models import User
from apps.posts.models import Post
from apps.groups.models import Group
from apps.tags.models import Tag
from apps.reports.models import ReportType

# Create sample users
for i in range(1, 4):
    User.objects.get_or_create(
        username=f'user{i}',
        defaults={'email': f'user{i}@example.com', 'first_name': f'User{i}', 'last_name': 'Test'}
    )

# Create sample tags
tags = ['Technology', 'Science', 'Programming', 'News', 'Discussion']
for tag_name in tags:
    Tag.objects.get_or_create(name=tag_name)

# Create sample groups
Group.objects.get_or_create(
    name='Django Developers',
    defaults={'description': 'Community for Django developers', 'group_type': 'public'}
)

# Create report types
report_types = ['Spam', 'Harassment', 'Inappropriate Content', 'Copyright Violation']
for report_type in report_types:
    ReportType.objects.get_or_create(name=report_type)
```

## ⚙️ Environment Configuration

### Development
- Backend: `http://localhost:8000`
- Frontend: `http://localhost:4200`

### Production
- Configure `ALLOWED_HOSTS` in `settings.py`
- Update `environment.ts` with production URLs
- Set `DEBUG=False` for production

## 🔧 Troubleshooting

### Common Issues

1. **Build Warnings**
   ```bash
   # Minor CommonJS warning from Quill.js (cosmetic only)
   # Warning: quill-delta CommonJS dependency - does not affect functionality
   ```

2. **TypeScript Configuration**
   - Modern TypeScript 5.9.3 with Angular 21 compatibility
   - Quill.js rich text editor integrated for content creation

3. **CORS Issues**
   - Backend is configured with `django-cors-headers`
   - Frontend URLs are whitelisted in Django settings

4. **Database Issues**
   ```bash
   # Reset database if needed
   rm db.sqlite3
   python manage.py migrate
   python manage.py createsuperuser
   ```

5. **Package Updates**
   ```bash
   # Keep packages updated for security
   pip install --upgrade -r requirements.txt
   npm update
   ```


## 🏗️ Project Structure

```
discuss/
├── apps/                          # Django apps
│   ├── bookmarks/                # Bookmark functionality
│   ├── comments/                 # Comment system
│   ├── core/                     # Core utilities
│   ├── followers/                # User following system
│   ├── groups/                   # Community groups
│   ├── posts/                    # Post management
│   ├── profiles/                 # User profiles
│   ├── reports/                  # Content reporting
│   └── tags/                     # Content tagging
├── discussit/                 # Django project settings
├── static/frontend/reddit-app/   # Angular frontend
│   ├── src/app/                  # Angular components
│   ├── src/environments/         # Environment configs
│   └── package.json              # Node.js dependencies
├── requirements.txt              # Python dependencies
└── manage.py                     # Django management script
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Troubleshooting](#-troubleshooting) section
2. Review the [API Documentation](#-api-documentation)
3. Open an issue on GitHub

---

### 🎉 **Happy Coding!** 🚀

