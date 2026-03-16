/* Typing Effect */

const words=["Web Developer","Frontend Learner","Tech Enthusiast"];

let i=0;
let j=0;
let current="";
let deleting=false;

function type(){

current=words[i];

if(!deleting){

j++;

if(j==current.length){

deleting=true;
setTimeout(type,1000);
return;

}

}else{

j--;

if(j==0){

deleting=false;
i++;

if(i==words.length) i=0;

}

}

document.getElementById("typing").textContent=current.substring(0,j);

setTimeout(type,120);

}

type();


/* Scroll Reveal */

const reveals=document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

reveals.forEach(section=>{

const top=section.getBoundingClientRect().top;
const screen=window.innerHeight;

if(top<screen-100){
section.classList.add("active");
}

});

});


/* Cursor */

const cursor=document.querySelector(".cursor");

document.addEventListener("mousemove",e=>{
cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";
});


/* Scroll Progress */

window.onscroll=function(){

let scrollTop=document.documentElement.scrollTop;

let height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

let progress=(scrollTop/height)*100;

document.getElementById("progress-bar").style.width=progress+"%";

};


/* MATRIX BACKGROUND */

const canvas=document.getElementById("matrix");
const ctx=canvas.getContext("2d");

canvas.height=window.innerHeight;
canvas.width=window.innerWidth;

const letters="01";
const fontSize=14;

const columns=canvas.width/fontSize;
const drops=[];

for(let x=0;x<columns;x++) drops[x]=1;

function draw(){

ctx.fillStyle="rgba(0,0,0,0.05)";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="#38bdf8";
ctx.font=fontSize+"px monospace";

for(let i=0;i<drops.length;i++){

const text=letters.charAt(Math.floor(Math.random()*letters.length));

ctx.fillText(text,i*fontSize,drops[i]*fontSize);

if(drops[i]*fontSize>canvas.height && Math.random()>0.975)
drops[i]=0;

drops[i]++;

}

}

setInterval(draw,33);