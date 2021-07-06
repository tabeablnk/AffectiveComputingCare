#Imports
import cv2
from PIL import Image
import numpy as np
import json
from models.EmotionClassification import EmotionClassification
from DrowsinessModel.PreprocessOneVideo import Preprocessing
from DrowsinessModel.blink_video import blink_detector
from DrowsinessModel.Prediction import Predict

#adjust video path here
video_path_global = "../front-end/src/assets/exampleVideo.mp4"
#Kalibrierungsvideo

video_kal_path_global = "../front-end/src/assets/exampleVideo.mp4"
#Patient ID
patientID_global = 1

path_to_json = "patientData/"


def getPatientData(video_path, video_kal_path, patientID):
	print(video_path)
	images = preprocessVideo(patientID, video_path)

	#TODO also get the drowsiness and pain results here and add to JSON
	emotion_results = EmotionClassification.getResults(images)
	drowsiness_results = read_drowsiness()

	#generate and save JSON
	result_json = generateJSON(images, emotion_results, drowsiness_results)
	file_name = "patientData_" + str(patientID) + ".json"
	with open(path_to_json + file_name, "w") as file:
		json.dump(result_json, file)


def read_drowsiness():
	# TODO: Verify paths and naming of files
	# run blink_video.py with calibration video
	output_path_txt = './DrowsinessModel/txt_files'
	output_path_txt_calib = output_path_txt + 'calibration.txt'
	output_path_txt_data = output_path_txt + 'data.txt'
	blink_detector(output_path_txt_calib, video_kal_path_global)
	# run blink_video.py with data video
	blink_detector(output_path_txt_data, video_path_global)
	# run PreprocessingOneVideo.py
	output_path_preprocessed = './DrowsinessModel/preprocessed_files'
	Preprocessing(output_path_txt_calib, output_path_txt_data, output_path_preprocessed)
	# run Prediction.py
	label = Predict().main(output_path_preprocessed)
	return label


#get images out of the video every 30 seconds
def preprocessVideo(patientID, video_path):
	print("Preprocess Video...")
	cap= cv2.VideoCapture(video_path);
	i=0;
	images = [];
	while (cap.isOpened()):
	    ret, frame = cap.read()
	    if ret == False:
	        break;
	    if i%30 == 0 :
	      cv2.imwrite('images/kang'+str(i)+str(patientID)+'.jpg',frame)
	      image = Image.open('images/kang'+str(i)+str(patientID)+'.jpg')
	      images.append(image);
	    i+=1
	cap.release()
	cv2.destroyAllWindows()
	return images


#JSON Generation using the values predicted by the models
def generateJSON(images, emotion_results, drowsiness_result):
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
	      #TODO add pain data here
	       "pain": float(1),
	       "drowsiness": drowsiness_result
	  })
	  index += 1;
	print(json_file)
	return json_file

def main():
    print("Starting...")
    getPatientData(video_path_global, video_kal_path_global, patientID_global);


if __name__ == "__main__":
    main()