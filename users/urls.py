from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('',views.home,name="Home"),
    path('register/',views.register,name="Register"),
    path('login/',views.users_login,name='Login'),
    path('logout/',views.users_logout,name='Logout'),
    path('dashboard/',views.dashboard,name='Dashboard'),
    path('check_aspmt/',views.check_aspmt,name='Check-ASPMT'),
    path('group_session/',views.group_session,name='Group-Session')
]
