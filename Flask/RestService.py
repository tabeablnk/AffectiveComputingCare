from flask import Flask, jsonify, request;
from flask_cors import CORS, cross_origin
import json
import os
from GetPatientData import getPatientData

app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/")
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def index():
    return "Welcome to Affective Computing"

@app.route("/getPatientData/", methods = ['GET'])
#@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def GetPatientData():
     print(request.args.get("patientID"))
     dataURL = 'patientData/patientData_' + str(request.args.get("patientID")) + '.json'
     print(dataURL)
     patientData = json.load(open(dataURL))
     response = jsonify([patientData])
     response.headers.add('Access-Control-Allow-Origin', '*')
     return response

@app.route("/getPatientenListe/", methods = ['GET'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def GetPatientList():
     patientList = json.load(open('PatientenListe.json'))
     print(patientList)
     response = jsonify([patientList])
     return response

@app.route("/uploadVideo/", methods = ['POST'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def uploadVideo():
     patientID = request.form['patientID'];
     video_file = request.files["video"]
     video_kal_file = request.files["video_kal"]
     file_directory = '../front-end/src/assets/patientVideos/'
     video_file.save(file_directory + patientID + '_' + video_file.filename );
     video_kal_file.save(file_directory + patientID + '_' + video_kal_file.filename);
     return ''


@app.route("/generatePatientData/", methods = ['GET'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def generatePatientData():
     use_existing_files = request.args.get("use_existing_files");
     patientID = request.args.get("patientID");
     video_directory = '../front-end/src/assets/patientVideos/' + patientID + '_video.mp4'
     video_kal_directory = '../front-end/src/assets/patientVideos/' + patientID + '_video_kal.mp4'
     print(video_directory)
     getPatientData(video_directory, video_kal_directory, patientID, use_existing_files)
     return ''

if __name__ == '__main__':
    app.run(debug=True)
