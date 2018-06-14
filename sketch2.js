// function setup() {
//   // put setup code here
//   createCanvas(100, 480);
// }

var canvas;

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  // put drawing code here
  if (mouseIsPressed) {
    fill(0);
  } else{
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
  
// function draw() {
//   background(51);
//   fill(255);
//   ellipse(width/2,height/2,100,100);
// }

window.onresize = function() {
  var w = window.innerWidth;
  var h = window.innerHeight;  
  canvas.size(w,h);
  width = w;
  height = h;
};