const { mat4, vec3, quat } = glMatrix;

// ===== YOUTUBE DATA =====
const videos = [
  "59QBOO6m210","skD7r0yWOG4","PQdVTMZQtAk","zFjLSlTMV2k",
  "dS-MaUk6YBI","c2fs8Eg0Vcc","EhzNikz8P9E","ZKCXGo4AuKg",
  "V1TzrETCBTo","tpwe69g_7Sg","u43VXCNzVsY"
];

const items = videos.map(id => ({
  image: `https://img.youtube.com/vi/${id}/maxresdefault.jpg`,
  link: `https://www.youtube.com/watch?v=${id}`
}));

// ===== ARC BALL CONTROL (PORTED) =====
class Arcball {
  constructor(canvas) {
    this.canvas = canvas;
    this.orientation = quat.create();
    this.pointerRotation = quat.create();
    this.isDown = false;

    this.last = [0,0];

    canvas.addEventListener("mousedown", e=>{
      this.isDown = true;
      this.last = [e.clientX, e.clientY];
    });

    window.addEventListener("mouseup", ()=> this.isDown=false);

    window.addEventListener("mousemove", e=>{
      if(!this.isDown) return;

      let dx = e.clientX - this.last[0];
      let dy = e.clientY - this.last[1];

      this.last = [e.clientX, e.clientY];

      const rotX = quat.setAxisAngle(quat.create(), [1,0,0], dy*0.005);
      const rotY = quat.setAxisAngle(quat.create(), [0,1,0], dx*0.005);

      quat.multiply(this.orientation, rotX, this.orientation);
      quat.multiply(this.orientation, rotY, this.orientation);
    });
  }
}

// ===== MAIN SYSTEM =====
class VideoSphere {
  constructor(canvas) {
    this.canvas = canvas;
    this.gl = canvas.getContext("webgl");

    this.control = new Arcball(canvas);

    this.radius = 2;
    this.points = [];

    this.initPoints();
    this.initGL();
    this.loadTextures();

    requestAnimationFrame(()=>this.loop());
  }

  initPoints() {
    const count = items.length;

    for(let i=0;i<count;i++){
      const phi = Math.acos(-1 + (2*i)/count);
      const theta = Math.sqrt(count*Math.PI)*phi;

      this.points.push([
        Math.cos(theta)*Math.sin(phi),
        Math.sin(theta)*Math.sin(phi),
        Math.cos(phi)
      ]);
    }
  }

  initGL() {
    const gl = this.gl;

    const vs = `
    attribute vec3 position;
    uniform mat4 matrix;
    void main(){
      gl_Position = matrix * vec4(position,1.0);
      gl_PointSize = 120.0;
    }`;

    const fs = `
    precision mediump float;
    uniform sampler2D tex;
    void main(){
      gl_FragColor = texture2D(tex, gl_PointCoord);
    }`;

    const createShader = (type, src)=>{
      const s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };

    const program = gl.createProgram();
    gl.attachShader(program, createShader(gl.VERTEX_SHADER, vs));
    gl.attachShader(program, createShader(gl.FRAGMENT_SHADER, fs));
    gl.linkProgram(program);

    this.program = program;
    gl.useProgram(program);

    this.posLoc = gl.getAttribLocation(program, "position");
    this.matrixLoc = gl.getUniformLocation(program, "matrix");

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.points.flat()), gl.STATIC_DRAW);

    gl.enableVertexAttribArray(this.posLoc);
    gl.vertexAttribPointer(this.posLoc, 3, gl.FLOAT, false, 0, 0);
  }

  loadTextures() {
    const gl = this.gl;
    this.textures = [];

    items.forEach(item=>{
      const tex = gl.createTexture();
      const img = new Image();

      img.crossOrigin = "anonymous";
      img.src = item.image;

      img.onload = ()=>{
        gl.bindTexture(gl.TEXTURE_2D, tex);
        gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,img);
        gl.generateMipmap(gl.TEXTURE_2D);
      };

      this.textures.push(tex);
    });
  }

  loop() {
    const gl = this.gl;

    gl.viewport(0,0,this.canvas.width,this.canvas.height);
    gl.clearColor(0,0,0,1);
    gl.clear(gl.COLOR_BUFFER_BIT);

    const proj = mat4.perspective(mat4.create(), Math.PI/4, this.canvas.width/this.canvas.height, 0.1, 100);
    const view = mat4.lookAt(mat4.create(), [0,0,5], [0,0,0], [0,1,0]);

    const model = mat4.fromQuat(mat4.create(), this.control.orientation);

    const mvp = mat4.multiply(mat4.create(), proj, mat4.multiply(mat4.create(), view, model));

    gl.uniformMatrix4fv(this.matrixLoc, false, mvp);

    gl.drawArrays(gl.POINTS, 0, this.points.length);

    requestAnimationFrame(()=>this.loop());
  }
}

// ===== INIT =====
window.addEventListener("load", ()=>{
  const canvas = document.getElementById("video-sphere-canvas");
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;

  new VideoSphere(canvas);
});
