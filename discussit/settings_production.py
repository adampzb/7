"""
Production settings for DiscussIt project.

This file contains all the settings that should be different in production
compared to development. It imports from the base settings and overrides
only what's necessary for production.
"""

from .settings import *
import os

# ============================================================================
# PRODUCTION-SPECIFIC SETTINGS
# ============================================================================

# Security settings
DEBUG = False

# Allowed hosts - should be set via environment variable
ALLOWED_HOSTS = os.environ.get('ALLOWED_HOSTS', '').split(',')
if not ALLOWED_HOSTS or ALLOWED_HOSTS == ['']:
    ALLOWED_HOSTS = ['localhost', '127.0.0.1']

# Database configuration
import dj_database_url

DATABASE_URL = os.environ.get('DATABASE_URL', 'postgres://postgres:postgres@db:5432/discussit')

if DATABASE_URL.startswith('postgres://') or DATABASE_URL.startswith('postgresql://'):
    # Use PostgreSQL configuration
    DATABASES = {
        'default': dj_database_url.parse(DATABASE_URL)
    }
else:
    # Fallback to SQLite for development/testing
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
        }
    }

# Cache - use Redis in production
CACHES = {
    'default': {
        'BACKEND': 'django.core.cache.backends.redis.RedisCache',
        'LOCATION': os.environ.get('REDIS_URL', 'redis://127.0.0.1:6379'),
    }
}

# Static files - use Whitenoise for production
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

# Security headers
SECURE_BROWSER_XSS_FILTER = True
SECURE_CONTENT_TYPE_NOSNIFF = True
SECURE_HSTS_SECONDS = 31536000  # 1 year
SECURE_HSTS_INCLUDE_SUBDOMAINS = True
SECURE_HSTS_PRELOAD = True
SECURE_SSL_REDIRECT = True
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True
SESSION_COOKIE_HTTPONLY = True
CSRF_COOKIE_HTTPONLY = True
X_FRAME_OPTIONS = 'DENY'

# Email settings for production
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = os.environ.get('EMAIL_HOST', 'smtp.gmail.com')
EMAIL_HOST_USER = os.environ.get('EMAIL_HOST_USER', '')
EMAIL_HOST_PASSWORD = os.environ.get('EMAIL_HOST_PASSWORD', '')
EMAIL_PORT = int(os.environ.get('EMAIL_PORT', '587'))
EMAIL_USE_TLS = True

# Logging - more comprehensive in production
LOGGING['handlers']['file']['level'] = 'INFO'
LOGGING['handlers']['error_file']['level'] = 'ERROR'
LOGGING['loggers']['django']['level'] = 'INFO'
LOGGING['loggers']['apps']['level'] = 'INFO'

# Enable performance monitoring in production
PERFORMANCE_MONITORING['ENABLED'] = True
PERFORMANCE_MONITORING['LOG_QUERIES'] = True
PERFORMANCE_MONITORING['LOG_REQUESTS'] = True

# CORS settings for production
CORS_ORIGIN_ALLOW_ALL = False
CORS_ALLOWED_ORIGINS = os.environ.get('CORS_ALLOWED_ORIGINS', '').split(',')

# CSRF settings for production
CSRF_TRUSTED_ORIGINS = os.environ.get('CSRF_TRUSTED_ORIGINS', '').split(',')

# Content Security Policy for production
CSP_DEFAULT_SRC = ("'self'",)
CSP_SCRIPT_SRC = ("'self'", "https://fonts.googleapis.com", "https://fonts.gstatic.com")
CSP_STYLE_SRC = ("'self'", "'unsafe-inline'", "https://fonts.googleapis.com", "https://fonts.gstatic.com")
CSP_IMG_SRC = ("'self'", "data:", "https://fonts.gstatic.com")
CSP_FONT_SRC = ("'self'", "https://fonts.gstatic.com")

# Django Axes configuration for production
AXES_FAILURE_LIMIT = 5
AXES_COOLOFF_TIME = 1  # 1 hour
AXES_LOCKOUT_TEMPLATE = 'account/lockout.html'
AXES_LOCKOUT_URL = '/account/lockout/'

# Session settings for production
SESSION_COOKIE_AGE = 1209600  # 2 weeks in seconds
SESSION_SAVE_EVERY_REQUEST = True

# Media files configuration
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
MEDIA_URL = '/media/'

# Static files configuration
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
STATIC_URL = '/static/'

# Add production-specific middleware
MIDDLEWARE.insert(0, 'django.middleware.security.SecurityMiddleware')

# Disable debug toolbar in production
if 'debug_toolbar' in INSTALLED_APPS:
    INSTALLED_APPS.remove('debug_toolbar')

print(f"🚀 DiscussIt running in PRODUCTION mode")
print(f"📊 Database: PostgreSQL at {DATABASES['default']['HOST']}")
print(f"🔒 Allowed Hosts: {ALLOWED_HOSTS}")
print(f"📦 Static Root: {STATIC_ROOT}")
print(f"📁 Media Root: {MEDIA_ROOT}")