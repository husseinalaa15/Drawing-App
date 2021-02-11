const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');
const sizeDesc = document.getElementById('sizedesc');
const colorVal = document.getElementById('color');
const clearBtn = document.getElementById('clear');

let size = 20;
let x = 50;
let y = 50;
let color= 'black';
let isPressed=false;
updateSizeScreen()

canvas.addEventListener('mousedown',()=>{
    isPressed = true;
})
canvas.addEventListener('mouseup',()=>{
    isPressed = false;
})

canvas.addEventListener("mousemove",(e)=>{
    if(isPressed){
        const x = e.offsetX;
        const y = e.offsetY;

    drawCircle(x,y)
    }
    
});


increase.addEventListener("click",()=>{
    size += 5;
    if(size > 50){
        size =50;
    }
    updateSizeScreen()
})
decrease.addEventListener("click",()=>{
    size -= 5;
    if(size < 5){
        size = 5;
    }
    updateSizeScreen()
})



function updateSizeScreen(){
    sizeDesc.innerText = size;
}

colorVal.addEventListener('change',(e)=>{
    color = e.target.value;
})

clearBtn.addEventListener("click",()=>{
    ctx.clearRect(0,0,canvas.clientWidth,canvas.height)
})

function drawCircle(x,y){
    ctx.beginPath();
    ctx.arc(x,y,size,0,Math.PI *2);
    ctx.fill()
    ctx.fillStyle = color;
}

