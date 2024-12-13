let sceneNum = 0;  
let score = 0;  
let button;
let button1;
let button2;
let button3;

let dogImg;  // Declare dogImg variable for the dog image
let cupCake;
let chocolate;

let cupCakes = [];
let chocolates = [];

let background1;  // Declare the background image variable
let background2;
let background3;
let background4;
let rule;

function setup() {
  createCanvas(600, 400).parent('sketch-container');
  button = createButton("Start!");
  
  // position button
  button.position(70, 100);

  // when button is pressed, call changeScene()
  button.mousePressed(changeScene);
  
  button1 = createButton("Restart!");
  button1.position(100, 50);
  button1.mousePressed(changeScene1);
 
  button2 = createButton("Restart!");
  button2.position(100, 50);
  button2.mousePressed(changeScene1);
  
  button3 = createButton("Rule");
  button3.position(70, 130);
  button3.mousePressed(changeRuleScene);
  
  for (let i = 0; i < 15; i++) {
    cupCakes[i] = new CupCake(random(width), random(0,100), color(random(255), random(255), random(255)));
  }

  for (let i = 0; i < 3; i++) {
    chocolates[i] = new Chocolate(random(width), random(0,100), color(random(255), random(255), random(255)));
  }

  dog = new Dog(dogImg);  // Pass dog image to the Dog constructor
}

function preload() {
  cupCake = loadImage("cupcake.png");
  chocolate = loadImage("chocolate.png"); 
  dogImg = loadImage("dog1.jpg");  // Load the dog image here
  background1 = loadImage("welcomescene.jpg");  // Load the background image
  background2 = loadImage("gamescene.jpg"); 
  background3 = loadImage("badend.jpg"); 
  background4 =loadImage("goodend.jpg");
  rule =loadImage("rule.jpg"); 
}

function draw() {
  background(255);

  switch (sceneNum) {
    case 0:
      drawWelcomeScene();
      break;

    case 1:
      drawGameScene();
      break;

    case 2:
      drawBadEndScene();
      break;
    
    case 3:
      drawGoodEndScene();
      break;
    
    case 4:
      drawRuleScene();
      break;
  }
   
}

function drawWelcomeScene() {
  image(background1, 0, 0, width, height);  // Draw background1 on the welcome scene
  textAlign(CENTER, CENTER);
  textSize(40);
  fill(75, 0, 130);
  text("WELCOME TO THE GAME!", width / 2, height / 2 - 150);

  textSize(24);
  text("PRESS BUTTON OR 'ENTER' TO START!", width / 2, height / 2 -110);
   
   button.show(); 
   button1.hide();
   button2.hide();
   button3.show();
   
  
}

function drawGameScene() {
  image(background2, 0, 0, width, height);  // Draw background1 in the game scene
  button.hide();
  button1.hide();
  button2.hide();
  button3.hide();

  textSize(20);
  fill(255, 20, 147);
  textSize(20);
  text("PRESS 'ENTER' TO END THE GAME", 175, 20);

  // Draw CupCakes and dog
  for (let i = cupCakes.length - 1; i >= 0; i--) { 
    cupCakes[i].body();
    cupCakes[i].move();
    
    if (cupCakes[i].y > height) {
      cupCakes.splice(i, 1);  // Remove the CupCake
      // Add a new CupCake at a random position at the top
      cupCakes.push(new CupCake(random(0,width), 0, color(random(255), random(255), random(255))));
    }

    // Check for collisions between the dog and a CupCake
    if (dog.collidesWith(cupCakes[i])) {
      cupCakes.splice(i, 1); // Remove CupCake on collision
      score++;
      
    }
    if (score === 10) {
        sceneNum = 3;  // Switch to the second end scene when score reaches 10
        return;
      }
  }

  // Draw and move chocolates
  for (let i = chocolates.length - 1; i >= 0; i--) {
    chocolates[i].body();
    chocolates[i].move();

    // Check for collisions between the dog and chocolate
    if (dog.collidesWith(chocolates[i])) {
      sceneNum = 2; // Switch to the end scene when collision occurs
      return; // End the current draw function to prevent further drawing
    }
  }

  dog.body();  // Draw the dog in the game scene
  dog.move();  // Move the dog
  dog.home();  // Check if the dog reaches the top
  textSize(30);
  fill(75, 0, 130);  //color of score
  text("Score: " + score, width - 170, 20);

}

class CupCake {
  constructor(x, y, c) {
    this.x = x;
    this.y = y;
    this.c = c;
    this.width = 150;  // Cupcake width
    this.height = 170; // Cupcake height
  }

  body() {
    fill(this.c);
    image(cupCake, this.x, this.y, this.width, this.height); // Draw the CupCake
  }

  move() {
    this.y += 1; // Speed of movement
    if (this.y > height) {
      this.y = 0; // Reset to the top if it goes off the bottom
    }
  }
}

