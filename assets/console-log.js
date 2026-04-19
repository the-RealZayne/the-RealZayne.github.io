// LOAD STATE FROM STORAGE
const savedAccess = localStorage.getItem('zayne_access');
const state = {
  overloaded: false,
  theme: 'default',
  accessLevel: savedAccess || 'guest',
  bannerIntegrity: 100
};

// ASCII BANNER
const banner = `
████████╗██╗  ██╗███████╗   ██████╗ ███████╗ █████╗ ██╗     
╚══██╔══╝██║  ██║██╔════╝   ██╔══██╗██╔════╝██╔══██╗██║     
   ██║   ███████║█████╗     ██████╔╝█████╗  ███████║██║     
   ██║   ██╔══██║██╔══╝     ██╔══██╗██╔══╝  ██╔══██║██║     
   ██║   ██║  ██║███████╗   ██║  ██║███████╗██║  ██║███████╗
   ╚═╝   ╚═╝  ╚═╝╚══════╝   ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚══════╝

          ███████╗ █████╗ ██╗   ██╗███╗   ██╗███████╗
          ╚══███╔╝██╔══██╗╚██╗ ██╔╝████╗  ██║██╔════╝
            ███╔╝ ███████║ ╚████╔╝ ██╔██╗ ██║█████╗  
           ███╔╝  ██╔══██║  ╚██╔╝  ██║╚██╗██║██╔══╝  
          ███████╗██║  ██║   ██║   ██║ ╚████║███████╗
          ╚══════╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═══╝╚══════╝
`;

const intro = `
╔═ SYSTEM BOOT ═══════════════════╗
║ Welcome to theRealZayne.dev
║ Status ⇒ ONLINE
║ Security ⇒ QUESTIONABLE 😈
║ Mode ⇒ CREATIVE CHAOS
╚═════════════════════════════════╝
`;

// STYLED LOGGER
function styledLog(text) {
  const styles = {
    main: 'color: #00ffcc; font-family: monospace;',
    accent: 'color: #ff00ff; font-family: monospace;',
  };
  let final = '';
  let styleArr = [];
  let current = null;

  for (let char of text) {
    const style = char.match(/[╔║═╗╚╝]/) ? 'accent' : 'main';
    if (style !== current) {
      current = style;
      final += '%c';
      styleArr.push(styles[current]);
    }
    final += char;
  }
  console.log(final, ...styleArr);
}

// TYPEWRITER BOOT
function revealBanner(text, done) {
  let output = '';
  let i = 0;
  const interval = setInterval(() => {
    output += text[i];
    console.clear();
    console.log(output);
    i++;
    if (i >= text.length) {
      clearInterval(interval);
      done?.();
    }
  }, 1);
}

// FAKE LOADER
function fakeLoad(callback) {
  let i = 0;
  const interval = setInterval(() => {
    console.log(`Loading... ${i}%`);
    i += Math.floor(Math.random() * 20) + 5;
    if (i >= 100) {
      clearInterval(interval);
      console.log("✅ Done.");
      callback();
    }
  }, 180);
}

// BANNER DEGRADATION
function renderBanner() {
  let output = '';
  for (let char of banner) {
    if (state.bannerIntegrity < 70 && Math.random() > 0.96) {
      output += ['█','▒','░','#','%','░'][Math.floor(Math.random()*6)];
    } else if (state.bannerIntegrity < 40 && Math.random() > 0.88) {
      output += ' ';
    } else {
      output += char;
    }
  }
  console.clear();
  console.log(output);
}

function restoreBanner() {
  state.bannerIntegrity = 100;
  console.clear();
  styledLog(banner);
}

function drainIntegrity(amount = 5) {
  state.bannerIntegrity -= amount;
  if (state.bannerIntegrity < 0) state.bannerIntegrity = 0;
  if (state.bannerIntegrity < 60) renderBanner();
}

