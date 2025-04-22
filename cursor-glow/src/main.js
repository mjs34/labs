import './style.css'
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip);

// Example Flip setup (optional)
const boxes = document.querySelectorAll(".box");
const state = Flip.getState(boxes);

boxes.forEach(box => box.classList.toggle("new-position"));

Flip.from(state, {
  duration: 2,
  ease: "power1.inOut",
  absolute: true
});

// USER SCRIPTS::::::::::::::::::::::::::::::::


// Cursor Glow ::::::::::::::::::::::::::::::::
const glow = document.getElementById("cursor-glow");

window.addEventListener("mousemove", (e) => {
  glow.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px)`;
});


// Smooth Trailing Effect:::::::::::::::::::::::

let mouseX = 0, mouseY = 0;
let currentX = 0, currentY = 0;

window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX - 16;
  mouseY = e.clientY - 16;
});

function animateGlow() {
  currentX += (mouseX - currentX) * 0.1;
  currentY += (mouseY - currentY) * 0.1;

  glow.style.transform = `translate(${currentX}px, ${currentY}px)`;
  requestAnimationFrame(animateGlow);
}

animateGlow();

// Sigil ::::::::::::::::::::::::::::::::::::
const sigil = document.querySelector('.sigil');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      gsap.to(sigil, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out"
      });
    }
  });
});

observer.observe(sigil);


// GSAP Example animation
gsap.to(".sigil", {
  duration: 4,
  scale: 4,
  opacity: 1,
  ease: "power2.out",
});

