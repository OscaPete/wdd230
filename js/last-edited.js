document.querySelector(".copyright").innerHTML = "&copy; " + new Date().getFullYear() + "|Oscar Peterson|Utah";

//document.querySelector("footer p:last-child").innerText += document.lastModified;
var p = document.createElement("p");

p.innerText = "Last Modified: " + document.lastModified;

document.querySelector("footer").appendChild(p);
