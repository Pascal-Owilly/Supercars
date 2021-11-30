var circle = document.getElementById("circle");
var upBtn = document.getElementById("upBtn");
var downBtn = document.getElementById("downBtn");


var rotateValue = circle.style.transform;
upBtn.onclick = function() {
   rotateSum = rotateValue + "rotate(-90deg)";
  circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}
downBtn.onclick = function() {
    rotateSum = rotateValue + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}
//alert('Click the buttons to see cool stuff')
document.getElementById("car1").innerText = "voxy";

