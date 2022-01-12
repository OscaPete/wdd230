document.querySelector (".copyright") .innerHTML ("&copy; " + Date.now().getFullYear());

var text = document.querySelector ("footer p:last-child") .innerHTML ();

document.querySelector ("footer p:last-child") .innerHTML (text + document.lastModified);