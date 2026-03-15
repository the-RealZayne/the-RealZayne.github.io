const file1 = document.getElementById("rz-file-1");
const file2 = document.getElementById("rz-file-2");

const tab1 = document.getElementById("rz-tab-1");
const tab2 = document.getElementById("rz-tab-2");

const code1 = document.getElementById("rz-code-1");
const code2 = document.getElementById("rz-code-2");

function switchToJS(){

file1.classList.add("active");
file2.classList.remove("active");

tab1.classList.add("active");
tab2.classList.remove("active");

code1.classList.add("active-code");
code2.classList.remove("active-code");

}

function switchToCSS(){

file2.classList.add("active");
file1.classList.remove("active");

tab2.classList.add("active");
tab1.classList.remove("active");

code2.classList.add("active-code");
code1.classList.remove("active-code");

}

file1.addEventListener("click",switchToJS);
tab1.addEventListener("click",switchToJS);

file2.addEventListener("click",switchToCSS);
tab2.addEventListener("click",switchToCSS);
