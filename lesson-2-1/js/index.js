function setup() {
  createCanvas(600, 400);
  background(250, 250, 100);
}

function draw() {
  
  noStroke();
  fill(150, 200, 200);
  ellipse(mouseX, mouseY, 50, 50);
  
  // fill(200, 250, 200);
  // rect(400, 100, 50, 50);
}


function mousePressed() {
  background(250, 250, 100);
}
