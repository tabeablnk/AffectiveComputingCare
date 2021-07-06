#Imports
import cv2
from PIL import Image
import numpy as np
import json
from models.EmotionClassification import EmotionClassification

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
	# run blink_video.py with calibration video
	# run blink_video.py with data video
	# run PreprocessingOneVideo.py
	# run Prediction.py
	return 10


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

	      #TODO add drowsiness data here
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