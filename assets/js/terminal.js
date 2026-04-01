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
    "Local Disk (C:)": {
      "Program Files": {},
      "Users": {},
      "Windows": {
        "System32": {}
      }
    }
  }
};

function loadDesktop() {
  document.querySelector(".input-line").style.display = "none";
  document.querySelector(".title").textContent = ":RZOS DESKTOP:";

  termBody.innerHTML = `
<div class="desktop">

  <div class="desktop-icons">
    <div class="icon" data-app="explorer">💻<span>This PC</span></div>
    <div class="icon" data-app="recycle">🗑️<span>Recycle Bin</span></div>
  </div>

  <div class="start-menu" id="start-menu">
    <div class="start-grid">
      <div class="start-item" data-app="explorer">📁 Explorer</div>
      <div class="start-item" data-app="terminal">💻 Terminal</div>
      <div class="start-item" data-app="notepad">📝 Notepad</div>
    </div>
  </div>

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

  startBtn.onclick = () => startMenu.classList.toggle("open");

  document.addEventListener("click", (e) => {
  if (!startBtn.contains(e.target) && !startMenu.contains(e.target)) {
    startMenu.classList.remove("open");
  }
});

  function openApp(app) {
    const win = document.createElement("div");
    win.className = "window";
    win.style.top = "100px";
    win.style.left = "100px";
    win.style.zIndex = zIndex++;

    let content = "";

    if (app === "explorer") {
      content = `<div class="explorer-container"></div>`;
    }

    if (app === "terminal") {
      content = `
        <div class="mini-terminal">
          <div class="mini-output"></div>
          <input class="mini-input" placeholder="type command..." />
        </div>
      `;
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

    win.querySelector(".close").onclick = () => win.remove();

    win.addEventListener("mousedown", () => {
      win.style.zIndex = zIndex++;
    });

    makeDraggable(win);
    windowLayer.appendChild(win);

    // ✅ INIT APPS AFTER RENDER

    if (app === "explorer") {
      const explorer = createExplorer();
      win.querySelector(".explorer-container").appendChild(explorer);
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
  }

  document.querySelectorAll("[data-app]").forEach(el => {
  el.addEventListener("dblclick", () => openApp(el.dataset.app));
  el.addEventListener("click", () => {
    if (el.closest(".taskbar")) {
      openApp(el.dataset.app);
    }
  });
});
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

/* MAC OS */
function loadMacOS() {
  document.querySelector(".title").textContent = ":MACOS ENVIRONMENT:";

  termBody.innerHTML = `
    <div class="macos-wrapper">
      <iframe 
        src="https://macos-inky.vercel.app/" 
        class="macos-frame">
      </iframe>
    </div>
  `;
}

/* WINDOWS 11 */
function loadWindows() {
  document.querySelector(".title").textContent = ":WINDOWS 11 ENVIRONMENT:";

  termBody.innerHTML = `
    <div class="windows-wrapper">
      <iframe 
        src="https://windows11-psi-nine.vercel.app/" 
        class="windows-frame">
      </iframe>
    </div>
  `;
}

/* WINDOWS XP */
function loadWinxp() {
  document.querySelector(".title").textContent = ":WINDOWS XP ENVIRONMENT:";

  termBody.innerHTML = `
    <div class="winxp-wrapper">
      <iframe 
        src="https://windows11-psi-nine.vercel.app/" 
        class="winxp-frame">
      </iframe>
    </div>
  `;
}

/* WIN 11 */
function loadWin11() {
  document.querySelector(".title").textContent = ":WIN11 ENVIRONMENT:";

  termBody.innerHTML = `
    <div class="win11-wrapper">
      <iframe 
        src="https://windows11-psi-nine.vercel.app/" 
        class="win11-frame">
      </iframe>
    </div>
  `;
}

/* Ubuntu */
function loadUbuntu() {
  document.querySelector(".title").textContent = ":UBUNTU ENVIRONMENT:";

  termBody.innerHTML = `
    <div class="ubuntu-wrapper">
      <iframe 
        src="https://windows11-psi-nine.vercel.app/" 
        class="windows-frame">
      </iframe>
    </div>
  `;
}

/* YT Web TV */
function loadTV() {
  document.querySelector(".title").textContent = ":LIVE TV:";

  termBody.innerHTML = `
    <div class="tv-wrapper">
      <iframe 
        src="https://channelsurfer.tv/" 
        class="tv-frame">
      </iframe>
    </div>
  `;
}

function loadWebApp(title, url) {
  document.querySelector(".title").textContent = `:${title}:`;

  termBody.innerHTML = `
    <div class="webapp-wrapper">
      <iframe 
        src="${url}" 
        class="webapp-frame"
        onload="this.dataset.loaded = true"
      ></iframe>
    </div>
  `;

  // fallback after delay
  setTimeout(() => {
    const frame = document.querySelector(".webapp-frame");
    if (!frame || !frame.dataset.loaded) {
      window.open(url, "_blank");
    }
  }, 2000);
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

 if (val === "open-windows") {
  await typeLine("[+] Switching to Windows 11...");
  await loadingDots("Saving session", 800);
  await loadingDots("Booting Windows 11 kernel", 1400);

  loadWindows();
  return;
}

if (val === "open-macos") {
  await typeLine("[+] Switching to macOS...");
  await loadingDots("Saving session", 800);
  await loadingDots("Launching macOS Ventura", 1400);

  loadMacOS();
  return;
}

if (val === "open-win11") {
  await typeLine("[+] Switching to Windows 11...");
  await loadingDots("Saving session", 800);
  await loadingDots("Launching Windows 11", 1400);

  loadMacOS();
  return;
}     

if (val === "open-winxp") {
  await typeLine("[+] Switching to Windows XP...");
  await loadingDots("Saving session", 800);
  await loadingDots("Launching Windows XP", 1400);

  loadMacOS();
  return;
}     

if (val === "open-ubuntu") {
  await typeLine("[+] Switching to Ubuntu...");
  await loadingDots("Saving session", 800);
  await loadingDots("Launching Ubuntu", 1400);

  loadMacOS();
  return;
} 

if (val === "view-tv") {
  await typeLine("[+] Launching TV interface...");
  await loadingDots("Connecting to broadcast network", 1200);

  loadTV();
  return;
}

if (val === "open-win93") {
  await typeLine("[+] Booting Windows 93...");
  await loadingDots("Loading retro kernel", 1200);

  loadWebApp("WINDOWS 93", "https://windows93.net/");
  return;
}

if (val === "view-floor") {
  await typeLine("[+] Loading interactive environment...");
  await loadingDots("Rendering floor 796", 1200);

  loadWebApp("FLOOR 796", "https://floor796.com/");
  return;
}

if (val === "open-vscode") {
  await typeLine("[+] Launching VSCode...");
  await loadingDots("Initializing dev environment", 1200);

  loadWebApp("VSCODE", "https://emupedia.net/emupedia-app-vscode/");
  return;
}

if (val === "operating-system") {
  await typeLine("[+] Booting EmuOS...");
  await loadingDots("Mounting virtual disk", 1400);

  loadWebApp("EMU OS", "https://emupedia.net/beta/emuos/");
  return;
}

if (val === "play-mc") {
  await typeLine("[+] Launching Minecraft...");
  await loadingDots("Loading world", 1500);

  loadWebApp("MINECRAFT", "https://eaglercraft.com/play/?version=1.8.8");
  return;
}

if (val === "view-lost") {
  await typeLine("[+] Connecting to LostGamer...");
  await loadingDots("Dropping into unknown location", 1200);

  loadWebApp("LOST GAMER", "https://lostgamer.io/");
  return;
}

if (val === "make-music") {
  await typeLine("[+] Launching music studio...");
  await loadingDots("Loading instruments", 1200);

  loadWebApp("MUSIC STUDIO", "https://signalmidi.app/edit");
  return;
}

if (val === "open-car") {
  await typeLine("[+] Starting engine...");
  await loadingDots("Loading 3D environment", 1200);

  loadWebApp("CAR EXPERIENCE", "https://bruno-simon.com/");
  return;
}

if (val === "view-world") {
  await typeLine("[+] Generating world...");
  await loadingDots("Rendering terrain", 1400);

  loadWebApp("INFINITE WORLD", "https://infinite-world.vercel.app/");
  return;
}

if (val === "black-hole") {
  await typeLine("[+] Initializing gravitational field...");
  await loadingDots("Simulating singularity", 1300);

  loadWebApp("BLACK HOLE", "https://webgl-black-hole.vercel.app/");
  return;
}

if (val === "dont-trip") {
  await typeLine("[+] Entering deep sea environment...");
  await loadingDots("Stabilizing visuals", 1200);

  loadWebApp("AQUARIUM", "https://www.aquarium.ru/en");
  return;
}

if (val === "tiny-town") {
  await typeLine("[+] Generating procedural city...");
  await loadingDots("Spawning buildings", 1200);

  loadWebApp("TINY TOWN", "https://demos.littleworkshop.fr/infinitown");
  return;
}

if (val === "gun-game") {
  await typeLine("[+] Launching FPS engine...");
  await loadingDots("Connecting to server", 1500);

  loadWebApp("KRUNKER", "https://krunker.io/?game=NY:1nwgj");
  return;
}

if (val === "read-story") {
  await typeLine("[+] Opening narrative engine...");
  await loadingDots("Loading story", 1000);

  loadWebApp("STORY MODE", "https://cabbi.bo/");
  return;
}

if (val === "open-record") {
  await typeLine("[+] Loading audio experience...");
  await loadingDots("Spinning record", 1200);

  loadWebApp("RECORD PLAYER", "https://www.overthetinyhills.com/");
  return;
}

if (val === "run-jelly") {
  await typeLine("[+] Launching physics engine...");
  await loadingDots("Warping reality", 1200);

  loadWebApp("JELLY MARIO", "https://jellymar.io/");
  return;
}

if (val === "view-2020") {
  await typeLine("[+] Loading archived chaos...");
  await loadingDots("Replaying 2020", 1300);

  loadWebApp("2020 EXPERIENCE", "https://spite.github.io/fuck-2020/");
  return;
}

if (val === "apps") {
  await typeLine("┌───────────────────────────────┐");
  await typeLine("│      SYSTEM COMMAND INDEX     │");
  await typeLine("└───────────────────────────────┘");

  await typeLine("");
  await typeLine("> OS:");
  await typeLine("  open-desktop | open-macos | open-windows | open-win93 | operating-system");

  await typeLine("");
  await typeLine("> Games:");
  await typeLine("  play-mc | gun-game | run-jelly | tiny-town");

  await typeLine("");
  await typeLine("> Experiences:");
  await typeLine("  black-hole | dont-trip | view-floor | view-2020 | open-car");

  await typeLine("");
  await typeLine("> Tools:");
  await typeLine("  make-music | open-vscode | open-record");

  await typeLine("");
  await typeLine("> Media:");
  await typeLine("  view-tv | view-lost | read-story");

  await typeLine("");
  await typeLine("[Use any command to launch]");
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
