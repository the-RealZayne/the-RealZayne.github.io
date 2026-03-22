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
  [() => `[+] Initializing system flush sequence... v${globalVersion}`, 250],

  // Step 2: glitching
  [() => glitchText("[+] Verifying kernel state..."), 250],

  // Step 3: dynamic kernel confirmation
  [() => "[OK] Kernel stable", 200],

  // Step 4: mapping memory regions
  ["[+] Mapping active memory regions...", 250],

  // Step 5: dynamic number with glitch
  [() => glitchText(`[OK] Regions indexed: ${Math.floor(Math.random() * 50) + 200}`), 300],

  // Step 6: releasing cached resources
  ["[+] Releasing cached resources...", 250],

  // Step 7: flushing memory blocks
  ["[+] Flushing temporary memory blocks...", 250],

  // Step 8: branching example
  [() => {
    if (Math.random() < 0.2) return "[!] Minor system error detected, retrying...";
    return "[+] Purging inactive system references...";
  }, 350],

  // Step 9: clearing buffers
  ["[+] Clearing I/O buffers...", 250],

  // Step 10: virtual memory reset with progress
  [() => progressLine("[+] Resetting virtual memory tables", 1500), "progress"],

  // Step 11–14: incremental progress simulation
  [() => progressLine("[####------] 41%  clearing...", 500), "progress"],
  [() => progressLine("[#######---] 73%  clearing...", 500), "progress"],
  [() => progressLine("[#########-] 92%  clearing...", 500), "progress"],
  [() => progressLine("[##########] 100% complete", 400), "progress"],

  // Step 15–16: final dynamic confirmations
  [() => "[OK] Memory tables reset", 200],
  [() => "[OK] Cache layers cleared", 250],

  // Step 17: glitch + branching end
  [() => {
    if (Math.random() < 0.1) return glitchText("[!] System flush encountered minor hiccup... retrying");
    return "[!] System flush simulation finished.";
  }, 700]
],

"core sweep": [
  ["[+] Scanning CPU cores...", 200],

  // dynamic thread count
  [() => `[OK] Threads mapped: ${rand(4, 16)}`, 300],

  ["[+] Sampling core temperatures...", 250],

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
          ["[!] Core 3: anomaly detected", 200],
          ["[+] Running diagnostic on Core 3...", 200],
          ["[OK] Fault isolated to thread scheduler", 200],
        ];
      } else {
        return [
          ["[OK] Core 3: nominal", 200]
        ];
      }
    },
    0,
    "branch"
  ],

  ["[+] Rebalancing thread load...", 200],
  ["[+] Migrating active threads...", 200],

  // real progress bar (uses your system)
  ["balancing threads", 1200, "progress"],

  // optional glitch moment (handled globally by your engine, no need to force it)
  [() => "[OK] Scheduler stabilized", 200],

  // rare alternate ending
  [
    () => {
      if (chance(10)) {
        return [
          ["[WARN] Minor instability detected post-balance", 200],
          ["[+] Applying secondary stabilization...", 200],
          ["[OK] Stability restored", 200],
        ];
      } else {
        return [
          ["[OK] Core sweep finished.", 200]
        ];
      }
    },
    0,
    "branch"
  ]
],

"net breach": [
  ["[+] Initializing local network probe...", 250],

  [() => `[OK] Hosts discovered: ${rand(3,12)}`, 250],

  [() => `[OK] Gateway resolved: ${genIP()}`, 250],

  ["[+] Attempting tunnel negotiation...", 250],

  [
    () => {
      if (chance(80)) {
        return [
          ["[OK] Secure tunnel established", 300]
        ];
      } else {
        return [
          ["[WARN] Tunnel handshake failed", 200],
          ["[+] Retrying with fallback cipher...", 200],
          ["[OK] Secure tunnel established", 200]
        ];
      }
    },
    0,
    "branch"
  ],

  ["mapping", 900, "progress"],

  ["[OK] Entry points indexed", 200],
  ["[!] Network breach simulation complete.", 200]
],

