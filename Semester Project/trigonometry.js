// NOTE: Only SSS is functional at this time.


// create the variables and assign elements
var aSide = document.getElementById("aSide");
// var aAngle = document.getElementById("aAngle");
var bSide = document.getElementById("bSide");
// var bAngle = document.getElementById("bAngle");
var cSide = document.getElementById("cSide");
// var cAngle = document.getElementById("cAngle");

// create objects
var aa = new Object();
var ba = new Object();
var ca = new Object();
var as = new Object();
var bs = new Object();
var cs = new Object();

// main run function of the program
function iterate() {
  updateData();
  calculate();
  displaySolution();
  //drawTriangle();

}


// update v of vars when Solve button clicked
function updateData() {
  // aa.v = aAngle.value * 1;
  // ba.v = bAngle.value * 1;
  // ca.v = cAngle.v * 1;
  as.v = aSide.value * 1;
  bs.v = bSide.value * 1;
  cs.v = cSide.value * 1;

/*
  if (aa.v == 0) {
    aa.k = false;
  }
  else {
    aa.k = true;
  }

  if (ba.v == 0) {
    ba.k = false;
  }
  else {
    ba.k = true;
  }

  if (ca.v == 0) {
    ca.k = false;
  }
  else {
    ca.k = true;
  }
*/
  if (as.v == 0) {
    as.k = false;
  }
  else {
    as.k = true;
  }

  if (bs.v == 0) {
    bs.k = false;
  }
  else {
    bs.k = true;
  }

  if (cs.v == 0) {
    cs.k = false;
  }
  else {
    cs.k = true;
  }

}

// calculate function returns missing vs
function calculate() {
  // test to see what kind of triangle problem has been asked
   var type = determine();
   solve(type);
   console.log(type);
}

// determine if: SSS or SAS; AAS or ASA; or SSA

function determine() {

  // no angle vs given means SSS
  if (as.k && bs.k && cs.k) {
    return ["SSS"];
  }
/* Only SSS works.

  // now test for all AAS possibilities
  else if (aa.k && ba.k && cs.k) {
    return ["ASA", "c"];
  }
  else if (aa.k && bs.k && ca.k) {
    return ["ASA", "b"];
  }
  else if (as.k && ba.k && ca.k) {
    return ["ASA", "a"];
  }

  // now test for all SAS possibilities
  else if (as.k && ba.k && cs.k) {
    return ["SAS", "b"];
  }
  else if (aa.k && bs.k && cs.k) {
    return ["SAS", "a"];
  }
  else if (as.k && bs.k && ca.k) {
    return ["SAS", "a"];
  }

  // now test for all ASA possibilities
  else if (aa.k && ca.k && cs.k) {
    return ["AAS", "c"];
  }
  else if (aa.k && ba.k && bs.k) {
    return ["AAS", "b"];
  }
  else if (as.k && aa.k && ca.k) {
    return ["AAS", "a"];
  }
  else if (aa.k && ba.k && as.k) {
    return ["AAS", "a"];
  }
  else if (ba.k && aa.k && bs.k) {
    return ["AAS", "b"];
  }
  else if (ca.k && ba.k && cs.k) {
    return ["AAS", "c"];
  }
*/

}


// pass in type of triangle and known side then determine which law to solve
function solve(ty) {
  if (ty[0] == "SSS")
    sss();
/*
  else if (ty[0] == "SAS")
    sas(ty[1]);
  else if (ty[0] == "AAS")
    aas(ty[1]);
  else if (ty[0] == "ASA")
    aas(ty[1]);
*/
}

// solve a SSS triangle using law of cosines
function sss() {
  // solve for angle
  aa.v = Math.acos( (Math.pow(as.v, 2) - Math.pow(bs.v, 2) - Math.pow(cs.v, 2)) / (-2*bs.v*cs.v) )
  // convert from radians to degrees
  aa.v = aa.v * 180/Math.PI;

  // solve for angle
  ba.v = Math.acos( (Math.pow(bs.v, 2) - Math.pow(as.v, 2) - Math.pow(cs.v, 2)) / (-2*as.v*cs.v) )
  // convert from radians to degrees
  ba.v = ba.v * 180/Math.PI;

  // solve for angle
  ca.v = Math.acos( (Math.pow(cs.v, 2) - Math.pow(as.v, 2) - Math.pow(bs.v, 2)) / (-2*as.v*bs.v) )
  // convert from radians to degrees
  ca.v = ca.v * 180/Math.PI;
}







function displaySolution() {
  document.getElementById("aaMeasure").textContent = aa.v;
  document.getElementById("asMeasure").textContent = as.v;

  document.getElementById("baMeasure").textContent = ba.v;
  document.getElementById("bsMeasure").textContent = bs.v;

  document.getElementById("caMeasure").textContent = ca.v;
  document.getElementById("csMeasure").textContent = cs.v;
}








// event listener to make display table highlight on mouse hover
function highlight() {
  this.style.backgroundColor = "#87ceeb";
}
function unhighlight() {
  this.style.backgroundColor = "#3266aa";
}

var dRows = document.getElementsByClassName("displayRow");
dRows[0].addEventListener('mouseover', highlight, false);
dRows[1].addEventListener('mouseover', highlight, false);
dRows[2].addEventListener('mouseover', highlight, false);

dRows[0].addEventListener('mouseout', unhighlight, false);
dRows[1].addEventListener('mouseout', unhighlight, false);
dRows[2].addEventListener('mouseout', unhighlight, false);
