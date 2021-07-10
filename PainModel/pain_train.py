import tensorflow as tf
import keras
from keras.preprocessing.image import ImageDataGenerator
from keras.models import Sequential
from keras.layers import *
import numpy as np
import pickle

def load_data(path, threshold):
    X = []
    Y = []
    with open(path, 'rb') as f:
        all_data = pickle.load(f)

    selector = 0
    for image_data in all_data:
        x = image_data[0]
        y = image_data[1]
        if y > threshold:
            Y.append([0,1])
            X.append(x)
        elif y == 0:
            if selector % 7 == 0:
                Y.append([1,0])
                X.append(x)
            selector += 1
    X = np.asarray(X)
    Y = np.asarray(Y)

    return X, Y

threshold = 1
path_to_file = './dataset_train_pain48.csv'
X_train, Y_train = load_data(path_to_file, threshold)

path_to_file = './dataset_test_pain48.csv'
X_test, Y_test = load_data(path_to_file,threshold)

img_height = 48
img_width = 48
num_classes = 2
batch_size = 16

gen = ImageDataGenerator(
    rotation_range=40,
    width_shift_range=0.2,
    height_shift_range=0.2,
    shear_range=0.2,
    zoom_range=0.2,
    horizontal_flip=True,
    fill_mode='nearest')

train_generator = gen.flow(X_train, Y_train, batch_size=batch_size, shuffle=True)
predict_size_train = int(np.math.ceil(len(X_train) / batch_size))

gen = ImageDataGenerator()
valid_generator = gen.flow(X_test, Y_test, batch_size=batch_size)
predict_size_valid = int(np.math.ceil(len(X_test) / batch_size))

emotion_model = keras.models.load_model('emotionmodel.h5')

#cut off last layers of emotionmodel
emotion_model.pop()
emotion_model.pop()
emotion_model.pop()
emotion_model.pop()
emotion_model.pop()

#freeze layers of emotionmodel
for layer in emotion_model.layers[:]:
    layer.trainable = False

model = Sequential()
model.add(emotion_model)

model.add(Conv2D(32,(3, 3), padding='same'))
model.add(Activation('relu'))
model.add(MaxPooling2D(pool_size=(2, 2)))
model.add(Dropout(0.3))

model.add(Flatten())
model.add(Dense(32))
model.add(Dropout(0.5))
model.add(Dense(num_classes))
model.add(Activation('softmax'))
model.compile(loss='categorical_crossentropy', optimizer=tf.keras.optimizers.Adam(lr=0.001), metrics=['accuracy'])
model.summary()

history = model.fit(train_generator,
                    steps_per_epoch=predict_size_train * 1,
                    epochs=150,
                    validation_data=valid_generator,
                    validation_steps=predict_size_valid,
                    shuffle=True)

model_path = 'model_pain_with_emotion_150epochs.h5'

model.save(model_path)
