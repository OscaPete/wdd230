document.querySelector(".copyright").innerHTML("&copy; " + new Date().getFullYear());

var text = document.querySelector("footer p:last-child").innerHTML ();

document.querySelector("footer p:last-child").innerHTML(text + document.lastModified);