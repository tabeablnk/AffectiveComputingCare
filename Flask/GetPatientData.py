# Imports
import os
import cv2
from PIL import Image
import numpy as np
import json
from models.EmotionClassification import EmotionClassification
from models.PainClassification import PainClassification

# Import DrowsinessModel (set system variables)
#current_dir = os.getcwd()
#import sys
#sys.path.insert(0, os.path.join(current_dir, 'DrowsinessModel'))
#from PreprocessOneVideo import Preprocessing
#from blink_video import blink_detector
#from Prediction import Predict
#print("Import successfully")

# adjust video path here
video_path_global = "../front-end/src/assets/patientVideos/1_video.mp4"
# Kalibrierungsvideo

video_kal_path_global = "../front-end/src/assets/exampleVideo.mp4"
# Patient ID
patientID_global = 1

path_to_json = "patientData/"


def getPatientData(video_path, video_kal_path, patientID, use_existing_files=True):
	print(video_path)
	images = preprocessVideo(patientID, video_path)

	# TODO also get the drowsiness and pain results here and add to JSON
	emotion_results = EmotionClassification.getResults(images)
	pain_resutls = PainClassification.getResults(images)
	# emotion_results = None
	#drowsiness_results = read_drowsiness(patientID, use_existing_files)

	# generate and save JSON
	result_json = generateJSON(images, emotion_results, pain_resutls, 5)
	file_name = "patientData_" + str(patientID) + ".json"
	with open(path_to_json + file_name, "w") as file:
		json.dump(result_json, file)


def read_drowsiness(patient_id, use_existing_files):
	print("...Read drowsiness")
	os.chdir(os.path.join(current_dir, 'DrowsinessModel'))
	output_path_txt_calib = run_blink_video_calib(patient_id, use_existing_files)
	output_path_txt_data = run_blink_video_data(patient_id, use_existing_files)
	# Run Preprocessing
	file_name_prep = "Blinks_pred_video_" + str(patient_id) + ".npy"
	file_name_prep = "Blinks_pred_video.npy"
	output_path_preprocessed = os.path.join('preprocessed_files', file_name_prep)
	is_file = os.path.isfile(os.path.join(os.getcwd(), 'preprocessed_files', file_name_prep))
	if not(use_existing_files and is_file):
		print("Preprocessing")
		Preprocessing(output_path_txt_calib, output_path_txt_data, output_path_preprocessed).main()
	else:
		print("use existing files")
	# run Prediction.py
	label = Predict().main(output_path_preprocessed)
	return label


def run_blink_video_calib(patient_id, use_existing_files):
	output_path_txt = './txt_files'
	file_name_calib = "calibration_" + str(patient_id) + ".txt"
	file_name_calib = "calibration.txt"
	output_path_txt_calib = os.path.join(output_path_txt, file_name_calib)
	is_file = os.path.isfile(os.path.join(os.getcwd(), 'txt_files', file_name_calib))
	if not (use_existing_files and is_file):
		blink_detector(output_path_txt_calib, video_kal_path_global)
	else:
		print("use existing files")
	return output_path_txt_calib


def run_blink_video_data(patient_id, use_existing_files):
	output_path_txt = './txt_files'
	file_name_data = "data_" + str(patient_id) + ".txt"
	file_name_data = "data.txt"
	output_path_txt_data = os.path.join(output_path_txt, file_name_data)
	is_file = os.path.isfile(os.path.join(os.getcwd(), 'txt_files', file_name_data))
	if not (use_existing_files and is_file):
		blink_detector(output_path_txt_data, video_path_global)
	else:
		print("use existing files")
	return output_path_txt_data


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
