let color = "";

function reset() {
  const canvas = document.getElementById("canvas");
  canvas.innerHTML = "";
  color = "";
}

function setColor(newColor) {
  color = newColor;
}

function getColor() {
  if (color == "random") {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  } else {
    return color;
  }
}

function setSize() {
  const size = parseInt(prompt("Enter number of cells you want, maximum 100"));
  if (size > 1 && size <= 100) {
    reset();
    updatecanvas(size);
  } else {
    alert("Input size is out of range - not between 1 and 100");
  }
}

function updatecanvas(size) {
  const canvas = document.getElementById("canvas");
  canvas.style.setProperty("--cells-per-row", size);
  for (let i = 0; i < size**2; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    canvas.appendChild(cell);
    cell.addEventListener("mouseenter", () => {
      cell.style.backgroundColor = getColor();
    });
  }
}