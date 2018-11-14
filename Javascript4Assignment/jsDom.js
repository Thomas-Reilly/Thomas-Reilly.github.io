var el1 =  document.querySelector("h1.first");
el1.innerHTML = "<b><i>This is bold italicized text.</i></b>";

var liItems = document.getElementsByTagName("li");
liItems[0].parentNode.setAttribute("class", "first");

var liNew = document.createElement("li");
var textNew = document.createTextNode("any brief text you want");

liNew.appendChild(textNew);
liItems[0].parentNode.appendChild(liNew);
