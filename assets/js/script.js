// assets/js/script.js

function toggleTheme() {
    const body = document.body;
    const button = document.getElementById("theme-toggle");
    const isDark = body.getAttribute("data-theme") === "dark";

    if (isDark) {
        body.removeAttribute("data-theme"); // Switch to light mode
        localStorage.setItem("theme", "light");
        button.textContent = "Dark Mode";
    } else {
        body.setAttribute("data-theme", "dark"); // Switch to dark mode
        localStorage.setItem("theme", "dark");
        button.textContent = "Light Mode";
    }
}

// Apply saved theme or default to light on page load
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    const button = document.getElementById("theme-toggle");

    if (savedTheme === "dark") {
        document.body.setAttribute("data-theme", "dark");
        button.textContent = "Light Mode";
    } else {
        document.body.removeAttribute("data-theme");
        button.textContent = "Dark Mode";
    }
});
