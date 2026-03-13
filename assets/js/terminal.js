// assets/js/terminal.js
const input = document.getElementById("term-input");
const output = document.getElementById("output-area");
const termBody = document.getElementById("term-body");

let historyCommands = [];
let historyIndex = -1;

function typeResponse(text) {
    const resp = document.createElement("div");
    resp.className = "line typing";
    output.appendChild(resp);

    let i = 0;

    function typeChar() {
        if (i < text.length) {
            resp.innerHTML += text[i];
            i++;
            setTimeout(typeChar, 8);
        } else {
            resp.classList.remove("typing");
        }
    }

    typeChar();
}

function bootSequence() {

    const bootLines = [
        "Booting ZAYNE_OS v1.0...",
        "Loading modules...",
        "Initializing creative engine...",
        "Mounting filesystem...",
        "Connecting to community node...",
        "AI subsystem online",
        "Terminal ready.",
        "<br>Type <span class='highlight'>help</span> to begin."
    ];

    let i = 0;

    function next() {
        if (i < bootLines.length) {
            const line = document.createElement("div");
            line.className = "line";
            line.innerHTML = bootLines[i];
            output.appendChild(line);

            termBody.scrollTop = termBody.scrollHeight;

            i++;
            setTimeout(next, 350);
        }
    }

    next();
}

if (input && output && termBody) {

    bootSequence();

    input.addEventListener("keydown", function(e) {

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

            const val = input.value.trim().toLowerCase();

            if (val !== "") {
                historyCommands.push(val);
                historyIndex = historyCommands.length;
            }

            const history = document.createElement("div");
            history.className = "line";
            history.innerHTML = `<span class="prompt">zayne@therealspace:~$</span> ${val}`;
            output.appendChild(history);

            let responseText = "";

            if (val === "help") {

                responseText = `
Available commands:<br>
- <span class="highlight">about</span><br>
- <span class="highlight">skills</span><br>
- <span class="highlight">gaming</span><br>
- <span class="highlight">music</span><br>
- <span class="highlight">outdoors</span><br>
- <span class="highlight">coding</span><br>
- <span class="highlight">content</span><br>
- <span class="highlight">community</span><br>
- <span class="highlight">collabs</span><br>
- <span class="highlight">support</span><br>
- <span class="highlight">studio</span><br>
- <span class="highlight">ski</span><br>
- <span class="highlight">social</span><br>
- <span class="highlight">hidden</span><br>
- <span class="highlight">clear</span>
`;

            } else if (val === "about") {

                responseText = "Zayne (theRealZayne) — Gamer, beatmaker, outdoor junkie, code dabbler.";

            } else if (val === "skills") {

                responseText = "HTML/CSS/JS • GitHub Pages • Discord bots • Roblox/Fortnite creative • Audacity + MPC Beats • Raspberry Pi tinkering";

            } else if (val === "gaming") {

                responseText = "Fortnite, GTA V chaos, Roblox map editing, Minecraft builds, Far Cry vibes.";

            } else if (val === "music") {

                responseText = "Beatboxing + producing phonk/hip-hop/electronic. BOSS RC-505 + AKAI MPK Mini. 4+ years producing. Track with MaddeX released, another coming soon. Find beats on SoundCloud.";

            } else if (val === "outdoors") {

                responseText = "10 years skiing. Mountains: Sunday River, Sugarloaf, Lost Valley, Mt Abram, Pleasant Mountain. GoPro ski edits on YouTube. Hiking, fishing, biking, camping, cliff jumping.";

            } else if (val === "coding") {

                responseText = "Raspberry Pi AI robot car, P4wnagotchi experiments, Discord bot development with real-time game stats and tools.";

            } else if (val === "content") {

                responseText = "YouTube gaming highlights, ski edits, music videos. Twitch streams and map building sessions.";

            } else if (val === "community") {

                responseText = "Join the Discord server ᘜOᗪ'S Oᖴ ᘔ for gaming, music, coding and outdoor adventures.";

            } else if (val === "collabs") {

                responseText = "Collabs welcome — music, gaming streams, coding projects.";

            } else if (val === "support") {

                responseText = "Support through Patreon or Acorns Early. Helps fund gear, coding projects and adventures.";

            } else if (val === "studio") {

                responseText = "Mini home studio for recording and beatboxing sessions with friends and collaborators.";

            } else if (val === "ski") {

                responseText = "Mountains: Sunday River • Sugarloaf • Lost Valley • Mt Abram • Pleasant Mountain";

            } else if (val === "social") {

                responseText = "Discord • Twitch • YouTube • Patreon • SoundCloud";

            } else if (val === "hidden") {

                responseText = `
Hidden commands unlocked:<br>
- <span class="highlight">robot</span><br>
- <span class="highlight">snowboard</span><br>
- <span class="highlight">future</span><br>
- <span class="highlight">easteregg</span>
`;

            } else if (val === "robot") {

                responseText = "AI robot car built with Raspberry Pi. More robotics experiments coming.";

            } else if (val === "snowboard") {

                responseText = "Snowboarding mission begins next season.";

            } else if (val === "future") {

                responseText = "Future goals: music releases, robotics builds, game tools, ski edits.";

            } else if (val === "easteregg") {

                responseText = "Accessing hidden archive... Status: Just getting started.";

            } else if (val === "clear") {

                output.innerHTML = "";
                input.value = "";
                return;

            } else if (val !== "") {

                responseText = `zsh: command not found: ${val}<br>Type 'help'`;

            }

            if (responseText) {
                typeResponse(responseText);
            }

            input.value = "";
            termBody.scrollTop = termBody.scrollHeight;
        }
    });

    termBody.addEventListener("click", () => input.focus());
}
