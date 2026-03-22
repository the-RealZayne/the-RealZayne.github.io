export const commands = {
  "sys flush": [
  ["[+] Initializing system flush sequence...", 500],
  ["[+] Verifying kernel state...", 350],
  ["[OK] Kernel stable", 300],
  ["[+] Mapping active memory regions...", 350],
  ["[OK] Regions indexed: 248", 300],
  ["[+] Releasing cached resources...", 350],
  ["[+] Flushing temporary memory blocks...", 350],
  ["[+] Purging inactive system references...", 350],
  ["[+] Clearing I/O buffers...", 350],
  ["[+] Resetting virtual memory tables...", 400],
  ["[####------] 41%  clearing...", 500],
  ["[#######---] 73%  clearing...", 500],
  ["[#########-] 92%  clearing...", 500],
  ["[##########] 100% complete", 400],
  ["[OK] Memory tables reset", 400],
  ["[OK] Cache layers cleared", 350],
  ["[!] System flush simulation finished.", 700]
],

"core sweep": [
  ["[+] Scanning CPU cores...", 400],
  ["[+] Detecting logical processors...", 300],
  ["[OK] Threads mapped: 8", 300],
  ["[+] Sampling core temperatures...", 350],
  ["[OK] Thermal range nominal", 300],
  ["[+] Core 0: nominal", 200],
  ["[+] Core 1: nominal", 200],
  ["[+] Core 2: nominal", 200],
  ["[!] Core 3: anomaly detected", 350],
  ["[+] Running diagnostic on Core 3...", 400],
  ["[OK] Fault isolated to thread scheduler", 400],
  ["[+] Rebalancing thread load...", 500],
  ["[+] Migrating active threads...", 400],
  ["[#######---] 76% balancing...", 500],
  ["[#########-] 95% balancing...", 500],
  ["[##########] 100% complete", 400],
  ["[OK] Scheduler stabilized", 400],
  ["[OK] Core sweep finished.", 600]
],

"net breach": [
  ["[+] Initializing local network probe...", 450],
  ["[+] Enumerating connected nodes...", 450],
  ["[OK] Hosts discovered: 6", 350],
  ["[+] Resolving hostnames...", 350],
  ["[OK] Hostnames mapped", 300],
  ["[+] Tracing gateway routes...", 450],
  ["[OK] Gateway resolved: 192.168.0.1", 350],
  ["[+] Attempting tunnel negotiation...", 450],
  ["[OK] Secure tunnel established", 300],
  ["[+] Mapping internal topology...", 450],
  ["[+] Identifying exposed services...", 400],
  ["[#######---] 73%  mapping...", 500],
  ["[#########-] 94%  mapping...", 500],
  ["[##########] 100% complete", 400],
  ["[OK] Entry points indexed", 400],
  ["[!] Network breach simulation complete.", 700]
],

"mem purge": [
  ["[+] Locating stale memory allocations...", 400],
  ["[+] Indexing heap segments...", 350],
  ["[OK] Segments indexed: 142", 300],
  ["[+] Analyzing fragmentation...", 350],
  ["[OK] Fragmentation level: moderate", 300],
  ["[+] Reclaiming idle blocks...", 350],
  ["[+] Compressing temporary buffers...", 350],
  ["[+] Clearing swap cache...", 350],
  ["[+] Rewriting memory pointers...", 400],
  ["[+] Memory reclamation in progress...", 450],
  ["[#######---] 78% reclaiming...", 500],
  ["[#########-] 96% reclaiming...", 500],
  ["[##########] 100% complete", 400],
  ["[OK] Heap integrity restored", 400],
  ["[OK] Memory purge simulation finished.", 700]
],

"root override": [
  ["[+] Requesting elevated access...", 450],
  ["[+] Verifying authorization token...", 450],
  ["[OK] Token signature valid", 350],
  ["[+] Scanning for escalation vectors...", 400],
  ["[OK] Vector found: SUID binary exploit", 400],
  ["[+] Escalation path found", 300],
  ["[+] Injecting privilege escalation routine...", 500],
  ["[+] Writing temporary admin permissions...", 500],
  ["[OK] UID set to 0", 350],
  ["[+] Masking privilege change...", 400],
  ["[+] Cleaning escalation artifacts...", 400],
  ["[##########] 100% complete", 400],
  ["[OK] Root shell granted", 400],
  ["[!] Root override simulation active.", 700]
],

"trace lock": [
  ["[+] Activating trace monitor...", 400],
  ["[+] Monitoring inbound pings...", 350],
  ["[+] Capturing packet signatures...", 350],
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
  ["[OK] Dependencies mapped", 300],
  ["[!] Critical package mismatch detected", 400],
  ["[+] Identifying conflict source...", 400],
  ["[OK] Conflict: libc-core v2.31 vs v2.28", 400],
  ["[+] Analyzing dependency tree...", 400],
  ["[OK] Conflict depth: 4 layers", 350],
  ["[+] Running rollback stub...", 500],
  ["[+] Restoring previous stable state...", 450],
  ["[+] Re-linking package binaries...", 400],
  ["[##########] 100% complete", 400],
  ["[OK] Environment stabilized", 400],
  ["[OK] Package meltdown simulation aborted safely.", 700]
],

"dark compile": [
  ["[+] Fetching shadow build script...", 400],
  ["[+] Preparing synthetic module graph...", 400],
  ["[OK] Nodes linked: 64", 300],
  ["[+] Allocating compile buffers...", 350],
  ["[+] Compiling hidden artifacts...", 500],
  ["[+] Obfuscating symbol tables...", 450],
  ["[+] Encrypting output binary...", 400],
  ["[#######---] 69%  building...", 500],
  ["[#########-] 94%  building...", 500],
  ["[##########] 100% complete", 400],
  ["[OK] Binary sealed", 400],
  ["[OK] Dark compile simulation finished.", 700]
],

"neural sync": [
  ["[+] Initializing neural interface...", 400],
  ["[+] Mapping input/output channels...", 350],
  ["[OK] Channels linked: 128", 300],
  ["[+] Calibrating signal latency...", 350],
  ["[OK] Latency within threshold", 300],
  ["[+] Aligning signal streams...", 350],
  ["[+] Synchronizing inference layers...", 400],
  ["[+] Stabilizing feedback loop...", 400],
  ["[+] Reinforcing neural weights...", 400],
  ["[#######---] 77%  syncing...", 500],
  ["[#########-] 96%  syncing...", 500],
  ["[##########] 100% complete", 400],
  ["[OK] Neural sync complete.", 700]
],

"quantum fork": [
  ["[+] Preparing multiverse fork...", 450],
  ["[+] Splitting process timeline...", 450],
  ["[OK] Branch instances: 2", 350],
  ["[+] Allocating parallel state buffers...", 400],
  ["[+] Stabilizing parallel instance...", 450],
  ["[!] Temporal drift detected", 400],
  ["[+] Correcting phase offset...", 400],
  ["[OK] Timeline stabilized", 350],
  ["[+] Synchronizing fork states...", 400],
  ["[##########] 100% complete", 400],
  ["[OK] Quantum fork simulation finished.", 700]
],

"net scan --deep": [
  ["[+] Initializing deep network reconnaissance...", 450],
  ["[+] Scanning subnet 192.168.0.0/24...", 500],
  ["[OK] Hosts discovered: 8", 350],
  ["[+] Resolving MAC addresses...", 350],
  ["[OK] ARP table populated", 300],
  ["[+] Fingerprinting discovered hosts...", 500],
  ["[+] Identifying open services...", 450],
  ["[+] Mapping service versions...", 400],
  ["[#######---] 74%  mapping...", 600],
  ["[#########-] 96%  mapping...", 500],
  ["[##########] 100% complete", 400],
  ["[OK] Deep scan simulation finished.", 700]
],

"auth brute --target": [
  ["[+] Preparing credential test harness...", 450],
  ["[+] Loading password dictionary...", 450],
  ["[OK] Entries loaded: 1,234,567", 350],
  ["[+] Initializing hash comparison engine...", 400],
  ["[+] Running distributed attempt cycle...", 500],
  ["[+] Spawning worker threads...", 400],
  ["[+] Monitoring response latency...", 400],
  ["[#######---] 71%  testing...", 600],
  ["[#########-] 95%  testing...", 500],
  ["[##########] 100% complete", 400],
  ["[OK] Authentication brute-force simulation finished.", 700]
],

"shell inject --pid": [
  ["[+] Attaching to target process...", 400],
  ["[OK] Process handle acquired", 350],
  ["[+] Resolving injection vector...", 400],
  ["[+] Allocating remote workspace...", 450],
  ["[OK] Memory region reserved", 350],
  ["[+] Writing simulated payload...", 500],
  ["[+] Verifying payload integrity...", 400],
  ["[OK] Checksum valid", 300],
  ["[+] Executing remote thread...", 400],
  ["[##########] 100% complete", 400],
  ["[OK] Shell injection simulation finished.", 700]
],

"fs scrape --profile": [
  ["[+] Enumerating profile directories...", 400],
  ["[+] Searching for tagged documents...", 450],
  ["[OK] Matches found: 12", 350],
  ["[+] Indexing file metadata...", 400],
  ["[+] Compressing matched files...", 500],
  ["[+] Encrypting archive...", 450],
  ["[+] Verifying archive integrity...", 400],
  ["[OK] Archive checksum valid", 300],
  ["[#######---] 68%  archiving...", 600],
  ["[#########-] 95%  archiving...", 500],
  ["[##########] 100% complete", 400],
  ["[OK] File scrape simulation finished.", 700]
],

"cam hijack --auto": [
  ["[+] Scanning for camera endpoints...", 400],
  ["[+] Identifying stream sources...", 450],
  ["[OK] Streams detected: 2", 350],
  ["[+] Attempting credential injection...", 400],
  ["[OK] Access granted", 300],
  ["[+] Negotiating viewer session...", 450],
  ["[+] Injecting proxy stream...", 400],
  ["[OK] Proxy stream engaged", 300],
  ["[+] Stabilizing stream connection...", 400],
  ["[#######---] 81% linking...", 500],
  ["[##########] 100% complete", 400],
  ["[OK] Camera hijack simulation finished.", 700]
],

"log wipe --stealth": [
  ["[+] Locating log segments...", 400],
  ["[+] Filtering current session traces...", 450],
  ["[OK] Entries matched: 37", 350],
  ["[+] Rewriting cached entries...", 450],
  ["[+] Obfuscating timestamps...", 400],
  ["[+] Rebuilding log indexes...", 400],
  ["[+] Injecting decoy entries...", 400],
  ["[#######---] 75%  sanitizing...", 600],
  ["[#########-] 97%  sanitizing...", 500],
  ["[##########] 100% complete", 400],
  ["[OK] Log wipe simulation finished.", 700]
],

"multi breach --all": [
  ["[+] Launching composite operation suite...", 500],
  ["[+] Initializing modules...", 400],
  ["[+] Allocating shared resources...", 400],
  ["Recon module", 1200, "progress"],
  ["Credential test", 1200, "progress"],
  ["Privilege escalation", 1200, "progress"],
  ["Data transfer", 1200, "progress"],
  ["[+] Aggregating results...", 400],
  ["[OK] All modules completed successfully", 500],
  ["[+] Cleaning temporary artifacts...", 400],
  ["[##########] 100% complete", 400],
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
  "scrape data"": "scrape data"",
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
