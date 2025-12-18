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

## 🐳 Docker Deployment

### Using Docker Compose (Recommended)

```bash
# Build and start containers
docker compose up --build
```

This will start:
- **PostgreSQL**: Database service on port 5433
- **Redis**: Cache service on port 6380
- **Web Application**: Django + Angular on port 8000

### Docker Commands

```bash
# Build Docker image
docker build --tag discussit:latest .

# Run container
docker run --publish 8000:8000 discussit

# Run management commands in container
docker compose exec web python manage.py migrate
docker compose exec web python manage.py createsuperuser
```

## 🌐 Remote Server Deployment

### Prerequisites for Remote Deployment

Before deploying to a remote server, ensure you have:
- **Server**: Ubuntu 22.04 LTS or similar Linux distribution
- **Domain**: Pointed to your server's IP address
- **SSH Access**: With sudo privileges
- **Firewall**: Configured to allow HTTP/HTTPS traffic

### Step-by-Step Remote Deployment Guide

#### 1. Connect to Your Server

```bash
ssh username@your-server-ip
sudo apt update && sudo apt upgrade -y
```

#### 2. Install Required Dependencies

```bash
# Install system dependencies
sudo apt install -y python3-pip python3-dev libpq-dev postgresql postgresql-contrib redis-server nginx git curl

# Install Docker (optional but recommended)
sudo apt install -y docker.io docker-compose
sudo systemctl enable docker
sudo systemctl start docker
sudo usermod -aG docker $USER
```

#### 3. Set Up PostgreSQL Database

```bash
# Switch to postgres user
sudo -u postgres psql

# Create database and user
CREATE DATABASE discussit;
CREATE USER discussit_user WITH PASSWORD 'secure_password_here';
ALTER ROLE discussit_user SET client_encoding TO 'utf8';
ALTER ROLE discussit_user SET default_transaction_isolation TO 'read committed';
ALTER ROLE discussit_user SET timezone TO 'UTC';
GRANT ALL PRIVILEGES ON DATABASE discussit TO discussit_user;
\q
```

#### 4. Clone the Repository

```bash
# Clone the project
git clone https://github.com/adampzb/7.git discussit
cd discussit

# Set up environment variables
cp .env.example .env  # If .env.example exists
nano .env  # Edit with your production settings
```

#### 5. Configure Environment for Production

Edit your `.env` file with production settings:

```env
# Production settings
ENVIRONMENT=production
DEBUG=False
SECRET_KEY=your_secure_secret_key_here
ALLOWED_HOSTS=your-domain.com,www.your-domain.com

# Database
DATABASE_URL=postgres://discussit_user:secure_password_here@localhost:5432/discussit

# Security
SECURE_SSL_REDIRECT=True
SESSION_COOKIE_SECURE=True
CSRF_COOKIE_SECURE=True
```

#### 6. Set Up Virtual Environment and Dependencies

```bash
# Create virtual environment
python3 -m venv venv
source venv/bin/activate

# Install Python dependencies
pip install -r requirements.txt

# Install Node.js 25 for Angular 21 (if needed)
curl -fsSL https://deb.nodesource.com/setup_25.x | sudo -E bash -
sudo apt install -y nodejs
```

#### 7. Configure Nginx as Reverse Proxy

```bash
# Create Nginx configuration
sudo nano /etc/nginx/sites-available/discussit
```

Add the following configuration:

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    location / {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    location /static/ {
        alias /root/7/static/;
        expires 30d;
    }

    location /media/ {
        alias /root/7/media/;
        expires 30d;
    }
}
```

Enable the configuration:

```bash
sudo ln -s /etc/nginx/sites-available/discussit /etc/nginx/sites-enabled/
sudo nginx -t  # Test configuration
sudo systemctl restart nginx
```

#### 8. Set Up Gunicorn for Production

```bash
# Install Gunicorn
pip install gunicorn

# Test Gunicorn
gunicorn --bind 0.0.0.0:8000 discussit.wsgi:application
```

Create a systemd service for Gunicorn:

```bash
sudo nano /etc/systemd/system/discussit.service
```

Add the following:

```ini
[Unit]
Description=DiscussIt Gunicorn Server
After=network.target

[Service]
User=your_username
Group=www-data
WorkingDirectory=/root/7
Environment="PATH=/root/7/venv/bin"
ExecStart=/root/7/venv/bin/gunicorn --access-logfile - --workers 3 --bind unix:/root/7/discussit.sock discussit.wsgi:application

[Install]
WantedBy=multi-user.target
```

Enable and start the service:

```bash
sudo systemctl daemon-reload
sudo systemctl start discussit
sudo systemctl enable discussit
```

#### 9. Set Up HTTPS with Let's Encrypt

```bash
# Install Certbot
sudo apt install -y certbot python3-certbot-nginx

# Obtain SSL certificate
sudo certbot --nginx -d your-domain.com -d www.your-domain.com

# Set up automatic renewal
sudo certbot renew --dry-run
```

#### 10. Finalize Deployment

```bash
# Run database migrations
python manage.py migrate

# Create superuser
python manage.py createsuperuser

# Collect static files
python manage.py collectstatic

# Restart services
sudo systemctl restart nginx
sudo systemctl restart discussit
```

### Deployment Checklist

- [ ] Server security updates applied
- [ ] PostgreSQL database configured
- [ ] Redis server running
- [ ] Environment variables set for production
- [ ] Virtual environment created
- [ ] Dependencies installed
- [ ] Nginx configured as reverse proxy
- [ ] Gunicorn service created and running
- [ ] HTTPS configured with Let's Encrypt
- [ ] Database migrations applied
- [ ] Static files collected
- [ ] Superuser created
- [ ] Firewall configured (ports 80, 443 open)

### Monitoring and Maintenance

```bash
# Check service status
sudo systemctl status discussit
sudo systemctl status nginx
sudo systemctl status postgresql
sudo systemctl status redis

# View logs
journalctl -u discussit -f
sudo tail -f /var/log/nginx/error.log

# Update application
cd /root/7
git pull origin main
source venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py collectstatic --noinput
sudo systemctl restart discussit
```

### Troubleshooting

**Common Issues and Solutions:**

1. **502 Bad Gateway**: Check Gunicorn service and socket permissions
2. **Database connection errors**: Verify PostgreSQL credentials in `.env`
3. **Static files not loading**: Ensure `collectstatic` was run and Nginx has proper permissions
4. **SSL issues**: Check Certbot configuration and renew certificates

**Debugging Commands:**

```bash
# Test database connection
psql -h localhost -U discussit_user -d discussit

# Check open ports
sudo netstat -tulnp | grep -E '8000|80|443'

# Test Gunicorn manually
gunicorn --bind 0.0.0.0:8000 discussit.wsgi:application
```

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