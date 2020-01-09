let slider;

function setup() {
  createCanvas(windowWidth, windowHeight);
noLoop();

  slider = createSlider(6.25, 100, 50);
  slider.position(width/2.1,height-75);
  slider.style('width', '150px');

  button = createButton("shuffle");
  button.position(20,height - 175);
  button.mouseClicked(refresh);
  button.class('button')
}


function draw() {

  background("pink");
  stroke('black');
  strokeWeight(2)

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