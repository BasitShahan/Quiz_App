const arr= [1,2,3,4,5];
const div=document.createElement("div");

let timer=5;
const load=()=>{

document.body.appendChild(div)

Start();
}
const Start=()=>{

const interval= setInterval(() => {
    timer--;
    div.textContent=timer;
    if (timer<=1) {
        clearInterval(interval)
    }
    arr.forEach((val)=>{
     
    })
        
},1000 );
}
load();