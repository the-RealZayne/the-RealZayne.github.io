function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute("data-theme");
    if (currentTheme === "dark") {
        body.removeAttribute("data-theme");
        localStorage.setItem("theme", "light");
    } else {
        body.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
    }
}

// Apply saved theme on page load
window.onload = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.setAttribute("data-theme", "dark");
    }
};
