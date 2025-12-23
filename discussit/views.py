from django.shortcuts import render
from django.middleware.csrf import get_token
from django.views.decorators.csrf import ensure_csrf_cookie
from django.utils.decorators import method_decorator
from django.views.generic import TemplateView
from django.views.static import serve
from django.conf import settings
import os


@method_decorator(ensure_csrf_cookie, name='dispatch')
class AngularAppView(TemplateView):
    """
    Custom view to serve the Angular app with CSRF token cookie set.
    """
    template_name = 'index.html'
    
    def get(self, request, *args, **kwargs):
        # Ensure CSRF token is set in cookies
        get_token(request)
        
        # Check if index.html exists in staticfiles
        index_path = os.path.join(settings.STATIC_ROOT, 'index.html')
        if os.path.exists(index_path):
            return serve(request, 'index.html', document_root=settings.STATIC_ROOT)
        
        return super().get(request, *args, **kwargs)