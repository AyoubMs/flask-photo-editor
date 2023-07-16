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

# Task 6: Add rotate route here
