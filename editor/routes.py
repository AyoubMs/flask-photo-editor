import base64
import io
from math import ceil
import os
from flask import render_template, request, jsonify
from editor import app
from PIL import Image, ImageFont, ImageDraw 

path = os.path.dirname(__file__) + '/'

@app.route("/")
@app.route("/home")
def home_page():
    return render_template("index.html")

# Task 4: Add resize route here
@app.route("/resize", methods=["POST"])
def resize():
    data = request.get_json()
    response = data["response"].split(",")[1]
    measurement = data["measurement"]
    width = measurement["widthValue"]
    height = measurement["heightValue"]
    buffer = io.BytesIO()
    imgdata = base64.b64decode(response)
    img = Image.open(io.BytesIO(imgdata))
    new_img = img.resize((int(width),int(height)))
    new_img.save(buffer, format="PNG")
    img_b64 = base64.b64encode(buffer.getvalue())
    return jsonify({"res": str(img_b64)})

# Task 6: Add rotate route here
