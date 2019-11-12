from django.urls import path

from . import views

urlpatterns = [
    path('images/', views.images, name='images'),
    path('images/random', views.images_random, name='images_random')
]
