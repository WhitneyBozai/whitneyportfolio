function setup(){
  let canvas = createCanvas(400, 400);  // Example canvas size, adjust as needed
  canvas.parent('sketch-container');   
}

function draw(){
  background(120,216,230);
  
  
  fill(220);
  strokeWeight(2);
  ellipse(200,200,200,160);
  
  fill(200,505,205);
  noStroke();
  triangle(0,80,0,0,400,0);
  
  stroke(255,255,0);
  line(100,200,300,200);
  
  noStroke();
  fill(300);
  circle(200,220,4);
  
  fill(100);
  circle(220,220,10);
  
  fill(0,127,255);
  noStroke();
  triangle(0,0,0,400,80,400);
  
  fill(200,190,255);
  triangle(400, 300, 0, 400, 400, 400);
  
  fill(300,255,0);
  triangle(30, 60, 58, 0, 86, 60);
  triangle(30, 60, 58, 120, 86, 60);
  
  fill(255,200,100);
  triangle(320, 0,400, 400, 400,0);
  
  
  blendMode(ADD);
  
  push();
  translate(150, 200);
  rotate(radians(45));
  fill(255, 0, 150); // Semi-transparent red
  ellipse(200, 10, 100, 100);
  pop();
  
  blendMode(BLEND);
  
}
 
//Name: Shangwen(Whitney) Li
//Partner’s Name: Helen Ren
//Object Description: 
//Earbuds
//A pair of HUAWEI earbuds is enclosed in a matte silver case. The case has an oval shape but is a little bit flat. You can imagine the shape of it like this: you slap a dough on a table. The case opening area is a parabolic curve above the curve where it marked the small HUAWEI text on top of it in black color. Under the curve is where it has grey dots for Bluetooth signaling. On the right side of the grey dot is a flat grey button that you can press to enable the Bluetooth function.

//Reflection: The language my partner used is really specific, she described it from the shape and color of the earbud case as well as the details on the earbud case. The image appeared in my mind was a silver three-dimensional oval earbud case. The image I made by coding was a top view of the earbud case, and it is flat, I use simple graphics and lines and colors to show the look of the earbud case. The description from my partner was really specific, and the my interpretation of it is three-dimensional but the image created by coding was more flat and two-dimensional, and because I do not know how to add letters in the code, so the image I created missed some details. 