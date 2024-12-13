let emotionalState = "red"; 
let emotionColors = {
  red: [255, 0, 0],        // red
  pink: [218, 112, 214],   // pink
  blue: [0, 0, 139],       // blue
  gray: [128, 128, 128]    // gray
};
let angle = 0; 

let circleY; 
let circleSpeed = 100; 
let circleDirection = 1; 

function setup() {
  createCanvas(600, 600);
  frameRate(1); 
  circleY = height; 
}

function draw() {
  background(255);
  let currentColor = emotionColors[emotionalState];

 
  let topColor = color(currentColor[0], currentColor[1], currentColor[2]);
  let bottomColor = color(currentColor[0] + 100, currentColor[1] + 100, currentColor[2] + 100); 

  for (let i = 0; i <= 300; i++) {
    let interColor = lerpColor(topColor, bottomColor, map(i, 0, 300, 0, 1));
    stroke(interColor);
    strokeWeight(1);
    line(width / 2 - 150, height / 2 - 150 + i, width / 2 + 150, height / 2 - 150 + i);
  }

  
  let speed;
  if (emotionalState === "red") {
    speed = TWO_PI / 10; 
  } else if (emotionalState === "blue") {
    speed = TWO_PI / 20; 
  } else if (emotionalState === "gray") {
    speed = TWO_PI / 30; 
  } else {
    speed = TWO_PI / 15; 
  }

  
  angle += speed;

  let pointerLength = 100;

  
  stroke(255, 215, 0); 
  strokeWeight(4);
  line(width / 2, height / 2, 
       width / 2 + pointerLength * cos(angle - HALF_PI), 
       height / 2 + pointerLength * sin(angle - HALF_PI));

  
  let moveAmount = circleSpeed * (deltaTime / 1000); 
  circleY += moveAmount * circleDirection; 

  
  if (circleY > height - 25 || circleY < 25) { 
    circleDirection *= -1; 
  }

  
  noStroke();
  fill(100, 100, 250); 
  ellipse(width / 2, circleY-125, 50, 50); 

  
  if (frameCount % 10 == 0) {
    emotionalState = changeEmotion();
  }
}

function changeEmotion() {
  // red -> pink -> blue -> gray
  if (emotionalState === "red") {
    return "pink";
  } else if (emotionalState === "pink") {
    return "blue";
  } else if (emotionalState === "blue") {
    return "gray";
  } else {
    return "red";
  }
}
