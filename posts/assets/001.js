let slider;

function setup() {
  createCanvas(windowWidth, windowHeight);
noLoop();

  slider = createSlider(6.25, 100, 50);
  slider.position(20, windowHeight/2);
  slider.style('width', '150px');

  // sliderStroke = createSlider(1, 7, 3);
  // sliderStroke.position(20, 50);
  // sliderStroke.style('width', '150px');
  // redraw();
}

function draw() {

  background("pink");
  stroke('black');
  strokeWeight(1)

// let density = ;
let blockW = windowWidth /slider.value();

for (y=0; y < height; y = y + blockW) {
for (x=0; x < width; x = x + blockW) {
if (random() > .5) {
    line(x,y , x +blockW,y+blockW)
} 
else {
       line(x +blockW,y , x ,y+blockW)
}
} }

// end  draw
// frameRate(1);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
// function mousePressed() {
//   clear();
//   redraw();
// }