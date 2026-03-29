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

const canvas = document.getElementById("video-sphere-canvas");
const ctx = canvas.getContext("2d");
const playBtn = document.getElementById("play-button");

let width, height;
let rotationX = 0;
let rotationY = 0;
let targetRotationX = 0;
let targetRotationY = 0;

let isDragging = false;
let dragDistance = 0;
let lastX = 0;
let lastY = 0;

let activeIndex = 0;
let isSphereMode = false;

const images = items.map(item => {
  const img = new Image();
  img.src = item.image;
  return img;
});

function resize() {
  const rect = canvas.getBoundingClientRect();
  width = rect.width;
  height = rect.height;
  canvas.width = width;
  canvas.height = height;
}
window.addEventListener("resize", resize);
resize();

const points = items.map((item, i) => {
  const phi = Math.acos(-1 + (2 * i) / items.length);
  const theta = Math.sqrt(items.length * Math.PI) * phi;
  return {
    x: Math.cos(theta) * Math.sin(phi),
    y: Math.sin(theta) * Math.sin(phi),
    z: Math.cos(phi)
  };
});

function drawSquareImage(img, x, y, size) {
  ctx.drawImage(img, x - size / 2, y - size / 2, size, size);
}

function drawCircularImage(img, x, y, size) {
  ctx.save();
  ctx.beginPath();
  ctx.arc(x, y, size / 2, 0, Math.PI * 2);
  ctx.clip();
  ctx.drawImage(img, x - size / 2, y - size / 2, size, size);
  ctx.restore();
}

function draw() {
  ctx.clearRect(0, 0, width, height);
  ctx.globalAlpha = 1;

  const centerX = width / 2;
  const centerY = height / 2;

  if (!isSphereMode) {
    const img = images[activeIndex];
    if (img.complete) {
      const zoom = Math.min(width, height) / 1.5;
      drawSquareImage(img, centerX, centerY, zoom);
    }
    playBtn.classList.add("active");
  } else {
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

      ctx.globalAlpha = Math.max(0, Math.pow((p.z + 1) / 2, 3));

      if (images[p.i].complete) {
        if (p.i === activeIndex) {
          drawSquareImage(images[p.i], x2d, y2d, size * 1.15);
        } else {
          drawCircularImage(images[p.i], x2d, y2d, size);
        }
      }
    });

    ctx.globalAlpha = 1;
    rotationX += (targetRotationX - rotationX) * 0.1;
    rotationY += (targetRotationY - rotationY) * 0.1;

    if (!isDragging && dragDistance < 5) {
      playBtn.classList.add("active");
    } else {
      playBtn.classList.remove("active");
    }
  }

  requestAnimationFrame(draw);
}
draw();

canvas.addEventListener("pointerdown", e => {
  isDragging = true;
  dragDistance = 0;
  lastX = e.clientX;
  lastY = e.clientY;
  isSphereMode = true;
  canvas.setPointerCapture?.(e.pointerId);
});

window.addEventListener("pointerup", () => {
  isDragging = false;
});

window.addEventListener("pointermove", e => {
  if (!isDragging || !isSphereMode) return;

  const dx = e.clientX - lastX;
  const dy = e.clientY - lastY;

  dragDistance += Math.abs(dx) + Math.abs(dy);
  targetRotationY += dx * 0.005;
  targetRotationX += dy * 0.005;

  lastX = e.clientX;
  lastY = e.clientY;
});

playBtn.addEventListener("click", () => {
  const video = items[activeIndex];
  window.open(video.link, "_blank");
});
