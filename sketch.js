var x = 0;
var speed = 3;

function setup() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(4);
  noFill();
  ellipse(x, x, 100, 100);

  if (x > width) {

    speed = -3
  } else if (x < 0) {
    speed = 3
  }
  if (x > height) {
    speed = -3
  } else if (x < 0) {
    speed = 3
  }
  x = x + speed;

}
