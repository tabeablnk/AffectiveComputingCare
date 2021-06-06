from flask import Flask, jsonify;
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app, resources={r"/foo": {"origins": "http://localhost:4200"}})
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/")
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def index():
    return "Welcome to Affective Computing"

@app.route("/getMood/", methods = ['GET'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def GetMood():
     patientData = {
     "data": [
     {
         "sad": "0.3",
         "happy": "0.7",
         "neutral": "0.2"
     },
     ]
    }
     response = jsonify([patientData])
     return response

if __name__ == '__main__':
    app.run(debug=True)
