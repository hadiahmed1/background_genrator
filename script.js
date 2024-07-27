var _ = require("lodash");
console.log(_);
var arr=[1,3,5,4,7,3,9,5];
console.log('answer',_.without(arr,3));
var c1=document.querySelector(".c1");
var c2=document.querySelector(".c2");
var css=document.querySelector("h3");
var body=document.getElementById("gradient");
console.log(css);
console.log(c1);
console.log(c2);
function setGradient(){
    body.style.background="linear-gradient(to right,"+c1.value+","+c2.value+")";
    css.textContent=body.style.background+";";
}
c1.addEventListener("input",setGradient);
c2.addEventListener("input",setGradient);
