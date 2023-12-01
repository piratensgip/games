var p = 100;

function setup() {
  canvas = createCanvas(450, 450);
  canvas.parent('processing');
  frameRate(50);
}

function draw() {
  background('snow');
  tekenRechthoek(p);
  tekenVierkant(p);
  tekenLijnen(p);
  p += 0.5;
  if (p > width) {
    noLoop();
  }
}

function tekenRechthoek(p) {
  push();
  strokeWeight(1);
  stroke('green');
  fill('green'); // Vul de rechthoek met groene kleur
  rect(50, 150, p, p); // Teken een rechthoek op positie (50, 150) met breedte en hoogte p
  pop();
}

function tekenVierkant(p) {
  push();
  strokeWeight(1);
  stroke('red');
  fill('red'); // Vul het vierkant met rode kleur
  rect(200, 150, p, p); // Teken een vierkant op positie (200, 150) met breedte en hoogte p
  pop();
}

function tekenLijnen(p) {
  push();
  strokeWeight(1);
  stroke('grey');
  line(0, p, width, p); // Teken een grijze lijn op hoogte p
  line(0, height - p, width, height - p); // Teken een grijze lijn op hoogte (height - p)
  pop();
}
