from django.urls import path

from . import views

urlpatterns = [
    # IMAGES
    path('images/', views.images, name='images'),
    path('images/random', views.images_random, name='images_random'),

    # PREDICT
    path('ia/predict', views.ia_predict, name='ia_predict')
]
