function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 0, 0)

  rectMode(CENTER)
  fill(0, 255, 180)
  stroke('#fae')
  strokeWeight(4)
  rect(200, 200, 200, 200);

  stroke('green')
  strokeWeight(6)
  fill(0, 10, 255, 180)
  ellipse(100, 300, 150, 90)
}