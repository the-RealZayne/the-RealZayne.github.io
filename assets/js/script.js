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

// Visitor counter with weekly graph - ALIGN TODAY TO CORRECT LABEL
document.addEventListener('DOMContentLoaded', function() {
    const statsSvg = document.getElementById('stats');
    if (!statsSvg) return;

    // Map JS getDay() → label text
    const jsDayToLabel = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Load or initialize data
    let data = JSON.parse(localStorage.getItem('zayneVisitorData') || '{}');
    const now = new Date();
    const todayStr = now.toDateString();
    const todayLabel = jsDayToLabel[now.getDay()]; // e.g. 'Fri'

    // Increment today's count
    if (!data[todayStr]) data[todayStr] = 0;
    data[todayStr]++;

    // Build last 7 days by label
    const daysByLabel = { Mon:0, Tue:0, Wed:0, Thu:0, Fri:0, Sat:0, Sun:0 };
    const sevenDaysAgo = new Date(now.getTime() - 6 * 24 * 60 * 60 * 1000);
    const allDates = Object.keys(data);

    allDates.forEach(dateKey => {
        const d = new Date(dateKey);
        if (d >= sevenDaysAgo && d <= now) {
            const label = jsDayToLabel[d.getDay()]; // Sun..Sat
            if (daysByLabel[label] !== undefined) {
                daysByLabel[label] += data[dateKey];
            }
        }
    });

    // Week + total totals
    const weekTotal = Object.values(daysByLabel).reduce((a,b)=>a+b,0);
    const total = Object.values(data).reduce((a,b)=>a+b,0);

    // Update summary text
    const textStats = document.getElementById('textStats');
    if (textStats) {
        textStats.textContent = `+${weekTotal} this week, ${total.toLocaleString()} total`;
    }

    // Update bars: they are laid out in SVG Mon..Sun left→right by their label text
    document.querySelectorAll('.day-bar').forEach(bar => {
        const labelNode = bar.querySelector('.day-label');
        const numberNode = bar.querySelector('.day-number');
        const rectNode = bar.querySelector('.day-bar-rect');
        if (!labelNode || !numberNode || !rectNode) return;

        const label = labelNode.textContent.trim(); // 'Mon'...'Sun'
        const count = daysByLabel[label] || 0;

        // Set number
        numberNode.textContent = count;

        // Height (cap at 25px)
        const height = Math.min(count * 0.5, 25);
        const yPos = 28 - height;

        // Simple animation
        numberNode.style.opacity = '0';
        numberNode.style.transform = 'translateY(20px)';
        rectNode.style.opacity = '0';
        rectNode.style.height = '0';
        rectNode.setAttribute('y', '28');

        setTimeout(() => {
            numberNode.style.transition = 'all 0.5s ease';
            numberNode.style.opacity = '1';
            numberNode.style.transform = 'translateY(0)';
        }, 100);

        setTimeout(() => {
            rectNode.style.transition = 'all 0.5s ease';
            rectNode.style.opacity = '1';
            rectNode.style.height = height + 'px';
            rectNode.setAttribute('y', yPos.toString());
        }, 150);
    });

    // Persist
    localStorage.setItem('zayneVisitorData', JSON.stringify(data));
});
