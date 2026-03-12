// assets/js/script.js

// Function to apply theme (can be called multiple times)
function applyTheme(theme) {
    const body = document.body;
    const button = document.getElementById("theme-toggle");

    if (theme === "dark") {
        body.setAttribute("data-theme", "dark");
        if (button) {
            button.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
        }
    } else {
        body.removeAttribute("data-theme");
        if (button) {
            button.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
        }
    }
}

// Immediate theme apply (runs before DOM is fully ready)
(function initTheme() {
    const savedTheme = localStorage.getItem("theme") || "light";
    applyTheme(savedTheme);
})();

// Full DOM ready handler
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "light";
    applyTheme(savedTheme);

    const button = document.getElementById("theme-toggle");
    if (button) {
        button.addEventListener("click", () => {
            const current = document.body.getAttribute("data-theme") === "dark" ? "dark" : "light";
            const newTheme = current === "dark" ? "light" : "dark";
            localStorage.setItem("theme", newTheme);
            applyTheme(newTheme);
        });
    }
});

// Re-apply on resize/orientation change (mobile fix)
window.addEventListener("resize", () => {
    const savedTheme = localStorage.getItem("theme") || "light";
    applyTheme(savedTheme);
});

/* ============================
   TERMINAL SYSTEM
============================ */

if (document.getElementById("term-input")) {

const input = document.getElementById("term-input");
const output = document.getElementById("output-area");
const body = document.getElementById("term-body");

input.addEventListener("keydown", function(e) {

if (e.key === "Enter") {

const val = input.value.trim().toLowerCase();

const historyLine = document.createElement("div");
historyLine.className = "line";
historyLine.innerHTML = "<span class='prompt'>guest@portfolio:~$</span> " + val;
output.appendChild(historyLine);

if (val === "help") {

const response = document.createElement("div");
response.className = "line";
response.innerHTML =
"Available commands:<br>" +
"- <span class='highlight'>about</span><br>" +
"- <span class='highlight'>skills</span><br>" +
"- <span class='highlight'>clear</span>";

output.appendChild(response);

}

else if (val === "about") {

const response = document.createElement("div");
response.className = "line";
response.innerText =
"I’m Zayne — gamer, music producer, developer, and creator.";
output.appendChild(response);

}

else if (val === "skills") {

const response = document.createElement("div");
response.className = "line";
response.innerText =
"> HTML, CSS, JavaScript, Node.js, Discord Bots, Game Modding";
output.appendChild(response);

}

else if (val === "clear") {

output.innerHTML = "";

}

else if (val !== "") {

const response = document.createElement("div");
response.className = "line";
response.innerText =
"Command not found. Type help.";

output.appendChild(response);

}

input.value = "";
body.scrollTop = body.scrollHeight;

}

});

body.addEventListener("click", function() {
input.focus();
});

}
