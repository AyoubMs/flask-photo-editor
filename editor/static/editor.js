const cropOption = document.getElementById('crop-option')
const resizeOption = document.getElementById('resize-option')
const rotateOption = document.getElementById('rotate-option')
const textOption = document.getElementById('text-option')

const downloadButton = document.getElementById('download-image')
const resetArea = document.getElementById('reset-area')
let imageData

// Task 1: Declare variables here

// Task 2: Declare variables here

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

}

// Task 1: Add drawCanvasImage() function here

// Task 2: Add upload and display image solution here

// Task 3: Add solution here

// Task 5: Add solution here

// Task 7: Add solution here

// Task 9+10: Add solution here

// Task 11: Add solution here

// Task 12: Add solution here
