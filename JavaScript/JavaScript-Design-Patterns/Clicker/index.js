// Requirements 

// UI 
// Show 1 image and number of clicks 

// Function
// The number of clicks should increment when image is clicked.

const box = document.querySelector(".box");
const counter = document.querySelector(".counter");
let count = 1

box.addEventListener('click', () => {
    counter.innerHTML = count++;
});

console.log(app);
