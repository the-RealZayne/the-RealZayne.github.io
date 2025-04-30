function toggleTheme() {
    const body = document.body;
    const button = document.getElementById("theme-toggle");
    const isDark = body.getAttribute("data-theme") === "dark";

    if (isDark) {
        body.removeAttribute("data-theme");
        localStorage.setItem("theme", "light");
        button.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
    } else {
        body.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        button.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    const button = document.getElementById("theme-toggle");

    if (savedTheme === "dark") {
        document.body.setAttribute("data-theme", "dark");
        button.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
    } else {
        document.body.removeAttribute("data-theme");
        button.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
    }
});
