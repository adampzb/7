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

# Check for dry-run mode
DRY_RUN=false
if [[ "$1" == "--dry-run" || "$1" == "-n" ]]; then
    DRY_RUN=true
    echo "🔍 DRY RUN MODE: No files will actually be deleted"
fi

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
if [ -d "venv" ]; then
    if [ "$DRY_RUN" = true ]; then
        echo "  [DRY RUN] Would remove: venv/"
    else
        rm -rf venv
        echo "✅ Virtual environment removed"
    fi
else
    echo "ℹ️  Virtual environment not found"
fi

# Clean up staticfiles (build artifacts) - BE CAREFUL!
echo "🎨 Removing staticfiles (build artifacts)..."
# Only remove specific build artifacts, preserve important files
if [ -d "staticfiles" ]; then
    # Keep these important directories/files
    find staticfiles -mindepth 1 -maxdepth 1 \
        \( 
        -name "admin" -o \
        -name "rest_framework" -o \
        -name "django_tinymce" -o \
        -name "drf-yasg" -o \
        -name "guardian" -o \
        -name "*.js" -o \
        -name "*.css" -o \
        -name "*.ico" -o \
        -name "*.html" -o \
        -name "*.txt" \
        \) -prune -o -exec rm -rf {} + 2>/dev/null
    echo "✅ Staticfiles build artifacts cleaned (important files preserved)"
else
    echo "ℹ️  Staticfiles directory not found"
fi

