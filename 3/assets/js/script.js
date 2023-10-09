function pintar(e, color = "green") {
  e.target.style.backgroundColor = color;
}
const ele = document.getElementById("ele1");
ele.addEventListener("click", function (e) {
  const color = "yellow";
  pintar(e, color);
});
