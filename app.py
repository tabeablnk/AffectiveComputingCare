from flask import Flask, render_template, url_for, request, redirect

app = Flask(__name__)

testData = "HALLO World"

@app.route("/")
def home():
    return render_template('index.html', test=testData)

@app.route("/<patient>", methods=["POST"])
def patient():
    return render_template(url_for("patient"))

@app.route("/patientenliste", methods=["POST, GET"])
def patientenliste():
    if request.method == "POST":
        patient = request.form["patient"]
        return redirect(url_for("patient", patient=patient))
    else:
        return render_template(url_for("patientenliste"), test= testData)

if __name__ == "__main__":
    app.run(debug=True)