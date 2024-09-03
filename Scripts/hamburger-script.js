document.addEventListener("DOMContentLoaded", () => {
    const hamburgerButton = document.querySelector("[data-hamburger-toggle]");
    const navLinks = document.getElementById("nav-links");

    hamburgerButton.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
});