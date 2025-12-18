# DiscussIt - Full Stack Social Platform

A modern social discussion platform built with Django (backend) and Angular (frontend).

## 🚀 Quick Start Guide

### Prerequisites

- Docker and Docker Compose
- Node.js (for Angular development)
- Python 3.8+ (for Django development)
- Git

## 📋 Complete Deployment Instructions

### 1️⃣ Clean Up Old Builds (Important!)

```bash
# Navigate to project root
cd /root/7

# Remove old builds and cache
echo "🧹 Cleaning old builds..."
rm -rf staticfiles/
rm -f index.html main.js polyfills.js runtime.js styles.css
rm -rf static/frontend/app/dist/
rm -rf static/frontend/app/node_modules/
rm -rf static/frontend/app/.angular/
rm -f static/frontend/app/package-lock.json
rm -rf whoosh_index/
find . -name "*.pyc" -delete
find . -name "__pycache__" -type d -exec rm -rf {} +
rm -rf *.sqlite3

# Remove old Docker containers and volumes
echo "🧹 Cleaning Docker..."
sudo docker-compose down -v
sudo docker system prune -f

echo "✅ Cleanup completed!"
```

### 2️⃣ Build Angular Frontend

```bash
# Navigate to Angular app
cd static/frontend/app

# Install npm dependencies
echo "📦 Installing npm dependencies..."
npm install

# Build Angular for production
echo "🔨 Building Angular app..."
ng build --configuration=production --base-href=/ --deploy-url=/

# Copy built files to static directory
echo "📁 Copying built files..."
cp -r dist/* ../../../static/

# Create symlinks for root-level files
echo "🔗 Creating symlinks..."
cd ../../..
ln -sf static/runtime.js runtime.js
ln -sf static/polyfills.js polyfills.js
ln -sf static/main.js main.js
ln -sf static/styles.css styles.css
ln -sf static/index.html index.html

echo "✅ Angular build completed!"
```

### 3️⃣ Set Up Django Backend

```bash
# Install Python dependencies
echo "🐍 Installing Python dependencies..."
pip install -r requirements.txt

# Install whitenoise (required for static files)
pip install whitenoise --break-system-packages

# Run database migrations
echo "🗃️ Running migrations..."
python manage.py migrate

# Collect static files
echo "📂 Collecting static files..."
python manage.py collectstatic --noinput

# Create admin user (optional)
# echo "👤 Creating admin user..."
# python manage.py createsuperuser

echo "✅ Django setup completed!"
```

### 4️⃣ Start Docker Services

```bash
# Build Docker images
echo "🐳 Building Docker images..."
sudo docker-compose build

# Start containers
echo "🚀 Starting containers..."
sudo docker-compose up -d

# Check container status
echo "📋 Checking container status..."
sudo docker-compose ps

# View logs (optional)
# sudo docker-compose logs -f

echo "✅ Docker deployment completed!"
```

### 5️⃣ Verify Deployment

```bash
# Check if application is running
echo "🔍 Verifying deployment..."
curl -I http://localhost:8000

# Check frontend files
ls -la static/ | grep -E "(runtime|main|styles|index)"

# Check Docker containers
sudo docker-compose ps

# Test API endpoint
curl -I http://localhost:8000/api/

echo "✅ Verification complete!"
```

## 📚 Development Workflow

### Angular Development

```bash
# Start Angular development server
cd static/frontend/app
ng serve

# Angular app will be available at http://localhost:4200
```

### Django Development

```bash
# Run Django development server
python manage.py runserver

# Django will be available at http://localhost:8000
```

### Database Management

```bash
# Create migrations
python manage.py makemigrations

# Apply migrations
python manage.py migrate

# Create superuser
python manage.py createsuperuser

# Reset database (development only)
python manage.py flush
```

## 🐳 Docker Commands

```bash
# Start all services
sudo docker-compose up -d

# Stop all services
sudo docker-compose down

# Stop and remove volumes
sudo docker-compose down -v

# View logs
sudo docker-compose logs -f

# Rebuild and restart
sudo docker-compose up -d --build

# Run migrations in container
sudo docker exec 7-web-1 bash -c "cd /usr/src/app && python manage.py migrate"

# Access Django shell in container
sudo docker exec -it 7-web-1 bash -c "cd /usr/src/app && python manage.py shell"
```

