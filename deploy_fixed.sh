#!/bin/bash

# Fixed deployment script for the Django application
# This script ensures all dependencies are properly installed and the application is ready to run

echo "🚀 Starting deployment setup..."

# Create virtual environment if it doesn't exist
if [ ! -d "venv" ]; then
    echo "🐍 Creating virtual environment..."
    python3 -m venv venv
fi

# Activate virtual environment
echo "🔧 Activating virtual environment..."
source venv/bin/activate

# Upgrade pip
echo "📦 Upgrading pip..."
pip install --upgrade pip

# Install core dependencies
echo "📦 Installing core dependencies..."
pip install Django==5.2.8 djangorestframework==3.16.1

# Install database and environment dependencies
pip install python-dotenv==1.2.1 psycopg2-binary==2.9.11

# Install authentication dependencies
pip install django-allauth==65.13.1 dj-rest-auth==7.0.1

# Install API and security dependencies
pip install django-cors-headers==4.9.0 django-filter==25.2 django-crispy-forms==2.5
pip install django-csp==4.0 django-haystack==3.3.0 django-meta==2.5.0

# Install permission and content dependencies
pip install django-guardian==3.2.0 django-ckeditor-5==0.2.18

# Install utility dependencies
pip install django-axes==8.0.0 django-ratelimit==4.1.0 django-activity-stream==2.0.0
pip install drf-yasg==1.21.11 django-social-share==1.3.0

# Install nested router dependency
pip install drf-nested-routers==0.95.0

# Install search backend
pip install Whoosh==2.7.4

# Install cryptography for OAuth
pip install cryptography==46.0.3

# Install JWT for authentication
pip install djangorestframework-simplejwt==5.5.1

echo "✅ All dependencies installed successfully!"

# Run database migrations
echo "🗃️ Running database migrations..."
python manage.py migrate

echo "🎉 Deployment setup completed successfully!"
echo "🚀 You can now run the application with: python manage.py runserver"

# Deactivate virtual environment
deactivate