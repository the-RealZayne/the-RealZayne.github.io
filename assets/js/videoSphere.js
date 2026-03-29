// ===== YOUTUBE DATA =====
const videos = [
  "59QBOO6m210","skD7r0yWOG4","PQdVTMZQtAk","zFjLSlTMV2k",
  "dS-MaUk6YBI","c2fs8Eg0Vcc","EhzNikz8P9E","ZKCXGo4AuKg",
  "V1TzrETCBTo","tpwe69g_7Sg","u43VXCNzVsY"
];

const items = videos.map((id, i) => ({
  image: `https://img.youtube.com/vi/${id}/maxresdefault.jpg`,
  link: `https://www.youtube.com/watch?v=${id}`,
  title: `Video ${i + 1}`
}));

// ===== SETUP =====
const canvas = document.getElementById("video-sphere-canvas");
const ctx = canvas.getContext("2d");

let width, height;
let rotationX = 0;
let rotationY = 0;

let isDragging = false;
let lastX = 0;
let lastY = 0;

let images = [];

// preload images
items.forEach(item => {
  const img = new Image();
  img.src = item.image;
  images.push(img);
});

function resize() {
  width = canvas.clientWidth;
  height = canvas.clientHeight;
  canvas.width = width;
  canvas.height = height;
}
window.addEventListener("resize", resize);
resize();

// ===== CREATE SPHERE POINTS =====
const points = items.map((item, i) => {
  const phi = Math.acos(-1 + (2 * i) / items.length);
  const theta = Math.sqrt(items.length * Math.PI) * phi;

  return {
    x: Math.cos(theta) * Math.sin(phi),
    y: Math.sin(theta) * Math.sin(phi),
    z: Math.cos(phi)
  };
});

// ===== DRAW =====
function draw() {
  ctx.clearRect(0, 0, width, height);

  const radius = Math.min(width, height) / 2.5;
  const centerX = width / 2;
  const centerY = height / 2;

  let depthSorted = [];

  points.forEach((p, i) => {
    // rotate X
    let y = p.y * Math.cos(rotationX) - p.z * Math.sin(rotationX);
    let z = p.y * Math.sin(rotationX) + p.z * Math.cos(rotationX);

    // rotate Y
    let x = p.x * Math.cos(rotationY) - z * Math.sin(rotationY);
    z = p.x * Math.sin(rotationY) + z * Math.cos(rotationY);

    depthSorted.push({ x, y, z, i });
  });

  // sort by depth
  depthSorted.sort((a, b) => b.z - a.z);

  let activeIndex = depthSorted[0].i;

  depthSorted.forEach(p => {
    const scale = 0.5 + (p.z + 1) / 2; // depth scale
    const size = 100 * scale;

    const x2d = centerX + p.x * radius;
    const y2d = centerY + p.y * radius;

    ctx.globalAlpha = 0.5 + scale * 0.5;

    ctx.drawImage(
      images[p.i],
      x2d - size / 2,
      y2d - size / 2,
      size,
      size
    );
  });

  requestAnimationFrame(draw);
}

draw();

// ===== DRAG CONTROLS =====
canvas.addEventListener("mousedown", e => {
  isDragging = true;
  lastX = e.clientX;
  lastY = e.clientY;
});

window.addEventListener("mouseup", () => {
  isDragging = false;
});

window.addEventListener("mousemove", e => {
  if (!isDragging) return;

  const dx = e.clientX - lastX;
  const dy = e.clientY - lastY;

  rotationY += dx * 0.005;
  rotationX += dy * 0.005;

  lastX = e.clientX;
  lastY = e.clientY;
});

// ===== CLICK =====
canvas.addEventListener("click", () => {
  const front = getFrontItem();
  window.open(front.link, "_blank");
});

function getFrontItem() {
  let best = -Infinity;
  let index = 0;

  points.forEach((p, i) => {
    let y = p.y * Math.cos(rotationX) - p.z * Math.sin(rotationX);
    let z = p.y * Math.sin(rotationX) + p.z * Math.cos(rotationX);
    let x = p.x * Math.cos(rotationY) - z * Math.sin(rotationY);
    z = p.x * Math.sin(rotationY) + z * Math.cos(rotationY);

    if (z > best) {
      best = z;
      index = i;
    }
  });

  return items[index];
}
