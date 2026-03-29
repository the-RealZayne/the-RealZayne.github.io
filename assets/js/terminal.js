// assets/js/terminal.js

import { commands, commandAliases } from "./commands.js";

const input = document.getElementById("term-input");
const output = document.getElementById("output-area");
const termBody = document.getElementById("term-body");

const initBtn = document.getElementById("init-btn");
const initScreen = document.getElementById("terminal-init");

let globalVersion = "v1.0.0";

let historyCommands = [];
let historyIndex = -1;

/* typing response */
function typeResponse(text) {
  const resp = document.createElement("div");
  resp.className = "line typing";
  output.appendChild(resp);

  let i = 0;

  function type() {
    if (i < text.length) {
      resp.innerHTML += text[i];
      termBody.scrollTop = termBody.scrollHeight;
      i++;
      setTimeout(type, 12);
    } else {
      resp.classList.remove("typing");
    }
  }

  type();
}

/* slow line typing */
function typeLine(text, speed = 55) {
  return new Promise(resolve => {
    const line = document.createElement("div");
    line.className = "line typing";
    output.appendChild(line);

    let i = 0;

    function type() {
      if (i < text.length) {
        line.innerHTML += text[i];
        termBody.scrollTop = termBody.scrollHeight;
        i++;
        setTimeout(type, speed);
      } else {
        line.classList.remove("typing");
        resolve();
      }
    }

    type();
  });
}

/* type into existing span element (no new line) */
function typeLineToSpan(text, spanId, speed = 55) {
  return new Promise(resolve => {
    const span = document.getElementById(spanId);
    let i = 0;

    function type() {
      if (i < text.length) {
        span.innerHTML += text[i];
        termBody.scrollTop = termBody.scrollHeight;
        i++;
        setTimeout(type, speed);
      } else {
        span.classList.remove("typing");
        resolve();
      }
    }

    type();
  });
}

/* loading dots */
function loadingDots(text, duration = 2000) {
  return new Promise(resolve => {
    const line = document.createElement("div");
    line.className = "line";
    output.appendChild(line);

    let dots = 0;

    const interval = setInterval(() => {
      dots = (dots + 1) % 4;
      line.innerHTML = text + ".".repeat(dots);
    }, 400);

    setTimeout(() => {
      clearInterval(interval);
      line.innerHTML = text + "... Done";
      resolve();
    }, duration);
  });
}

/* fake progress bar */
function progressLine(label, duration = 1500) {
  const line = document.createElement("div");
  line.className = "line";
  output.appendChild(line);

  const start = Date.now();

  return new Promise(resolve => {
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      const bars = Math.floor(pct / 10);

      line.innerHTML = `${label} [${"█".repeat(bars)}${"-".repeat(10 - bars)}] ${pct}%`;
      termBody.scrollTop = termBody.scrollHeight;

      if (pct >= 100) {
        clearInterval(timer);
        resolve();
      }
    }, 80);
  });
}

/* runner for commands.js */
/* NEW: runCommand supports functions in steps */
async function runCommand(commandName) {
  const steps = commands[commandName];
  if (!steps) return false;

  for (const step of steps) {
    let [text, delay = 300, kind = "line"] = step;

    // if text is a function, call it
    if (typeof text === "function") text = text();

    if (kind === "progress") {
      await progressLine(text, delay);
      continue;
    }

    const line = document.createElement("div");
    line.className = "line typing";
    output.appendChild(line);
    termBody.scrollTop = termBody.scrollHeight;

    // old “special text” check (you can leave this)
    if (
      typeof text === "string" &&
      (
        text.includes("about") || text.includes("skills") || text.includes("gaming") ||
        text.includes("music") || text.includes("outdoors") || text.includes("coding") ||
        text.includes("content") || text.includes("community") || text.includes("collabs") ||
        text.includes("support") || text.includes("studio") || text.includes("ski") ||
        text.includes("social") || text.includes("hidden") || text.includes("robot") ||
        text.includes("snowboard") || text.includes("future") || text.includes("clear") ||
        text.includes("easteregg") || text.includes("rzcode")
      )
    ) {
      line.innerHTML = `<span class="prompt">${text.trim()}</span>`;
    } else {
      line.innerHTML = text;
    }

    const visibleChars = line.textContent.length;
    await new Promise(r => setTimeout(r, visibleChars * 60));
    line.classList.remove("typing");
    await new Promise(r => setTimeout(r, delay));
  }

  return true;
}

