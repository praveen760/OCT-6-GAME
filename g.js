var canvas=document.getElementById("mycanvas");
var ctx=canvas.getContext("2d");

var x=canvas.width/2;
var y=canvas.height/2;
var r=10;
var dx=2;
var dy=2;

var ph=10;
var pw=80;
var px=canvas.width/2-(pw/2);
var py=canvas.height-ph;

var leftpress=false;
var rightpress=false;
document.addEventListener("keydown",keydownfunction);
document.addEventListener("keyup",keyupfunction);

function keydownfunction(e){
  // console.log(e);
   if(e.keyCode==37){
       leftpress=true;
   }
   else if(e.keyCode==39){
       rightpress=true;
   }
}
function keyupfunction(e){
    //console.log(e);
    if(e.keyCode==37){
        leftpress=false;
    }
    else if(e.keyCode==39){
        rightpress=false;
    }
}
function drawpaddle(){
    ctx.beginPath();
    ctx.fillStyle="blue;"
    ctx.rect(px,py,pw,ph);
    ctx.fill();
    ctx.closePath();
    if(px>0 && leftpress){
        px=px-5;
    }
    if(px<canvas.width-pw && rightpress){
        px=px+5;
    }
}
function drawball(){
    ctx.beginPath();
    ctx.fillStyle="blue";
    ctx.arc(x,y,r,0,2*Math.PI);
    ctx.fill();
    ctx.closePath();

    x=x+dx;
    y=y+dy;
    if(x>=canvas.width-r){
        dx=-dx
    }
    if(x<=r){
        dx=-dx;
    }

    if(y>=canvas.height-r-ph){
        if(x+r>=px && x+r<=px+pw)
        dy=-dy
    }
    else{
        document.location.reload();
    }
    if(y<=r){
        dy=-dy;
    }
}
function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawball();
    drawpaddle();
   
};
setInterval(draw,10);
