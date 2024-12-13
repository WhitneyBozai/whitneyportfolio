let rLength = [480, 480, 480, 
               480, 480, 480, 
               480]; // The height of rectangulars
let circleY = 0;
let circleY2 = 600;
let circleY3 = 0;
let circleY4 = 600;
let circleY5= 0;
let circleY6 = 600;
let heights = Array(rLength.length).fill(0); 
let sectionHeights = [ // The three parts of rectangulars
  [360, 90, 10],
  [470, 0, 10],
  [380, 100, 0],
  [470, 0, 10],
  [350, 120, 10],
  [480, 0, 0],
  [470, 0, 10]
];
let maxGrowthSpeed = 4; // growing speed
let growthDelay = 120; // Delay in frames before each rectangular bar starts growing
let growthStarted = Array(rLength.length).fill(false); 
let sectionCount = 3; // regutangulars have three parts

function setup() {
  createCanvas(600, 600);
}

function draw() {
  // background color
  for (let y = 0; y <= height; y++) {
    let inter = map(y, 0, height, 0, 1); // Calculate the gradient ratio
    let c = lerpColor(color(0, 255, 255), color(255, 204, 153), inter); 
    stroke(c);
    line(0, y, width, y); 
  }

  noStroke();
  
  for (let i = 0; i < rLength.length; i++) {
    // the order of regtangular growing
    if (frameCount >= i * growthDelay) {
      growthStarted[i] = true; 
    }

    // Increment the height of the rectangular bar gradually
    if (growthStarted[i] && heights[i] < rLength[i]) {
      heights[i] += maxGrowthSpeed; 
      if (heights[i] > rLength[i]) {
        heights[i] = rLength[i]; // Prevent exceeding the target height
      }
    }

    
    let totalHeight = sectionHeights[i][0] + sectionHeights[i][1] + sectionHeights[i][2];
    let currentHeight = 0;

    for (let j = 0; j < sectionCount; j++) {
      let x = 80 * i + 50; 
      let y = height - currentHeight - (sectionHeights[i][j] * (heights[i] / totalHeight)); //  y position

      fill(100 + j * 50, 150 - j * 30, 200); 
      rect(x, y, 20, sectionHeights[i][j] * (heights[i] / totalHeight)); 
      currentHeight += sectionHeights[i][j] * (heights[i] / totalHeight); 
    }
  }
//circles
  drawCircle();
  moveCircle();
  
  drawCircle2();
  moveCircle2();
  
  drawCircle3();
  moveCircle3();
  
  drawCircle4();
  moveCircle4();
  
  drawCircle5();
  moveCircle5();
  
  drawCircle6();
  moveCircle6();
}

function drawCircle() {
  
  blendMode(ADD);
  fill(255, 204, 0, 150); 
  noStroke();
  circle(100, circleY, 50);
  blendMode(BLEND); 
}

function moveCircle() {
  circleY += 1;
  if (circleY > height) {
    circleY = 0;
  }
}

function drawCircle2() {
  blendMode(ADD);
  fill(255, 204, 0, 150); 
  noStroke();
  circle(180, circleY2, 50);
  blendMode(BLEND); 
}

function moveCircle2() {
  circleY2 -= 1;
  if (circleY2 < 0) {
    circleY2 = 600;
  }
}

function drawCircle3() {
  blendMode(ADD);
  fill(255, 204, 0, 150); 
  noStroke();
  circle(260, circleY3, 50);
  blendMode(BLEND); 
}

function moveCircle3() {
  circleY3 += 1;
  if (circleY3 > height) {
    circleY3 = 0;
  }
}

function drawCircle4() {
 
  blendMode(ADD);
  fill(255, 204, 0, 150); 
  noStroke();
  circle(340, circleY4, 50);
  blendMode(BLEND); 
}

function moveCircle4() {
  circleY4 -= 1;
  if (circleY4 < 0) {
    circleY4 = 600;
  }
}
function drawCircle5() {
  blendMode(ADD);
  fill(255, 204, 0, 150); 
  noStroke();
  circle(500, circleY5, 50);
  blendMode(BLEND); 
}

function moveCircle5() {
  circleY5 -= 1;
  if (circleY5 < 0) {
    circleY5 = 600;
  }
}

function drawCircle6() {
  // BlendMode
  blendMode(ADD);
  fill(255, 204, 0, 150); 
  noStroke();
  circle(420, circleY6, 50);
  blendMode(BLEND); 
}

function moveCircle6() {
  circleY6 += 1;
  if (circleY6 > height) {
    circleY6 = 0;
  }
}