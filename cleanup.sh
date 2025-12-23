#!/bin/bash

# DiscussIt Cleanup Script
# This script stops the application and cleans up all build artifacts for a fresh deployment

echo "🧹 Starting DiscussIt Cleanup Process..."

# Function to display error messages
error_exit() {
    echo "❌ ERROR: $1" >&2
    exit 1
}

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check if running as root
if [ "$EUID" -eq 0 ]; then
    echo "⚠️  This script is running as root."
    read -p "🔒 Are you sure you want to continue as root? (y/n) " continue_as_root
    if [[ ! "$continue_as_root" =~ ^[Yy]$ ]]; then
        echo "🛑 Cleanup aborted."
        exit 1
    fi
fi

# Set project directory
PROJECT_DIR="/root/7"
cd "$PROJECT_DIR" || error_exit "Failed to change to project directory: $PROJECT_DIR"

echo "📍 Working in: $PROJECT_DIR"

# Stop production services
echo "🔧 Stopping production services..."
if systemctl is-active --quiet discussit 2>/dev/null; then
    sudo systemctl stop discussit
    sudo systemctl disable discussit
    sudo rm -f /etc/systemd/system/discussit.service
    sudo systemctl daemon-reload
    echo "✅ Production services stopped and removed"
else
    echo "ℹ️  No production services found"
fi

# Clean up Nginx configuration
echo "🌐 Cleaning Nginx configuration..."
sudo rm -f /etc/nginx/sites-available/discussit
sudo rm -f /etc/nginx/sites-enabled/discussit
sudo systemctl reload nginx 2>/dev/null || echo "⚠️  Nginx may not be installed"



# Remove Python virtual environment
echo "🐍 Removing Python virtual environment..."
rm -rf venv || echo "⚠️  Virtual environment may not exist"

# Clean up static files
echo "🎨 Removing static files..."
rm -rf static/* || echo "⚠️  Static files may not exist"

# Clean up media files
echo "📁 Removing media files..."
rm -rf media/* 2>/dev/null || echo "⚠️  Media directory may not exist"

# Clean up Python cache and build files
echo "🗑️  Removing Python cache and build files..."
find . -type d -name "__pycache__" -exec rm -rf {} + 2>/dev/null
find . -name "*.pyc" -delete 2>/dev/null
find . -name "*.pyo" -delete 2>/dev/null

# Clean up Angular build artifacts
echo "📦 Removing Angular build artifacts..."
rm -rf static/frontend/app/dist/ 2>/dev/null || echo "⚠️  Angular build artifacts may not exist"
rm -rf staticfiles/frontend/app/dist/ 2>/dev/null || echo "⚠️  Angular build artifacts may not exist"

# Clean up Node.js artifacts
echo "📦 Removing Node.js artifacts..."
rm -rf node_modules/ 2>/dev/null || echo "⚠️  Node modules may not exist"
rm -f package-lock.json 2>/dev/null || echo "⚠️  Package lock file may not exist"

# Clean up database files (SQLite and PostgreSQL)
echo "🗃️  Removing database files..."

# SQLite cleanup
if [ -f "db.sqlite3" ]; then
    echo "⚠️  WARNING: About to delete SQLite database file!"
    read -p "💾 Do you want to backup the database first? (y/n) " backup_db
    if [[ "$backup_db" =~ ^[Yy]$ ]]; then
        echo "💾 Creating database backup..."
        cp db.sqlite3 db.sqlite3.backup.$(date +%Y%m%d_%H%M%S)
        echo "✅ Database backed up as db.sqlite3.backup.*"
    fi
    rm -f db.sqlite3
    echo "✅ SQLite database removed"
else
    echo "ℹ️  SQLite database may not exist"
fi

# PostgreSQL cleanup (Docker volumes)
if command_exists docker; then
    echo "🐳 Checking for Docker PostgreSQL volumes..."
    if docker volume ls | grep -q "7_postgres_data"; then
        read -p "💾 Do you want to remove PostgreSQL Docker volume? (y/n) " remove_pg_volume
        if [[ "$remove_pg_volume" =~ ^[Yy]$ ]]; then
            echo "⚠️  WARNING: This will delete ALL PostgreSQL data!"
            read -p "🔥 Are you absolutely sure? (y/n) " confirm_pg_delete
            if [[ "$confirm_pg_delete" =~ ^[Yy]$ ]]; then
                docker volume rm 7_postgres_data
                echo "✅ PostgreSQL Docker volume removed"
            else
                echo "🛑 PostgreSQL volume deletion cancelled"
            fi
        else
            echo "🛑 PostgreSQL volume kept"
        fi
    else
        echo "ℹ️  PostgreSQL Docker volume not found"
    fi
fi

# Clean up logs
echo "📜 Removing log files..."
rm -rf logs/* 2>/dev/null || echo "⚠️  Log directory may not exist"

# Clean up Docker containers and images
echo "🐳 Cleaning Docker artifacts..."
if command_exists docker; then
    # Stop and remove containers
    echo "🔧 Stopping and removing Docker containers..."
    docker-compose down -v 2>/dev/null || echo "⚠️  Docker containers may not be running"
    
    # Remove dangling images
    echo "🗑️  Removing dangling Docker images..."
    docker image prune -f 2>/dev/null || echo "⚠️  No dangling images to remove"
    
    # Remove unused volumes
    echo "💾 Removing unused Docker volumes..."
    docker volume prune -f 2>/dev/null || echo "⚠️  No unused volumes to remove"
else
    echo "ℹ️  Docker not found, skipping Docker cleanup"
fi

# Clean up any temporary files
echo "🧹 Removing temporary files..."
rm -f *.tmp *.log *.bak 2>/dev/null

# Display cleanup summary
echo "🎉 Cleanup completed successfully!"
echo ""
echo "📋 Cleanup Summary:"
echo "- Production services: Stopped and removed"
echo "- Nginx configuration: Cleaned"
echo "- Virtual environment: Removed"
echo "- Angular build artifacts: Cleaned"
echo "- Static files: Cleaned"
echo "- Media files: Cleaned"
echo "- Python cache: Cleaned"
echo "- Node.js artifacts: Cleaned"
echo "- Database files: Cleaned (with backup option)"
echo "- Log files: Cleaned"
echo "- Docker containers: Stopped and removed"
echo "- Docker images: Pruned"
echo "- Docker volumes: Pruned"
echo ""
echo "💡 Next steps for fresh deployment:"
echo "1. Run: chmod +x deploy"
echo "2. Run: ./deploy"
echo "3. The application will be rebuilt from scratch"
echo ""
echo "⚠️  Note: Database data has been cleaned. You may want to backup important data before cleanup."