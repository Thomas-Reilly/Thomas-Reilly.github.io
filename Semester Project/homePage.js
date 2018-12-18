function highlight() {
  this.style.backgroundColor = "#87ceeb";
}
function unhighlight() {
  this.style.backgroundColor = "#affaaf";
}

function updateTrig() {
  document.getElementById("trigInfo").innerHTML = "The Trigonometry page uses the Law of Cosines to find the angle measures of a triangle given only the side lengths.";
}

function updatePoly() {
  document.getElementById("polyInfo").innerHTML = "The Polynomials page graphs a polynomial when the coefficients are adjusted. The graph is a curve made of individual 1-pixel rectangles.";
}








var tL = document.getElementById("trig");
tL.addEventListener('mouseover', highlight, false);
tL.addEventListener('mouseout', unhighlight, false);
tL.addEventListener('click', updateTrig, false);


var pL = document.getElementById("poly");
pL.addEventListener('mouseover', highlight, false);
pL.addEventListener('mouseout', unhighlight, false);
pL.addEventListener('click', updatePoly, false);
