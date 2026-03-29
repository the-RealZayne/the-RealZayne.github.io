// ===== YOUTUBE DATA =====
const videos = [
  "59QBOO6m210","skD7r0yWOG4","PQdVTMZQtAk","zFjLSlTMV2k",
  "dS-MaUk6YBI","c2fs8Eg0Vcc","EhzNikz8P9E","ZKCXGo4AuKg",
  "V1TzrETCBTo","tpwe69g_7Sg","u43VXCNzVsY",
  "-29wYkTejEw","fKPsgA8qW4s","jtFthRSqRwQ","hruJF2vSTuI",
  "CypAcwOHqHo","cwQ7_1hFYiE","rNAYWvSMP6o","Vp4glSVPT8o",
  "UtLyX72-688","l5ggH-YhuAw","OYlloiaBINo"
];

const items = videos.map((id, i) => ({
  image: `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
  link: `https://www.youtube.com/watch?v=${id}`,
  title: `Video ${i + 1}`
}));

// ===== SETUP =====
const canvas = document.getElementById("video-sphere-canvas");
const ctx = canvas.getContext("2d");
const playBtn = document.getElementById("play-button");

let width, height;
let rotationX = 0;
let rotationY = 0;

let isDragging = false;
let dragDistance = 0;
let lastX = 0;
let lastY = 0;

let activeIndex = 0;
let isSphereMode = false; // NEW: toggles between zoomed and sphere

// preload images
const images = items.map(item => {
  const img = new Image();
  img.src = item.image;
  return img;
});

// resize fix
function resize() {
  const rect = canvas.getBoundingClientRect();
  width = rect.width;
  height = rect.height;
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

// ===== DRAW LOOP =====
function draw() {
  ctx.clearRect(0, 0, width, height);

  const centerX = width / 2;
  const centerY = height / 2;

  if (!isSphereMode) {
    // ---- ZOOMED-IN VIEW ----
    const img = images[activeIndex];
    if (img.complete) {
      const zoom = Math.min(width, height) / 1.5;
      ctx.drawImage(img, centerX - zoom / 2, centerY - zoom / 2, zoom, zoom);
    }
    playBtn.classList.add("active"); // always show play in zoomed
  } else {
    // ---- SPHERE VIEW ----
    const radius = Math.min(width, height) / 2.5;
    let depthSorted = [];

    points.forEach((p, i) => {
      let y = p.y * Math.cos(rotationX) - p.z * Math.sin(rotationX);
      let z = p.y * Math.sin(rotationX) + p.z * Math.cos(rotationX);

      let x = p.x * Math.cos(rotationY) - z * Math.sin(rotationY);
      z = p.x * Math.sin(rotationY) + z * Math.cos(rotationY);

      depthSorted.push({ x, y, z, i });
    });

    depthSorted.sort((a, b) => b.z - a.z);
    activeIndex = depthSorted[0].i;

    depthSorted.forEach(p => {
      const scale = 0.5 + (p.z + 1) / 2;
      const size = 110 * scale;
      const x2d = centerX + p.x * radius;
      const y2d = centerY + p.y * radius;

      ctx.globalAlpha = 0.5 + scale * 0.5;

      if (images[p.i].complete) {
        ctx.drawImage(images[p.i], x2d - size / 2, y2d - size / 2, size, size);
      }
    });

    // show play button only when not dragging
    if (!isDragging && dragDistance < 5) {
      playBtn.classList.add("active");
    } else {
      playBtn.classList.remove("active");
    }
  }

  requestAnimationFrame(draw);
}

draw();

// ===== DRAG =====
canvas.addEventListener("mousedown", e => {
  isDragging = true;
  dragDistance = 0;
  lastX = e.clientX;
  lastY = e.clientY;
  isSphereMode = true; // enter sphere mode on drag
});

window.addEventListener("mouseup", () => {
  isDragging = false;
});

window.addEventListener("mousemove", e => {
  if (!isDragging || !isSphereMode) return;

  const dx = e.clientX - lastX;
  const dy = e.clientY - lastY;

  dragDistance += Math.abs(dx) + Math.abs(dy);

  rotationY += dx * 0.005;
  rotationX += dy * 0.005;

  lastX = e.clientX;
  lastY = e.clientY;
});

// ===== PLAY BUTTON =====
playBtn.addEventListener("click", () => {
  const video = items[activeIndex];
  window.open(video.link, "_blank");
});
