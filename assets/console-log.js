// LOAD STATE FROM STORAGE
const savedAccess = localStorage.getItem('zayne_access');

const state = {
  overloaded: false,
  theme: 'default',
  accessLevel: savedAccess || 'guest'
};

// ASCII BANNER
const banner = `
████████╗██╗  ██╗███████╗   ██████╗ ███████╗ █████╗ ██╗        ███████╗ █████╗ ██╗   ██╗███╗   ██╗███████╗
╚══██╔══╝██║  ██║██╔════╝   ██╔══██╗██╔════╝██╔══██╗██║        ╚══███╔╝██╔══██╗╚██╗ ██╔╝████╗  ██║██╔════╝
   ██║   ███████║█████╗     ██████╔╝█████╗  ███████║██║          ███╔╝ ███████║ ╚████╔╝ ██╔██╗ ██║█████╗  
   ██║   ██╔══██║██╔══╝     ██╔══██╗██╔══╝  ██╔══██║██║         ███╔╝  ██╔══██║  ╚██╔╝  ██║╚██╗██║██╔══╝  
   ██║   ██║  ██║███████╗   ██║  ██║███████╗██║  ██║███████╗   ███████╗██║  ██║   ██║   ██║ ╚████║███████╗
   ╚═╝   ╚═╝  ╚═╝╚══════╝   ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚══════╝   ╚══════╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═══╝╚══════╝
`;

const intro = `
╔═ SYSTEM BOOT ═══════════════════╗
║ Welcome to theRealZayne.dev
║ Status        ⇒ ONLINE
║ Security      ⇒ QUESTIONABLE 😈
║ Mode          ⇒ CREATIVE CHAOS
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

// BOOT SEQUENCE (feels intentional now)
styledLog(banner);

setTimeout(() => {
  styledLog(intro);

  console.log("%cYou found the console. That wasn’t an accident.", "color: #ff00ff;");
  console.log("%cTry zayne.help()", "color: #00ffcc;");
}, 300);

// FAKE LOADING
function fakeLoad(callback) {
  let i = 0;
  const interval = setInterval(() => {
    console.log(`Loading... ${i}%`);
    i += Math.floor(Math.random() * 20);

    if (i >= 100) {
      clearInterval(interval);
      console.log("Done.");
      callback();
    }
  }, 200);
}

// COMMAND SYSTEM
window.zayne = {
  help() {
    console.log(`
Available commands:

zayne.about()
zayne.projects()
zayne.hack()
zayne.overload()
zayne.clear()
zayne.theme('matrix')
zayne.unlock()
    `);
  },

  about() {
    console.log(`
You’re looking at a custom-built interactive portfolio.

This isn't just a site.
It's a system.

Explore it.
Break it.
    `);
  },

  projects() {
    console.log("Loading projects...");
    fakeLoad(() => {
      console.log("→ Discord Bots");
      console.log("→ Web Experiments");
      console.log("→ AI Integrations");
    });
  },

  clear() {
    console.clear();
    styledLog(banner);
  },

  hack() {
    console.log("Injecting into mainframe...");
    setTimeout(() => console.log("Bypassing security..."), 400);
    setTimeout(() => {
      console.log("Access granted.");
      state.accessLevel = "admin";
      localStorage.setItem('zayne_access', 'admin');
    }, 1000);
  },

  overload() {
    state.overloaded = true;

    let count = 0;
    const spam = setInterval(() => {
      console.log(`⚠ SYSTEM OVERLOAD ${Math.random().toString(36).slice(2)}`);
      count++;

      if (count > 40) {
        clearInterval(spam);
        console.log("System stabilized...");
        state.overloaded = false;
      }
    }, 50);
  },

  theme(mode) {
    if (mode === 'matrix') {
      console.log("%cEntering MATRIX mode...", "color: #00ff00");
    } else {
      console.log("Unknown theme.");
    }
  },

  unlock() {
    if (state.accessLevel === "admin") {
      console.log("🔓 Developer tools unlocked.");
      
      zayne.edit = function () {
        console.log("You now control the system... or do you?");
      };

    } else {
      console.log("Access denied.");
    }
  }
};

// PERSONALITY / EASTER EGGS
setTimeout(() => {
  console.log("%cHey… you weren’t supposed to open this 😐", "color: orange;");
}, 1500);

setTimeout(() => {
  console.log("%cIf you're reading this, you're probably a dev. Respect.", "color: cyan;");
}, 2500);

// DEBUG MODE
if (window.location.hash === "#debug") {
  console.log("Debug mode enabled.");
}

// RANDOM GLITCH
if (Math.random() > 0.7) {
  console.log("▒░▒▓█ GLITCH █▓▒░▒");
}
