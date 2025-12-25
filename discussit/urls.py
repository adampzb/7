"""discussit URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from django.conf.urls.static import static
from django.conf import settings
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions
from .views import AngularAppView


schema_view = get_schema_view(
    openapi.Info(
        title="DiscussIt API",
        default_version="v1",
        description="API documentation for the reddit clone project",
    ),
    public=True,
    permission_classes=[permissions.AllowAny],
)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include('allauth.urls')),
    re_path(r'^rest-auth/', include('dj_rest_auth.urls')),
    re_path(r'^rest-auth/registration/', include('dj_rest_auth.registration.urls')),

    path('', include('posts.urls')),
    path('', include('tags.urls')),
    path('', include('groups.urls')),
    path('', include('profiles.urls')),
    path('', include('reports.urls')),
    path('', include('comments.urls')),
    path('', include('bookmarks.urls')),
    path('', include('followers.urls')),
    path('api/v1/search/', include('haystack.urls')),
    path(
        "api/swagger/",
        schema_view.with_ui("swagger", cache_timeout=0),
        name="swagger-docs",
    ),
    path(
        "api/redoc/",
        schema_view.with_ui("redoc", cache_timeout=0),
        name="redoc-docs",
    ),
]

# Add static and media file serving
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

# Serve Angular files from root URL
from django.views.static import serve
import os

# Create URL patterns for Angular files at root
angular_files = ['runtime.js', 'polyfills.js', 'main.js', 'styles.css', 'index.html']
for file_name in angular_files:
    # First check in STATIC_ROOT, then fall back to static/ directory
    file_path = os.path.join(settings.STATIC_ROOT, file_name)
    if not os.path.exists(file_path):
        # Fall back to static/ directory where Angular files are built
        file_path = os.path.join(settings.BASE_DIR, 'static', file_name)
    
    if os.path.exists(file_path):
        document_root = settings.STATIC_ROOT if os.path.exists(os.path.join(settings.STATIC_ROOT, file_name)) else os.path.join(settings.BASE_DIR, 'static')
        urlpatterns += [
            re_path(rf'^{file_name}$', serve, {'path': file_name, 'document_root': document_root}),
        ]

# Angular app routes - must come after static/media files
urlpatterns += [
    # Serve Angular app at root for any unmatched routes (SPA routing)
    re_path(r'^.*$', AngularAppView.as_view(), name='angular_app'),
]
