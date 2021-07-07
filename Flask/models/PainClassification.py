import tensorflow as tf
import tensorflow as tf
import tensorflow as tf
import numpy as np
import os

class PainClassification:


	@staticmethod
	def getResults(images):
		print("Getting Pain Values...")
		pain_model = tf.keras.models.load_model("models/pain_model");
		preprocessedImages = []
		pain_results = [];

		img_width,img_height = 60,88

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
			pain_results.append(val)
		
		return pain_results;
