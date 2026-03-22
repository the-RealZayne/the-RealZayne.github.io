// ===== DYNAMIC UTILITIES =====

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

const chance = (percent) => Math.random() * 100 < percent;

// fake generators
const genIP = () => `${rand(10, 255)}.${rand(0,255)}.${rand(0,255)}.${rand(1,254)}`;
const genID = () => Math.random().toString(16).slice(2, 10).toUpperCase();
const genPID = () => rand(1000, 9999);
const genPercent = () => `${rand(10,99)}%`;
const genFiles = () => rand(50, 5000);

// glitch pool (RARE)
const glitchLines = [
  "[??] signal interference detected...",
  "[WARN] memory address undefined",
  "[ERR] stack trace lost...",
  "▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒",
  ">> reality.sys mismatch",
  "!! unknown interrupt vector",
];

export const commands = {
  "sys flush": [
  // Step 1: dynamic text
  [() => `[+] Initializing system flush sequence... v${globalVersion}`, 500],

  // Step 2: glitching
  [() => glitchText("[+] Verifying kernel state..."), 350],

  // Step 3: dynamic kernel confirmation
  [() => "[OK] Kernel stable", 300],

  // Step 4: mapping memory regions
  ["[+] Mapping active memory regions...", 350],

  // Step 5: dynamic number with glitch
  [() => glitchText(`[OK] Regions indexed: ${Math.floor(Math.random() * 50) + 200}`), 300],

  // Step 6: releasing cached resources
  ["[+] Releasing cached resources...", 350],

  // Step 7: flushing memory blocks
  ["[+] Flushing temporary memory blocks...", 350],

  // Step 8: branching example
  [() => {
    if (Math.random() < 0.2) return "[!] Minor system error detected, retrying...";
    return "[+] Purging inactive system references...";
  }, 350],

  // Step 9: clearing buffers
  ["[+] Clearing I/O buffers...", 350],

  // Step 10: virtual memory reset with progress
  [() => progressLine("[+] Resetting virtual memory tables", 1500), "progress"],

  // Step 11–14: incremental progress simulation
  [() => progressLine("[####------] 41%  clearing...", 500), "progress"],
  [() => progressLine("[#######---] 73%  clearing...", 500), "progress"],
  [() => progressLine("[#########-] 92%  clearing...", 500), "progress"],
  [() => progressLine("[##########] 100% complete", 400), "progress"],

  // Step 15–16: final dynamic confirmations
  [() => "[OK] Memory tables reset", 400],
  [() => "[OK] Cache layers cleared", 350],

  // Step 17: glitch + branching end
  [() => {
    if (Math.random() < 0.1) return glitchText("[!] System flush encountered minor hiccup... retrying");
    return "[!] System flush simulation finished.";
  }, 700]
],

"core sweep": [
  ["[+] Scanning CPU cores...", 400],

  // dynamic thread count
  [() => `[OK] Threads mapped: ${rand(4, 16)}`, 300],

  ["[+] Sampling core temperatures...", 350],

  // slight randomness in thermal state
  [() => {
    return chance(90)
      ? "[OK] Thermal range nominal"
      : "[WARN] Thermal variance detected";
  }, 300],

  // dynamic core reporting
  [() => `[+] Core 0: ${chance(95) ? "nominal" : "spike"}`, 200],
  [() => `[+] Core 1: ${chance(95) ? "nominal" : "spike"}`, 200],
  [() => `[+] Core 2: ${chance(95) ? "nominal" : "spike"}`, 200],

  // branching anomaly
  [
    () => {
      if (chance(70)) {
        return [
          ["[!] Core 3: anomaly detected", 300],
          ["[+] Running diagnostic on Core 3...", 400],
          ["[OK] Fault isolated to thread scheduler", 400],
        ];
      } else {
        return [
          ["[OK] Core 3: nominal", 300]
        ];
      }
    },
    0,
    "branch"
  ],

  ["[+] Rebalancing thread load...", 500],
  ["[+] Migrating active threads...", 400],

  // real progress bar (uses your system)
  ["balancing threads", 1200, "progress"],

  // optional glitch moment (handled globally by your engine, no need to force it)
  [() => "[OK] Scheduler stabilized", 400],

  // rare alternate ending
  [
    () => {
      if (chance(10)) {
        return [
          ["[WARN] Minor instability detected post-balance", 400],
          ["[+] Applying secondary stabilization...", 400],
          ["[OK] Stability restored", 400],
        ];
      } else {
        return [
          ["[OK] Core sweep finished.", 600]
        ];
      }
    },
    0,
    "branch"
  ]
],

"net breach": [
  ["[+] Initializing local network probe...", 450],

  [() => `[OK] Hosts discovered: ${rand(3,12)}`, 350],

  [() => `[OK] Gateway resolved: ${genIP()}`, 350],

  ["[+] Attempting tunnel negotiation...", 450],

  [
    () => {
      if (chance(80)) {
        return [
          ["[OK] Secure tunnel established", 300]
        ];
      } else {
        return [
          ["[WARN] Tunnel handshake failed", 300],
          ["[+] Retrying with fallback cipher...", 400],
          ["[OK] Secure tunnel established", 300]
        ];
      }
    },
    0,
    "branch"
  ],

  ["mapping", 900, "progress"],

  ["[OK] Entry points indexed", 400],
  ["[!] Network breach simulation complete.", 700]
],

"mem purge": [
  ["[+] Locating stale memory allocations...", 400],
  ["[+] Indexing heap segments...", 350],

  // dynamic segment count
  [() => `[OK] Segments indexed: ${rand(100, 300)}`, 300],

  ["[+] Analyzing fragmentation...", 350],

  // branching fragmentation level
  [
    () => {
      const levels = ["low", "moderate", "high", "critical"];
      const level = pick(levels);

      if (level === "critical") {
        return [
          [`[WARN] Fragmentation level: ${level}`, 300],
          ["[+] Emergency defragmentation required...", 400],
        ];
      }

      return [
        [`[OK] Fragmentation level: ${level}`, 300]
      ];
    },
    0,
    "branch"
  ],

  ["[+] Reclaiming idle blocks...", 350],
  ["[+] Compressing temporary buffers...", 350],
  ["[+] Clearing swap cache...", 350],
  ["[+] Rewriting memory pointers...", 400],

  // real progress instead of fake bars
  ["reclaiming memory", 1400, "progress"],

  // optional instability branch
  [
    () => {
      if (chance(15)) {
        return [
          ["[WARN] Minor pointer inconsistency detected", 300],
          ["[+] Re-aligning memory pointers...", 400],
          ["[OK] Alignment corrected", 300],
        ];
      }
      return [
        ["[OK] Memory reclamation stable", 300]
      ];
    },
    0,
    "branch"
  ],

  [() => "[OK] Heap integrity restored", 400],

  // rare glitchy ending (your global glitch system will enhance this too)
  [
    () => {
      if (chance(10)) {
        return [
          ["[ERR] Residual memory artifact detected...", 400],
          ["[+] Purging artifact...", 400],
          ["[OK] Artifact removed", 300],
          ["[OK] Memory purge simulation finished.", 700],
        ];
      }
      return [
        ["[OK] Memory purge simulation finished.", 700]
      ];
    },
    0,
    "branch"
  ]
],

"root override": [
  ["[+] Requesting elevated access...", 450],
  ["[+] Verifying authorization token...", 450],

  // token validation (rare failure branch)
  [
    () => {
      if (chance(10)) {
        return [
          ["[WARN] Token signature mismatch", 300],
          ["[+] Attempting fallback validation...", 400],
          ["[OK] Token signature valid (fallback)", 350],
        ];
      }
      return [
        ["[OK] Token signature valid", 350]
      ];
    },
    0,
    "branch"
  ],

  ["[+] Scanning for escalation vectors...", 400],

  // dynamic exploit selection
  [() => {
    const exploits = [
      "SUID binary exploit",
      "Kernel privilege escalation",
      "DirtyPipe variant",
      "LD_PRELOAD injection"
    ];
    return `[OK] Vector found: ${pick(exploits)}`;
  }, 400],

  ["[+] Escalation path found", 300],
  ["[+] Injecting privilege escalation routine...", 500],

  // progress phase (injection)
  ["injecting escalation", 1200, "progress"],

  ["[+] Writing temporary admin permissions...", 500],

  // UID confirmation (tiny variation)
  [() => `[OK] UID set to ${chance(95) ? 0 : "0 (delayed)"}`, 350],

  ["[+] Masking privilege change...", 400],
  ["[+] Cleaning escalation artifacts...", 400],

  // cleanup progress
  ["cleaning traces", 1000, "progress"],

  // possible detection branch
  [
    () => {
      if (chance(15)) {
        return [
          ["[WARN] Security daemon detected unusual activity", 400],
          ["[+] Spoofing process signature...", 400],
          ["[OK] Detection bypassed", 350],
        ];
      }
      return [
        ["[OK] No detection vectors triggered", 300]
      ];
    },
    0,
    "branch"
  ],

  // final result
  [
    () => {
      if (chance(5)) {
        return [
          ["[ERR] Root shell unstable...", 400],
          ["[+] Reinitializing shell...", 400],
          ["[OK] Root shell granted", 400],
        ];
      }
      return [
        ["[OK] Root shell granted", 400]
      ];
    },
    0,
    "branch"
  ],

  ["[!] Root override simulation active.", 700]
],

"trace lock": [
  ["[+] Activating trace monitor...", 400],
  ["[+] Monitoring inbound pings...", 350],
  ["[+] Capturing packet signatures...",350],
  ["[OK] Suspicious activity detected", 350],
  ["[+] Isolating suspicious traffic...", 400],
  ["[+] Locking active route table...", 350],
  ["[+] External trace packets isolated", 300],
  ["[+] Null-routing hostile IPs...", 400],
  ["[+] Sealing network interface...", 400],
  ["[#######---] 82% isolating...", 500],
  ["[#########-] 97% isolating...", 500],
  ["[##########] 100% complete", 400],
  ["[OK] Trace lock simulation finished.", 700] 
],

"pkg meltdown": [
  ["[+] Opening package index...", 350],
  ["[+] Resolving dependencies...", 350],

  [() => `[OK] Dependencies mapped: ${rand(40,120)} packages`, 300],

  [
    () => {
      if (chance(80)) {
        return [
          ["[!] Critical package mismatch detected", 400],
          [() => `[OK] Conflict: libc-core v${rand(2,3)}.${rand(20,35)} vs v${rand(2,3)}.${rand(10,29)}`, 400],
          [() => `[OK] Conflict depth: ${rand(2,6)} layers`, 350]
        ];
      } else {
        return [
          ["[OK] No major conflicts detected", 400],
          ["[+] Minor inconsistencies auto-resolved", 350]
        ];
      }
    },
    0,
    "branch"
  ],

  ["[+] Analyzing dependency tree...", 400],

  ["rolling back packages", 1400, "progress"],

  [
    () => {
      if (chance(85)) {
        return [
          ["[OK] Environment stabilized", 400],
          ["[OK] Package meltdown simulation aborted safely.", 700]
        ];
      } else {
        return [
          ["[WARN] Partial rollback failure", 400],
          ["[+] Retrying stabilization...", 500],
          ["[OK] Environment stabilized", 400]
        ];
      }
    },
    0,
    "branch"
  ]
],

"dark compile": [
  ["[+] Fetching shadow build script...", 400],
  ["[+] Preparing synthetic module graph...", 400],

  [() => `[OK] Nodes linked: ${rand(32,128)}`, 300],

  ["[+] Allocating compile buffers...", 350],

  [
    () => {
      if (chance(75)) {
        return [
          ["[+] Compiling hidden artifacts...", 500]
        ];
      } else {
        return [
          ["[WARN] Artifact corruption detected", 400],
          ["[+] Rebuilding corrupted nodes...", 500],
          ["[OK] Artifacts stabilized", 350]
        ];
      }
    },
    0,
    "branch"
  ],

  ["[+] Obfuscating symbol tables...", 450],

  [
    () => {
      if (chance(70)) {
        return [
          ["[+] Encrypting output binary...", 400]
        ];
      } else {
        return [
          ["[WARN] Encryption fallback engaged", 400],
          ["[+] Switching cipher mode...", 400],
          ["[+] Encrypting output binary...", 400]
        ];
      }
    },
    0,
    "branch"
  ],

  ["building binary", 1400, "progress"],

  [
    () => {
      if (chance(85)) {
        return [
          ["[OK] Binary sealed", 400],
          ["[OK] Dark compile simulation finished.", 700]
        ];
      } else {
        return [
          ["[WARN] Integrity mismatch detected", 400],
          ["[+] Re-sealing binary...", 500],
          ["[OK] Binary sealed", 400]
        ];
      }
    },
    0,
    "branch"
  ]
],

"neural sync": [
  ["[+] Initializing neural interface...", 400],
  ["[+] Mapping input/output channels...", 350],

  [() => `[OK] Channels linked: ${rand(64,256)}`, 300],

  ["[+] Calibrating signal latency...", 350],

  [() => `[OK] Latency: ${rand(1,12)}ms`, 300],

  ["[+] Aligning signal streams...", 350],

  [
    () => {
      if (chance(80)) {
        return [
          ["[+] Synchronizing inference layers...", 400]
        ];
      } else {
        return [
          ["[WARN] Desync detected between layers", 400],
          ["[+] Re-aligning neural pathways...", 500],
          ["[OK] Layers stabilized", 350]
        ];
      }
    },
    0,
    "branch"
  ],

  ["[+] Stabilizing feedback loop...", 400],

  [
    () => {
      if (chance(70)) {
        return [
          ["[+] Reinforcing neural weights...", 400]
        ];
      } else {
        return [
          ["[WARN] Weight instability detected", 400],
          ["[+] Rebalancing weight distribution...", 500],
          ["[OK] Weights stabilized", 350]
        ];
      }
    },
    0,
    "branch"
  ],

  ["synchronizing neural matrix", 1400, "progress"],

  [
    () => {
      if (chance(85)) {
        return [
          ["[OK] Neural sync complete.", 700]
        ];
      } else {
        return [
          ["[WARN] Residual drift detected", 400],
          ["[+] Performing final correction...", 500],
          ["[OK] Neural sync complete.", 700]
        ];
      }
    },
    0,
    "branch"
  ]
],

"quantum fork": [
  ["[+] Preparing multiverse fork...", 450],
  ["[+] Splitting process timeline...", 450],

  [() => `[OK] Branch instances: ${rand(2,5)}`, 350],

  ["[+] Allocating parallel state buffers...", 400],

  [
    () => {
      if (chance(80)) {
        return [["[OK] Parallel instances stable", 350]];
      } else {
        return [
          ["[!] Temporal drift detected", 400],
          ["[+] Correcting phase offset...", 400],
          ["[OK] Timeline stabilized", 350]
        ];
      }
    },
    0,
    "branch"
  ],

  ["synchronizing timelines", 1400, "progress"],

  ["[OK] Quantum fork simulation finished.", 700]
],

"net scan --deep": [
  ["[+] Initializing deep network reconnaissance...", 450],

  [() => `[+] Scanning subnet ${genIP().split('.').slice(0,3).join('.')}.0/24...`, 500],

  [() => `[OK] Hosts discovered: ${rand(3,15)}`, 350],

  ["[+] Resolving MAC addresses...", 350],
  ["[OK] ARP table populated", 300],

  [
    () => {
      if (chance(70)) {
        return [["[+] Fingerprinting discovered hosts...", 500]];
      } else {
        return [
          ["[WARN] Host fingerprint mismatch", 400],
          ["[+] Re-scanning anomalies...", 500]
        ];
      }
    },
    0,
    "branch"
  ],

  ["mapping services", 1400, "progress"],

  ["[OK] Deep scan simulation finished.", 700]
],

"auth brute --target": [
  ["[+] Preparing credential test harness...", 450],

  [() => `[OK] Entries loaded: ${rand(500000,2000000).toLocaleString()}`, 350],

  ["[+] Initializing hash comparison engine...", 400],
  ["[+] Spawning worker threads...", 400],

  ["testing credentials", 1600, "progress"],

  [
    () => {
      if (chance(60)) {
        return [
          ["[OK] Credential match found", 400],
          [() => `user: ${pick(["admin","root","user"])}`, 250]
        ];
      } else {
        return [["[OK] No valid credentials found", 400]];
      }
    },
    0,
    "branch"
  ],

  ["[OK] Authentication brute-force simulation finished.", 700]
],

"shell inject --pid": [
  [() => `[+] Attaching to process ${genPID()}...`, 400],

  ["[OK] Process handle acquired", 350],
  ["[+] Resolving injection vector...", 400],

  ["allocating memory", 1200, "progress"],

  [
    () => {
      if (chance(80)) {
        return [["[OK] Payload injected successfully", 400]];
      } else {
        return [
          ["[WARN] Injection instability detected", 400],
          ["[+] Retrying injection...", 500],
          ["[OK] Payload injected successfully", 400]
        ];
      }
    },
    0,
    "branch"
  ],

  ["[OK] Shell injection simulation finished.", 700]
],

"fs scrape --profile": [
  ["[+] Enumerating profile directories...", 400],

  [() => `[OK] Matches found: ${rand(5,40)}`, 350],

  ["[+] Indexing file metadata...", 400],

  [
    () => {
      if (chance(75)) {
        return [["[+] Compressing matched files...", 500]];
      } else {
        return [
          ["[WARN] File read error", 400],
          ["[+] Skipping corrupted entries...", 400]
        ];
      }
    },
    0,
    "branch"
  ],

  ["archiving data", 1500, "progress"],

  ["[OK] File scrape simulation finished.", 700]
],

"cam hijack --auto": [
  ["[+] Scanning for camera endpoints...", 400],

  [() => `[OK] Streams detected: ${rand(1,5)}`, 350],

  ["[+] Attempting credential injection...", 400],

  [
    () => {
      if (chance(85)) {
        return [["[OK] Access granted", 300]];
      } else {
        return [
          ["[WARN] Access denied", 300],
          ["[+] Retrying with fallback creds...", 400],
          ["[OK] Access granted", 300]
        ];
      }
    },
    0,
    "branch"
  ],

  ["linking stream", 1300, "progress"],

  ["[OK] Camera hijack simulation finished.", 700]
],

"log wipe --stealth": [
  ["[+] Locating log segments...", 400],

  [() => `[OK] Entries matched: ${rand(10,120)}`, 350],

  ["[+] Rewriting cached entries...", 450],
  ["[+] Obfuscating timestamps...", 400],

  ["sanitizing logs", 1400, "progress"],

  [
    () => {
      if (chance(90)) {
        return [["[OK] Log wipe simulation finished.", 700]];
      } else {
        return [
          ["[WARN] Residual trace detected", 400],
          ["[+] Performing deep scrub...", 500],
          ["[OK] Logs sanitized", 400]
        ];
      }
    },
    0,
    "branch"
  ]
],

"multi breach --all": [
  ["[+] Launching composite operation suite...", 500],
  ["[+] Initializing modules...", 400],
  ["[+] Allocating shared resources...", 400],

  ["network recon", 1200, "progress"],
  ["credential testing", 1200, "progress"],
  ["privilege escalation", 1200, "progress"],
  ["data exfiltration", 1200, "progress"],

  [
    () => {
      if (chance(80)) {
        return [["[OK] All modules completed successfully", 500]];
      } else {
        return [
          ["[WARN] One or more modules unstable", 500],
          ["[+] Re-running failed modules...", 700],
          ["[OK] All modules completed successfully", 500]
        ];
      }
    },
    0,
    "branch"
  ],

  ["[+] Cleaning temporary artifacts...", 400],

  ["finalizing operation", 1000, "progress"],

  ["[!] Multi breach simulation finished.", 800]
],

  "virus installer": [
  ["[+] Initializing payload installer...", 400],
  ["[+] Verifying system compatibility...", 400],
  ["[OK]  OS: detected", 250],
  ["[OK]  User: admin", 250],
  ["[OK]  Privileges: elevated", 300],

  ["[+] Downloading payload from secure node...", 500],
  ["     -> node-17.darknet.local", 250],
  ["     -> handshake: AES-256 / RSA-4096", 300],
  ["[OK]  Connection established", 400],
  ["[+]  Payload chunks: 128", 300],
  ["[####------] 32%  receiving...", 350],
  ["[##########] 100%  download complete", 500],

  ["[+] Decrypting payload...", 450],
  ["     key: ********-********-********", 250],
  ["[OK]  Decryption successful", 450],
  ["[+] Scanning for sandbox / VM environment...", 500],
  ["[OK]  No sandbox artifacts detected", 350],
  ["[OK]  Hardware fingerprint accepted", 350],

  ["[+] Installing core modules...", 500],
  ["     -> injector.core", 200],
  ["     -> persistence.daemon", 200],
  ["     -> keyscan.engine", 200],
  ["     -> exfiltrator.stealth", 200],
  ["[OK]  Modules staged", 450],

  ["[+] Writing registry hooks...", 450],
  ["[OK]  Run-on-boot registered", 350],
  ["[OK]  Startup entry masked as \"System Audio Service\"", 500],

  ["[+] Injecting into running processes...", 500],
  ["     target: explorer.exe          [INJECTED]", 300],
  ["     target: browser.exe           [INJECTED]", 300],
  ["     target: systemd (pid 1)       [INJECTED]", 350],

  ["[+] Enumerating files for encryption...", 500],
  ["     /home/user/Documents          [4123 files]", 300],
  ["     /home/user/Desktop            [238 files]", 300],
  ["     /home/user/Pictures           [938 files]", 300],

  ["[+] Generating encryption keys...", 450],
  ["[OK]  Public key stored remotely", 350],
  ["[OK]  Local key destroyed", 350],

  ["[+] Encrypting user data...", 500],
  ["[##--------] 17%  processing...", 350],
  ["[#####-----] 54%  processing...", 350],
  ["[#########-] 93%  processing...", 350],
  ["[##########] 100% complete", 500],

  ["[+] Establishing command & control channel...", 500],
  ["     -> beacon sent to 185.231.***.***", 300],
  ["[OK]  C2 handshake acknowledged", 350],
  ["[OK]  Host registered: ID=HX-9F2A-7C", 450],

  ["[!] Installation complete.", 500],
  ["[!] All personal files have been encrypted.", 500],
  ["[!] To recover your data, send 100.000000 BTC to the displayed wallet address.", 700],
  ["wallet: bc1Q-XXXX-XXXX-XXXX-XXXX", 700],
  ["Press ENTER to acknowledge and close this window...", 900]
],

  "grade changer": [
  ["$ db-connect --target gradebook.university.local --as admin", 500],

  ["[+] Resolving gradebook.university.local...", 400],
  ["[OK]  Host found: 10.24.7.13", 350],
  ["[+] Opening TLS tunnel...", 400],
  ["[OK]  Handshake complete (TLS1.3, AES-256-GCM)", 450],

  ["[+] Probing authentication endpoints...", 500],
  ["     /api/v1/auth/login           [FOUND]", 250],
  ["     /api/v1/auth/admin-login     [FOUND]", 250],
  ["     /api/v1/grades/export        [FOUND]", 250],

  ["[+] Checking for misconfigured admin route...", 500],
  ["     /api/v1/admin/grades         [EXPOSED]", 350],
  ["[!]  Admin endpoint accessible without MFA", 450],

  ["[+] Attempting SQLi on admin login...", 500],
  ["     payload: ' OR 1=1-- ", 350],
  ["[OK]  Bypass successful", 450],
  ["[OK]  Session token: 9f27c1d9-*****-*****-*****", 450],

  ["[+] Fetching student record...", 500],
  ["     student_id: 20251847", 250],
  ["     name      : DOE, JANE", 250],
  ["[OK]  Record loaded", 400],

  ["Current grades:", 350],
  ["     MATH-201   : 67.3%   (D)", 200],
  ["     CS-210     : 72.5%   (C-)", 200],
  ["     HIST-150   : 81.0%   (B-)", 200],
  ["     PHYS-110   : 58.9%   (F)", 250],

  ["[+] Cloning grade table → backup_grades_2026_03_20...", 500],
  ["[OK]  Backup created (rows: 3,284)", 450],

  ["[+] Elevating all failing and borderline grades...", 500],
  ["     Rule 1: any grade < 60.0 → 92.0 (A-)", 350],
  ["     Rule 2: any grade < 75.0 → 89.0 (B+)", 350],

  ["Applying rules to student_id=20251847...", 500],
  ["     MATH-201   : 67.3%  → 89.0%   (B+)", 250],
  ["     CS-210     : 72.5%  → 89.0%   (B+)", 250],
  ["     PHYS-110   : 58.9%  → 92.0%   (A-)", 300],
  ["[OK]  Local changes staged", 450],

  ["[+] Patching database...", 500],
  ["[#####-----] 51% writing rows...", 350],
  ["[##########] 100% committed", 500],

  ["Updated grades:", 350],
  ["     MATH-201   : 89.0%   (B+)", 200],
  ["     CS-210     : 89.0%   (B+)", 200],
  ["     HIST-150   : 81.0%   (B-)", 200],
  ["     PHYS-110   : 92.0%   (A-)", 250],

  ["[+] Invalidating audit logs for this session...", 500],
  ["[OK]  Audit trail sanitized", 500],
  ["[OK]  Disconnected from gradebook.university.local", 500],

  ["[!] Grade adjustment simulation complete.", 600],
  ["[!] Changes visible on student portal in ~5 minutes.", 700]
],

  "net hack": [
  ["$ net scan --deep", 400],

  ["[+] Initializing deep network reconnaissance...", 400],
  ["[+] Scanning subnet: 192.168.0.0/24", 400],
  ["     host 192.168.0.1    →  open ports: 22, 80, 443", 250],
  ["     host 192.168.0.12   →  open ports: 445, 3389", 250],
  ["     host 192.168.0.23   →  open ports: 21, 8080", 250],

  ["[+] Running fingerprinting on discovered hosts...", 400],
  ["     192.168.0.1   →  device: router (Linux)", 250],
  ["     192.168.0.12  →  device: workstation (Windows)", 250],
  ["     192.168.0.23  →  device: NAS (Custom OS)", 250],

  ["[+] Exporting scan report to /tmp/netscan_$(date +%s).log", 400],
  ["[OK] Scan complete. Hosts discovered: 8, vulnerabilities: 12 (simulated)", 500]
],

  "force login": [
  ["$ auth brute --target login.server.local", 400],

  ["[+] Target: login.server.local:443", 400],
  ["[+] Loading password dictionary: rockyou-supreme.txt (1,234,567 entries)", 500],
  ["[+] Starting distributed attack using 16 worker threads...", 500],

  ["[>] Attempts: 1,000      Rate: 250 req/s   Status: RUNNING", 300],
  ["[>] Attempts: 25,000     Rate: 260 req/s   Status: RUNNING", 300],
  ["[>] Attempts: 100,000    Rate: 270 req/s   Status: RUNNING", 300],

  ["[!] Possible credential match detected:", 400],
  ["     user: admin", 250],
  ["     pass: winter2026!", 300],

  ["[+] Verifying credentials...", 400],
  ["[OK] Login successful. Session token: 7a9f3e0b-****-****-****-************", 500],
  ["[+] Attack halted. Credentials harvested.", 500]
],

  "inject shell": [
  ["$ shell inject --pid 1342", 400],

  ["[+] Attaching to process 1342...", 400],
  ["[OK]  Process: browser.exe (x64)", 400],

  ["[+] Resolving injection vectors...", 400],
  ["     -> remote thread", 250],
  ["     -> shellcode stub", 250],

  ["[+] Allocating remote memory...", 400],
  ["[OK]  4096 bytes reserved at 0x7ffeDEAD0000", 450],

  ["[+] Writing payload to remote process...", 400],
  ["[OK]  4096/4096 bytes written", 450],

  ["[+] Creating remote thread at 0x7ffeDEAD0100...", 400],
  ["[OK]  Thread started (tid: 4928)", 450],

  ["[!] Interactive shell established inside process 1342", 500],
  ["type 'exit' to detach", 600]
],

  "scrape data": [
  ["$ fs scrape --profile student01", 400],

  ["[+] Enumerating home directory for user: student01", 400],
  ["     /home/student01/Documents      [154 files]", 250],
  ["     /home/student01/Downloads      [89 files]", 250],
  ["     /home/student01/Desktop        [23 files]", 250],

  ["[+] Searching for sensitive patterns:", 400],
  ["     keywords: \"password\", \"grades\", \"bank\", \"secret\"", 350],

  ["[OK]  Candidate files:", 400],
  ["     - passwords.txt", 250],
  ["     - grades_backup.xlsx", 250],
  ["     - bank_statement_2025.pdf", 250],

  ["[+] Compressing and encrypting archive...", 400],
  ["     archive: student01_data.enc", 300],
  ["[OK]  Archive created (52.3 MB), key stored remotely (simulated)", 500]
],

  "camera hack": [
  ["$ cam hijack --auto", 400],

  ["[+] Scanning for RTSP/ONVIF endpoints...", 400],
  ["     192.168.0.15:554  →  CAMERA-LOBBY", 250],
  ["     192.168.0.16:554  →  CAMERA-HALL", 250],

  ["[+] Attempting default credential login (admin/admin)...", 400],
  ["     CAMERA-LOBBY  →  [OK]", 250],
  ["     CAMERA-HALL   →  [OK]", 250],

  ["[+] Forcing stream reroute to local viewer...", 400],
  ["[OK]  Stream proxy active on localhost:8554", 450],

  ["[!] Live feeds hijacked (simulation only).", 500],
  ["Press CTRL+C to release feeds.", 600]
],

  "full wipe": [
  ["$ full wipe --stealth", 400],

  ["[+] Locating security logs...", 400],
  ["     /var/log/auth.log", 250],
  ["     /var/log/syslog", 250],
  ["     /var/log/nginx/access.log", 250],

  ["[+] Filtering entries related to this session...", 400],
  ["     found: 37 entries", 300],

  ["[+] Rewriting IPs, timestamps, and user agents...", 400],
  ["[OK]  Obfuscation pass complete", 450],

  ["[+] Compacting and re-indexing logs...", 400],
  ["[OK]  Log integrity checks passed (fake)", 450],

  ["[!] Trace for current session effectively erased (simulated).", 600]
],

  "breach all": [
  ["$ breach all --all", 400],

  ["[+] Launching composite attack suite:", 400],
  ["     1) Network reconnaissance", 250],
  ["     2) Credential harvesting", 250],
  ["     3) Privilege escalation", 250],
  ["     4) Data exfiltration", 250],

  ["[+] Running modules in parallel...", 500],

  ["[1] net-recon       → completed (hosts: 24)", 300],
  ["[2] cred-harvest    → completed (valid creds: 3)", 300],
  ["[3] priv-esc        → completed (root/admin gained)", 300],
  ["[4] data-exfil      → completed (archive: 2.4 GB)", 300],

  ["[+] Uploading archive to remote node...", 500],
  ["[##########] 100% complete", 500],

  ["[!] Breach simulation finished. Target fully compromised (in theory).", 700]
],

  

  "rzcode": [
    ["Loading RZ Code IDE...", 800]
  ]
};

