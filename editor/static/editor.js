const cropOption = document.getElementById('crop-option')
const resizeOption = document.getElementById('resize-option')
const rotateOption = document.getElementById('rotate-option')
const textOption = document.getElementById('text-option')

const downloadButton = document.getElementById('download-image')
const resetArea = document.getElementById('reset-area')
let imageData

// Task 1: Declare variables here
const canvas = document.getElementById("canvas1");
var context = canvas.getContext('2d');
let mergedImage;
// Task 2: Declare variables here
const uploadArea = document.getElementById('upload-area');
const input = document.getElementById('input-image');
let mainImageFile;
// check if canvas is empty
function isCanvasEmpty(cnv) {
    const blank = document.createElement('canvas');
    blank.width = cnv.width;
    blank.height = cnv.height;
    return cnv.toDataURL() === blank.toDataURL();
}

// Check if the image is uploaded or not. If not, give the upload option
if (isCanvasEmpty(canvas) === true) {
    uploadArea.style.display = 'block';
    uploadArea.addEventListener('click', function() {
        input.click();
    })
}
// display uploaded image
input.addEventListener('change', (input) => {
    let imageFile = input.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = function (e) {
        drawCanvasImage(e.target.result);
        mainImageFile = e.target.result;
        uploadArea.style.display = 'none';
        canvas.style.display = 'block';
        downloadButton.classList.remove('download-disabled');
        for(let feature of featuresArray) {
            feature.classList.remove('disabled');
        }
    }
    fileReader.readAsDataURL(imageFile);
})
// Task 3: Declare variables here

// Task 5: Declare variables here

// Task 7: Declare variables here

// Task 8: Declare variables here

// Task 9: Declare variables here

// Task 10: Declare variables here

const featuresArray = [cropOption, resizeOption, rotateOption, textOption]

// add active class to the elements of features array
function addActive(element) {
    for (let feature of featuresArray) {
        if (feature === element) {
            feature.classList.add('active');
            resetArea.style.visibility = "visible";

        } else {
            feature.classList.remove('active');
        }
    }
}
// Draw the edited image and make all other fields invisible
function resetFields(){
    if (mergedImage) {
        drawCanvasImage(mergedImage)
    }
}

// Task 1: Add drawCanvasImage() function here
function drawCanvasImage(imgFile) {
    let scale;
    var image = new Image();
    image.src = imgFile;
    image.onload = function() {
        context.clearRect(0, 0, canvas.clientWidth, canvas.height);
        scale = Math.min(canvas.width / image.width, canvas.height / image.height);
        var w = scale < 1 ? image.width * scale : image.width; // Use that scale to get the img width
        var h = scale < 1 ? image.height * scale : image.height; // Use that scale to get the img height
        var xOffset = canvas.width / 2 - w / 2; // Then use that scale to calculate the top left as half the dist from the center
        var yOffset = canvas.height / 2 - h / 2; // Then use that scale to calculate the top left as half the dist from the center
        context.drawImage(image, 0, 0, image.width, image.height, xOffset, yOffset, w, h);
        canvas.style.backgroundColor = 'white';
    }
}
// Task 2: Add upload and display image solution here

// Task 3: Add solution here

// Task 5: Add solution here

// Task 7: Add solution here

// Task 9+10: Add solution here

// Task 11: Add solution here

// Task 12: Add solution here
