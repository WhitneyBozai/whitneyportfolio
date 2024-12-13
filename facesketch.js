function draw() {
  background(220);
  
  // 在画布上绘制图片，居中显示
  image(corgiImage, width / 2 - corgiImage.width / 2, height / 2 - corgiImage.height / 2);
}

function mousePressed() {
  // 可选，您可以在这里添加交互功能
}


let faceSize; // User-defined variable for the size of the dog face

function setup() {
  createCanvas(400, 400);
  faceSize = random(50, 150); // Initialize face size with a random value
}



function draw() {
  background(173, 216, 230);
  
  // Draw the dog face at the mouse position
  drawDogFace(mouseX, mouseY, faceSize);
}
 

function drawDogFace(x, y, size) {
  // Face
  if (mouseIsPressed) {
    fill(random(255), random(255), random(255));
  } else {
    fill(100, 150, 200);  // Default color when mouse is not pressed
  }
  noStroke();
  fill(255, 204, 153); 
  ellipse(x, y-10, size+15, size); // Face shape

  // Ears
  noStroke();

  fill(101, 67, 33); // Darker brown for ears
  ellipse(x - size * 0.5-5, y - size * 0.3+22, size * 0.5-3, size * 0.8); // Left ear
  ellipse(x + size * 0.5+5, y - size * 0.3+22, size * 0.5-3, size * 0.8); // Right ear

  // Eyes
  fill(0); //eyes
  ellipse(x - size * 0.2, y - size * 0.1, size * 0.2, size * 0.2+3); // Left eye
  ellipse(x + size * 0.2, y - size * 0.1, size * 0.2, size * 0.2+3); // Right eye
  fill(255); // highlight for pupils
  ellipse(x - size * 0.2+3, y - size * 0.1-3, size * 0.1-2, size * 0.1-2); // Left highlight
  fill(255)
   ellipse(x + size * 0.2+3, y - size * 0.1-3, size * 0.1-2, size * 0.1-2); // Right highlight


  // Nose
  fill(0); // Black color for nose
  ellipse(x, y + size * 0.2, size * 0.15+20*0.5, size * 0.1+12*0.5); // Nose


}

function mousePressed() {
  // Change the size of the dog face to a new random value when the mouse is pressed
  faceSize = random(50, 150);
}
