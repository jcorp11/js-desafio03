function pintar(e, color = "green") {
  console.log(e.target);
  e.target.classList.toggle("black");
}
const elements = [...document.querySelectorAll("div")];
elements.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    const color = "black";
    pintar(e, color);
  });
});

let colorAguardar;

document.addEventListener("keydown", function (e) {
  switch (e.key) {
    case "a":
      colorAguardar = "pink";
      break;
    case "s":
      colorAguardar = "orange";
      break;
    case "d":
      colorAguardar = "lightblue";
      break;
    case "q":
      colorAguardar = "purple";
      break;
    case "w":
      colorAguardar = "grey";
      break;
    case "e":
      colorAguardar = "brown";
      break;
  }
  console.log(colorAguardar);
  if (colorAguardar) {
    newEle = document.createElement("div");
    newEle.id = e.key;
    newEle.style.backgroundColor = colorAguardar;
    document.body.appendChild(newEle);
  }

  colorAguardar = false;
});
