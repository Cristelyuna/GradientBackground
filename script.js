var color1=document.querySelector(".color1");
var color2= document.querySelector(".color2");
var css=document.querySelector("h3");
var body=document.getElementById("gradient");
var btn=document.getElementById("randomInputs");

body.style.background="linear-gradient(to right," +color1.value+ "," +color2.value+")";
css.textContent=body.style.background+";";

function setGradient(){
body.style.background="linear-gradient(to right," +color1.value+ "," +color2.value+")";
css.textContent=body.style.background+";";
}

function generateInputs(){
	var randcolor1=Math.floor(Math.random()*16777215).toString(16);
	var randcolor2=Math.floor(Math.random()*16777215).toString(16);

    backgroundColor1= "#" + randcolor1;
    backgroundColor2= "#" + randcolor2;
    body.style.background="linear-gradient(to right," +backgroundColor1+ "," +backgroundColor2+")";
    css.textContent=body.style.background+";";
}
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

btn.addEventListener("click",generateInputs);
