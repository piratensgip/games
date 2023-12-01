var xJOS;
var yJOS;
var josSchaal = 0.5; // Schaalfactor om JOS op 50% van zijn normale grootte te tekenen

function setup() {
  canvas = createCanvas(450, 450);
  canvas.parent('processing');
  textFont("Verdana");
  textSize(14);
}

function draw() {
  background('lavender');
  fill('black');
  text("xJOS: " + round(xJOS) + " (mouseX:" + round(mouseX) + ")", 10, 20);
  text("yJOS: " + round(yJOS) + " (mouseY:" + round(mouseY) + ")", 260, 20);

  // Beperk xJOS tot het bereik van 100 tot 450
  xJOS = constrain(mouseX, 50, 400);
  
  // Beperk yJOS tot het bereik van 100 tot 350 (bovenkant en onderkant van het canvas)
  yJOS = constrain(mouseY, 50, 400);

   // Verdeel de positie door de schaal

  // in de volgende regels wordt JOS getekend

  push();
  scale(josSchaal); 
  translate(xJOS / josSchaal, yJOS / josSchaal);
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
}

