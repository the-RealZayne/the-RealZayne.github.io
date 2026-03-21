export const commands = {
  "sys flush": [
    ["[+] Initializing system flush sequence...", 500],
    ["[+] Releasing cached resources...", 350],
    ["[+] Flushing temporary memory blocks...", 350],
    ["[+] Purging inactive system references...", 350],
    ["[####------] 41%  clearing...", 500],
    ["[##########] 100% complete", 400],
    ["[!] System flush simulation finished.", 700]
  ],

  "core sweep": [
    ["[+] Scanning CPU cores...", 400],
    ["[+] Core 0: nominal", 200],
    ["[+] Core 1: nominal", 200],
    ["[!] Core 3: anomaly detected", 350],
    ["[+] Rebalancing thread load...", 500],
    ["[##########] 100% complete", 400],
    ["[OK] Core sweep finished.", 600]
  ],

  "net breach": [
    ["[+] Initializing local network probe...", 450],
    ["[+] Enumerating connected nodes...", 450],
    ["[+] Tracing gateway routes...", 450],
    ["[+] Secure tunnel established", 300],
    ["[#######---] 73%  mapping...", 500],
    ["[##########] 100% complete", 400],
    ["[!] Network breach simulation complete.", 700]
  ],

  "mem purge": [
    ["[+] Locating stale memory allocations...", 400],
    ["[+] Reclaiming idle blocks...", 350],
    ["[+] Compressing temporary buffers...", 350],
    ["[+] Memory reclamation in progress...", 450],
    ["[##########] 100% complete", 400],
    ["[OK] Memory purge simulation finished.", 700]
  ],

  "root override": [
    ["[+] Requesting elevated access...", 450],
    ["[+] Verifying authorization token...", 450],
    ["[+] Escalation path found", 300],
    ["[+] Writing temporary admin permissions...", 500],
    ["[##########] 100% complete", 400],
    ["[!] Root override simulation active.", 700]
  ],

  "trace lock": [
    ["[+] Activating trace monitor...", 400],
    ["[+] Monitoring inbound pings...", 350],
    ["[+] Locking active route table...", 350],
    ["[+] External trace packets isolated", 300],
    ["[##########] 100% complete", 400],
    ["[OK] Trace lock simulation finished.", 700]
  ],

  "pkg meltdown": [
    ["[+] Opening package index...", 350],
    ["[+] Resolving dependencies...", 350],
    ["[!] Critical package mismatch detected", 400],
    ["[+] Running rollback stub...", 500],
    ["[##########] 100% complete", 400],
    ["[OK] Package meltdown simulation aborted safely.", 700]
  ],

  "dark compile": [
    ["[+] Fetching shadow build script...", 400],
    ["[+] Preparing synthetic module graph...", 400],
    ["[+] Compiling hidden artifacts...", 500],
    ["[#######---] 69%  building...", 500],
    ["[##########] 100% complete", 400],
    ["[OK] Dark compile simulation finished.", 700]
  ],

  "neural sync": [
    ["[+] Initializing neural interface...", 400],
    ["[+] Aligning signal streams...", 350],
    ["[+] Synchronizing inference layers...", 400],
    ["[#######---] 77%  syncing...", 500],
    ["[##########] 100% complete", 400],
    ["[OK] Neural sync complete.", 700]
  ],

  "quantum fork": [
    ["[+] Preparing multiverse fork...", 450],
    ["[+] Splitting process timeline...", 450],
    ["[+] Stabilizing parallel instance...", 450],
    ["[!] Temporal drift detected", 400],
    ["[##########] 100% complete", 400],
    ["[OK] Quantum fork simulation finished.", 700]
  ],

  "net scan --deep": [
    ["[+] Initializing deep network reconnaissance...", 450],
    ["[+] Scanning subnet 192.168.0.0/24...", 500],
    ["[+] Fingerprinting discovered hosts...", 500],
    ["[#######---] 74%  mapping...", 600],
    ["[##########] 100% complete", 400],
    ["[OK] Deep scan simulation finished.", 700]
  ],

  "auth brute --target": [
    ["[+] Preparing credential test harness...", 450],
    ["[+] Loading password dictionary...", 450],
    ["[+] Running distributed attempt cycle...", 500],
    ["[#######---] 71%  testing...", 600],
    ["[##########] 100% complete", 400],
    ["[OK] Authentication brute-force simulation finished.", 700]
  ],

  "shell inject --pid": [
    ["[+] Attaching to target process...", 400],
    ["[+] Resolving injection vector...", 400],
    ["[+] Allocating remote workspace...", 450],
    ["[+] Writing simulated payload...", 500],
    ["[##########] 100% complete", 400],
    ["[OK] Shell injection simulation finished.", 700]
  ],

  "fs scrape --profile": [
    ["[+] Enumerating profile directories...", 400],
    ["[+] Searching for tagged documents...", 450],
    ["[+] Compressing matched files...", 500],
    ["[#######---] 68%  archiving...", 600],
    ["[##########] 100% complete", 400],
    ["[OK] File scrape simulation finished.", 700]
  ],

  "cam hijack --auto": [
    ["[+] Scanning for camera endpoints...", 400],
    ["[+] Identifying stream sources...", 450],
    ["[+] Negotiating viewer session...", 450],
    ["[+] Proxy stream engaged", 300],
    ["[##########] 100% complete", 400],
    ["[OK] Camera hijack simulation finished.", 700]
  ],

  "log wipe --stealth": [
    ["[+] Locating log segments...", 400],
    ["[+] Filtering current session traces...", 450],
    ["[+] Rewriting cached entries...", 450],
    ["[#######---] 75%  sanitizing...", 600],
    ["[##########] 100% complete", 400],
    ["[OK] Log wipe simulation finished.", 700]
  ],

  "multi breach --all": [
    ["[+] Launching composite operation suite...", 500],
    ["Recon module", 1200, "progress"],
    ["Credential test", 1200, "progress"],
    ["Privilege escalation", 1200, "progress"],
    ["Data transfer", 1200, "progress"],
    ["[##########] 100% complete", 400],
    ["[!] Multi breach simulation finished.", 800]
  ],

  "rzcode": [
    ["Loading RZ Code IDE...", 800]
  ]
};

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
  "multi breach --all"
];
