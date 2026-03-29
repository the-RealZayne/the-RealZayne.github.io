// ===== YOUTUBE DATA =====
const videos = [
  "59QBOO6m210",
  "skD7r0yWOG4",
  "PQdVTMZQtAk",
  "zFjLSlTMV2k",
  "dS-MaUk6YBI",
  "c2fs8Eg0Vcc",
  "EhzNikz8P9E",
  "ZKCXGo4AuKg",
  "V1TzrETCBTo",
  "tpwe69g_7Sg",
  "u43VXCNzVsY"
];

// Build items
const items = videos.map((id, i) => ({
  image: `https://img.youtube.com/vi/${id}/maxresdefault.jpg`,
  link: `https://www.youtube.com/watch?v=${id}`,
  title: `Video ${i + 1}`,
  description: "Click to watch"
}));

// ===== BASIC 3D SPHERE (SIMPLIFIED VERSION) =====

const canvas = document.getElementById("video-sphere-canvas");
const ctx = canvas.getContext("2d");

let width, height;
let angle = 0;
let activeIndex = 0;
let isDragging = false;
let lastX = 0;

function resize() {
  width = canvas.clientWidth;
  height = canvas.clientHeight;
  canvas.width = width;
  canvas.height = height;
}
window.addEventListener("resize", resize);
resize();

function draw() {
  ctx.clearRect(0, 0, width, height);

  const radius = Math.min(width, height) / 3;
  const centerX = width / 2;
  const centerY = height / 2;

  items.forEach((item, i) => {
    const theta = (i / items.length) * Math.PI * 2 + angle;

    const x = centerX + Math.cos(theta) * radius;
    const y = centerY + Math.sin(theta) * radius * 0.5;

    const size = 120 + Math.sin(theta) * 40;

    const img = new Image();
    img.src = item.image;

    ctx.save();
    ctx.globalAlpha = 0.6 + Math.sin(theta) * 0.4;
    ctx.drawImage(img, x - size / 2, y - size / 2, size, size);
    ctx.restore();

    if (Math.sin(theta) > 0.95) {
      activeIndex = i;
    }
  });

  angle += 0.002;
  requestAnimationFrame(draw);
}

draw();

// ===== INTERACTION =====

// drag rotate
canvas.addEventListener("mousedown", e => {
  isDragging = true;
  lastX = e.clientX;
});

window.addEventListener("mouseup", () => {
  isDragging = false;
});

window.addEventListener("mousemove", e => {
  if (!isDragging) return;
  const delta = e.clientX - lastX;
  angle += delta * 0.005;
  lastX = e.clientX;
});

// click open video
canvas.addEventListener("click", () => {
  if (isDragging) return;
  const video = items[activeIndex];
  window.open(video.link, "_blank");
});
