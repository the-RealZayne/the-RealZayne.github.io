// assets/js/terminal.js

const input = document.getElementById("term-input");
const output = document.getElementById("output-area");
const termBody = document.getElementById("term-body");

const initBtn = document.getElementById("init-btn");
const initScreen = document.getElementById("terminal-init");

let historyCommands = [];
let historyIndex = -1;

/* typing response */
function typeResponse(text){
  const resp=document.createElement("div");
  resp.className="line typing";
  output.appendChild(resp);

  let i=0;

  function type(){
    if(i<text.length){
      resp.innerHTML+=text[i];
      termBody.scrollTop=termBody.scrollHeight;
      i++;
      setTimeout(type,12);
    }else{
      resp.classList.remove("typing");
    }
  }

  type();
}

/* slow line typing */
function typeLine(text,speed=55){
  return new Promise(resolve=>{
    const line=document.createElement("div");
    line.className="line typing";
    output.appendChild(line);

    let i=0;

    function type(){
      if(i<text.length){
        line.innerHTML+=text[i];
        termBody.scrollTop=termBody.scrollHeight;
        i++;
        setTimeout(type,speed);
      }else{
        line.classList.remove("typing");
        resolve();
      }
    }

    type();
  });
}

/* type into existing span element (no new line) */
function typeLineToSpan(text, spanId, speed=55){
  return new Promise(resolve=>{
    const span = document.getElementById(spanId);
    let i=0;
    function type(){
      if(i<text.length){
        span.innerHTML += text[i];
        termBody.scrollTop = termBody.scrollHeight;
        i++;
        setTimeout(type, speed);
      } else {
        span.classList.remove("typing");
        resolve();
      }
    }
    type();
  });
}

/* FIXED ASYNC COMMAND SEQUENCE - creates styled elements directly */
async function cmdSequence(commands) {
  for(const [text, delay = 1500] of commands) {
    const line = document.createElement("div");
    line.className = "line typing";
    output.appendChild(line);
    termBody.scrollTop = termBody.scrollHeight;
    
    // Create styled content
    if(text.includes("about") || text.includes("skills") || text.includes("gaming") || 
       text.includes("music") || text.includes("outdoors") || text.includes("coding") ||
       text.includes("content") || text.includes("community") || text.includes("collabs") ||
       text.includes("support") || text.includes("studio") || text.includes("ski") ||
       text.includes("social") || text.includes("hidden") || text.includes("robot") ||
       text.includes("snowboard") || text.includes("future") || text.includes("clear") ||
       text.includes("easteregg")) {
      // Command names get prompt styling
      line.innerHTML = `<span class="prompt">${text.trim()}</span>`;
    } else {
      line.innerHTML = text;
    }
    
    // Typing animation effect
    let visibleChars = line.textContent.length;
    await new Promise(r => setTimeout(r, visibleChars * 60));
    line.classList.remove("typing");
    await new Promise(r => setTimeout(r, delay));
  }
}

/* loading dots */
function loadingDots(text,duration=2000){
  return new Promise(resolve=>{
    const line=document.createElement("div");
    line.className="line";
    output.appendChild(line);

    let dots=0;

    const interval=setInterval(()=>{
      dots=(dots+1)%4;
      line.innerHTML=text+".".repeat(dots);
    },400);

    setTimeout(()=>{
      clearInterval(interval);
      line.innerHTML=text+"... done";
      resolve();
    },duration);
  });
}

/* LOGIN SEQUENCE */
async function loginSequence(){
  await loadingDots("Connecting to Interweb");
  await new Promise(r=>setTimeout(r,900));
  
  await loadingDots("Establishing therealzayne node");
  await new Promise(r=>setTimeout(r,800));

  await typeLine("");
  
  // Stationary username prompt on SAME line
  const userPrompt = document.createElement("div");
  userPrompt.className = "line";
  userPrompt.innerHTML = '<span class="prompt">username: </span><span id="user-input" class="typing"></span>';
  output.appendChild(userPrompt);
  termBody.scrollTop = termBody.scrollHeight;
  
  await typeLineToSpan("guest", "user-input", 200);
  await new Promise(r=>setTimeout(r,1500));
  
  // Stationary password prompt on SAME line  
  const passPrompt = document.createElement("div");
  passPrompt.className = "line";
  passPrompt.innerHTML = '<span class="prompt">password: </span><span id="pass-input" class="typing"></span>';
  output.appendChild(passPrompt);
  termBody.scrollTop = termBody.scrollHeight;
  
  await typeLineToSpan("********", "pass-input", 200);
  await new Promise(r=>setTimeout(r,2000));

  await typeLine("");
  const accessLine = document.createElement("div");
  accessLine.className = "line access-granted";
  accessLine.textContent = "ACCESS GRANTED";
  output.appendChild(accessLine);
  termBody.scrollTop = termBody.scrollHeight;
  
  await new Promise(r=>setTimeout(r,900));
}

