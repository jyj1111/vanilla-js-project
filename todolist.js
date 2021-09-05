const todo=document.querySelector("#todo");
const b=document.querySelector("#todolist");
const i=todo.querySelector("input");
let arr=[];
function s(){
    localStorage.setItem("to",JSON.stringify(arr));
    
}
function de(event){
    const li=event.target.parentElement;
    li.remove();
    arr=arr.filter((todo)=>todo.id!==parseInt(li.id));
    console.log(arr);
    s();
}
function paint(d){
    const li=document.createElement("li");
    li.id=d.id;
    const span=document.createElement("span");
    span.innerText=d.text;
    const button=document.createElement("button");
    button.innerText="x";
    button.addEventListener("click",de);
    li.appendChild(span);
    li.appendChild(button);
    b.appendChild(li);
}
function f(event){
    event.preventDefault();
    const d=i.value;
    
    i.value="";
    const newobj={
        id:Date.now(),
        text:d
    };
    arr.push(newobj);
    paint(newobj);
    s();    
}
todo.addEventListener("submit",f);

const savingtodo=localStorage.getItem("to");
if(savingtodo!==null){
    const parse_savingtodo=JSON.parse(savingtodo);
    arr=parse_savingtodo;
    parse_savingtodo.foreach(paint);
}