const container = document.querySelector("#container");

const size = 16;

for (let i = 0; i < size; i++) {
  const canvas = document.createElement("div");
  canvas.classList.add("canvas");
  container.appendChild(canvas);
}

console.log("created");