"mem purge": [
  ["[+] Locating stale memory allocations...", 200],
  ["[+] Indexing heap segments...", 250],

  // dynamic segment count
  [() => `[OK] Segments indexed: ${rand(100, 300)}`, 200],

  ["[+] Analyzing fragmentation...", 250],

  // branching fragmentation level
  [
    () => {
      const levels = ["low", "moderate", "high", "critical"];
      const level = pick(levels);

      if (level === "critical") {
        return [
          [`[WARN] Fragmentation level: ${level}`, 200],
          ["[+] Emergency defragmentation required...", 200],
        ];
      }

      return [
        [`[OK] Fragmentation level: ${level}`, 200]
      ];
    },
    0,
    "branch"
  ],

  ["[+] Reclaiming idle blocks...", 250],
  ["[+] Compressing temporary buffers...", 250],
  ["[+] Clearing swap cache...", 250],
  ["[+] Rewriting memory pointers...", 200],

  // real progress instead of fake bars
  ["reclaiming memory", 1400, "progress"],

  // optional instability branch
  [
    () => {
      if (chance(15)) {
        return [
          ["[WARN] Minor pointer inconsistency detected", 200],
          ["[+] Re-aligning memory pointers...", 200],
          ["[OK] Alignment corrected", 200],
        ];
      }
      return [
        ["[OK] Memory reclamation stable", 200]
      ];
    },
    0,
    "branch"
  ],

  [() => "[OK] Heap integrity restored", 200],

  // rare glitchy ending (your global glitch system will enhance this too)
  [
    () => {
      if (chance(10)) {
        return [
          ["[ERR] Residual memory artifact detected...", 200],
          ["[+] Purging artifact...", 200],
          ["[OK] Artifact removed", 200],
          ["[OK] Memory purge simulation finished.", 200],
        ];
      }
      return [
        ["[OK] Memory purge simulation finished.", 200]
      ];
    },
    0,
    "branch"
  ]
],

"root override": [
  ["[+] Requesting elevated access...", 250],
  ["[+] Verifying authorization token...", 250],

  // token validation (rare failure branch)
  [
    () => {
      if (chance(10)) {
        return [
          ["[WARN] Token signature mismatch", 200],
          ["[+] Attempting fallback validation...", 200],
          ["[OK] Token signature valid (fallback)", 250],
        ];
      }
      return [
        ["[OK] Token signature valid", 250]
      ];
    },
    0,
    "branch"
  ],

  ["[+] Scanning for escalation vectors...", 200],

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

  ["[+] Escalation path found", 200],
  ["[+] Injecting privilege escalation routine...", 200],

  // progress phase (injection)
  ["injecting escalation", 1200, "progress"],

  ["[+] Writing temporary admin permissions...", 200],

  // UID confirmation (tiny variation)
  [() => `[OK] UID set to ${chance(95) ? 0 : "0 (delayed)"}`, 250],

  ["[+] Masking privilege change...", 200],
  ["[+] Cleaning escalation artifacts...", 200],

  // cleanup progress
  ["cleaning traces", 1000, "progress"],

  // possible detection branch
  [
    () => {
      if (chance(15)) {
        return [
          ["[WARN] Security daemon detected unusual activity", 200],
          ["[+] Spoofing process signature...", 200],
          ["[OK] Detection bypassed", 250],
        ];
      }
      return [
        ["[OK] No detection vectors triggered", 200]
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
          ["[ERR] Root shell unstable...", 200],
          ["[+] Reinitializing shell...", 200],
          ["[OK] Root shell granted", 200],
        ];
      }
      return [
        ["[OK] Root shell granted", 200]
      ];
    },
    0,
    "branch"
  ],

  ["[!] Root override simulation active.", 200]
],

"trace lock": [
  ["[+] Activating trace monitor...", 200],
  ["[+] Monitoring inbound pings...", 250],
  ["[+] Capturing packet signatures...",250],
  ["[OK] Suspicious activity detected", 250],
  ["[+] Isolating suspicious traffic...", 200],
  ["[+] Locking active route table...", 250],
  ["[+] External trace packets isolated", 200],
  ["[+] Null-routing hostile IPs...", 200],
  ["[+] Sealing network interface...", 200],
  ["[#######---] 82% isolating...", 200],
  ["[#########-] 97% isolating...", 200],
  ["[##########] 100% complete", 200],
  ["[OK] Trace lock simulation finished.", 200] 
],

