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

// Visitor counter with weekly graph
document.addEventListener('DOMContentLoaded', function() {
    const statsSvg = document.getElementById('stats');
    if (!statsSvg) return;

    // Load or initialize data
    let data = JSON.parse(localStorage.getItem('zayneVisitorData') || '{}');
    const now = new Date();
    const today = now.toDateString();
    
    // Increment today's count
    if (!data[today]) data[today] = 0;
    data[today]++;
    
    // Keep only last 7 days + total
    const weekStart = new Date(now.getTime() - 6 * 24 * 60 * 60 * 1000);
    const days = {};
    let total = 0;
    let weekTotal = 0;
    
    // Calculate 7-day window
    for (let i = 0; i < 7; i++) {
        const day = new Date(weekStart.getTime() + i * 24 * 60 * 60 * 1000).toDateString();
        days[day] = data[day] || 0;
        total += data[day] || 0;
        if (i === 6) weekTotal += days[day]; // Today
        else weekTotal += days[day];
    }
    
    // Update total count
    total = Object.values(data).reduce((sum, val) => sum + val, 0);
    
    // Update SVG elements
    const dayOrder = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const weekDays = Object.keys(days);
    
    document.getElementById('textStats').textContent = `+${weekTotal} this week, ${total.toLocaleString()} total`;
    
    // Update each day bar
    document.querySelectorAll('.day-bar').forEach((bar, index) => {
        const dayIndex = index;
        const dayCount = days[weekDays[dayIndex]] || 0;
        const dayElement = bar.querySelector('.day-number');
        const rectElement = bar.querySelector('.day-bar-rect');
        
        // Set count
        dayElement.textContent = dayCount;
        
        // Animate bar height (max 25px for 50+ views)
        const height = Math.min(dayCount * 0.5, 25);
        const yPos = 28 - height;
        rectElement.setAttribute('height', height);
        rectElement.setAttribute('y', yPos);
        
        // Animate number sliding down
        dayElement.style.opacity = '0';
        dayElement.style.transform = 'translateY(20px)';
        setTimeout(() => {
            dayElement.style.transition = 'all 0.5s ease';
            dayElement.style.opacity = '1';
            dayElement.style.transform = 'translateY(0)';
        }, 100 * index);
        
        // Animate bar growth
        rectElement.style.opacity = '0';
        rectElement.style.height = '0';
        rectElement.style.y = '28';
        setTimeout(() => {
            rectElement.style.transition = 'all 0.5s ease';
            rectElement.style.opacity = '1';
            rectElement.style.height = height + 'px';
            rectElement.style.y = yPos + 'px';
        }, 150 * index);
    });
    
    // Save updated data
    localStorage.setItem('zayneVisitorData', JSON.stringify(data));
});
