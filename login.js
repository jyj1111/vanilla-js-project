const a=document.querySelector("#name");

const l=document.querySelector("#login");
const w=document.querySelector("#welcome");
const k="name";
function f(event){
    event.preventDefault();
    
    l.classList.add("hidden");
    localStorage.setItem(k,a.value);
    w.innerText=`welcome to our site! ${a.value}`;
    w.classList.remove("hidden");
}
const save=localStorage.getItem(k);
if(save==null){
    l.classList.remove("hidden");
    l.addEventListener("submit",f);
}
else{
    w.innerText=`welcome to our site ${save}`;
    w.classList.remove("hidden");
}
