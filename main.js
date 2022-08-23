// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

const currentColor = document.querySelector("#current-color");
const palette = document.querySelectorAll("#palette .color");

palette.forEach((color) => {
  color.addEventListener("click", () => {
    currentColor.style.backgroundColor = color.style.backgroundColor;
  });
});

const cell = document.querySelectorAll(".cell");

cell.forEach((el) => {
  el.addEventListener("click", () => {
    el.style.backgroundColor = currentColor.style.backgroundColor;
  });
});
