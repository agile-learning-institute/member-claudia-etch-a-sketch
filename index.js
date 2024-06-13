const container = document.querySelector("#container");

const head = document.createElement("div");
head.classList.add("head");
container.appendChild(head);

const canvas = document.createElement("div");
canvas.classList.add("canvas");
container.appendChild(canvas);

const button = document.createElement("button");
button.classList.add("btn");
button.textContent = "No. of boxes?";

head.appendChild(button);

let size = 1;

button.addEventListener("click", () => {
  getInput();
  updatecanvas();
});

function getInput() {
  size = parseInt(prompt("Enter no. of boxes for x and y axis, maximum 100"));
}
function updatecanvas() {
  canvas.innerHTML = "";

  for (let i = 0; i < size; i++) {
    const cells = document.createElement("div");
    cells.classList.add("cells");
    canvas.appendChild(cells);
  }
}
console.log("created");
console.log(size);
