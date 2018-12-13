
// create the canvas
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


// clear the canvas then create the x-axis and y-axis
function resetCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.moveTo(400, 0);
  ctx.lineTo(400, 800);
  ctx.stroke();

  ctx.moveTo(0, 400);
  ctx.lineTo(800, 400);
  ctx.stroke();
}

// draw pixel function
ctx.fillStyle = "#FF0000";
function drawPixel(x, y) {
  ctx.fillRect(x, y, 1, 1);
}

// linearly maps value from the range (a..b) to (c..d)
// a = cartesian min; b = cartesian max; c = canvas min; d = canvas max
function mapRange (value, a, b, c, d) {
    // first map value from (a..b) to (0..1)
    value = (value - a) / (b - a);
    // then map it from (0..1) to (c..d) and return it
    return c + value * (d - c);
}

// the main function to graph the polynomial
function iterate(a, b, c) {
  for (var i = -10; i < 10; i+= 0.0001) {
    drawPixel(mapRange(i, -10, 10, 0, 800), mapRange(calc(i, a, b, c), 10, -10, 0, 800));
  }
}

// calculate and return the output for every input
function calc(x, a, b, c) {
  return (a*Math.pow(x, 2) + b*x + c*1);
}

// sliders to determine coefficients
var sliderA = document.getElementById("sliderA");
var aValue = document.getElementById("aValue");
aValue.innerHTML = sliderA.value;

var sliderB = document.getElementById("sliderB");
var bValue = document.getElementById("bValue");
bValue.innerHTML = sliderB.value;

var sliderC = document.getElementById("sliderC");
var cValue = document.getElementById("cValue");
cValue.innerHTML = sliderC.value;


// re iterate every time slider value changes
sliderA.oninput = function() {
  aValue.innerHTML = sliderA.value;
  resetCanvas();
  iterate(sliderA.value, sliderB.value, sliderC.value);
}
sliderB.oninput = function() {
  bValue.innerHTML = sliderB.value;
  resetCanvas();
  iterate(sliderA.value, sliderB.value, sliderC.value);
}
sliderC.oninput = function() {
  cValue.innerHTML = sliderC.value;
  resetCanvas();
  iterate(sliderA.value, sliderB.value, sliderC.value);
}





// first iteration to draw default coefficient values
resetCanvas();
iterate(sliderA.value,sliderB.value,sliderC.value);
