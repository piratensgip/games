function setup() {
  canvas = createCanvas(1000,450);
  background('grey');
  canvas.parent('processing');
  noLoop();
}

function draw() {
  // groene cirkel zonder rand
  
  noStroke();
  fill('green');
  ellipse(225,220,390);
  
  // groene cirkel zonder rand
  
  noStroke();
  fill('white');
  ellipse(225,225,300);

  // witte rechthoek met rode rand
  
  stroke('green');
  fill('white');
  strokeWeight(10);
  rect(125,125,200,200);
}
