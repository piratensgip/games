var xJOS = 225;
var yJOS = 375;
var snelheidJOS = 17; // Declaratie van de variabele snelheidJOS met waarde 17

function setup() {
  canvas = createCanvas(450, 450);
  canvas.parent('processing');
  textFont("Verdana");
  textSize(14);
  frameRate(20);
}

function draw() {
  background('lavender');
  fill('black');

  // "JOS" beweegt omhoog met snelheidJOS pixels
  yJOS -= snelheidJOS; 

  // De snelheidJOS wordt elke frame verminderd met 0.5
  snelheidJOS -= 0.5; 

  // Beperk xJOS en yJOS binnen de canvasgrenzen
  xJOS = constrain(xJOS, 75, width - 75);
  yJOS = constrain(yJOS, 75, height - 75);

  // Toon x- en y-coördinaten, samen met snelheid, bovenin
  text("x = " + round(xJOS) + " y = " + yJOS + " snelheid = " + snelheidJOS, 10, 20);

  translate(xJOS, yJOS);

  // in de volgende regels wordt JOS getekend

  push();
  scale(1);  
  noStroke();
  fill('indianred');
  ellipse(0, 0, 150);
  fill('slategray');
  ellipse(-20, -30, 50);
  ellipse(20, -30, 50);
  fill('white');
  ellipse(-20, -25, 20, 40);
  ellipse(20, -25, 20, 40);
  fill('orange');
  ellipse(0, 10, 50);
  stroke('slategray');
  strokeWeight(10);
  fill('white');
  arc(0, 40, 80, 40, 0, PI, CHORD);
  pop();
  // einde tekenen JOS

  xJOS += snelheidJOS; // Voeg de snelheidJOS toe aan de x-positie van JOS
}




