var elementx = document.getElementById("xDiv");
document.addEventListener('mousemove', processx, false);

var elementy = document.getElementById("yDiv");
document.addEventListener('mousemove', processy, false);


function processx(e) {
  elementx.textContent = "x-coordinate: " + e.clientX;
}

function processy(e) {
  elementy.textContent = "y-coordinate: " + e.clientY;
}


document.addEventListener('keydown', clear, false);

function clear(e) {
  if (e.keyCode == 67) {
    elementx.textContent = "x-coordinate: 0";
    elementy.textContent = "y-coordinate: 0";
  }
}
