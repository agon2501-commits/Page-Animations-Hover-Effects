const bgColorBox = document.getElementById("bgColorBox");
const textColorBox = document.getElementById("textColorBox");
const sizeBox = document.getElementById("sizeBox");
const opacityBox = document.getElementById("opacityBox");
const borderBox = document.getElementById("borderBox");

bgColorBox.addEventListener("mouseover", function () {
  this.style.backgroundColor = "lightcoral";
});
bgColorBox.addEventListener("mouseout", function () {
  this.style.backgroundColor = "lightblue";
});

textColorBox.addEventListener("mouseover", function () {
  this.style.color = "White";
});
textColorBox.addEventListener("mouseout", function () {
  this.style.color = "black";
});

sizeBox.addEventListener("mouseover", function () {
  this.style.width = "120px";
  this.style.height = "120px";
});
sizeBox.addEventListener("mouseout", function () {
  this.style.width = "100px";
  this.style.height = "100px";
});
  
opacityBox.addEventListener("mouseover", function () {
  this.style.opacity = "0.7"
});
opacityBox.addEventListener("mouseout", function () {
  this.style.opacity = "1"
});

borderBox.addEventListener("mouseover", function () {
  this.style.border = "3px solid blue"
});
borderBox.addEventListener("mouseout", function () {
  this.style.border = "1px solid blue"
});
