const container = document.querySelector("#container");

const button = document.createElement("button");
button.classList.add("btn");
button.textContent = "No. of boxes?";

let size = 0;

button.addEventListener("click", () => {
  prompt();
});

function prompt() {
  size = prompt("Enter no. of boxes of x and y axis, max. 100");
}

container.appendChild(button);

for (let i = 0; i < size; i++) {
  const canvas = document.createElement("div");
  canvas.classList.add("canvas");
  container.appendChild(canvas);
}

console.log("created");
