from django.urls import path

from .views import RegisterUserView
from .profile_views import ProfileView


urlpatterns = [
    path(
        "register/",
        RegisterUserView.as_view(),
        name="register"
    ),

    path(
        "profile/",
        ProfileView.as_view(),
        name="profile"
    ),
]