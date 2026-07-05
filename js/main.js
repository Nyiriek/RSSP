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

/* Language Switcher dropdown */

const btn = document.getElementById("dropdownBtn");
const menu = document.getElementById("dropdownMenu");

btn.addEventListener("click", function (e) {
    e.stopPropagation();
    menu.classList.toggle("show");
});

// close when clicking outside
document.addEventListener("click", function () {
    menu.classList.remove("show");
});

// document.querySelector("form").addEventListener("submit", function(e) {
//     e.preventDefault();
//     alert("Message sent successfully!");
// });
//  EmailJS Integration for Contact Form //
// const contactForm = document.getElementById("contact-form");

// if (contactForm) {

//     contactForm.addEventListener("submit", async (e) => {

//         e.preventDefault();

//         const formData = new FormData(contactForm);

//         const data = Object.fromEntries(formData.entries());

//         const response = await fetch("http://localhost:3000/contact", {

//             method: "POST",

//             headers: {
//                 "Content-Type": "application/json"
//             },

//             body: JSON.stringify(data)

//         });

//         const result = await response.json();

//         const status = document.getElementById("status");

//         status.textContent = result.message;

//         status.style.color = result.success ? "green" : "red";

//         if (result.success) {
//             contactForm.reset();
//         }

//     });

// }

// donation
  const select = document.querySelector("select");
  const customInput = document.querySelector(".custom-amount");

  select.addEventListener("change", function () {
    if (this.value === "custom") {
      customInput.style.display = "block";
      customInput.required = true;
    } else {
      customInput.style.display = "none";
      customInput.required = false;
    }
  });

  document.getElementById("donationForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for supporting Revive South Sudan ❤️");
    this.reset();
    customInput.style.display = "none";
  });