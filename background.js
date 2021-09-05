const bd=document.querySelector("body");
const imgs=["jeju1.gif","jeju9.gif","jeju13.gif"];
const ch=imgs[Math.floor(Math.random()*imgs.length)];

bd.style=`background: url(${ch})`;
bd.style.backgroundSize="cover";