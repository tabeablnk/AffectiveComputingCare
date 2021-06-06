from flask import Flask, render_template, url_for, request, redirect, jsonify;
from flask_cors import CORS;


app = Flask(__name__)
CORS(app)

weather = {
    "data": [
    {
        "day": "1/6/2019",
        "temperature": "23",
        "windspeed": "16",
        "event": "Sunny"
    },
    {
        "day": "2/6/2019",
        "temperature": "21",
        "windspeed": "18",
        "event": "Rainy"
    },
    {
        "day": "3/6/2019",
        "temperature": "31",
        "windspeed": "12",
        "event": "Sunny"
    },
    {
        "day": "4/6/2019",
        "temperature": "5",
        "windspeed": "28",
        "event": "Snow"
    },
    {
        "day": "5/6/2019",
        "temperature": "17",
        "windspeed": "18",
        "event": "Rainy"
    },
    {
        "day": "6/6/2019",
        "temperature": "19",
        "windspeed": "21",
        "event": "Rainy"
    },
    {
        "day": "7/6/2019",
        "temperature": "28",
        "windspeed": "14",
        "event": "Sunny"
    }
    ]
}


@app.route("/weatherReport/", methods = ['GET'])
def WeatherReport():
    global weather
    return jsonify([weather])


@app.route("/")
def home():
    return render_template('index.html')

@app.route("/<patient>", methods=["POST"])
def patient():
    return render_template(url_for("patient"))

@app.route("/patientenliste", methods=["POST, GET"])
def patientenliste():
    if request.method == "POST":
        patient = request.form["patient"]
        return redirect(url_for("patient", patient=patient))
    else:
        return render_template(url_for("patientenliste"))

if __name__ == "__main__":
    app.run(debug=True)