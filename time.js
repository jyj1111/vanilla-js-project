const c=document.querySelector("#clock");

function f() {
    let current=new Date();
    let hour=String(current.getHours()).padStart(2,"0");
    let minute=String(current.getMinutes()).padStart(2,"0");
    let second=String(current.getSeconds()).padStart(2,"0");
    c.innerText=`${hour}: ${minute}: ${second}`;
}
f();
setInterval(f,1000);
    