"pkg meltdown": [
  ["[+] Opening package index...", 250],
  ["[+] Resolving dependencies...", 250],

  [() => `[OK] Dependencies mapped: ${rand(40,120)} packages`, 200],

  [
    () => {
      if (chance(80)) {
        return [
          ["[!] Critical package mismatch detected", 200],
          [() => `[OK] Conflict: libc-core v${rand(2,3)}.${rand(20,35)} vs v${rand(2,3)}.${rand(10,29)}`, 200],
          [() => `[OK] Conflict depth: ${rand(2,6)} layers`, 250]
        ];
      } else {
        return [
          ["[OK] No major conflicts detected", 200],
          ["[+] Minor inconsistencies auto-resolved", 250]
        ];
      }
    },
    0,
    "branch"
  ],

  ["[+] Analyzing dependency tree...", 200],

  ["rolling back packages", 1400, "progress"],

  [
    () => {
      if (chance(85)) {
        return [
          ["[OK] Environment stabilized", 200],
          ["[OK] Package meltdown simulation aborted safely.", 200]
        ];
      } else {
        return [
          ["[WARN] Partial rollback failure", 200],
          ["[+] Retrying stabilization...", 200],
          ["[OK] Environment stabilized", 200]
        ];
      }
    },
    0,
    "branch"
  ]
],

"dark compile": [
  ["[+] Fetching shadow build script...", 200],
  ["[+] Preparing synthetic module graph...", 200],

  [() => `[OK] Nodes linked: ${rand(32,128)}`, 200],

  ["[+] Allocating compile buffers...", 200],

  [
    () => {
      if (chance(75)) {
        return [
          ["[+] Compiling hidden artifacts...", 200]
        ];
      } else {
        return [
          ["[WARN] Artifact corruption detected", 200],
          ["[+] Rebuilding corrupted nodes...", 200],
          ["[OK] Artifacts stabilized", 250]
        ];
      }
    },
    0,
    "branch"
  ],

  ["[+] Obfuscating symbol tables...", 250],

  [
    () => {
      if (chance(70)) {
        return [
          ["[+] Encrypting output binary...", 200]
        ];
      } else {
        return [
          ["[WARN] Encryption fallback engaged", 200],
          ["[+] Switching cipher mode...", 200],
          ["[+] Encrypting output binary...", 200]
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
          ["[OK] Binary sealed", 200],
          ["[OK] Dark compile simulation finished.", 200]
        ];
      } else {
        return [
          ["[WARN] Integrity mismatch detected", 200],
          ["[+] Re-sealing binary...", 200],
          ["[OK] Binary sealed", 200]
        ];
      }
    },
    0,
    "branch"
  ]
],

"neural sync": [
  ["[+] Initializing neural interface...", 200],
  ["[+] Mapping input/output channels...", 250],

  [() => `[OK] Channels linked: ${rand(64,256)}`, 200],

  ["[+] Calibrating signal latency...", 250],

  [() => `[OK] Latency: ${rand(1,12)}ms`, 200],

  ["[+] Aligning signal streams...", 250],

  [
    () => {
      if (chance(80)) {
        return [
          ["[+] Synchronizing inference layers...", 200]
        ];
      } else {
        return [
          ["[WARN] Desync detected between layers", 200],
          ["[+] Re-aligning neural pathways...", 200],
          ["[OK] Layers stabilized", 250]
        ];
      }
    },
    0,
    "branch"
  ],

  ["[+] Stabilizing feedback loop...", 200],

  [
    () => {
      if (chance(70)) {
        return [
          ["[+] Reinforcing neural weights...", 200]
        ];
      } else {
        return [
          ["[WARN] Weight instability detected", 200],
          ["[+] Rebalancing weight distribution...", 200],
          ["[OK] Weights stabilized", 250]
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
          ["[OK] Neural sync complete.", 200]
        ];
      } else {
        return [
          ["[WARN] Residual drift detected", 200],
          ["[+] Performing final correction...", 200],
          ["[OK] Neural sync complete.", 200]
        ];
      }
    },
    0,
    "branch"
  ]
],

