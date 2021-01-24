let circle = {
  x: 0,
  y: 0,
  diameter: 50
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(250, 250, 100)
  noStroke();
  fill(250, 200, 200)
  ellipse(circle.x, circle.y, circle.diameter, circle.diameter);

  circle.x = circle.x + 1;
  circle.y = circle.y + 1;
}
