// Requirements 

// UI 
// Show 2 image and number of clicks 
// the name should be above the image. 

// Function
// The number of clicks should increment when image is clicked.

const box = document.querySelector(".box");
const counter = document.querySelector(".counter");
let count = 1

box.addEventListener('click', () => {
    counter.innerHTML = count++;
});

console.log(app);
