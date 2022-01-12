document.querySelector(".copyright").innerHTML = "&copy; " + new Date().getFullYear();

document.querySelector("footer p:last-child").innerText += document.lastModified;