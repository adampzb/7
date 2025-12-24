# DiscussIt - Modern Discussion Forum Platform

![DiscussIt Logo](https://via.placeholder.com/150)  <!-- Replace with actual logo -->

**DiscussIt** is a powerful, modern discussion forum platform built as a Reddit-like clone. It features a robust Django backend with a responsive Angular frontend, providing a complete social discussion experience.

## 🚀 Features

### Core Functionality
- **Post Management**: Create, edit, archive, and categorize posts
- **Group System**: Public, Restricted, and Private communities
- **Comment System**: Nested comments with threading
- **Tag System**: Organize content with customizable tags
- **User Profiles**: Custom profiles with activity tracking

### Social Features
- **Bookmarking**: Save posts for later reading
- **Follow System**: Follow users and groups
- **Member Management**: Group membership with roles
- **Content Moderation**: Reporting system for community management

### Technical Features
- **RESTful API**: Django REST Framework with comprehensive endpoints
- **Authentication**: Django Allauth with social login support
- **Search**: Advanced search functionality with Haystack
- **Real-time Capabilities**: Redis integration for caching and real-time features
- **API Documentation**: Interactive Swagger and Redoc documentation

## 🛠 Tech Stack

### Backend
- **Framework**: Django 5.2.8
- **Database**: PostgreSQL 15
- **Cache**: Redis 7
- **API**: Django REST Framework
- **Authentication**: Django Allauth, JWT
- **Search**: Django Haystack
- **File Storage**: Whitenoise + Media handling

### Frontend
- **Framework**: Angular 21
- **Runtime**: Node.js 25
- **Styling**: Custom CSS with responsive design
- **State Management**: Angular services
- **Routing**: Angular Router with SPA support
- **Build Process**: Automated with detailed logging
- **Dependencies**: Managed via npm





### DevOps
- **Containerization**: Docker
- **Web Server**: Gunicorn + Nginx
- **Process Management**: Supervisor
- **Environment Management**: Python-dotenv

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Python**: 3.8+
- **Node.js**: 25+ (for Angular 21 frontend)
- **Docker**: 20.10+ (optional, for containerized deployment)
- **Docker Compose**: 1.29+ (optional)
- **PostgreSQL**: 15+ (or use Docker)
- **Redis**: 7+ (or use Docker)
- **Git**: 2.30+

## 🔧 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/adampzb/7.git discussit
cd discussit
```

### 2. Set Up Python Environment

```bash
# Create and activate virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install Python dependencies
pip install -r requirements.txt
```

### 3. Configure Environment Variables

Copy the `.env` file and customize it:

```bash
cp .env.example .env  # If .env.example exists, otherwise edit .env directly
```

Key environment variables to configure:
- `SECRET_KEY`: Django secret key
- `DEBUG`: Set to `False` for production
- `DATABASE_URL`: PostgreSQL connection URL
- `REDIS_URL`: Redis connection URL
- `ALLOWED_HOSTS`: Domain names for your deployment

### 4. Set Up Database

```bash
# Run migrations
python manage.py migrate

# Create superuser (admin)
python manage.py createsuperuser
```

### 5. Collect Static Files

```bash
python manage.py collectstatic
```

### 6. Run Development Server

```bash
python manage.py runserver
```

The application will be available at `http://localhost:8000`

## 📂 Project Structure

```
discussit/
├── apps/                  # Django applications
│   ├── core/              # Core models and utilities
│   ├── posts/             # Post management
│   ├── groups/            # Group/community system
│   ├── comments/          # Comment functionality
│   ├── profiles/          # User profiles
│   ├── tags/              # Tag system
│   ├── bookmarks/         # Bookmark functionality
│   ├── followers/         # Follow system
│   ├── reports/           # Reporting system
│   ├── media/             # Media handling
│   └── locations/         # Location services
│
├── discussit/             # Main Django project
│   ├── settings.py        # Project settings
│   ├── urls.py            # URL routing
│   └── wsgi.py            # WSGI configuration
│
├── templates/             # Django templates
│   └── index.html         # Angular entry point
│
├── static/                # Static files
├── screenshots/           # Application screenshots
├── docker-compose.yml     # Docker configuration
├── Dockerfile             # Docker build instructions
├── requirements.txt       # Python dependencies
└── .env                   # Environment variables
```

## 🔌 API Documentation

DiscussIt provides comprehensive API documentation:

- **Swagger UI**: `/api/swagger/` - Interactive API documentation
- **ReDoc**: `/api/redoc/` - Beautiful API documentation

### API Endpoints

- **Authentication**: `/rest-auth/` - User registration and login
- **Posts**: `/api/posts/` - Post management endpoints
- **Groups**: `/api/groups/` - Group management endpoints
- **Comments**: `/api/comments/` - Comment endpoints
- **Profiles**: `/api/profiles/` - User profile endpoints
- **Search**: `/api/v1/search/` - Content search

## 🖼️ Screenshots

Check out the `screenshots/` directory for visual previews of the application:

- `image01.png` - Home page
- `image02.png` - Post detail view
- `image03.png` - Group listing
- `image04.png` - User profile
- `image05.png` - Create post form
- `image06.png` - Comment section
- `image07.png` - Admin interface

## 🎯 Usage Examples

### Creating a Post

```bash
# Using Django management command
python manage.py posts create --title "My First Post" --content "Hello World!" --author username
```

### Populating Test Data

```bash
# Populate members
python manage.py populate_members

# Populate posts
python manage.py populate_posts

# Populate report types
python manage.py populate_report_types
```





## 🤝 Contributing

We welcome contributions to DiscussIt! Here's how you can help:

### Reporting Issues
- Check existing issues before creating new ones
- Provide detailed reproduction steps
- Include screenshots if applicable

### Submitting Pull Requests
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a pull request

### Development Guidelines
- Follow PEP 8 Python style guide
- Write comprehensive tests
- Update documentation for new features
- Keep commits focused and descriptive

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For questions, issues, or feature requests:
- Open an issue on GitHub
- Check our [documentation](link-to-docs) (if available)
- Join our community discussions

## 🚀 Roadmap

Future enhancements planned:
- Real-time notifications
- Advanced moderation tools
- Mobile application
- Enhanced search with Elasticsearch
- User reputation system

## 🎉 Acknowledgements

- Built with Django and Angular
- Inspired by Reddit's community model
- Powered by open-source technologies

---

**DiscussIt** - Where conversations happen! 💬

[![Django](https://img.shields.io/badge/Django-5.2.8-green.svg)](https://www.djangoproject.com/)
[![Angular](https://img.shields.io/badge/Angular-21-red.svg)](https://angular.io/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)