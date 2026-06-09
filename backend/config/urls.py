from django.contrib import admin
from django.http import JsonResponse
from django.urls import path, include

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


def home(request):
    return JsonResponse({
        "message": "FinPilot API Running 🚀"
    })


urlpatterns = [
    path('', home),

    path('admin/', admin.site.urls),

    # JWT Authentication
    path(
        'api/token/',
        TokenObtainPairView.as_view(),
        name='token_obtain_pair'
    ),

    path(
        'api/token/refresh/',
        TokenRefreshView.as_view(),
        name='token_refresh'
    ),

    # User APIs
    path(
        'api/',
        include('apps.users.urls')
    ),

    # Expense APIs
    path(
        'api/',
        include('apps.expenses.urls')
    ),

    # Category APIs
    path(
        'api/',
        include('apps.categories.urls')
    ),
]