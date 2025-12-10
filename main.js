document.addEventListener("DOMContentLoaded", function () {
    // Mobile nav toggle
    const toggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector("header nav");

    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle("open");
        });
    }

    // Set current year in footer
    const yearEl = document.getElementById("year");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // Highlight active nav item based on current page
    const path = window.location.pathname.split("/").pop() || "index.html";
    const links = document.querySelectorAll(".nav-links a");

    links.forEach((link) => {
        const href = link.getAttribute("href");
        if (href === path || (path === "" && href === "index.html")) {
            link.classList.add("active");
        }
    });
});
