var horizontaalA = 120;
var verticaal = 170;
var horizontaalB = 500; // Beginpositie voor B
var bewegingA = 2; // Snelheid waarmee horizontaalA verandert
var bewegingB = 2; // Snelheid waarmee horizontaalB verandert (gelijke snelheid als A)
var cirkelHoogte = 200; // Hoogte van de cirkels

function setup() {
  canvas = createCanvas(1000, 300);
  canvas.parent('processing');
  textFont("Verdana");
  textSize(30);
  stroke('white');
  strokeWeight(10);
  frameRate(50);
}

function draw() {
  background('orange');
  fill('white');
  rect(0, 0, width, 40);
  fill('black');

  // Gebruik de modulo-operator om de posities cyclisch te laten veranderen tussen 0 en 1000
  horizontaalA = (horizontaalA + bewegingA) % 1001;

  // Als horizontaalB 0 bereikt, stel het in op 1000 om weer te beginnen
  if (horizontaalB == 0) {
    horizontaalB = 1000;
  } else {
    horizontaalB = (horizontaalB + bewegingB) % 1001;
  }

  text("Het middelpunt van de cirkel bevindt zich in [x,y] = [" + horizontaalA + "," + verticaal + "]", 10, 30);
  fill('dodgerblue');
  ellipse(horizontaalA, verticaal, cirkelHoogte);

  fill('darkred'); // Kleur van cirkel B is darkred
  ellipse(horizontaalB, verticaal, cirkelHoogte);
}
