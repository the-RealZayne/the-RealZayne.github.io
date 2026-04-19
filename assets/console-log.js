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

// 🔥 TYPEWRITER BOOT
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

// 💥 FAKE LOADER
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

// 💀 BANNER DEGRADATION SYSTEM
function renderBanner() {
  let output = '';

  for (let char of banner) {
    if (state.bannerIntegrity < 70 && Math.random() > 0.97) {
      output += ['█','▒','░','#','%'][Math.floor(Math.random()*5)];
    } else if (state.bannerIntegrity < 40 && Math.random() > 0.9) {
      output += ' ';
    } else {
      output += char;
    }
  }

  console.clear();
  console.log(output);
}

// 🔄 RESTORE SYSTEM
function restoreBanner() {
  state.bannerIntegrity = 100;
  console.clear();
  styledLog(banner);
}

// 📉 CORRUPTION ENGINE
function drainIntegrity(amount = 5) {
  state.bannerIntegrity -= amount;

  if (state.bannerIntegrity < 0) state.bannerIntegrity = 0;

  if (state.bannerIntegrity < 60) {
    renderBanner();
  }
}

// 🚀 BOOT SEQUENCE
revealBanner(banner, () => {

  styledLog(intro);

  console.log("%cYou found the console. That wasn’t an accident.", "color: #ff00ff;");
  console.log("%cTry zayne.help()", "color: #00ffcc;");

});

// 🧠 COMMAND SYSTEM
window.zayne = {

  help() {
    drainIntegrity(2);

    console.log(`
Available commands:

zayne.about()
zayne.projects()
zayne.hack()
zayne.overload()
zayne.clear()
zayne.theme('matrix')
zayne.unlock()
zayne.restore()
    `);
  },

  about() {
    drainIntegrity(3);
    console.log(`Custom interactive portfolio system.`);
  },

  projects() {
    drainIntegrity(8);

    console.log("Loading projects...");
    fakeLoad(() => {
      console.log("→ Discord Bots");
      console.log("→ Web Experiments");
      console.log("→ AI Integrations");
    });
  },

  clear() {
    restoreBanner();
  },

  restore() {
    restoreBanner();
    console.log("System restored.");
  },

  hack() {
    drainIntegrity(10);

    console.log("Injecting into mainframe...");
    setTimeout(() => console.log("Bypassing security..."), 400);
    setTimeout(() => {
      console.log("Access granted.");
      state.accessLevel = "admin";
      localStorage.setItem('zayne_access', 'admin');
    }, 1000);
  },

  overload() {
    drainIntegrity(15);

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
    drainIntegrity(3);

    if (mode === 'matrix') {
      console.log("%cEntering MATRIX mode...", "color: #00ff00");
    }
  },

  unlock() {
    drainIntegrity(5);

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
