/* TYPING EFFECT */

const words = [
"Web Developer",
"Frontend Learner",
"Backend Learner",
"Tech Enthusiast"
];

let i=0,j=0,deleting=false;

function type(){
let current=words[i];

if(!deleting){j++;}
else{j--;}

document.getElementById("typing").textContent=current.substring(0,j);

if(!deleting && j==current.length){
deleting=true;
setTimeout(type,1000);
return;
}
else if(deleting && j==0){
deleting=false;
i=(i+1)%words.length;
}

setTimeout(type,100);
}
type();

/* SCROLL REVEAL */

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

/* CURSOR */

const cursor=document.querySelector(".cursor");

document.addEventListener("mousemove",e=>{
cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";
});

/* SCROLL BAR */

window.addEventListener("scroll",()=>{
let scrollTop=document.documentElement.scrollTop;
let height=document.documentElement.scrollHeight-document.documentElement.clientHeight;
let progress=(scrollTop/height)*100;
document.getElementById("progress-bar").style.width=progress+"%";
});

/* FORM */

const form=document.getElementById("contact-form");
const loader=document.getElementById("loader");
const btnText=document.getElementById("btn-text");
const popup=document.getElementById("popup");

form.addEventListener("submit",async(e)=>{

e.preventDefault();

loader.classList.remove("hidden");
btnText.textContent="Sending...";

let data=new FormData(form);

await fetch("https://formspree.io/f/YOURCODE",{
method:"POST",
body:data,
headers:{'Accept':'application/json'}
});

loader.classList.add("hidden");
btnText.textContent="Send Message";

popup.classList.add("show");

setTimeout(()=>popup.classList.remove("show"),3000);

form.reset();

});

/* MATRIX */

const canvas=document.getElementById("matrix");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

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
let text=letters[Math.floor(Math.random()*letters.length)];
ctx.fillText(text,i*fontSize,drops[i]*fontSize);

if(drops[i]*fontSize>canvas.height && Math.random()>0.975){
drops[i]=0;
}
drops[i]++;
}
}
setInterval(draw,33);