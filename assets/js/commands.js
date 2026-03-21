// assets/js/commands.js

export const commands = {
  "sys flush": [
    ["[+] Initializing system flush sequence..."],
    ["[+] Releasing cached resources..."],
    ["[+] Flushing temporary memory blocks..."],
    ["[+] Purging inactive system references..."],
    ["[####------] 41%  clearing..."],
    ["[##########] 100% complete"],
    ["[!] System flush simulation finished."]
  ],

  "core sweep": [
    ["[+] Scanning CPU cores..."],
    ["[+] Core 0: nominal"],
    ["[+] Core 1: nominal"],
    ["[!] Core 3: anomaly detected"],
    ["[+] Rebalancing thread load..."],
    ["[##########] 100% complete"],
    ["[OK] Core sweep finished."]
  ],

  "net breach": [
    ["[+] Initializing local network probe..."],
    ["[+] Enumerating connected nodes..."],
    ["[+] Tracing gateway routes..."],
    ["[+] Secure tunnel established"],
    ["[#######---] 73%  mapping..."],
    ["[##########] 100% complete"],
    ["[!] Network breach simulation complete."]
  ],

  "mem purge": [
    ["[+] Locating stale memory allocations..."],
    ["[+] Reclaiming idle blocks..."],
    ["[+] Compressing temporary buffers..."],
    ["[+] Memory reclamation in progress..."],
    ["[##########] 100% complete"],
    ["[OK] Memory purge simulation finished."]
  ],

  "root override": [
    ["[+] Requesting elevated access..."],
    ["[+] Verifying authorization token..."],
    ["[+] Escalation path found"],
    ["[+] Writing temporary admin permissions..."],
    ["[##########] 100% complete"],
    ["[!] Root override simulation active."]
  ],

  "trace lock": [
    ["[+] Activating trace monitor..."],
    ["[+] Monitoring inbound pings..."],
    ["[+] Locking active route table..."],
    ["[+] External trace packets isolated"],
    ["[##########] 100% complete"],
    ["[OK] Trace lock simulation finished."]
  ],

  "pkg meltdown": [
    ["[+] Opening package index..."],
    ["[+] Resolving dependencies..."],
    ["[!] Critical package mismatch detected"],
    ["[+] Running rollback stub..."],
    ["[##########] 100% complete"],
    ["[OK] Package meltdown simulation aborted safely."]
  ],

  "dark compile": [
    ["[+] Fetching shadow build script..."],
    ["[+] Preparing synthetic module graph..."],
    ["[+] Compiling hidden artifacts..."],
    ["[#######---] 69%  building..."],
    ["[##########] 100% complete"],
    ["[OK] Dark compile simulation finished."]
  ],

  "neural sync": [
    ["[+] Initializing neural interface..."],
    ["[+] Aligning signal streams..."],
    ["[+] Synchronizing inference layers..."],
    ["[#######---] 77%  syncing..."],
    ["[##########] 100% complete"],
    ["[OK] Neural sync complete."]
  ],

  "quantum fork": [
    ["[+] Preparing multiverse fork..."],
    ["[+] Splitting process timeline..."],
    ["[+] Stabilizing parallel instance..."],
    ["[!] Temporal drift detected"],
    ["[##########] 100% complete"],
    ["[OK] Quantum fork simulation finished."]
  ],

  "net scan --deep": [
    ["[+] Initializing deep network reconnaissance..."],
    ["[+] Scanning subnet 192.168.0.0/24..."],
    ["[+] Fingerprinting discovered hosts..."],
    ["[#######---] 74%  mapping..."],
    ["[##########] 100% complete"],
    ["[OK] Deep scan simulation finished."]
  ],

  "auth brute --target": [
    ["[+] Preparing credential test harness..."],
    ["[+] Loading password dictionary..."],
    ["[+] Running distributed attempt cycle..."],
    ["[#######---] 71%  testing..."],
    ["[##########] 100% complete"],
    ["[OK] Authentication brute-force simulation finished."]
  ],

  "shell inject --pid": [
    ["[+] Attaching to target process..."],
    ["[+] Resolving injection vector..."],
    ["[+] Allocating remote workspace..."],
    ["[+] Writing simulated payload..."],
    ["[##########] 100% complete"],
    ["[OK] Shell injection simulation finished."]
  ],

  "fs scrape --profile": [
    ["[+] Enumerating profile directories..."],
    ["[+] Searching for tagged documents..."],
    ["[+] Compressing matched files..."],
    ["[#######---] 68%  archiving..."],
    ["[##########] 100% complete"],
    ["[OK] File scrape simulation finished."]
  ],

  "cam hijack --auto": [
    ["[+] Scanning for camera endpoints..."],
    ["[+] Identifying stream sources..."],
    ["[+] Negotiating viewer session..."],
    ["[+] Proxy stream engaged"],
    ["[##########] 100% complete"],
    ["[OK] Camera hijack simulation finished."]
  ],

  "log wipe --stealth": [
    ["[+] Locating log segments..."],
    ["[+] Filtering current session traces..."],
    ["[+] Rewriting cached entries..."],
    ["[#######---] 75%  sanitizing..."],
    ["[##########] 100% complete"],
    ["[OK] Log wipe simulation finished."]
  ],

  "multi breach --all": [
    ["[+] Launching composite operation suite..."],
    ["[+] Module 1: reconnaissance... complete"],
    ["[+] Module 2: credential test... complete"],
    ["[+] Module 3: privilege escalation... complete"],
    ["[+] Module 4: data transfer... complete"],
    ["[#######---] 79%  finalizing..."],
    ["[##########] 100% complete"],
    ["[!] Multi breach simulation finished."]
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
  "shell inject": "shell inject --pid",
  "fs scrape": "fs scrape --profile",
  "cam hijack": "cam hijack --auto",
  "log wipe": "log wipe --stealth",
  "multi breach": "multi breach --all",
  "multi breach --all": "multi breach --all"
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
