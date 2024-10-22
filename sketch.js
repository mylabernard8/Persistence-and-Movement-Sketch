let circleSize = 50;  // Tracks change in circle size
let rectColor;    
let xPos, yPos;       // Stores x, y coordinates

function setup() {
  createCanvas(600, 600);
  xPos = width / 2;  
  yPos = height / 2;  
}

function draw() {
  background(220);

  //Color
  rectColor = random(100, 255);

  // Change circle size
  circleSize = 50 + sin(frameCount * 0.05) * 20;

  // Rectangle
  fill(rectColor, 150, 200);  
  rectMode(CENTER);
  rect(xPos, yPos, 100, 100);  

  // Circle
  fill(150, 100, rectColor); 
  ellipse(xPos, yPos, circleSize);  // Circle size changes over time
}

