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

# Stop Docker services
echo "🐳 Stopping Docker services..."
docker compose down || echo "⚠️  Docker services may not have been running"

# Remove Docker containers
echo "🗑️  Removing Docker containers..."
docker rm -f 7-web-1 7-db-1 7-redis-1 2>/dev/null || echo "⚠️  Containers may not exist"

# Remove Docker networks
echo "🌐 Removing Docker networks..."
docker network rm 7_default 2>/dev/null || echo "⚠️  Network may not exist"

# Remove Docker images
echo "🖼️  Removing Docker images..."
docker rmi -f 7-web 7-db 2>/dev/null || echo "⚠️  Images may not exist"

# Clean up Docker system
echo "🧼 Cleaning Docker system..."
docker system prune -f || echo "⚠️  Docker system prune failed"

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

# Clean up Node.js artifacts
echo "📦 Removing Node.js artifacts..."
rm -rf node_modules/ 2>/dev/null || echo "⚠️  Node modules may not exist"
rm -f package-lock.json 2>/dev/null || echo "⚠️  Package lock file may not exist"

# Clean up database files (if using SQLite)
echo "🗃️  Removing database files..."
rm -f db.sqlite3 2>/dev/null || echo "⚠️  SQLite database may not exist"

# Clean up logs
echo "📜 Removing log files..."
rm -rf logs/* 2>/dev/null || echo "⚠️  Log directory may not exist"

# Clean up any temporary files
echo "🧹 Removing temporary files..."
rm -f *.tmp *.log *.bak 2>/dev/null

# Display cleanup summary
echo "🎉 Cleanup completed successfully!"
echo ""
echo "📋 Cleanup Summary:"
echo "- Docker services: Stopped and removed"
echo "- Docker containers: Removed"
echo "- Docker networks: Removed"
echo "- Docker images: Removed"
echo "- Virtual environment: Removed"
echo "- Static files: Cleaned"
echo "- Media files: Cleaned"
echo "- Python cache: Cleaned"
echo "- Node.js artifacts: Cleaned"
echo "- Database files: Cleaned"
echo "- Log files: Cleaned"
echo ""
echo "💡 Next steps for fresh deployment:"
echo "1. Run: chmod +x deploy"
echo "2. Run: ./deploy"
echo "3. The application will be rebuilt from scratch"
echo ""
echo "⚠️  Note: Database data has been cleaned. You may want to backup important data before cleanup."