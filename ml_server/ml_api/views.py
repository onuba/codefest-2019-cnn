import glob
import os
import random

from django.core.cache import cache
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render

from ml_ia.ia import predict

TEST_IMAGE_FOLDER = os.getcwd() + '/static/test/'


# Get images
def images(request):
    return JsonResponse({'files': get_images()})


# Get random image
def images_random(request):
    files = get_images()
    if files != None and len(files) > 0:
        return JsonResponse({'name': files[random.randint(0, len(files) - 1)]})
    return JsonResponse({'test': None})


# Get random image
def ia_predict(request):
    prediction = predict(request.GET['imageUrl'])
    print(request.GET['imageUrl'])
    return JsonResponse({'predict': prediction })


def get_images():
    if cache.get('images') == None:
        file_list = []
        for filename in glob.iglob(TEST_IMAGE_FOLDER + '**/*.png', recursive=True):
            file_list.append(filename.replace(TEST_IMAGE_FOLDER, ''))
        cache.set('images', file_list, 1800)

    return cache.get('images')
