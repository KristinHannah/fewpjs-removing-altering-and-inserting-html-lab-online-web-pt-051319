// Write your code here!

let el = document.getElementById("main");
el.remove();

let newHeader = document.createElement('h1#victory'); 
newHeader.innerHTML = "YOUR-NAME is the champion"

document.body.appendChild(newHeader)

