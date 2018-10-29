function calculate(x, y) {
  var sum = x + y;
  var difference = x - y;
  var product = x * y;
  var quotient = x / y;
  var ans = [sum, difference, product, quotient];
  return ans;
}

var a = (Math.floor(Math.random() * 10));
var b = (Math.floor(Math.random() * 10));

var el1 = document.getElementById("first");
el1.textContent = "sum: " + calculate(a, b)[0];

var el2 = document.getElementById("second");
el2.textContent = "difference: " + calculate(a, b)[1];

var el3 = document.getElementById("third");
el3.textContent = "product: " + calculate(a, b)[2];

var el4 = document.getElementById("fourth");
el4.textContent = "quotient: " + calculate(a, b)[3];

document.write("a = " + a + "</br>b = " + b);
