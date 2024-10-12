from django.urls import path
from . views import *

urlpatterns=[
    path('register/',RegisterView.as_view(),name='register'),
    path('login/',LoginView.as_view(),name='login'),
    path('logout/',LogoutView.as_view(),name='logout'),
    path('task/',TaskView.as_view(),name='task'),
    path('task/<int:id>/', TaskView.as_view(), name='task-detail-update-delete'),
    
]