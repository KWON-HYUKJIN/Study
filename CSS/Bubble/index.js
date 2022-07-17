const app = document.querySelector(".app");
const bubble = app.querySelector(".bubble");

app.addEventListener("click", () => {
  {
    bubble.style.display === "block"
      ? bubble.style.display = "none"
      : bubble.style.display = "block"
  }
});
