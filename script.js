/* Typing Effect (FIXED) */

const words = [
    "Web Developer",
    "Frontend Learner",
    "Backend Learner",
    "Tech Enthusiast"
    
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    let currentWord = words[wordIndex];

    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    document.getElementById("typing").textContent =
        currentWord.substring(0, charIndex);

    let speed = isDeleting ? 80 : 120;

    /* When word fully typed */
    if (!isDeleting && charIndex === currentWord.length) {
        speed = 1200;
        isDeleting = true;
    }

    /* When word fully deleted */
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 300;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


/* Scroll Reveal */

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveals.forEach(section => {
        const top = section.getBoundingClientRect().top;
        const screen = window.innerHeight;

        if (top < screen - 100) {
            section.classList.add("active");
        }
    });
});


/* Cursor */

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});


/* Scroll Progress */

window.onscroll = function () {

    let scrollTop = document.documentElement.scrollTop;

    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let progress = (scrollTop / height) * 100;

    document.getElementById("progress-bar").style.width = progress + "%";
};


/* MATRIX BACKGROUND */

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "01";
const fontSize = 14;

const columns = canvas.width / fontSize;
const drops = [];

for (let x = 0; x < columns; x++) drops[x] = 1;

function draw() {

    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#38bdf8";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {

        const text = letters.charAt(Math.floor(Math.random() * letters.length));

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975)
            drops[i] = 0;

        drops[i]++;
    }
}

setInterval(draw, 33);