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

# Collect static files
echo "Collecting static files..."
python manage.py collectstatic --noinput

# Create superuser if needed (uncomment to use)
# echo "Creating superuser..."
# python manage.py createsuperuser --noinput --username admin --email admin@example.com || true

# Start the application
echo "Starting DiscussIt..."
exec "$@"