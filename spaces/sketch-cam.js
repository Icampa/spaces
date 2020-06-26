
var a;
var b;
var cap;
let cam;
let step = 10;
//what is this thresh value for?
let thresh = 70;

var cnv;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  //create a video capture object
  cam = createCapture(VIDEO);
  cnv = createCanvas(700, 500);
  centerCanvas();
  //the createCapture() function creates an HTML video tag
  //as well as pulls up image to be used in p5 canvas
  //hide() function hides the HTML video element
  cam.hide();

  //don't draw strokes for my shapes
  noStroke();
    textFont('NeueMachina-Regular');
}

function draw() {
  //set alpha of background redraw to 10 (out of 255)
  background(0);
    fill(255);

  //load pixels of the camera feed
  cam.loadPixels();

  //loop through pixels of the image in 2 dimensions
  //why do we have y loop outside of x loop?
  //why do we increment by step value? why not go through every single pixels?
  for (let y = 0; y < cam.height; y += step) {
    for (let x = 0; x < cam.width; x += step) {

      //calculate the index of the pixel on the (x, y) coordinate
      //Why do we times it by 4?
      //WHY / HOW DO WE CALCULATE THIS?
      let i = (y * cam.width + x) * 4;

      //save the red, green, blue and alpha values of the pixel
      let r = cam.pixels[i];
      let g = cam.pixels[i + 1];
      let b = cam.pixels[i + 2];
      let a = cam.pixels[i + 3];

      //create a color object using r, g, b, a values
      let pixelColor = color(r, g, b, a);
      //get the brightness value of the pixelColor
      let bright = brightness(pixelColor);

      //map the x and y coordinates of the webcam feed to match the resolution of the canvas
      //webcam resolution is 640 x 480
      let mappedX = map(x, cam.width, 0, 0, width);
      let mappedY = map(y, 0, cam.height, 0, height);

      //Draw one particular emoji if brightness value is less than the threshhold
      if (bright < thresh) {
        //map the size of our shape using the brightness value of our pixelColor
        let size = map(bright, 0, thresh, 20, 2);

        //set the size of our text
        textSize(size-3);
        //draw !!!emojis!!! using mappedX and mappedY as x and y coordinate
        text("0", mappedX, mappedY);
      } 
      //Draw for pixels with higher brightness than thresh value
      else {
        //map the size of our shape using the brightness value of our pixelColor
        let size = map(bright, thresh, 255, 5, 90);

        //set the size of our text
        textSize(size+1);
        //draw !!!emojis!!! using mappedX and mappedY as x and y coordinate
        text("1", mappedX, mappedY);
      }
    }
  }
}