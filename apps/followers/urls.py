from django.urls import path, include
from apps.followers.router import router

urlpatterns = [
    path('api/v1/', include(router.urls)),
]