"quantum fork": [
  ["[+] Preparing multiverse fork...", 250],
  ["[+] Splitting process timeline...", 250],

  [() => `[OK] Branch instances: ${rand(2,5)}`, 250],

  ["[+] Allocating parallel state buffers...", 200],

  [
    () => {
      if (chance(80)) {
        return [["[OK] Parallel instances stable", 250]];
      } else {
        return [
          ["[!] Temporal drift detected", 200],
          ["[+] Correcting phase offset...", 200],
          ["[OK] Timeline stabilized", 250]
        ];
      }
    },
    0,
    "branch"
  ],

  ["synchronizing timelines", 1400, "progress"],

  ["[OK] Quantum fork simulation finished.", 200]
],

"net scan --deep": [
  ["[+] Initializing deep network reconnaissance...", 250],

  [() => `[+] Scanning subnet ${genIP().split('.').slice(0,3).join('.')}.0/24...`, 200],

  [() => `[OK] Hosts discovered: ${rand(3,15)}`, 250],

  ["[+] Resolving MAC addresses...", 250],
  ["[OK] ARP table populated", 200],

  [
    () => {
      if (chance(70)) {
        return [["[+] Fingerprinting discovered hosts...", 200]];
      } else {
        return [
          ["[WARN] Host fingerprint mismatch", 200],
          ["[+] Re-scanning anomalies...", 200]
        ];
      }
    },
    0,
    "branch"
  ],

  ["mapping services", 1400, "progress"],

  ["[OK] Deep scan simulation finished.", 200]
],

"auth brute --target": [
  ["[+] Preparing credential test harness...", 250],

  [() => `[OK] Entries loaded: ${rand(500000,2000000).toLocaleString()}`, 250],

  ["[+] Initializing hash comparison engine...", 200],
  ["[+] Spawning worker threads...", 200],

  ["testing credentials", 1600, "progress"],

  [
    () => {
      if (chance(60)) {
        return [
          ["[OK] Credential match found", 200],
          [() => `user: ${pick(["admin","root","user"])}`, 250]
        ];
      } else {
        return [["[OK] No valid credentials found", 200]];
      }
    },
    0,
    "branch"
  ],

  ["[OK] Authentication brute-force simulation finished.", 200]
],

"shell inject --pid": [
  [() => `[+] Attaching to process ${genPID()}...`, 200],

  ["[OK] Process handle acquired", 250],
  ["[+] Resolving injection vector...", 200],

  ["allocating memory", 1200, "progress"],

  [
    () => {
      if (chance(80)) {
        return [["[OK] Payload injected successfully", 200]];
      } else {
        return [
          ["[WARN] Injection instability detected", 200],
          ["[+] Retrying injection...", 200],
          ["[OK] Payload injected successfully", 200]
        ];
      }
    },
    0,
    "branch"
  ],

  ["[OK] Shell injection simulation finished.", 200]
],

"fs scrape --profile": [
  ["[+] Enumerating profile directories...", 200],

  [() => `[OK] Matches found: ${rand(5,40)}`, 250],

  ["[+] Indexing file metadata...", 200],

  [
    () => {
      if (chance(75)) {
        return [["[+] Compressing matched files...", 200]];
      } else {
        return [
          ["[WARN] File read error", 400],
          ["[+] Skipping corrupted entries...", 200]
        ];
      }
    },
    0,
    "branch"
  ],

  ["archiving data", 1500, "progress"],

  ["[OK] File scrape simulation finished.", 200]
],

"cam hijack --auto": [
  ["[+] Scanning for camera endpoints...", 200],

  [() => `[OK] Streams detected: ${rand(1,5)}`, 250],

  ["[+] Attempting credential injection...", 200],

  [
    () => {
      if (chance(85)) {
        return [["[OK] Access granted", 200]];
      } else {
        return [
          ["[WARN] Access denied", 300],
          ["[+] Retrying with fallback creds...", 200],
          ["[OK] Access granted", 300]
        ];
      }
    },
    0,
    "branch"
  ],

  ["linking stream", 1300, "progress"],

  ["[OK] Camera hijack simulation finished.", 200]
],

"log wipe --stealth": [
  ["[+] Locating log segments...", 200],

  [() => `[OK] Entries matched: ${rand(10,120)}`, 250],

  ["[+] Rewriting cached entries...", 250],
  ["[+] Obfuscating timestamps...", 200],

  ["sanitizing logs", 1400, "progress"],

  [
    () => {
      if (chance(90)) {
        return [["[OK] Log wipe simulation finished.", 200]];
      } else {
        return [
          ["[WARN] Residual trace detected", 200],
          ["[+] Performing deep scrub...", 200],
          ["[OK] Logs sanitized", 200]
        ];
      }
    },
    0,
    "branch"
  ]
],