/* LOGIN SEQUENCE */
async function loginSequence() {
  await loadingDots("Connecting to Interweb");
  await new Promise(r => setTimeout(r, 900));

  await loadingDots("Establishing theRealZayne node");
  await new Promise(r => setTimeout(r, 800));

  await typeLine("");

  const userPrompt = document.createElement("div");
  userPrompt.className = "line";
  userPrompt.innerHTML = '<span class="prompt">username: </span><span id="user-input" class="typing"></span>';
  output.appendChild(userPrompt);
  termBody.scrollTop = termBody.scrollHeight;

  await typeLineToSpan("guest", "user-input", 200);
  await new Promise(r => setTimeout(r, 1500));

  const passPrompt = document.createElement("div");
  passPrompt.className = "line";
  passPrompt.innerHTML = '<span class="prompt">password: </span><span id="pass-input" class="typing"></span>';
  output.appendChild(passPrompt);
  termBody.scrollTop = termBody.scrollHeight;

  await typeLineToSpan("********", "pass-input", 200);
  await new Promise(r => setTimeout(r, 2000));

  await typeLine("");
  const accessLine = document.createElement("div");
  accessLine.className = "line access-granted";
  accessLine.textContent = "ACCESS GRANTED";
  output.appendChild(accessLine);
  termBody.scrollTop = termBody.scrollHeight;

  await new Promise(r => setTimeout(r, 900));
}

/* BOOT SEQUENCE */
async function bootSequence() {
  await typeLine(`Booting REAL_ZAYNE_OS ${globalVersion}...`);
  await new Promise(r => setTimeout(r, 800));

  await loadingDots("Loading modules");
  await loadingDots("Initializing creative engine");
  await loadingDots("Mounting filesystems");
  await loadingDots("Connecting to community node");

  await typeLine("AI subsystem online");
  await new Promise(r => setTimeout(r, 1000));
  await typeLine("Terminal ready.");

  await new Promise(r => setTimeout(r, 800));
  const helpLine = document.createElement("div");
  helpLine.className = "line";
  helpLine.innerHTML = `Type <span class="help-highlight">'help'</span> to begin.`;
  output.appendChild(helpLine);
  termBody.scrollTop = termBody.scrollHeight;
}