// BOOT SEQUENCE
revealBanner(banner, () => {
  styledLog(intro);
  console.log("%cYou found the console. That wasn’t an accident.", "color: #ff00ff;");
  console.log("%cTry %czayne.help()", "color: #00ffcc", "color: #ffff00; font-weight: bold");
});

// ====================== ENHANCED COMMAND SYSTEM ======================
window.zayne = {
  help() {
    drainIntegrity(2);
    console.log(`
╔════════════════════════════════════════════════════╗
║             ZAYNE CONSOLE v1.3 — HELP              ║
╚════════════════════════════════════════════════════╝

Core Commands:
  zayne.about()          → Who is Zayne?
  zayne.projects()       → View active projects
  zayne.skills()         → Technical & creative skills
  zayne.hidden()         → Secret hacker commands
  zayne.clear()          → Restore clean banner
  zayne.restore()        → Full system restore

Hacker / Chaos:
  zayne.hack()           → Simulate mainframe breach
  zayne.breach()         → Trigger security popups
  zayne.multiBreach()    → Mass popup attack
  zayne.virus()          → Fake ransomware
  zayne.overload()       → System overload spam
  zayne.root()           → Fake root access
  zayne.coreSweep()      → Nuclear simulation

Experiences:
  zayne.rzcode()         → Open RZCODE IDE
  zayne.desktop()        → Launch RZOS Desktop
  zayne.windows()        → Windows 11 environment
  zayne.macos()          → macOS environment
  zayne.pcfolio()        → 3D PC-folio
  zayne.games()          → List playable games

Utility:
  zayne.status()         → System status
  zayne.version()        → Console version
  zayne.stop()           → Stop all popups

Type %czayne.hidden()%c for more dangerous commands.
    `, "color: #ffff00", "color: #00ffcc");
  },

  about() {
    drainIntegrity(3);
    console.log(`
Zayne — Multi-disciplinary creator.
Gamer • Music Producer • Web Developer • Outdoor enthusiast.

Building chaotic creative web experiences since 202?.
Current obsession: Retro-futuristic terminals & 3D web experiments.
    `);
  },

  skills() {
    drainIntegrity(4);
    console.log(`
Technical Skills:
  • HTML / CSS / JavaScript (Expert)
  • Discord Bots & Raspberry Pi
  • 3D Web (Three.js / WebGL)
  • Music Production (Hip-Hop / Phonk / Electronic)

Creative Skills:
  • Retro Terminal Aesthetics
  • UI/UX Chaos Design
  • Interactive Storytelling
  • Meme-level Web Experiences
    `);
  },

  projects() {
    drainIntegrity(8);
    console.log("Loading project archive...");
    fakeLoad(() => {
      console.log("→ REAL_ZAYNE_OS Terminal");
      console.log("→ RZCODE IDE Simulator");
      console.log("→ 3D PC-folio Experience");
      console.log("→ ZayneCraft (Minecraft-style web)");
      console.log("→ Interactive Desktop Environment");
      console.log("→ Multiple OS Emulators");
    });
  },

  hidden() {
    drainIntegrity(6);
    console.log(`
⚠️  HIDDEN HACKER COMMANDS  ⚠️

  zayne.breach()       → Trigger security breach popups
  zayne.multiBreach()  → Spawn multiple popups rapidly
  zayne.virus()        → Simulate file encryption
  zayne.root()         → Fake root access granted
  zayne.sysflush()     → Flush system logs
  zayne.coreSweep()    → Nuclear option simulation

Pro tip: Many sync with the main terminal commands.
    `);
  },

  // Hacker Commands
  breach() {
    drainIntegrity(12);
    console.log("⚠️ Initiating security breach simulation...");
    setTimeout(() => {
      if (typeof startPopups === "function") {
        startPopups();
        console.log("✓ Popups deployed. Use zayne.stop() or type 'stop' in terminal.");
      } else {
        console.log("Breach initiated.");
      }
    }, 600);
  },

  multiBreach() {
    drainIntegrity(18);
    console.log("💥 MULTI-BREACH PROTOCOL ENGAGED");
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        if (typeof createPopup === "function") createPopup();
      }, i * 280);
    }
    console.log("Multiple alerts deployed.");
  },

  virus() {
    drainIntegrity(15);
    console.log("🦠 RANSOM MODULE ACTIVATED");
    console.log("Encrypting user files with AES-256...");
    setTimeout(() => console.log("Files locked."), 900);
    setTimeout(() => console.log("💰 Just kidding... or am I?"), 2000);
  },

  root() {
    drainIntegrity(10);
    console.log("🔓 ROOT ACCESS GRANTED");
    console.log("You are now god of this simulation.");
    state.accessLevel = "root";
    localStorage.setItem('zayne_access', 'root');
  },

  sysflush() {
    drainIntegrity(5);
    console.log("Flushing system logs...");
    setTimeout(() => {
      console.clear();
      styledLog(banner);
      console.log("%cSystem logs flushed. Feels cleaner already.", "color: #00ffcc");
    }, 700);
  },

  coreSweep() {
    drainIntegrity(25);
    console.log("☢️ CORE SWEEP INITIATED — THIS ONE HURTS");
    setTimeout(() => console.log("Rewriting kernel memory..."), 600);
    setTimeout(() => console.log("Reality.exe has stopped working."), 1600);
  },

  // Experience Launchers
  rzcode() { 
    console.log("Launching RZCODE IDE..."); 
    if (typeof loadRzCode === "function") loadRzCode(); 
  },

  desktop() { 
    console.log("Booting REAL_ZAYNE_OS Desktop..."); 
    if (typeof loadDesktop === "function") loadDesktop(); 
  },

  windows() { 
    console.log("Switching to Windows 11 environment..."); 
    if (typeof loadWindows === "function") loadWindows(); 
  },

  macos() { 
    console.log("Switching to macOS environment..."); 
    if (typeof loadMacOS === "function") loadMacOS(); 
  },

  pcfolio() { 
    console.log("Entering 3D PC-folio..."); 
    if (typeof loadPCfolio === "function") loadPCfolio(); 
  },

  games() {
    drainIntegrity(3);
    console.log(`
Available Games / Experiences:
  • play-mc          → Minecraft (Eaglercraft)
  • gun-game         → Krunker.io
  • run-jelly        → Jelly Mario
  • play-superhot    → SUPERHOT
  • tiny-town        → Infinite Town
  • black-hole       → WebGL Black Hole
    `);
  },

  status() {
    console.log(`
System Status:
  Access Level     → ${state.accessLevel}
  Overloaded       → ${state.overloaded}
  Banner Integrity → ${state.bannerIntegrity}%
  Theme            → ${state.theme}
    `);
  },

  version() {
    console.log(`REAL_ZAYNE_CONSOLE v1.3 — "Chaos Edition"`);
  },

  clear() {
    restoreBanner();
  },

  restore() {
    restoreBanner();
    console.log("✅ Full system restore complete.");
    state.overloaded = false;
  },

  stop() {
    if (typeof stopPopups === "function") {
      stopPopups();
      console.log("✓ All malicious popups terminated.");
    } else {
      console.log("No popup system detected.");
    }
  },

  // Legacy compatibility
  hack() { this.breach(); },
  overload() { 
    drainIntegrity(15);
    state.overloaded = true;
    let count = 0;
    const spam = setInterval(() => {
      console.log(`⚠ SYSTEM OVERLOAD ${Math.random().toString(36).slice(2).toUpperCase()}`);
      count++;
      if (count > 35) {
        clearInterval(spam);
        console.log("System stabilized... for now.");
        state.overloaded = false;
      }
    }, 60);
  },

  unlock() {
    drainIntegrity(5);
    if (state.accessLevel === "admin" || state.accessLevel === "root") {
      console.log("🔓 Developer mode engaged.");
    } else {
      console.log("Access denied. Run zayne.hack() first.");
    }
  }
};
