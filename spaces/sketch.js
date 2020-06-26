// video source: https://vimeo.com/90312869
var img;
var theta = 0;
let x = 0;
let y = 0;

var cnv;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup(){
  cnv = createCanvas(windowWidth, windowHeight, WEBGL);
  centerCanvas();
  // URLs copied from the Glitch assets folder
  img = loadImage("https://i.imgur.com/wsT1FCy.png");
}


function draw() {
  background(0);
  translate(mouseX-200, mouseY-20);
  noStroke();
  push();
  rotateX(-9.5);
  rotateY(.1);
  //pass image as texture
  texture(img);
  sphere(150);
  pop();
  translate(mouseX, mouseY);
  push();
  rotateX(-9.5);
  rotateY(.1);
  //pass image as texture
  texture(img);
  sphere(150);
  pop();
  theta += 0.05;
}