/* RZCODE IDE VIEWER */
async function loadRzCode() {
  document.querySelector(".input-line").style.display = "none";
  output.innerHTML = "";
  document.querySelector(".title").textContent = ":RZCODE VIEWER:";

  termBody.innerHTML = `
    <div class="rz-ide-container">
      <div class="rz-ide">
        <div class="rz-ide-sidebar">
          <div class="rz-sidebar-title">EXPLORER</div>
          <div class="rz-file-item active" id="rz-file-1"><span>script.js</span></div>
          <div class="rz-file-item" id="rz-file-2"><span>style.css</span></div>
        </div>
        <div class="rz-ide-main">
          <div class="rz-ide-tabs">
            <div class="rz-tab active" id="rz-tab-1">script.js</div>
            <div class="rz-tab" id="rz-tab-2">style.css</div>
          </div>
          <div class="rz-ide-editor">
            <div class="rz-code-view active-code" id="rz-code-1">
              <div class="rz-code-line"><span class="rz-line-num">1</span><span class="kw">const</span> <span class="var">initApp</span> = <span class="kw">function</span>() {</div>
              <div class="rz-code-line"><span class="rz-line-num">2</span>  <span class="obj">console</span>.<span class="func">log</span>(<span class="str">"System initialized flawlessly."</span>);</div>
              <div class="rz-code-line"><span class="rz-line-num">3</span>};</div>
              <div class="rz-code-line"><span class="rz-line-num">5</span><span class="func">initApp</span>();</div>
            </div>
            <div class="rz-code-view" id="rz-code-2">
              <div class="rz-code-line"><span class="rz-line-num">1</span>.running {</div>
              <div class="rz-code-line"><span class="rz-line-num">2</span> display:flex;</div>
              <div class="rz-code-line"><span class="rz-line-num">5</span> background:#0f172a;</div>
              <div class="rz-code-line"><span class="rz-line-num">6</span>}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  setTimeout(initRzCodeTabs, 100);
}

const fileSystem = {
  "This PC": {
    "Desktop": {},
    "Documents": {
      "notes.txt": "These are your notes...",
      "projects": {}
    },
    "Downloads": {
      "installer.exe": "binary data..."
    },
    "Pictures": {
      "wallpaper.jpg": "image data..."
    },
    "Music": {},
    "Videos": {},
    "System": {
      "Control Panel": {},
      "System32": {}
    }
  }
};

function loadDesktop() {
  document.querySelector(".input-line").style.display = "none";
  document.querySelector(".title").textContent = ":RZOS DESKTOP:";

  termBody.innerHTML = `
<div class="desktop">

  <!-- ICON GRID -->
  <div class="desktop-icons">
    <div class="icon" data-app="explorer">💻<span>This PC</span></div>
    <div class="icon" data-app="recycle">🗑️<span>Recycle Bin</span></div>
  </div>

  <!-- START MENU -->
  <div class="start-menu" id="start-menu">
    <div class="start-grid">
      <div class="start-item" data-app="explorer">📁 Explorer</div>
      <div class="start-item" data-app="notepad">📝 Notepad</div>
    </div>

    <div class="start-recommended">
      <p>Recommended</p>
      <div class="rec-item">readme.txt</div>
    </div>
  </div>

  <!-- TASKBAR -->
  <div class="taskbar">
  <div class="taskbar-left">
    <div class="task-icon" id="start-btn">🪟</div>
  </div>

  <div class="taskbar-center">
    <div class="task-icon" data-app="explorer">📁</div>
    <div class="task-icon" data-app="terminal">💻</div>
  </div>

  <div class="taskbar-right">
    <span id="taskbar-time"></span>
  </div>
</div>

  <div id="window-layer"></div>

</div>
`;

  initDesktop();
}

function initDesktop() {
  const clock = document.getElementById("taskbar-time");
  const startBtn = document.getElementById("start-btn");
  const startMenu = document.getElementById("start-menu");
  const windowLayer = document.getElementById("window-layer");

  let zIndex = 10;

  function updateClock() {
    const now = new Date();
    clock.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
  setInterval(updateClock, 1000);
  updateClock();

  // START MENU
  startBtn.onclick = () => startMenu.classList.toggle("open");

  document.addEventListener("click", (e) => {
    if (!startBtn.contains(e.target) && !startMenu.contains(e.target)) {
      startMenu.classList.remove("open");
    }
  });

  // OPEN APP
  function openApp(app) {
    const win = document.createElement("div");
    win.className = "window";
    win.style.top = "100px";
    win.style.left = "100px";
    win.style.zIndex = zIndex++;

    let content = "";

    if (app === "explorer") {
  content = "";
}

    if (app === "terminal") {
  content = `
    <div class="mini-terminal">
      <div class="mini-output"></div>
      <input class="mini-input" placeholder="type command..." />
    </div>
  `;
}

    if (app === "terminal") {
  const input = win.querySelector(".mini-input");
  const output = win.querySelector(".mini-output");

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const cmd = input.value;
      output.innerHTML += `<div>> ${cmd}</div>`;

      if (cmd === "help") {
        output.innerHTML += "<div>dir | echo | clear</div>";
      } else if (cmd === "dir") {
        output.innerHTML += "<div>Documents Downloads Pictures</div>";
      } else if (cmd.startsWith("echo ")) {
        output.innerHTML += `<div>${cmd.slice(5)}</div>`;
      } else if (cmd === "clear") {
        output.innerHTML = "";
      } else {
        output.innerHTML += "<div>Unknown command</div>";
      }

      input.value = "";
    }
  });
}
    
    if (app === "notepad") {
      content = `<textarea class="notepad"></textarea>`;
    }

    win.innerHTML = `
      <div class="window-header">
        <span>${app}</span>
        <div class="window-controls">
          <span class="close">✕</span>
        </div>
      </div>
      <div class="window-body">${content}</div>
    `;

    // Close
    win.querySelector(".close").onclick = () => win.remove();

    // Focus
    win.addEventListener("mousedown", () => {
      win.style.zIndex = zIndex++;
    });

    makeDraggable(win);

    windowLayer.appendChild(win);
  }

  if (app === "explorer") {
  const explorer = createExplorer();
  win.querySelector(".window-body").appendChild(explorer);
}

  // ICON CLICK
  document.querySelectorAll("[data-app]").forEach(el => {
    el.addEventListener("dblclick", () => openApp(el.dataset.app));
    el.addEventListener("click", () => openApp(el.dataset.app));
  });
}

function makeDraggable(win) {
  const header = win.querySelector(".window-header");

  let offsetX = 0, offsetY = 0, dragging = false;

  header.addEventListener("mousedown", (e) => {
    dragging = true;
    offsetX = e.clientX - win.offsetLeft;
    offsetY = e.clientY - win.offsetTop;
  });

  document.addEventListener("mousemove", (e) => {
    if (!dragging) return;
    win.style.left = (e.clientX - offsetX) + "px";
    win.style.top = (e.clientY - offsetY) + "px";
  });

  document.addEventListener("mouseup", () => dragging = false);
}

function createExplorer(startPath = ["This PC"]) {
  let currentPath = [...startPath];

  const container = document.createElement("div");
  container.className = "explorer";

  const pathBar = document.createElement("div");
  pathBar.className = "explorer-path";

  const content = document.createElement("div");
  content.className = "explorer-content";

  function getFolder(path) {
    return path.reduce((acc, key) => acc[key], fileSystem);
  }

  function render() {
    const folder = getFolder(currentPath);

    pathBar.innerHTML = currentPath.join(" / ");
    content.innerHTML = "";

    // BACK BUTTON
    if (currentPath.length > 1) {
      const back = document.createElement("div");
      back.className = "file folder";
      back.textContent = "⬅ Back";
      back.onclick = () => {
        currentPath.pop();
        render();
      };
      content.appendChild(back);
    }

    Object.keys(folder).forEach(name => {
      const item = document.createElement("div");
      item.className = "file";

      const isFolder = typeof folder[name] === "object";

      item.innerHTML = `${isFolder ? "📁" : "📄"} ${name}`;

      item.onclick = () => {
        if (isFolder) {
          currentPath.push(name);
          render();
        } else {
          alert(folder[name]); // open file
        }
      };

      content.appendChild(item);
    });
  }

  container.appendChild(pathBar);
  container.appendChild(content);

  render();

  return container;
}

function initRzCodeTabs() {
  const tabs = document.querySelectorAll(".rz-tab");
  const codeViews = document.querySelectorAll(".rz-code-view");
  const fileItems = document.querySelectorAll(".rz-file-item");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      codeViews.forEach(cv => cv.classList.remove("active-code"));
      tab.classList.add("active");
      codeViews[index].classList.add("active-code");
    });
  });

  fileItems.forEach((fileItem, index) => {
    fileItem.addEventListener("click", () => {
      fileItems.forEach(fi => fi.classList.remove("active"));
      tabs.forEach(t => t.classList.remove("active"));
      codeViews.forEach(cv => cv.classList.remove("active-code"));
      fileItem.classList.add("active");
      tabs[index].classList.add("active");
      codeViews[index].classList.add("active-code");
    });
  });
}

/* INITIATE BUTTON */
if (initBtn) {
  initBtn.addEventListener("click", async () => {
    initScreen.style.display = "none";

    try {
      const response = await fetch("version.txt");
      const versionRaw = await response.text();
      globalVersion = versionRaw.trim() || "v1.0.0";
    } catch (e) {
      globalVersion = "v1.0.0";
    }

    await loginSequence();
    await bootSequence();
  });
}

/* COMMAND SYSTEM */
if (input && output && termBody) {
  input.addEventListener("keydown", async function (e) {
    if (e.key === "ArrowUp") {
      if (historyCommands.length > 0) {
        historyIndex--;
        if (historyIndex < 0) historyIndex = 0;
        input.value = historyCommands[historyIndex];
      }
      return;
    }

    if (e.key === "ArrowDown") {
      if (historyCommands.length > 0) {
        historyIndex++;
        if (historyIndex >= historyCommands.length) {
          historyIndex = historyCommands.length;
          input.value = "";
        } else {
          input.value = historyCommands[historyIndex];
        }
      }
      return;
    }

    if (e.key === "Enter") {
  const rawVal = input.value.trim().toLowerCase();
  const val = commandAliases[rawVal] || rawVal;

  if (rawVal !== "") {
    historyCommands.push(rawVal);
    historyIndex = historyCommands.length;
  }

  const history = document.createElement("div");
  history.className = "line";
  history.innerHTML = `<span class="prompt">zaynes@therealspace:~$</span> ${rawVal}`;
  output.appendChild(history);
  input.value = "";

  // SPECIAL CASES
  if (val === "clear") {
    output.innerHTML = "";
    termBody.scrollTop = termBody.scrollHeight;
    return;
  }

  if (val === "open rzcode" || val === "rzcode") {
    await runCommand("rzcode");
    loadRzCode();
    return;
  }

  if (val === "open-desktop") {
  await runCommand("open-desktop");
  await typeLine("[+] Launching desktop environment...");
  await loadingDots("Rendering UI", 1200);
  loadDesktop();
  return;
 }    

  // TRY HACKER COMMANDS FIRST (commands.js)
  const hackerHandled = await runCommand(val);
  if (hackerHandled) {
    termBody.scrollTop = termBody.scrollHeight;
    return;
  }

  // PERSONAL COMMANDS FALLBACK
  switch(val) {
    case "help":
      await typeLine("about | skills | gaming | music | outdoors | coding");
      await typeLine("content | community | collabs | support | studio | ski | social");
      await typeLine("Type 'hidden' for hacker commands...");
      break;
      
    case "about":
      await typeLine("Zayne — Gamer, Producer, Coder, Outdoor Enthusiast.");
      break;
      
    case "skills":
      await typeLine("HTML • CSS • JavaScript • Discord Bots • Music Production • Raspberry PI");
      break;
      
    case "gaming":
      await typeLine("Fortnite/Development, GTA V, Roblox/Development, Minecraft/Development");
      break;
      
    case "music":
      await typeLine("Beatboxing + Producing Hip-Hop / Phonk / Electronic.");
      break;
      
    case "outdoors":
      await typeLine("Skiing • Hiking • Fishing • Camping • Sports.");
      break;
      
    case "coding":
      await typeLine("Discord Bots, Raspberry PI/Robotics, Experimental Tools.");
      break;
      
    case "hidden":
      await typeLine("sys flush | net breach | virus installer | grade changer");
      await typeLine("multi breach --all | root override | core sweep");
      break;
      
    default:
      await typeLine(`command not found dummy: ${rawVal}`);
  }

  termBody.scrollTop = termBody.scrollHeight;
}
  });

  termBody.addEventListener("click", () => input.focus());
}

/* 3D DOM viewer trigger */
function runDom3DViewer() {
  const SHOW_SIDES = false;
  const COLOR_SURFACE = true;
  const COLOR_RANDOM = false;
  const COLOR_HUE = 190;
  const MAX_ROTATION = 180;
  const THICKNESS = 20;
  const DISTANCE = 10000;

  function getRandomColor() {
    const hue = Math.floor(Math.random() * 360);
    const saturation = 50 + Math.floor(Math.random() * 30);
    const lightness = 40 + Math.floor(Math.random() * 30);
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }

  const getDOMDepth = element =>
    [...element.children].reduce((max, child) => Math.max(max, getDOMDepth(child)), 0) + 1;

  const domDepthCache = getDOMDepth(document.body);
  const getColorByDepth = (depth, hue = 0, lighten = 0) =>
    `hsl(${hue}, 75%, ${Math.min(10 + depth * (1 + 60 / domDepthCache), 90) + lighten}%)`;

  const body = document.body;
  body.style.overflow = "visible";
  body.style.transformStyle = "preserve-3d";
  body.style.perspective = DISTANCE;

  const perspectiveOriginX = window.innerWidth / 2;
  const perspectiveOriginY = window.innerHeight / 2;
  body.style.perspectiveOrigin = body.style.transformOrigin = `${perspectiveOriginX}px ${perspectiveOriginY}px`;

  traverseDOM(body, 0, 0, 0);

  document.addEventListener("mousemove", event => {
    const rotationY = MAX_ROTATION * (1 - event.clientY / window.innerHeight) - MAX_ROTATION / 2;
    const rotationX = MAX_ROTATION * event.clientX / window.innerWidth - MAX_ROTATION / 2;
    body.style.transform = `rotateX(${rotationY}deg) rotateY(${rotationX}deg)`;
  });

  function createSideFaces(element, color) {
    if (!SHOW_SIDES) return;

    const width = element.offsetWidth;
    const height = element.offsetHeight;
    const fragment = document.createDocumentFragment();

    const createFace = ({ width, height, transform, transformOrigin, top, left, right, bottom }) => {
      const face = document.createElement("div");
      face.className = "dom-3d-side-face";
      Object.assign(face.style, {
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
        position: "absolute",
        width: `${width}px`,
        height: `${height}px`,
        background: color,
        transform,
        transformOrigin,
        overflow: "hidden",
        willChange: "transform",
        top,
        left,
        right,
        bottom
      });
      fragment.appendChild(face);
    };

    createFace({
      width,
      height: THICKNESS,
      transform: `rotateX(-270deg) translateY(${-THICKNESS}px)`,
      transformOrigin: "top",
      top: "0px",
      left: "0px"
    });

    createFace({
      width: THICKNESS,
      height,
      transform: "rotateY(90deg)",
      transformOrigin: "left",
      top: "0px",
      left: `${width}px`
    });

    createFace({
      width,
      height: THICKNESS,
      transform: `rotateX(-90deg) translateY(${THICKNESS}px)`,
      transformOrigin: "bottom",
      bottom: "0px",
      left: "0px"
    });

    createFace({
      width: THICKNESS,
      height,
      transform: `translateX(${-THICKNESS}px) rotateY(-90deg)`,
      transformOrigin: "right",
      top: "0px",
      left: "0px"
    });

    element.appendChild(fragment);
  }

  function traverseDOM(parentNode, depthLevel, offsetX, offsetY) {
    for (let children = parentNode.childNodes, childrenCount = children.length, i = 0; i < childrenCount; i++) {
      const childNode = children[i];
      if (!(childNode.nodeType === 1 && !childNode.classList.contains("dom-3d-side-face"))) continue;

      const color = COLOR_RANDOM ? getRandomColor() : getColorByDepth(depthLevel, COLOR_HUE, -5);
      Object.assign(childNode.style, {
        transform: `translateZ(${THICKNESS}px)`,
        overflow: "visible",
        backfaceVisibility: "hidden",
        isolation: "auto",
        transformStyle: "preserve-3d",
        backgroundColor: COLOR_SURFACE ? color : getComputedStyle(childNode).backgroundColor,
        willChange: "transform"
      });

      let updatedOffsetX = offsetX;
      let updatedOffsetY = offsetY;
      if (childNode.offsetParent === parentNode) {
        updatedOffsetX += parentNode.offsetLeft;
        updatedOffsetY += parentNode.offsetTop;
      }
      createSideFaces(childNode, color);
      traverseDOM(childNode, depthLevel + 1, updatedOffsetX, updatedOffsetY);
    }
  }
}

/* Wire terminal header buttons */
document.addEventListener("DOMContentLoaded", () => {
  const closeBtn = document.getElementById("btn-close");
  const minimizeBtn = document.getElementById("btn-minimize");
  const maximizeBtn = document.getElementById("btn-maximize");

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      runDom3DViewer();
    });
  }

  if (minimizeBtn) {
    minimizeBtn.addEventListener("click", () => {
      const term = document.querySelector(".terminal-window, .code-window");
      if (term) term.style.display = "none";
    });
  }

  if (maximizeBtn) {
    maximizeBtn.addEventListener("click", () => {
      const term = document.querySelector(".terminal-window, .code-window");
      if (!term) return;
      if (term.dataset.maximized === "1") {
        term.style.width = "";
        term.style.maxWidth = "800px";
        term.style.height = "";
        term.dataset.maximized = "0";
      } else {
        term.style.maxWidth = "none";
        term.style.width = "100vw";
        term.style.height = "100vh";
        term.dataset.maximized = "1";
      }
    });
  }
});
