import numpy as np
import os
import re
import matplotlib.pyplot as plt

import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import datasets, layers, models

os.environ['KMP_DUPLICATE_LIB_OK']='True'

animal_model = tf.keras.models.load_model("animals_mnist.h5")

dirname = os.path.join(os.getcwd(), 'real')
imgpath = dirname + os.sep 

class_names = ['airplane', 'automobile', 'bird', 'cat', 'deer',
               'dog', 'frog', 'horse', 'ship', 'truck']

images=[]
print("leyendo imagenes de ",imgpath)

for root, dirnames, filenames in os.walk(imgpath):
    for filename in filenames:
        if re.search("\.(jpg|jpeg|png|bmp|tiff)$", filename):
            filepath = os.path.join(root, filename)
            image = plt.imread(filepath)
            images.append(image)
            X = np.array(images, dtype=np.uint8) #convierto de lista a numpy
            real_X = X.astype('float32')
            real_X = real_X / 255.0
            predictions = animal_model.predict(real_X)
            print(f"\n\n{filename} is {predictions}, es decir, {class_names[np.argmax(predictions[0])]} al {predictions[0][np.argmax(predictions[0])]*100}%")
            #print(f"\n\n{filename} is {np.argmax(predictions[0])} al {predictions[0][np.argmax(predictions[0])]*100}%")
            images = []
