// const toggle = document.getElementById("menu-toggle");
// const nav = document.getElementById("nav-links");

// toggle?.addEventListener("click", () => {
//     nav.classList.toggle("active");
// });

const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");
const header = document.querySelector(".header");

// Mobile Menu

if (toggle) {
    toggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}

// Header Scroll Effect

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});

console.log("Home page loaded successfully");

console.log("About page loaded");

console.log("Platform page loaded");

console.log("Team page loaded");

document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Message sent successfully!");
});

