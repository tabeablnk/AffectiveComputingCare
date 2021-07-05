#Imports
import cv2
from PIL import Image
import numpy as np
import json
from models.EmotionClassification import EmotionClassification

#adjust video path here
video_path = "../front-end/src/assets/exampleVideo.mp4"
patientID = 1

#TODO
video_path_kal = ""
path_to_json = "patientData/"


def getPatientData(video_path, video_kal_path, patientID):

	images = preprocessVideo()

	#TODO also get the drowsiness and pain results here and add to JSON
	emotion_results = EmotionClassification.getResults(images)

	#generate and save JSON
	result_json = generateJSON(images, emotion_results)
	file_name = "patientData_" + str(patientID) + ".json"
	with open(path_to_json + file_name, "w") as file:
		json.dump(result_json, file)

#get images out of the video every 30 seconds
def preprocessVideo():
	print("Preprocess Video...")
	cap= cv2.VideoCapture(video_path);
	i=0;
	images = [];
	while (cap.isOpened()):
	    ret, frame = cap.read()
	    if ret == False:
	        break;
	    if i%30 == 0 :
	      cv2.imwrite('images/kang'+str(i)+'.jpg',frame)
	      image = Image.open('images/kang'+str(i)+'.jpg')
	      images.append(image);
	    i+=1
	cap.release()
	cv2.destroyAllWindows()
	return images


#JSON Generation using the values predicted by the models
def generateJSON(images, emotion_results):
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
	       "drowsiness": float(0.5)
	  })
	  index += 1;
	print(json_file)
	return json_file

def main():
    print("Starting...")
    getPatientData(video_path, patientID);


if __name__ == "__main__":
    main()