export async function runCommand(commandName, writeLine) {
  const cmd = commands[commandName];
  if (!cmd) return;

  for (let step of cmd) {
    let [text, delay = 300, type] = step;

    // ===== DYNAMIC VALUES =====
    if (typeof text === "function") {
      text = text();
    }

    // ===== GLITCH INJECTION (VERY RARE) =====
    if (chance(2)) {
      await writeLine(pick(glitchLines));
    }

    // ===== BRANCHING SUPPORT =====
    if (type === "branch") {
      const result = text(); // returns array of steps
      await runInline(result, writeLine);
      continue;
    }

    // ===== PROGRESS TYPE =====
    if (type === "progress") {
      await runProgress(text, delay, writeLine);
      continue;
    }

    await writeLine(text);
    await sleep(delay);
  }
}

// helper
const sleep = (ms) => new Promise(res => setTimeout(res, ms));

async function runInline(steps, writeLine) {
  for (let s of steps) {
    let [text, delay = 300] = s;
    if (typeof text === "function") text = text();
    await writeLine(text);
    await sleep(delay);
  }
}

async function runProgress(label, duration, writeLine) {
  const steps = 10;
  for (let i = 1; i <= steps; i++) {
    const bar = "#".repeat(i) + "-".repeat(steps - i);
    await writeLine(`[${bar}] ${i * 10}% ${label}...`);
    await sleep(duration / steps);
  }
}

