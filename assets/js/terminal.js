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

  const accessLine=document.createElement("div");
  accessLine.className="line access-granted";
  accessLine.textContent="ACCESS GRANTED";
  output.appendChild(accessLine);
}

/* BOOT SEQUENCE */

async function bootSequence(){

  await typeLine("Booting REAL_ZAYNE_OS v1.00...");
  await loadingDots("Loading modules");
  await loadingDots("Initializing creative engine");
  await loadingDots("Mounting filesystems");
  await loadingDots("Connecting to community node");
  await typeLine("AI subsystem online");
  await typeLine("Terminal ready.");

  const helpLine=document.createElement("div");
  helpLine.className="line";
  helpLine.innerHTML=`Type <span class="help-highlight">'help'</span> to begin.`;
  output.appendChild(helpLine);

}

/* ------------------------------
   GITHUB CONFIG
--------------------------------*/

let GITHUB_REPO={
  owner:'the-RealZayne',
  repo:'the-RealZayne.github.io',
  branch:'main'
};

/* ------------------------------
   OPEN RZCODE IDE
--------------------------------*/

async function loadRzCode(){

  console.log("Opening RZ Code IDE...");

  const inputLine=document.querySelector('.input-line');
  if(inputLine) inputLine.style.display='none';

  termBody.innerHTML='<div style="padding:20px;color:#94a3b8;">Loading GitHub repo...</div>';

  try{

    await loadGitHubFileTree();

  }catch(e){

    console.error(e);

    termBody.innerHTML=`
      <div style="color:#ff4444;padding:20px;">
        Error loading repo: ${e.message}
      </div>
    `;
  }

}

/* ------------------------------
   GITHUB TREE LOADER
--------------------------------*/

async function loadGitHubFileTree(){

  const repoUrl=`https://api.github.com/repos/${GITHUB_REPO.owner}/${GITHUB_REPO.repo}/git/trees/${GITHUB_REPO.branch}?recursive=1`;

  console.log("Fetching repo:",repoUrl);

  const response=await fetch(repoUrl);
  const data=await response.json();

  console.log("GitHub response:",data);

  if(!data || !data.tree){

    throw new Error("GitHub API did not return a tree. Possible rate limit.");

  }

  const cleanTree=data.tree.filter(item=>{
    if(!item || !item.path) return false;

    const path=item.path.toLowerCase();

    return(
      !path.startsWith(".github") &&
      !path.includes("node_modules") &&
      item.type!=="commit"
    );

  });

  termBody.innerHTML=`
  <div class="rz-ide-container">

    <div class="rz-ide">

      <div class="rz-ide-sidebar">

        <div class="rz-sidebar-title">
          ${GITHUB_REPO.owner}/${GITHUB_REPO.repo}
        </div>

        <div class="rz-file-tree" id="file-tree">
          ${buildFileTree(cleanTree)}
        </div>

      </div>

      <div class="rz-ide-main">

        <div class="rz-ide-editor" id="rz-ide-editor">
          <div style="color:#94a3b8;padding:40px;text-align:center;">
            Click a file to view its contents
          </div>
        </div>

      </div>

    </div>

  </div>
  `;

  initFileTree();

}

/* ------------------------------
   BUILD FILE TREE
--------------------------------*/

function buildFileTree(treeItems){

  const treeMap={};

  treeItems.forEach(item=>{

    if(!item || !item.path) return;

    const parts=item.path.split('/');

    let current=treeMap;

    for(let i=0;i<parts.length-1;i++){

      const part=parts[i];

      if(!current[part]) current[part]={children:{},type:'folder'};

      current=current[part].children;

    }

    const filename=parts[parts.length-1];

    current[filename]={
      type:item.type==='tree'?'folder':'file',
      path:item.path,
      sha:item.sha
    };

  });

  return buildTreeHTML(treeMap);

}

function buildTreeHTML(treeObj){

  let html='';

  Object.keys(treeObj).forEach(key=>{

    const item=treeObj[key];

    if(item.type==='folder'){

      html+=`
        <div class="rz-folder">

          <div class="rz-tree-item folder-item">
            📁 ${key}
          </div>

          <div class="rz-folder-children">
            ${buildTreeHTML(item.children)}
          </div>

        </div>
      `;

    }else{

      html+=`
        <div class="rz-tree-item file-item"
          data-path="${item.path}"
          data-sha="${item.sha}">
          📄 ${key}
        </div>
      `;

    }

  });

  return html;

}

/* ------------------------------
   FILE TREE EVENTS
--------------------------------*/

function initFileTree(){

  const editor=document.getElementById('rz-ide-editor');

  document.querySelectorAll('.file-item').forEach(item=>{

    item.addEventListener('click',async()=>{

      const path=item.dataset.path;
      const sha=item.dataset.sha;

      try{

        const content=await fetchGitHubFile(path,sha);

        editor.innerHTML=highlightCode(content);

      }catch(e){

        console.error(e);

        editor.innerHTML=`
          <div style="color:red;padding:20px;">
          Error loading ${path}
          </div>
        `;

      }

    });

  });

}

/* ------------------------------
   FETCH FILE CONTENT
--------------------------------*/

async function fetchGitHubFile(path,sha){

  const url=`https://api.github.com/repos/${GITHUB_REPO.owner}/${GITHUB_REPO.repo}/contents/${path}?ref=${GITHUB_REPO.branch}`;

  const response=await fetch(url);
  const data=await response.json();

  if(data.content){

    return atob(data.content.replace(/\n/g,""));

  }

  const blobUrl=`https://api.github.com/repos/${GITHUB_REPO.owner}/${GITHUB_REPO.repo}/git/blobs/${sha}`;

  const blobResponse=await fetch(blobUrl);
  const blobData=await blobResponse.json();

  return atob(blobData.content);

}

/* ------------------------------
   CODE DISPLAY
--------------------------------*/

function highlightCode(content){

  const lines=content.split('\n');

  let html='';

  lines.forEach((line,i)=>{

    html+=`
      <div class="rz-code-line">
        <span class="rz-line-num">${i+1}</span>
        <span class="code-content">${escapeHtml(line)}</span>
      </div>
    `;

  });

  return html;

}

function escapeHtml(text){

  const div=document.createElement('div');
  div.textContent=text;
  return div.innerHTML;

}

/* ------------------------------
   TERMINAL INIT
--------------------------------*/

if(initBtn){

  initBtn.addEventListener("click",async()=>{

    initScreen.style.display="none";

    await loginSequence();
    await bootSequence();

  });

}

/* ------------------------------
   COMMAND SYSTEM
--------------------------------*/

if(input&&output&&termBody){

  input.addEventListener("keydown",async function(e){

    if(e.key==="Enter"){

      const val=input.value.trim().toLowerCase();

      const history=document.createElement("div");

      history.className="line";

      history.innerHTML=`<span class="prompt">zayne@therealspace:~$</span> ${val}`;

      output.appendChild(history);

      switch(val){

        case "help":

          await typeLine("about");
          await typeLine("skills");
          await typeLine("coding");
          await typeLine("rzcode");
          await typeLine("clear");

        break;

        case "rzcode":
        case "open rzcode":

          await typeLine("Loading RZ Code IDE...");
          loadRzCode();
          return;

        case "clear":

          output.innerHTML="";
          return;

        default:

          await typeLine(`command not found: ${val}`);

      }

      input.value="";
      termBody.scrollTop=termBody.scrollHeight;

    }

  });

}
