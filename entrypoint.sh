#!/bin/bash

# Exit immediately if any command fails
set -e

# Wait for database to be ready
if [[ "$DATABASE_URL" == postgres://* ]] || [[ "$DATABASE_URL" == postgresql://* ]]; then
    echo "Waiting for PostgreSQL database..."
    while ! nc -z db 5432; do
      sleep 1
    done
    echo "PostgreSQL database is up!"
    
    # Wait a bit more for PostgreSQL to be fully ready
    sleep 5
fi

# Apply database migrations
echo "Applying database migrations..."
python manage.py migrate --noinput

# Build Angular app if in development
echo "Building Angular frontend..."
if [ "$ENVIRONMENT" = "development" ]; then
    cd /usr/src/app/static/frontend/app
    npm install
    ng build --configuration=development --base-href=/ --deploy-url=/ || echo "Angular build failed, using existing files"
    cd /usr/src/app
    cp -r static/frontend/app/dist/discussit-app/* staticfiles/ || echo "Failed to copy Angular files"
fi

# Collect static files
echo "Collecting static files..."
python manage.py collectstatic --noinput

# Create superuser if needed (uncomment to use)
# echo "Creating superuser..."
# python manage.py createsuperuser --noinput --username admin --email admin@example.com || true

# Start the application
echo "Starting DiscussIt..."
exec "$@"