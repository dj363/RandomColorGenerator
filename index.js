const btnEl = document.querySelector(".btn");
const bodyEl = document.querySelector("body");

let colors = ["red","green", "blue", "orange","yellow","violet"];
let count;
bodyEl.style.background = "white";

btnEl.addEventListener("click",addColor);

function addColor(){
    console.log("clicked")
    let color = parseInt(Math.random()*colors.length);
    bodyEl.style.background = colors[color];
    count++;
}

