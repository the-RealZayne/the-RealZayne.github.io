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
- <span class="highlight">outdoors</span> → Skiing & adventures<br>
- <span class="highlight">coding</span> → Projects & experiments<br>
- <span class="highlight">content</span> → Videos & streams<br>
- <span class="highlight">community</span> → Join the squad<br>
- <span class="highlight">collabs</span> → Music & creator collabs<br>
- <span class="highlight">support</span> → Ways to contribute<br>
- <span class="highlight">studio</span> → Mini recording setup<br>
- <span class="highlight">ski</span> → Ski mountains & edits<br>
- <span class="highlight">social</span> → Where to find me<br>
- <span class="highlight">easteregg</span> → ???<br>
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
                responseText = "Beatboxing + producing phonk/hip-hop/electronic. BOSS RC-505 loopstation + AKAI MPK mini. 4+ years making music. Track with MaddeX released and another collab coming soon. Find beats on SoundCloud.";
            } else if (val === "outdoors") {
                responseText = "Skiing for nearly 10 years — Sunday River, Sugarloaf, Lost Valley, Mt Abram & Pleasant Mountain. GoPro ski edits on YouTube. Appalachian Trail overnight hikes, fishing, biking, camping, and cliff jumping. Snowboarding coming next season.";
            } else if (val === "coding") {
                responseText = "Projects include a Raspberry Pi AI robot car, P4wnagotchi experiments, and several Raspberry Pi builds in progress. Developing a Discord bot for real-time game stats, updates, and modifications.";
            } else if (val === "content") {
                responseText = "YouTube gaming highlights, ski edits, music videos and adventures. Twitch streams for gaming, map building, and community hangouts.";
            } else if (val === "community") {
                responseText = "Join the Discord server ᘜOᗪ'S Oᖴ ᘔ for gaming, music, coding, outdoor adventures and collabs. You can also leave a message on the site and I'll respond.";
            } else if (val === "collabs") {
                responseText = "Music collabs open. Recently made a track with MaddeX and another coming soon. Also open to gaming streams, coding projects, and creative builds.";
            } else if (val === "support") {
                responseText = "Support through Patreon or Acorns Early. Contributions help fund music gear, content creation, coding projects and outdoor adventures. More support options coming soon.";
            } else if (val === "studio") {
                responseText = "Mini home studio setup for beatboxing, producing and recording. Friends and collaborators can hang out, experiment, and record — hit Discord if you want to book a vibe session.";
            } else if (val === "ski") {
                responseText = "Mountains: Sunday River • Sugarloaf • Lost Valley • Mt Abram • Pleasant Mountain. Skiing for nearly a decade. GoPro edits posted on YouTube.";
            } else if (val === "social") {
                responseText = "Discord: ᘜOᗪ'S Oᖴ ᘔ    Twitch: xtherealzaynex    YouTube: @theRealZayne    Patreon: theRealZayne    SoundCloud: theRealZayne";
            } else if (val === "easteregg") {
                responseText = `
> Accessing hidden archive...<br>
> Future goals detected...<br>
> Ski edits from major mountains<br>
> Music releases and remixes<br>
> AI robotics projects<br>
> Game tools & creative maps<br>
> Maybe even TV someday.<br><br>
Status: <span class="highlight">Just getting started.</span>
                `;
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
