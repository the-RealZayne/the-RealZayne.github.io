// assets/js/terminal.js
const input = document.getElementById("term-input");
const output = document.getElementById("output-area");
const termBody = document.getElementById("term-body");

if (input && output && termBody) {
    input.addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            const val = input.value.trim().toLowerCase();

            // Echo the command
            const history = document.createElement("div");
            history.className = "line";
            history.innerHTML = `<span class="prompt">zayne@therealspace:~$</span> ${val}`;
            output.appendChild(history);

            let responseText = "";

            if (val === "help") {
                responseText = `
Available commands:<br>
- <span class="highlight">about</span> → Who I am<br>
- <span class="highlight">skills</span> → Tech & tools<br>
- <span class="highlight">gaming</span> → Current obsessions<br>
- <span class="highlight">music</span> → What I'm producing<br>
- <span class="highlight">social</span> → Where to find me<br>
- <span class="highlight">clear</span> → Wipe screen<br>
- <span class="highlight">help</span> → This list
                `;
            } else if (val === "about") {
                responseText = "Zayne (theRealZayne) — Gamer, beatmaker, outdoor junkie, code dabbler. Living life loud in Portland, Maine.";
            } else if (val === "skills") {
                responseText = "> HTML/CSS/JS  •  GitHub Pages  •  Discord bots  •  Roblox/Fortnite creative  •  Audacity + MPC Beats  •  Raspberry Pi tinkering";
            } else if (val === "gaming") {
                responseText = "Fortnite (Victory Royales or bust), GTA V RP/chaos, Roblox map editing, Minecraft builds, Far Cry vibes.";
            } else if (val === "music") {
                responseText = "Beatboxing + producing phonk/hip-hop/electronic. BOSS RC-505 loopstation + AKAI MPK mini. Collabs welcome — hit Discord.";
            } else if (val === "social") {
                responseText = "Discord: ᘜOᗪ'S Oᖴ ᘔ    Twitch: xtherealzaynex    YouTube: @theRealZayne    Patreon: theRealZayne";
            } else if (val === "clear") {
                output.innerHTML = "";
            } else if (val !== "") {
                responseText = `zsh: command not found: ${val}<br>Type 'help' for commands.`;
            }

            if (responseText) {
                const resp = document.createElement("div");
                resp.className = "line";
                resp.innerHTML = responseText;
                output.appendChild(resp);
            }

            input.value = "";
            termBody.scrollTop = termBody.scrollHeight;
        }
    });

    // Click anywhere in terminal → focus input
    termBody.addEventListener("click", () => input.focus());
}