export const commandAliases = {
  "sys flush": "sys flush",
  "core sweep": "core sweep",
  "net breach": "net breach",
  "mem purge": "mem purge",
  "root override": "root override",
  "trace lock": "trace lock",
  "pkg meltdown": "pkg meltdown",
  "dark compile": "dark compile",
  "neural sync": "neural sync",
  "quantum fork": "quantum fork",
  "net scan": "net scan --deep",
  "net scan --deep": "net scan --deep",
  "auth brute": "auth brute --target",
  "auth brute --target": "auth brute --target",
  "shell inject": "shell inject --pid",
  "shell inject --pid": "shell inject --pid",
  "fs scrape": "fs scrape --profile",
  "fs scrape --profile": "fs scrape --profile",
  "cam hijack": "cam hijack --auto",
  "cam hijack --auto": "cam hijack --auto",
  "log wipe": "log wipe --stealth",
  "log wipe --stealth": "log wipe --stealth",
  "multi breach": "multi breach --all",
  "multi breach --all": "multi breach --all",
  "rzcode": "rzcode",
  "virus installer": "virus installer",
  "grade changer": "grade changer",
  "net hack": "net hack",
  "force login": "force login",
  "inject shell": "inject shell",
  "scrape data": "scrape data",
  "camera hack": "camera hack",
  "full wipe": "full wipe",
  "breach all": "breach all",
  "open rzcode": "rzcode"
};

export const hiddenCommands = [
  "sys flush",
  "core sweep",
  "net breach",
  "mem purge",
  "root override",
  "trace lock",
  "pkg meltdown",
  "dark compile",
  "neural sync",
  "quantum fork",
  "net scan --deep",
  "auth brute --target",
  "shell inject --pid",
  "fs scrape --profile",
  "cam hijack --auto",
  "log wipe --stealth",
  "virus installer",
  "grade changer",
  "net hack",
  "force login",
  "inject shell",
  "scrape data",
  "camera hack",
  "full wipe",
  "breach all",
  "multi breach --all"
];
