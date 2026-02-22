function go(link){
window.open(link,"_blank");
}

/* PARTICLE EFFECT */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];

class Particle{
constructor(){
this.x = Math.random()*canvas.width;
this.y = Math.random()*canvas.height;
this.size = Math.random()*2;
this.speedY = Math.random()*0.5+0.2;
}
update(){
this.y -= this.speedY;
if(this.y < 0){
this.y = canvas.height;
this.x = Math.random()*canvas.width;
}
}
draw(){
ctx.fillStyle = "rgba(255,182,193,0.7)";
ctx.beginPath();
ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
ctx.fill();
}
}

function init(){
for(let i=0;i<120;i++){
particlesArray.push(new Particle());
}
}

function animate(){
ctx.clearRect(0,0,canvas.width,canvas.height);
particlesArray.forEach(p=>{
p.update();
p.draw();
});
requestAnimationFrame(animate);
}

init();
animate();

window.addEventListener("resize",()=>{
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
});
