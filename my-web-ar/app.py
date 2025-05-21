from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/upload")
def upload():
    return render_template("upload.html")

@app.route("/manage")
def manage():
    return render_template("manage.html")

@app.route("/live")
def live():
    return render_template("live.html")

if __name__ == "__main__":
    app.run(debug=True)