class Chocolate {
  constructor(x, y, c) {
    this.x = x;
    this.y = y;
    this.c = c;
    this.width = 100;  // Chocolate width
    this.height = 100; // Chocolate height
  }

  body() {
    fill(this.c);
    image(chocolate, this.x, this.y, this.width, this.height); // Draw the Chocolate
  }

  move() {
    this.y += 1; // Speed of movement
    if (this.y > height) {
      this.y = 0; // Reset to the top if it goes off the bottom
    }
  }
}

class Dog {
  constructor(dogImg) {
    this.x = width / 2;
    this.y = height - 50;
    this.dogImg = dogImg;  // Use the passed dog image
    this.width = 120;  // Set dog width
    this.height = 100; // Set dog height
  }

  body() {
    image(this.dogImg, this.x, this.y, this.width, this.height);  // Draw the dog image
  }

  move() {
    let speed = 5; // Increase this value to make the dog move faster

    if (keyIsDown(38)) {  // Up arrow
      this.y -= speed;
    }
    if (keyIsDown(40)) {  // Down arrow
      this.y += speed;
    }
    if (keyIsDown(37)) {  // Left arrow
      this.x -= speed;
    }
    if (keyIsDown(39)) {  // Right arrow
      this.x += speed;
    }

    // Keep the dog within the canvas boundaries
    if (this.x > width) {
      this.x = 0;
    } else if (this.x < 0) {
      this.x = width;
    }
  }

  // Check for collision between the dog and a CupCake or Chocolate
  collidesWith(item) {
    let distX = this.x + this.width / 2 - (item.x + item.width / 2);
    let distY = this.y + this.height / 2 - (item.y + item.height / 2);
    let distance = Math.sqrt(distX * distX + distY * distY);
    let minDistance = Math.min(this.width, this.height, item.width, item.height) / 2;
    return distance < minDistance;
  }

  home() {
    if (this.y < 0) {
      sceneNum++;  // Switch scene
      this.y = height - 50;  // Reset the dog's position
    }
    if (sceneNum > 2) {
      sceneNum = 0;  // Reset to the welcome scene after the end
    }
  }
}

function drawBadEndScene() {
  image(background3, 0, 0, width, height); 
  textAlign(CENTER, CENTER);
  textSize(35);
  fill(255);
  text("GAME OVER", width / 2-120, height / 2 - 170);

  fill(0, 0, 139);
  textSize(24);
  text("PRESS BUTTON TO PLAY AGAIN", width / 2, height / 2 + 160);
  button.hide();
  button1.show();
  button2.hide();
  button3.hide();
}

function drawGoodEndScene() {
  image(background4, 0, 0, width, height);
  // button1.show();
  button.hide();
  button2.show();
  button3.hide();
}

//Bottons 
function changeScene() {
  sceneNum = 1; // Switch to the game scene
  button.hide();
}

function drawRuleScene() {
  image(rule, 0, 0, width, height);
  // button1.show();
  button.show();
  button2.hide();
  button3.hide();
  
}

//Bottons 
function changeScene() {
  sceneNum = 1; // Switch to the game scene
  button.hide();
}

function changeScene1() {
  sceneNum = 0; // Switch to the game scene
  button1.hide();
  
  for (let i = 0; i < 15; i++) {
    cupCakes[i] = new CupCake(random(width), random(0,100), color(random(255), random(255), random(255)));
  }

  for (let i = 0; i < 3; i++) {
    chocolates[i] = new Chocolate(random(width), random(0,100), color(random(255), random(255), random(255)));
    dog = new Dog(dogImg); 
    score=0;
  }
}

function changeScene2() {
  sceneNum = 0; // Switch to the game scene
  button2.hide();
  
  for (let i = 0; i < 15; i++) {
    cupCakes[i] = new CupCake(random(width), random(0,100), color(random(255), random(255), random(255)));
  }

  for (let i = 0; i < 3; i++) {
    chocolates[i] = new Chocolate(random(width), random(0,100), color(random(255), random(255), random(255)));
  dog = new Dog(dogImg); 
  score=0;
  }
}

function changeRuleScene() {
  sceneNum = 4; // Switch to the game scene
  button.hide();
}

function keyPressed() {
  if (keyIsPressed && keyCode === ENTER) {
  if (sceneNum === 0) {
    sceneNum = 1;// Switch from welcome to game scene
  }else if (sceneNum === 1) {
    sceneNum = 2;//Switche from game scene to the end scene
  }else if (sceneNum === 2) {
    sceneNum = 0; // Switch from end1 to welcome scene
  }else if (sceneNum === 3) {
    sceneNum = 0; // Switch from end2 to welcome scene
  }
  // if (keyIsPressed && keyCode === 39){ if (sceneNum === 2) {
  //   sceneNum = 1; 
  // }
  // }


}
}

