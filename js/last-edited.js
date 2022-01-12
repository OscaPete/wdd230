document.querySelector(".copyright").innerHTML = "&copy; " + new Date().getFullYear();

var text = document.querySelector("footer p:last-child").innerText;

document.querySelector("footer p:last-child").innerText = text + document.lastModified;