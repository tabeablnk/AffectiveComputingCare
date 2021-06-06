from flask import Flask, jsonify;
from flask_cors import CORS, cross_origin
import json

app = Flask(__name__)
cors = CORS(app, resources={r"/foo": {"origins": "http://localhost:4200"}})
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/")
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def index():
    return "Welcome to Affective Computing"

@app.route("/getPatientData/", methods = ['GET'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def GetPatientData():
     patientData = json.load(open('patientData.json'))
     print(patientData)
     response = jsonify([patientData])
     return response

if __name__ == '__main__':
    app.run(debug=True)



