const words = [
    "Web Developer",
    "Frontend Learner",
    "Backend Learner",
    "Building & Exploring Tech"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    document.getElementById("typing").textContent =
        currentWord.substring(0, charIndex);

    let speed = isDeleting ? 70 : 120;

    if (!isDeleting && charIndex === currentWord.length) {
        speed = 1200;
        isDeleting = true;
    }

    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 300;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


/* =========================
   SCROLL REVEAL
========================= */

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    reveals.forEach(section => {
        const top = section.getBoundingClientRect().top;
        const screen = window.innerHeight;

        if (top < screen - 100) {
            section.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);


/* =========================
   CUSTOM CURSOR (SMOOTH)
========================= */

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});


/* =========================
   SCROLL PROGRESS BAR
========================= */

window.addEventListener("scroll", () => {

    let scrollTop = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let progress = (scrollTop / height) * 100;

    document.getElementById("progress-bar").style.width = progress + "%";
});


/* =========================
   MATRIX BACKGROUND (RESPONSIVE)
========================= */

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const letters = "01";
const fontSize = 14;
let columns = canvas.width / fontSize;
let drops = Array(Math.floor(columns)).fill(1);

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


/* =========================
   CONTACT FORM UX (IMPORTANT)
========================= */

const form = document.getElementById("contact-form");
const loader = document.getElementById("loader");
const btnText = document.getElementById("btn-text");
const popup = document.getElementById("popup");

if(form){
form.addEventListener("submit", () => {

    btnText.textContent = "Sending...";
    loader.classList.remove("hidden");

    setTimeout(() => {

        loader.classList.add("hidden");
        btnText.textContent = "Send Message";

        popup.classList.add("show");

        setTimeout(() => {
            popup.classList.remove("show");
        }, 3000);

    }, 2000);
});
}