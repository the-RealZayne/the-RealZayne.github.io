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

// ────────────────────────────────────────
// INTERACTIVE NEURAL NETWORK BACKGROUND
// ────────────────────────────────────────
const bgCanvas = document.getElementById("bg-canvas");
if (bgCanvas) {
    const ctx = bgCanvas.getContext("2d");

    function resizeCanvas() {
        bgCanvas.width = window.innerWidth;
        bgCanvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const nodes = [];
    const numNodes = 80; // adjust for performance (60–120 is good)

    for (let i = 0; i < numNodes; i++) {
        nodes.push({
            x: Math.random() * bgCanvas.width,
            y: Math.random() * bgCanvas.height,
            vx: (Math.random() - 0.5) * 1.5,
            vy: (Math.random() - 0.5) * 1.5,
            radius: Math.random() * 2 + 2
        });
    }

    const mouse = { x: bgCanvas.width / 2, y: bgCanvas.height / 2, radius: 140 };

    bgCanvas.addEventListener("mousemove", (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    function animate() {
        ctx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);

        nodes.forEach(node => {
            node.x += node.vx;
            node.y += node.vy;

            if (node.x < 0 || node.x > bgCanvas.width) node.vx *= -1;
            if (node.y < 0 || node.y > bgCanvas.height) node.vy *= -1;

            const dx = mouse.x - node.x;
            const dy = mouse.y - node.y;
            const dist = Math.sqrt(dx*dx + dy*dy);

            if (dist < mouse.radius) {
                const force = (mouse.radius - dist) / mouse.radius;
                node.vx -= (dx / dist) * force * 0.5;
                node.vy -= (dy / dist) * force * 0.5;
            }

            node.vx *= 0.99;
            node.vy *= 0.99;

            ctx.beginPath();
            ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
            ctx.fillStyle = "#3b82f6"; // blue nodes
            ctx.fill();
        });

        // Connections
        nodes.forEach(nodeA => {
            nodes.forEach(nodeB => {
                const dx = nodeA.x - nodeB.x;
                const dy = nodeA.y - nodeB.y;
                const dist = Math.sqrt(dx*dx + dy*dy);

                if (dist > 0 && dist < 140) {
                    ctx.beginPath();
                    ctx.moveTo(nodeA.x, nodeA.y);
                    ctx.lineTo(nodeB.x, nodeB.y);
                    const opacity = 1 - (dist / 140);
                    ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`; // purple lines
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            });
        });

        requestAnimationFrame(animate);
    }

    animate();
}
