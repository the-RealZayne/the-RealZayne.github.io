function toggleTheme() {
    const body = document.body;
    const button = document.getElementById("theme-toggle");

    if (body.getAttribute("data-theme") === "dark") {
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
    const savedTheme = localStorage.getItem("theme") || "light";
    const body = document.body;
    const button = document.getElementById("theme-toggle");

    if (savedTheme === "dark") {
        body.setAttribute("data-theme", "dark");
        if (button) button.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
    } else {
        body.removeAttribute("data-theme");
        if (button) button.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
    }

    // Add click listener (no more inline onclick needed)
    if (button) {
        button.addEventListener("click", toggleTheme);
    }
});