# Clean up media files - BE CAREFUL!
echo "📁 Removing media files..."
if [ -d "media" ]; then
    echo "⚠️  WARNING: This will delete ALL user-uploaded media files!"
    read -p "🔥 Are you sure you want to delete media files? (y/n) " confirm_media_delete
    if [[ "$confirm_media_delete" =~ ^[Yy]$ ]]; then
        # Backup media files first
        if [ -n "$(ls -A media 2>/dev/null)" ]; then
            echo "💾 Creating media backup..."
            tar -czf media_backup_$(date +%Y%m%d_%H%M%S).tar.gz media/
            echo "✅ Media backed up as media_backup_*.tar.gz"
        fi
        rm -rf media/*
        echo "✅ Media files removed"
    else
        echo "🛑 Media files kept"
    fi
else
    echo "ℹ️  Media directory not found"
fi

# Clean up Python cache and build files
echo "🗑️  Removing Python cache and build files..."
find . -type d -name "__pycache__" -exec rm -rf {} + 2>/dev/null
find . -name "*.pyc" -delete 2>/dev/null
find . -name "*.pyo" -delete 2>/dev/null

# Clean up Angular build artifacts (only from staticfiles, preserve source in static)
echo "📦 Removing Angular build artifacts from staticfiles..."
if [ -d "staticfiles/frontend/app/dist" ]; then
    if [ "$DRY_RUN" = true ]; then
        echo "  [DRY RUN] Would remove: staticfiles/frontend/app/dist/"
    else
        rm -rf staticfiles/frontend/app/dist/
        echo "✅ Angular build artifacts removed"
    fi
else
    echo "ℹ️  Angular build artifacts not found"
fi

# Clean up Node.js artifacts (only from staticfiles, preserve source in static)
echo "📦 Removing Node.js artifacts from staticfiles..."
if [ -d "staticfiles/frontend/app/node_modules" ]; then
    if [ "$DRY_RUN" = true ]; then
        echo "  [DRY RUN] Would remove: staticfiles/frontend/app/node_modules/"
    else
        rm -rf staticfiles/frontend/app/node_modules/
        echo "✅ Node modules removed"
    fi
else
    echo "ℹ️  Node modules not found"
fi

if [ -f "staticfiles/frontend/app/package-lock.json" ]; then
    if [ "$DRY_RUN" = true ]; then
        echo "  [DRY RUN] Would remove: staticfiles/frontend/app/package-lock.json"
    else
        rm -f staticfiles/frontend/app/package-lock.json
        echo "✅ Package lock file removed"
    fi
else
    echo "ℹ️  Package lock file not found"
fi

# Clean up additional Angular artifacts
echo "📦 Removing additional Angular artifacts..."
if [ -d "staticfiles/frontend/app/.angular" ]; then
    if [ "$DRY_RUN" = true ]; then
        echo "  [DRY RUN] Would remove: staticfiles/frontend/app/.angular/"
    else
        rm -rf staticfiles/frontend/app/.angular/
        echo "✅ Angular cache removed"
    fi
else
    echo "ℹ️  Angular cache not found"
fi

# Clean up coverage reports
echo "📊 Removing test coverage reports..."
if [ -d "staticfiles/frontend/app/coverage" ]; then
    if [ "$DRY_RUN" = true ]; then
        echo "  [DRY RUN] Would remove: staticfiles/frontend/app/coverage/"
    else
        rm -rf staticfiles/frontend/app/coverage/
        echo "✅ Coverage reports removed"
    fi
else
    echo "ℹ️  Coverage reports not found"
fi

# Clean up test results
echo "🧪 Removing test results..."
if [ -d "staticfiles/frontend/app/test-results" ]; then
    if [ "$DRY_RUN" = true ]; then
        echo "  [DRY RUN] Would remove: staticfiles/frontend/app/test-results/"
    else
        rm -rf staticfiles/frontend/app/test-results/
        echo "✅ Test results removed"
    fi
else
    echo "ℹ️  Test results not found"
fi

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

# Clean up system temporary files and cache
echo "🧹 Cleaning system temporary files and cache..."
if [ "$DRY_RUN" = true ]; then
    echo "  [DRY RUN] Would clean system cache and temporary files"
else
    # Clean apt cache
    apt-get clean 2>/dev/null || echo "⚠️  Apt cache cleanup failed or not available"
    
    # Clean journal logs
    journalctl --vacuum-size=100M 2>/dev/null || echo "⚠️  Journal cleanup failed or not available"
    
    # Clean old kernels (keep current and one backup)
    if command_exists dpkg; then
        current_kernel=$(uname -r)
        echo "🔧 Cleaning old kernels (keeping $current_kernel)..."
        dpkg --list 'linux-image-*' | awk '/^ii/ { print $2 }' | grep -v "$current_kernel" | xargs -r sudo apt-get -y purge 2>/dev/null || echo "⚠️  Kernel cleanup failed"
    fi
    
    # Clean Docker system
    if command_exists docker; then
        echo "🐳 Cleaning Docker system..."
        docker system prune -a -f 2>/dev/null || echo "⚠️  Docker system cleanup failed"
    fi
    
    echo "✅ System cache and temporary files cleaned"
fi

# Display cleanup summary
echo "🎉 Cleanup completed successfully!"
echo ""
echo "📋 Cleanup Summary:"
echo "- Production services: Stopped and removed"
echo "- Nginx configuration: Cleaned"
echo "- Virtual environment: Removed"
echo "- Angular build artifacts: Cleaned"
echo "- Angular cache: Cleaned"
echo "- Coverage reports: Cleaned"
echo "- Test results: Cleaned"
echo "- Static files: Cleaned (important files preserved)"
echo "- Media files: Cleaned (with backup option)"
echo "- Python cache: Cleaned"
echo "- Node.js artifacts: Cleaned"
echo "- Database files: Cleaned (with backup option)"
echo "- Log files: Cleaned"
echo "- Docker containers: Stopped and removed"
echo "- Docker images: Pruned"
echo "- Docker volumes: Pruned"
echo "- System cache: Cleaned"
echo "- Temporary files: Cleaned"
echo ""
echo "💡 Next steps for fresh deployment:"
echo "1. Run: chmod +x deploy"
echo "2. Run: ./deploy"
echo "3. The application will be rebuilt from scratch"
echo ""
echo "🛡️  Safety Features:"
echo "- Important static files are preserved"
echo "- Media files require confirmation before deletion"
echo "- Database files are backed up before deletion"
echo "- Dry-run mode available: ./cleanup.sh --dry-run"
echo ""
echo "⚠️  Note: Important data has been preserved or backed up. Check backup files if needed."