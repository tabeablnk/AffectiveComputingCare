import tensorflow as tf
import tensorflow as tf
import tensorflow as tf
import numpy as np
import os

class EmotionClassification:


	@staticmethod
	def getResults(images):
		print("Getting Emotion Values...")
		emotion_model = tf.keras.models.load_model("models/emotion_model.h5");
		preprocessedImages = []
		emotion_results = [];

		img_width,img_height = 48,48

		# Preprocess Images
		for image in images:
			image = image.resize((img_width,img_height))
			a = np.asarray(image)
			a = np.expand_dims(a, axis=0)
			a.shape
			preprocessedImages.append(a)

		# Prediction
		for image in preprocessedImages:
			val = emotion_model.predict(image)
			emotion_results.append(val)
		
		return emotion_results;
