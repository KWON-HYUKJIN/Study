// Requirements

// UI
// Show 2 image and number of clicks
// the name should be above the image.

// Function
// The number of clicks should increment when image is clicked.

const app = document.querySelector("#app");
const page = document.createElement("div");

let countFirst = 0;
let countSecond = 0;

this.render = () => {
  page.innerHTML = `
    <div style="float:left" >
        <h2>box1<h2>
        <div class="box first"></div> 
        <span class="firstValue">${countFirst}</span>
    </div>
    <div style="display:inline-block">
        <h2>box2<h2>
        <div class="box second"></div>
        <span class="secondValue">${countSecond}</span>
    </div>
    `;

  app.appendChild(page);
};

render();

const first = page.querySelector(".first");
first.addEventListener("click", () => {
  countFirst++;
  document.querySelector(".firstValue").innerHTML = countFirst;
});

const second = page.querySelector(".second");
second.addEventListener("click", () => {
  countSecond++;
  document.querySelector(".secondValue").innerHTML = countSecond;  
});