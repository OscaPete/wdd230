document.querySelector(".copyright").innerHTML = "&copy; " + new Date().getFullYear();

//document.querySelector("footer p:last-child").innerText += document.lastModified;
var p = document.createElement("p");

p.innerText = "Last Modified: " + document.lastModified;

document.querySelector("footer").appendChild(p);
