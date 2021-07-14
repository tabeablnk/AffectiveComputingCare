 # Imports
import os
import cv2
from PIL import Image
import numpy as np
import json
from models.EmotionClassification import EmotionClassification
from models.PainClassification import PainClassification
import subprocess

# adjust video path here
video_path_global = "../front-end/src/assets/patientVideos/0_video.mp4"
# Kalibrierungsvideo

video_kal_path_global = "../front-end/src/assets/exampleVideo.mp4"
# Patient ID
patientID_global = 0

#drowsiness_results = [6.3889008, 9.879681, 9.014296, 6.5834045, 6.9760838]

path_to_json = "patientData/"


def getPatientData(video_path, video_kal_path, patientID, use_existing_files=True):
	print(video_path)
	images = preprocessVideo(patientID, video_path)

	emotion_results = EmotionClassification.getResults(images)
	pain_resutls = PainClassification.getResults(images)

	drowsiness_results = read_drowsiness(patientID)

	# generate and save JSON
	result_json = generateJSON(images, emotion_results, pain_resutls, drowsiness_results[int(patientID)])
	file_name = "patientData_" + str(patientID) + ".json"
	with open(path_to_json + file_name, "w") as file:
		json.dump(result_json, file)

# get images out of the video every 30 seconds
def preprocessVideo(patientID, video_path):
	print("Preprocess Video...")
	cap = cv2.VideoCapture(video_path)
	i = 0
	images = []
	while (cap.isOpened()):
		ret, frame = cap.read()
		if ret == False:
			break;
		if i % 30 == 0:
			cv2.imwrite('images/kang' + str(i) + str(patientID) + '.jpg', frame)
			image = Image.open('images/kang' + str(i) + str(patientID) + '.jpg')
			#Crop image to square
			width, height = image.size   # Get dimensions
			left = (width - height)/2
			top = (height - height)/2
			right = (width + height)/2
			bottom = (height + height)/2
			image = image.crop((left, top, right, bottom))
			images.append(image)
		i += 1
	cap.release()
	cv2.destroyAllWindows()
	return images

def read_drowsiness(patientID):
	drowsiness_result = subprocess.run(['main_exe_wind.exe',  '--patientid=' + str(patientID)])
	print(drowsiness_result)

# JSON Generation using the values predicted by the models
def generateJSON(images, emotion_results, pain_resutls, drowsiness_result):
	print("Generating JSON...")
	json_file = {'data': []}
	index = 0;
	while index < len(images):
		json_file["data"].append({
			"index": index,
			"emotions": {
				"sad": float(emotion_results[index][0][2]),
				"happy": float(emotion_results[index][0][1]),
				"neutral": float(emotion_results[index][0][0])
			},
			# TODO add pain data here
			"pain": float(pain_resutls[index][0][0]),
			"drowsiness": drowsiness_result
		})
		index += 1;
	print(json_file)
	return json_file


def main():
	print("Starting...")
	getPatientData(video_path_global, video_kal_path_global, patientID_global)


if __name__ == "__main__":
	main()
