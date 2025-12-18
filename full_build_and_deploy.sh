#!/bin/bash

# DiscussIt Full Build and Deploy Script
# This script ensures proper deployment without common issues

echo "🚀 Starting DiscussIt Full Build and Deployment"
echo "=============================================="

# 1. Clean up old builds
echo "🧹 Step 1/6: Cleaning up old builds..."
cd /root/7
rm -rf staticfiles/
rm -f index.html main.js polyfills.js runtime.js styles.css
rm -rf whoosh_index/
find . -name "*.pyc" -delete
find . -name "__pycache__" -type d -exec rm -rf {} +
sudo docker-compose down -v
sudo docker system prune -f
echo "✅ Cleanup completed"

# 2. Build Angular frontend
echo "📦 Step 2/6: Building Angular frontend..."
cd static/frontend/app

# Install dependencies
npm install

# Build for production with proper settings
ng build --configuration=production --base-href=/ --deploy-url=/ --aot=true --optimization=true --build-optimizer=true

# Copy to static directory
cp -r dist/* ../../../static/

# Create symlinks
cd ../../..
ln -sf static/runtime.js runtime.js
ln -sf static/polyfills.js polyfills.js
ln -sf static/main.js main.js
ln -sf static/styles.css styles.css
ln -sf static/index.html index.html

echo "✅ Angular build completed"

# 3. Set up Django backend
echo "🐍 Step 3/6: Setting up Django backend..."
pip install -r requirements.txt
pip install whitenoise --break-system-packages
python manage.py migrate
python manage.py collectstatic --noinput
echo "✅ Django setup completed"

# 4. Copy files to Nginx directories
echo "📁 Step 4/6: Setting up Nginx directories..."
sudo mkdir -p /var/www/html
sudo mkdir -p /var/www/static

# Copy Angular build files to Nginx root
sudo cp -r static/* /var/www/static/
sudo cp -r static/* /var/www/html/

# Ensure proper permissions
sudo chown -R www-data:www-data /var/www/html/
sudo chown -R www-data:www-data /var/www/static/

echo "✅ Nginx setup completed"

# 5. Restart Nginx
echo "🔄 Step 5/6: Restarting Nginx..."
sudo systemctl restart nginx
echo "✅ Nginx restarted"

# 6. Start Docker services
echo "🐳 Step 6/6: Starting Docker services..."
sudo docker-compose up -d --build
echo "✅ Docker services started"

echo ""
echo "🎉 DiscussIt Full Build and Deployment Completed!"
echo ""
echo "📋 Summary:"
echo "- Angular frontend built and deployed"
echo "- Django backend configured and running"
echo "- Nginx serving static files correctly"
echo "- Docker containers running"
echo ""
echo "🌐 Access the application at:"
echo "- Local: http://localhost:8000/"
echo "- Production: http://51.15.115.36/"
echo ""
