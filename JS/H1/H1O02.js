function setup() {
  canvas = createCanvas(450,450);
  background('darkred');
  canvas.parent('processing');
  noLoop();
}

function draw() {
  // noStroke();
  // fill('darkred');
  // triangle(0,0,0,450,450,450);

  strokeWeight(5);
  stroke('pink');
  fill('pink');
  beginShape();
  vertex(450,450);
  vertex(1,225);
  vertex(450,1);
  endShape(CLOSE);

  strokeWeight(5);
  stroke('purple');
  fill('purple');
  beginShape();
  vertex(1,1);
  vertex(450,225);
  vertex(1,450);
  endShape(CLOSE);

  
}
