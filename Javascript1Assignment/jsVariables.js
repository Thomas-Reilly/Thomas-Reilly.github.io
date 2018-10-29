var colorsArray = ["blue", "red", "yellow", "green", "orange", "purple"];


var el1 = document.getElementById("first");
el1.textContent = colorsArray[Math.floor(Math.random() * 6)];

var el2 = document.getElementById("second");
el2.textContent = colorsArray[Math.floor(Math.random() * 6)];

var el3 = document.getElementById("third");
el3.textContent = colorsArray[Math.floor(Math.random() * 6)];

var el4 = document.getElementById("fourth");
el4.textContent = colorsArray[Math.floor(Math.random() * 6)];
