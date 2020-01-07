let slider;

function setup() {
  createCanvas(windowWidth, windowHeight);
noLoop();

  slider = createSlider(6.25, 100, 50);
  slider.position(width/2.1,height-75);
  slider.style('width', '150px');

  buttonR = createButton("redraw");
  buttonR.position(width/2,height-50);
  buttonR.mouseClicked(refresh);
}

function draw() {

  background("pink");
  stroke('black');
  strokeWeight(1)

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
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function refresh() {
  clear();
  redraw();
}