"multi breach --all": [
  ["[+] Launching composite operation suite...", 200],
  ["[+] Initializing modules...", 200],
  ["[+] Allocating shared resources...", 200],

  ["network recon", 1200, "progress"],
  ["credential testing", 1200, "progress"],
  ["privilege escalation", 1200, "progress"],
  ["data exfiltration", 1200, "progress"],

  [
    () => {
      if (chance(80)) {
        return [["[OK] All modules completed successfully", 200]];
      } else {
        return [
          ["[WARN] One or more modules unstable", 200],
          ["[+] Re-running failed modules...", 200],
          ["[OK] All modules completed successfully", 200]
        ];
      }
    },
    0,
    "branch"
  ],

  ["[+] Cleaning temporary artifacts...", 200],

  ["finalizing operation", 1000, "progress"],

  ["[!] Multi breach simulation finished.", 200]
],

  "virus installer": [
  ["[+] Initializing payload installer...", 200],
  ["[+] Verifying system compatibility...", 200],
  ["[OK]  OS: detected", 250],
  ["[OK]  User: admin", 250],
  ["[OK]  Privileges: elevated", 200],

  ["[+] Downloading payload from secure node...", 200],
  ["     -> node-17.darknet.local", 250],
  ["     -> handshake: AES-256 / RSA-4096", 200],
  ["[OK]  Connection established", 200],
  ["[+]  Payload chunks: 128", 200],
  ["[####------] 32%  receiving...", 250],
  ["[##########] 100%  download complete", 200],

  ["[+] Decrypting payload...", 250],
  ["     key: ********-********-********", 250],
  ["[OK]  Decryption successful", 250],
  ["[+] Scanning for sandbox / VM environment...", 200],
  ["[OK]  No sandbox artifacts detected", 250],
  ["[OK]  Hardware fingerprint accepted", 250],

  ["[+] Installing core modules...", 200],
  ["     -> injector.core", 200],
  ["     -> persistence.daemon", 200],
  ["     -> keyscan.engine", 200],
  ["     -> exfiltrator.stealth", 200],
  ["[OK]  Modules staged", 250],

  ["[+] Writing registry hooks...", 250],
  ["[OK]  Run-on-boot registered", 200],
  ["[OK]  Startup entry masked as \"System Audio Service\"", 200],

  ["[+] Injecting into running processes...", 200],
  ["     target: explorer.exe          [INJECTED]", 200],
  ["     target: browser.exe           [INJECTED]", 200],
  ["     target: systemd (pid 1)       [INJECTED]", 250],

  ["[+] Enumerating files for encryption...", 500],
  ["     /home/user/Documents          [4123 files]", 200],
  ["     /home/user/Desktop            [238 files]", 200],
  ["     /home/user/Pictures           [938 files]", 200],

  ["[+] Generating encryption keys...", 250],
  ["[OK]  Public key stored remotely", 250],
  ["[OK]  Local key destroyed", 250],

  ["[+] Encrypting user data...", 200],
  ["[##--------] 17%  processing...", 200],
  ["[#####-----] 54%  processing...", 250],
  ["[#########-] 93%  processing...", 250],
  ["[##########] 100% complete", 200],

  ["[+] Establishing command & control channel...", 200],
  ["     -> beacon sent to 185.231.***.***", 200],
  ["[OK]  C2 handshake acknowledged", 250],
  ["[OK]  Host registered: ID=HX-9F2A-7C", 250],

  ["[!] Installation complete.", 200],
  ["[!] All personal files have been encrypted.", 200],
  ["[!] To recover your data, send 100.000000 BTC to the displayed wallet address.", 200],
  ["wallet: bc1Q-XXXX-XXXX-XXXX-XXXX", 200],
  ["Press ENTER to acknowledge and close this window...", 200]
],

  "grade changer": [
  ["$ db-connect --target gradebook.university.local --as admin", 200],

  ["[+] Resolving gradebook.university.local...", 200],
  ["[OK]  Host found: 10.24.7.13", 250],
  ["[+] Opening TLS tunnel...", 200],
  ["[OK]  Handshake complete (TLS1.3, AES-256-GCM)", 250],

  ["[+] Probing authentication endpoints...", 200],
  ["     /api/v1/auth/login           [FOUND]", 250],
  ["     /api/v1/auth/admin-login     [FOUND]", 250],
  ["     /api/v1/grades/export        [FOUND]", 250],

  ["[+] Checking for misconfigured admin route...", 200],
  ["     /api/v1/admin/grades         [EXPOSED]", 250],
  ["[!]  Admin endpoint accessible without MFA", 250],

  ["[+] Attempting SQLi on admin login...", 200],
  ["     payload: ' OR 1=1-- ", 250],
  ["[OK]  Bypass successful", 250],
  ["[OK]  Session token: 9f27c1d9-*****-*****-*****", 250],

  ["[+] Fetching student record...", 200],
  ["     student_id: 20251847", 250],
  ["     name      : DOE, JANE", 250],
  ["[OK]  Record loaded", 200],

  ["Current grades:", 350],
  ["     MATH-201   : 67.3%   (D)", 200],
  ["     CS-210     : 72.5%   (C-)", 200],
  ["     HIST-150   : 81.0%   (B-)", 200],
  ["     PHYS-110   : 58.9%   (F)", 250],

  ["[+] Cloning grade table → backup_grades_2026_03_20...", 200],
  ["[OK]  Backup created (rows: 3,284)", 250],

  ["[+] Elevating all failing and borderline grades...", 200],
  ["     Rule 1: any grade < 60.0 → 92.0 (A-)", 200],
  ["     Rule 2: any grade < 75.0 → 89.0 (B+)", 250],

  ["Applying rules to student_id=20251847...", 200],
  ["     MATH-201   : 67.3%  → 89.0%   (B+)", 250],
  ["     CS-210     : 72.5%  → 89.0%   (B+)", 250],
  ["     PHYS-110   : 58.9%  → 92.0%   (A-)", 300],
  ["[OK]  Local changes staged", 450],

  ["[+] Patching database...", 200],
  ["[#####-----] 51% writing rows...", 250],
  ["[##########] 100% committed", 200],

  ["Updated grades:", 350],
  ["     MATH-201   : 89.0%   (B+)", 200],
  ["     CS-210     : 89.0%   (B+)", 200],
  ["     HIST-150   : 81.0%   (B-)", 200],
  ["     PHYS-110   : 92.0%   (A-)", 250],

  ["[+] Invalidating audit logs for this session...", 200],
  ["[OK]  Audit trail sanitized", 200],
  ["[OK]  Disconnected from gradebook.university.local", 200],

  ["[!] Grade adjustment simulation complete.", 200],
  ["[!] Changes visible on student portal in ~5 minutes.", 200]
],

  "net hack": [
  ["$ net scan --deep", 200],

  ["[+] Initializing deep network reconnaissance...", 200],
  ["[+] Scanning subnet: 192.168.0.0/24", 200],
  ["     host 192.168.0.1    →  open ports: 22, 80, 443", 250],
  ["     host 192.168.0.12   →  open ports: 445, 3389", 250],
  ["     host 192.168.0.23   →  open ports: 21, 8080", 250],

  ["[+] Running fingerprinting on discovered hosts...", 200],
  ["     192.168.0.1   →  device: router (Linux)", 250],
  ["     192.168.0.12  →  device: workstation (Windows)", 250],
  ["     192.168.0.23  →  device: NAS (Custom OS)", 250],

  ["[+] Exporting scan report to /tmp/netscan_$(date +%s).log", 200],
  ["[OK] Scan complete. Hosts discovered: 8, vulnerabilities: 12 (simulated)", 200]
],

  "force login": [
  ["$ auth brute --target login.server.local", 200],

  ["[+] Target: login.server.local:443", 200],
  ["[+] Loading password dictionary: rockyou-supreme.txt (1,234,567 entries)", 200],
  ["[+] Starting distributed attack using 16 worker threads...", 200],

  ["[>] Attempts: 1,000      Rate: 250 req/s   Status: RUNNING", 200],
  ["[>] Attempts: 25,000     Rate: 260 req/s   Status: RUNNING", 200],
  ["[>] Attempts: 100,000    Rate: 270 req/s   Status: RUNNING", 200],

  ["[!] Possible credential match detected:", 200],
  ["     user: admin", 250],
  ["     pass: winter2026!", 200],

  ["[+] Verifying credentials...", 200],
  ["[OK] Login successful. Session token: 7a9f3e0b-****-****-****-************", 200],
  ["[+] Attack halted. Credentials harvested.", 200]
],

  "inject shell": [
  ["$ shell inject --pid 1342", 200],

  ["[+] Attaching to process 1342...", 200],
  ["[OK]  Process: browser.exe (x64)", 200],

  ["[+] Resolving injection vectors...", 200],
  ["     -> remote thread", 250],
  ["     -> shellcode stub", 250],

  ["[+] Allocating remote memory...", 200],
  ["[OK]  4096 bytes reserved at 0x7ffeDEAD0000", 250],

  ["[+] Writing payload to remote process...", 200],
  ["[OK]  4096/4096 bytes written", 250],

  ["[+] Creating remote thread at 0x7ffeDEAD0100...", 200],
  ["[OK]  Thread started (tid: 4928)", 250],

  ["[!] Interactive shell established inside process 1342", 200],
  ["type 'exit' to detach", 200]
],

  "scrape data": [
  ["$ fs scrape --profile student01", 200],

  ["[+] Enumerating home directory for user: student01", 200],
  ["     /home/student01/Documents      [154 files]", 250],
  ["     /home/student01/Downloads      [89 files]", 250],
  ["     /home/student01/Desktop        [23 files]", 250],

  ["[+] Searching for sensitive patterns:", 400],
  ["     keywords: \"password\", \"grades\", \"bank\", \"secret\"", 250],

  ["[OK]  Candidate files:", 200],
  ["     - passwords.txt", 250],
  ["     - grades_backup.xlsx", 250],
  ["     - bank_statement_2025.pdf", 250],

  ["[+] Compressing and encrypting archive...", 200],
  ["     archive: student01_data.enc", 200],
  ["[OK]  Archive created (52.3 MB), key stored remotely (simulated)", 200]
],

  "camera hack": [
  ["$ cam hijack --auto", 200],

  ["[+] Scanning for RTSP/ONVIF endpoints...", 200],
  ["     192.168.0.15:554  →  CAMERA-LOBBY", 250],
  ["     192.168.0.16:554  →  CAMERA-HALL", 250],

  ["[+] Attempting default credential login (admin/admin)...", 200],
  ["     CAMERA-LOBBY  →  [OK]", 250],
  ["     CAMERA-HALL   →  [OK]", 250],

  ["[+] Forcing stream reroute to local viewer...", 200],
  ["[OK]  Stream proxy active on localhost:8554", 250],

  ["[!] Live feeds hijacked (simulation only).", 200],
  ["Press CTRL+C to release feeds.", 200]
],

  "full wipe": [
  ["$ full wipe --stealth", 200],

  ["[+] Locating security logs...", 200],
  ["     /var/log/auth.log", 250],
  ["     /var/log/syslog", 250],
  ["     /var/log/nginx/access.log", 250],

  ["[+] Filtering entries related to this session...", 200],
  ["     found: 37 entries", 200],

  ["[+] Rewriting IPs, timestamps, and user agents...", 200],
  ["[OK]  Obfuscation pass complete", 250],

  ["[+] Compacting and re-indexing logs...", 200],
  ["[OK]  Log integrity checks passed (fake)", 250],

  ["[!] Trace for current session effectively erased (simulated).", 200]
],

  "breach all": [
  ["$ breach all --all", 200],

  ["[+] Launching composite attack suite:", 200],
  ["     1) Network reconnaissance", 250],
  ["     2) Credential harvesting", 250],
  ["     3) Privilege escalation", 250],
  ["     4) Data exfiltration", 250],

  ["[+] Running modules in parallel...", 200],

  ["[1] net-recon       → completed (hosts: 24)", 200],
  ["[2] cred-harvest    → completed (valid creds: 3)", 200],
  ["[3] priv-esc        → completed (root/admin gained)", 200],
  ["[4] data-exfil      → completed (archive: 2.4 GB)", 200],

  ["[+] Uploading archive to remote node...", 200],
  ["[##########] 100% complete", 200],

  ["[!] Breach simulation finished. Target fully compromised (in theory).", 200]
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
