function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  noFill()
  
  sliderCR = createSlider(40, 250, random(40,200));
  sliderCR.position(15, windowHeight - 130);
  
  sliderA = createSlider(6, 60, random(6,40));
  sliderA.position(15, windowHeight - 100);
  
  sliderS = createSlider(2, 20, random(3,10));
  sliderS.position(15, windowHeight - 70);
  
  sliderR = createSlider(0, 90, 0);
  sliderR.position(15, windowHeight - 40);
  
  // button = createButton('random');
  // button.position(8, 130);
  // button.mousePressed(randoms);
}

  function draw() {
  background('goldenRod');
    stroke('darkblue')
    strokeWeight(2)
  translate(width/2, height/2)

  let cR = sliderCR.value()
  let amount = sliderA.value()

  for(i=0; i < amount; i++) {
    rotate(sliderR.value())
push()
  rotate(i*360/amount)
   // polygon(0, 100, cR, 5)
  // circle(0,100, cR)

  polygon(0, 100, cR, sliderS.value());

  pop()
}
  
  
 //end draw 
}


// funcs
function polygon(x, y, radius, npoints) {
  let angle = 360 / npoints;
  beginShape();
  for (let a = 0; a < 360; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

// function randoms() {
//   clear()
// draw()
// }