/* BOOT SEQUENCE */
async function bootSequence(){
  await typeLine("Booting REAL_ZAYNE_OS v1.00...");
  await new Promise(r=>setTimeout(r,800));

  await loadingDots("Loading modules");
  await loadingDots("Initializing creative engine");
  await loadingDots("Mounting filesystems");
  await loadingDots("Connecting to community node");

  await typeLine("AI subsystem online");
  await new Promise(r=>setTimeout(r,1000));
  await typeLine("Terminal ready.");

  await new Promise(r=>setTimeout(r,800));
  const helpLine = document.createElement("div");
  helpLine.className = "line";
  helpLine.innerHTML = `Type <span class="help-highlight">'help'</span> to begin.`;
  output.appendChild(helpLine);
  termBody.scrollTop = termBody.scrollHeight;
}

/* INITIATE BUTTON */
if(initBtn){
  initBtn.addEventListener("click",async()=>{
    initScreen.style.display="none";
    await loginSequence();
    await bootSequence();
  });
}

/* COMMAND SYSTEM */
if(input && output && termBody){
  input.addEventListener("keydown", async function(e){
    if(e.key==="ArrowUp"){
      if(historyCommands.length>0){
        historyIndex--;
        if(historyIndex<0)historyIndex=0;
        input.value=historyCommands[historyIndex];
      }
      return;
    }

    if(e.key==="ArrowDown"){
      if(historyCommands.length>0){
        historyIndex++;
        if(historyIndex>=historyCommands.length){
          historyIndex=historyCommands.length;
          input.value="";
        }else{
          input.value=historyCommands[historyIndex];
        }
      }
      return;
    }

    if(e.key==="Enter"){
      const val=input.value.trim().toLowerCase();

      if(val!==""){
        historyCommands.push(val);
        historyIndex=historyCommands.length;
      }

      const history=document.createElement("div");
      history.className="line";
      history.innerHTML=`<span class="prompt">zayne@therealspace:~$</span> ${val}`;
      output.appendChild(history);

      // ASYNC COMMAND RESPONSES
      switch(val){
        case "help":
          await cmdSequence([
            ["Available commands:", 500],
            ["about", 150],
            ["skills", 150],
            ["gaming", 150],
            ["music", 150],
            ["outdoors", 150],
            ["coding", 150],
            ["content", 150],
            ["community", 150],
            ["collabs", 150],
            ["support", 150],
            ["studio", 150],
            ["ski", 150],
            ["social", 150],
            ["hidden", 150],
            ["clear", 1000]
          ]);
          break;

        case "about":
          await cmdSequence([["Zayne — gamer, producer, coder, outdoor explorer."]]);
          break;

        case "skills":
          await cmdSequence([["HTML • CSS • JavaScript • Discord bots • Music production • Raspberry Pi"]]);
          break;

        case "gaming":
          await cmdSequence([["Fortnite, GTA V, Roblox development, Minecraft builds."]]);
          break;

        case "music":
          await cmdSequence([["Beatboxing + producing hip hop / phonk / electronic."]]);
          break;

        case "outdoors":
          await cmdSequence([["10+ years skiing • hiking • fishing • camping."]]);
          break;

        case "coding":
          await cmdSequence([["Discord bots, Raspberry Pi robotics, experimental tools."]]);
          break;

        case "content":
          await cmdSequence([["Gaming videos, ski edits, music production."]]);
          break;

        case "community":
          await cmdSequence([["Join the Discord server for gaming, coding, and music."]]);
          break;

        case "collabs":
          await cmdSequence([["Open to collabs for music, gaming streams, and dev."]]);
          break;

        case "support":
          await cmdSequence([["Support through Patreon or other platforms."]]);
          break;

        case "studio":
          await cmdSequence([["Home studio for beatboxing and music creation."]]);
          break;

        case "ski":
          await cmdSequence([["Mountains: Sunday River • Sugarloaf • Mt Abram • Lost Valley"]]);
          break;

        case "social":
          await cmdSequence([["Discord • Twitch • YouTube • SoundCloud"]]);
          break;

        case "hidden":
          await cmdSequence([
            ["Hidden commands discovered:", 500],
            ["robot", 200],
            ["snowboard", 200],
            ["future", 200],
            ["easteregg", 1000]
          ]);
          break;

        case "robot":
          await cmdSequence([["Experimental Raspberry Pi AI robot car project."]]);
          break;

        case "snowboard":
          await cmdSequence([["Snowboarding arc begins next winter."]]);
          break;

        case "future":
          await cmdSequence([["Future goals: robotics, music releases, ski edits."]]);
          break;

        case "easteregg":
          await cmdSequence([["You found the archive node. More secrets ahead."]]);
          break;

        case "clear":
          output.innerHTML="";
          input.value="";
          return;

        default:
          await typeLine(`command not found: ${val}`);
      }

      input.value="";
      termBody.scrollTop=termBody.scrollHeight;
    }
  });

  termBody.addEventListener("click",()=>input.focus());
}
