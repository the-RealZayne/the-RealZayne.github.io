// assets/js/terminal.js

const input = document.getElementById("term-input");
const output = document.getElementById("output-area");
const termBody = document.getElementById("term-body");

let historyCommands = [];
let historyIndex = -1;

/* -------------------------------
   Typing animation for responses
--------------------------------*/

function typeResponse(text) {
    const resp = document.createElement("div");
    resp.className = "line typing";
    output.appendChild(resp);

    let i = 0;

    function typeChar() {
        if (i < text.length) {
            resp.innerHTML += text[i];
            termBody.scrollTop = termBody.scrollHeight;
            i++;
            setTimeout(typeChar, 8);
        } else {
            resp.classList.remove("typing");
        }
    }

    typeChar();
}

/* -------------------------------
   Boot typing function
--------------------------------*/

function typeLine(text, speed = 20) {

    return new Promise(resolve => {

        const line = document.createElement("div");
        line.className = "line typing";
        output.appendChild(line);

        let i = 0;

        function type() {

            if (i < text.length) {
                line.innerHTML += text[i];
                termBody.scrollTop = termBody.scrollHeight;
                i++;
                setTimeout(type, speed);
            } else {
                line.classList.remove("typing");
                resolve();
            }

        }

        type();

    });

}

/* -------------------------------
   Fake loading dots animation
--------------------------------*/

function loadingDots(text, duration = 1500) {

    return new Promise(resolve => {

        const line = document.createElement("div");
        line.className = "line";
        line.innerHTML = text;
        output.appendChild(line);

        let dots = 0;

        const interval = setInterval(() => {

            dots = (dots + 1) % 4;
            line.innerHTML = text + ".".repeat(dots);

        }, 300);

        setTimeout(() => {

            clearInterval(interval);
            line.innerHTML = text + "... OK";

            resolve();

        }, duration);

    });

}

/* -------------------------------
   Boot sequence
--------------------------------*/

async function bootSequence() {

    const logo = [

"████████╗██╗  ██╗███████╗██████╗ ███████╗ █████╗ ██╗     ",
"╚══██╔══╝██║  ██║██╔════╝██╔══██╗██╔════╝██╔══██╗██║     ",
"   ██║   ███████║█████╗  ██████╔╝█████╗  ███████║██║     ",
"   ██║   ██╔══██║██╔══╝  ██╔══██╗██╔══╝  ██╔══██║██║     ",
"   ██║   ██║  ██║███████╗██║  ██║███████╗██║  ██║███████╗",
"",
"███████╗ █████╗ ██╗   ██╗███╗   ██╗███████╗",
"╚══███╔╝██╔══██╗╚██╗ ██╔╝████╗  ██║██╔════╝",
"  ███╔╝ ███████║ ╚████╔╝ ██╔██╗ ██║█████╗  ",
" ███╔╝  ██╔══██║  ╚██╔╝  ██║╚██╗██║██╔══╝  ",
"███████╗██║  ██║   ██║   ██║ ╚████║███████╗",
];

    for (let line of logo) {
        await typeLine(line, 2);
    }

    await new Promise(r => setTimeout(r, 700));

    await typeLine("Booting ZAYNE_OS v1.0...");
    await loadingDots("Loading modules", 1500);
    await loadingDots("Initializing creative engine", 1800);
    await loadingDots("Mounting filesystem", 1200);
    await loadingDots("Connecting to community node", 2000);

    await typeLine("AI subsystem online");
    await typeLine("Terminal ready.");

    await new Promise(r => setTimeout(r, 500));

    await typeLine("Type 'help' to begin.");

}

/* -------------------------------
   Command system
--------------------------------*/

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

            switch(val){

                case "help":
                responseText =
`Available commands:
about
skills
gaming
music
outdoors
coding
content
community
collabs
support
studio
ski
social
hidden
clear`;
                break;

                case "about":
                responseText = "Zayne — gamer, producer, coder, outdoor explorer.";
                break;

                case "skills":
                responseText = "HTML • CSS • JavaScript • Discord bots • Music production • Raspberry Pi";
                break;

                case "gaming":
                responseText = "Fortnite, GTA V, Roblox development, Minecraft builds.";
                break;

                case "music":
                responseText = "Beatboxing + producing hip hop / phonk / electronic.";
                break;

                case "outdoors":
                responseText = "10+ years skiing • hiking • fishing • camping.";
                break;

                case "coding":
                responseText = "Discord bots, Raspberry Pi robotics, experimental tools.";
                break;

                case "content":
                responseText = "Gaming videos, ski edits, music production.";
                break;

                case "community":
                responseText = "Join the Discord server for gaming, coding, and music.";
                break;

                case "collabs":
                responseText = "Open to collabs for music, gaming streams, and dev.";
                break;

                case "support":
                responseText = "Support through Patreon or other platforms.";
                break;

                case "studio":
                responseText = "Home studio for beatboxing and music creation.";
                break;

                case "ski":
                responseText = "Mountains: Sunday River • Sugarloaf • Mt Abram • Lost Valley";
                break;

                case "social":
                responseText = "Discord • Twitch • YouTube • SoundCloud";
                break;

                case "hidden":
                responseText =
`Hidden commands discovered:
robot
snowboard
future
easteregg`;
                break;

                case "robot":
                responseText = "Experimental Raspberry Pi AI robot car project.";
                break;

                case "snowboard":
                responseText = "Snowboarding arc begins next winter.";
                break;

                case "future":
                responseText = "Future goals: robotics, music releases, ski edits.";
                break;

                case "easteregg":
                responseText = "You found the archive node. More secrets ahead.";
                break;

                case "clear":
                output.innerHTML = "";
                input.value = "";
                return;

                default:
                responseText = `command not found: ${val}`;
            }

            if(responseText) typeResponse(responseText);

            input.value = "";
            termBody.scrollTop = termBody.scrollHeight;

        }

    });

    termBody.addEventListener("click", () => input.focus());

}
