const container = document.querySelector("#container");

let size;

const input = document.querySelector("#input");

input.addEventListener("click", () => {
  getInput();
});

function getInput() {
  size = parseInt(prompt("Enter number of box requirement, maximum 100"));
  if (size > 1 && size <= 100) {
    document.documentElement.style.setProperty("--cells-per-row", size);
    updatecanvas();
  } else {
    alert("Input size is out of range - not between 1 and 100");
  }
}

function updatecanvas() {
  const canvas = document.getElementById("canvas");
  canvas.innerHTML = "";
  for (let i = 0; i < size; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    canvas.appendChild(cell);
  }

  const cells = canvas.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("mouseenter", () => {
      const color = getColor();
      cell.style.backgroundColor = color;
    });

    // cell.addEventListener("mouseleave", () => {
    //   cell.style.backgroundColor = "";
    // });
  });
}
let reset = document.getElementById("reset");
reset.addEventListener("click", () => {
  canvas.innerHTML = "";
});

function randomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function getColor() {
  const selectedColor = document.querySelector(".button.selected");
  if (!selectedColor) return "";
  switch (selectedColor.id) {
    case "red":
      return "red";

    case "black":
      return "black";

    case "random":
      return randomColor();
    default:
      return "";
  }
}

const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("selected"));
    button.classList.add("selected");
    updatecanvas();
  });
});