## 🔧 Troubleshooting

### Angular Files Not Loading

**Symptoms**: MIME type errors, 404 errors for JS/CSS files

**Solution**:
```bash
# Rebuild Angular
cd static/frontend/app
rm -rf dist/ node_modules/ .angular/
npm install
ng build --configuration=production --base-href=/ --deploy-url=/

# Copy files and create symlinks
cp -r dist/* ../../../static/
cd ../../..
ln -sf static/runtime.js runtime.js
ln -sf static/polyfills.js polyfills.js
ln -sf static/main.js main.js
ln -sf static/styles.css styles.css
ln -sf static/index.html index.html
```

### Database Connection Issues

**Symptoms**: "could not translate host name 'db' to address"

**Solution**:
```bash
# Update docker-compose.yml to use localhost
# Change DATABASE_URL from:
# postgres://user:pass@db:5432/dbname
# To:
# postgres://user:pass@localhost:5433/dbname

# Then rebuild
sudo docker-compose down -v
sudo docker-compose up -d --build
```

### Migration Errors

**Symptoms**: Migration conflicts, missing tables

**Solution**:
```bash
# Reset migrations (development only)
rm -rf apps/*/migrations/
python manage.py makemigrations
python manage.py migrate
```

### Static Files Not Served

**Symptoms**: 404 errors for static files

**Solution**:
```bash
# Collect static files
python manage.py collectstatic --noinput

# Check Nginx configuration
# Ensure static files path is correct in nginx/prod.conf
```

## 📋 Project Structure

```
7/
├── apps/                  # Django apps
│   ├── bookmarks/         # Bookmark functionality
│   ├── comments/          # Comment system
│   ├── core/              # Core functionality
│   ├── followers/         # Follower system
│   ├── groups/            # Group functionality
│   ├── posts/             # Post system
│   ├── profiles/          # User profiles
│   ├── reports/           # Reporting system
│   └── tags/              # Tag system
├── discussit/             # Django project settings
├── static/                # Static files
│   ├── frontend/          # Angular frontend
│   │   └── app/           # Angular application
│   └── admin/             # Django admin static files
├── templates/             # Django templates
├── .env                   # Environment variables
├── docker-compose.yml     # Docker configuration
├── Dockerfile             # Docker build file
├── manage.py              # Django management
└── requirements.txt       # Python dependencies
```

## 🌐 Access URLs

- **Production**: `http://51.15.115.36/`
- **Local Development**: `http://localhost:8000/`
- **Angular Dev Server**: `http://localhost:4200/`
- **Admin Panel**: `http://localhost:8000/admin/`
- **API Documentation**: `http://localhost:8000/api/swagger/`

## 📝 Environment Variables

Create a `.env` file based on `.env.example`:

```env
# Django settings
DEBUG=True
SECRET_KEY=your-secret-key-here
ALLOWED_HOSTS=localhost,127.0.0.1

# Database
DATABASE_URL=postgres://discussit_user:discussit_password_2024@localhost:5433/discussit

# Security
CSRF_TRUSTED_ORIGINS=http://localhost,http://127.0.0.1
CORS_ALLOWED_ORIGINS=http://localhost:8000,http://127.0.0.1:8000
```

## 🔒 Security Notes

- Always use strong secret keys in production
- Set `DEBUG=False` in production
- Use HTTPS in production
- Regularly update dependencies
- Use environment variables for sensitive data

## 📈 Performance Optimization

```bash
# Enable caching
python manage.py createcachetable

# Use Redis for caching
# Install redis package and configure in settings.py

# Compress static files
# Use django-compressor or similar tools
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to your branch
5. Create a pull request

## 📜 License

This project is licensed under the MIT License.

---

**Need Help?** Check the troubleshooting section or open an issue on GitHub.

**Found a Bug?** Report it with detailed steps to reproduce.

**Have a Feature Request?** Open an issue describing your idea.

🚀 **Happy Coding!**