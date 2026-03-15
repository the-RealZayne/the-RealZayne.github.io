class IDE {
  constructor(container) {
    this.container = container;
    this.currentFile = 'file-1';
    this.init();
  }

  init() {
    this.file1 = document.getElementById("ide-file-1");
    this.file2 = document.getElementById("ide-file-2");
    this.tab1 = document.getElementById("ide-tab-1");
    this.tab2 = document.getElementById("ide-tab-2");
    this.code1 = document.getElementById("ide-code-1");
    this.code2 = document.getElementById("ide-code-2");
    this.closeBtn = document.getElementById("ide-close-btn");

    this.bindEvents();
  }

  bindEvents() {
    if (this.file1) this.file1.addEventListener("click", () => this.switchToJS());
    if (this.tab1) this.tab1.addEventListener("click", () => this.switchToJS());
    if (this.file2) this.file2.addEventListener("click", () => this.switchToCSS());
    if (this.tab2) this.tab2.addEventListener("click", () => this.switchToCSS());
    if (this.closeBtn) this.closeBtn.addEventListener("click", () => this.closeIDE());
  }

  switchToJS() {
    this.file1.classList.add("active");
    this.file2.classList.remove("active");
    this.tab1.classList.add("active");
    this.tab2.classList.remove("active");
    this.code1.classList.add("active-code");
    this.code2.classList.remove("active-code");
    this.currentFile = 'file-1';
  }

  switchToCSS() {
    this.file2.classList.add("active");
    this.file1.classList.remove("active");
    this.tab2.classList.add("active");
    this.tab1.classList.remove("active");
    this.code2.classList.add("active-code");
    this.code1.classList.remove("active-code");
    this.currentFile = 'file-2';
  }

  closeIDE() {
    this.container.remove();
  }
}

// Global function to launch IDE
function launchIDE() {
  // Remove existing IDE if present
  const existing = document.querySelector('.ide-overlay');
  if (existing) existing.remove();

  // Create overlay
  const overlay = document.createElement('div');
  overlay.className = 'ide-overlay';
  overlay.innerHTML = `
    <button class="ide-close-btn" id="ide-close-btn">×</button>
    
    <div class="ide-container">
      <div class="ide-sidebar">
        <div class="sidebar-title">EXPLORER</div>
        <div class="file-item active" id="ide-file-1">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#00ff9c" stroke-width="2">
            <path d="M12 2H2v20h20V8l-6-6z"></path><path d="M14 2v6h6"></path>
          </svg>
          <span>script.js</span>
        </div>
        <div class="file-item" id="ide-file-2">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#FF4500" stroke-width="2">
            <path d="M12 2H2v20h20V8l-6-6z"></path><path d="M14 2v6h6"></path>
          </svg>
          <span>style.css</span>
        </div>
      </div>
      
      <div class="ide-main">
        <div class="ide-tabs">
          <div class="tab active" id="ide-tab-1">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#00ff9c" stroke-width="2">
              <path d="M12 2H2v20h20V8l-6-6z"></path>
            </svg>
            script.js
          </div>
          <div class="tab" id="ide-tab-2">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#FF4500" stroke-width="2">
              <path d="M12 2H2v20h20V8l-6-6z"></path>
            </svg>
            style.css
          </div>
        </div>
        
        <div class="ide-editor">
          <div class="code-view active-code" id="ide-code-1">
            <div class="code-line"><span class="line-num">1</span><span class="kw">const</span> <span class="var">initApp</span> <span class="op">=</span> <span class="kw">function</span>() {</div>
            <div class="code-line"><span class="line-num">2</span>  <span class="kw">const</span> <span class="var">target</span> <span class="op">=</span> <span class="obj">document</span>.<span class="func">getElementById</span>(<span class="str">"app"</span>);</div>
            <div class="code-line"><span class="line-num">3</span>  <span class="var">target</span>.<span class="obj">classList</span>.<span class="func">add</span>(<span class="str">"running"</span>);</div>
            <div class="code-line"><span class="line-num">4</span>  </div>
            <div class="code-line"><span class="line-num">5</span>  <span class="obj">console</span>.<span class="func">log</span>(<span class="str">"REAL_ZAYNE_OS v${document.getElementById('version-display')?.textContent || '1.0.0'} initialized"</span>);</div>
            <div class="code-line"><span class="line-num">6</span>};</div>
            <div class="code-line"><span class="line-num">7</span></div>
            <div class="code-line"><span class="line-num">8</span><span class="func">initApp</span>();</div>
          </div>
          
          <div class="code-view" id="ide-code-2">
            <div class="code-line"><span class="line-num">1</span><span class="var">.running</span> {</div>
            <div class="code-line"><span class="line-num">2</span>  <span class="kw">animation</span>: <span class="str">glow 2s ease-in-out infinite alternate</span>;</div>
            <div class="code-line"><span class="line-num">3</span>  <span class="kw">box-shadow</span>: <span class="str">0 0 20px #00ff9c</span>;</div>
            <div class="code-line"><span class="line-num">4</span>}</div>
            <div class="code-line"><span class="line-num">5</span></div>
            <div class="code-line"><span class="line-num">6</span><span class="kw">@keyframes</span> <span class="var">glow</span> {</div>
            <div class="code-line"><span class="line-num">7</span>  <span class="num">0%</span> { <span class="kw">text-shadow</span>: <span class="str">0 0 5px #00ff9c</span>; }</div>
            <div class="code-line"><span class="line-num">8</span>  <span class="num">100%</span> { <span class="kw">text-shadow</span>: <span class="str">0 0 20px #00ff9c, 0 0 30px #FF4500</span>; }</div>
            <div class="code-line"><span class="line-num">9</span>}</div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  document.body.appendChild(overlay);
  
  // Initialize IDE after DOM is ready
  requestAnimationFrame(() => {
    new IDE(overlay);
  });
}
