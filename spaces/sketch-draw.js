var cnv;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}



function setup() {
cnv = createCanvas(windowWidth, windowHeight);
  centerCanvas();
}


function draw() {
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, 80, 80);
  } 
}
