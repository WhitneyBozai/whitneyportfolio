let corgi;
let x;
let y;
let speed;
let circleY=0;
let circleY2=600;
let canvas;
let canvasWidth = 400;
let canvasHeight = 600;


function preload() {
  corgi = loadImage('corgiking.jpg'); 
}

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent('sketch-container');
  background(220);
  image(corgi, 0, 0, width, height); 
  drawCrown(200, 110, 40); 
  x = width / 2; 
  y = 500; // 
  speed = 2; // 
}

function draw() { 
  image(corgi, 0, 0, width, height); 
  
  drawCrown(200, 110, 40); 
  
  drawCircle();
  moveCircle();
  
  drawCircle2();
  moveCircle2();
  
  stroke(255, 215);
  fill(100, 100, 255); 
  ellipse(x, y, 100, 40); 
  fill(135, 206, 235);
  ellipse(x, y - 11, 40, 30); 

  
  x += speed;

  
  if (x > width + 25 || x < -25) {
    speed *= -1; 
  }
}

function drawCircle(){
  fill(255,204,0);
  noStroke();
  circle(70,circleY,50);
  
}
function moveCircle(){
  circleY=circleY+1;
  if(circleY>height){
    circleY=0;}
}

function drawCircle2(){
  fill(255,204,0);
  noStroke();
  circle(330,circleY2,50);
  
}
function moveCircle2(){
  circleY2=circleY2-1;
  if(circleY2<0){
   circleY2=600;}
}


function drawCrown(x, y, size) {
  fill(255, 205, 0); 
  stroke(255, 215); 
  triangle(x - 18, y - 80, x, y - 40, x-30, y - 40);
  triangle(x + 24, y - 80, x + 30, y - 40, x, y - 40);
  triangle(x + 10, y - 90, x + 20, y - 40, x - 15, y - 40);
  fill(0, 0, 2300); 
  ellipse(x + 5, y - size * 1.5 + 5, size / 3, size / 3);
  fill(173, 216, 230); 
  circle(x+10,y-90,5);
  circle(x-18,y-80,5);
  circle(x+24,y-80,5);
  fill(173, 216, 230); 
}
