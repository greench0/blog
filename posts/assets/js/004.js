const colors = ['#FF0199', '#01BFFF', '#2F319F']

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  noLoop()
  
  button = createButton("shuffle");
  button.position(20,height - 175);
  button.mouseClicked(refresh);
  button.class('button')
}

function draw() {
  background(colors[2])
  translate(width/2, height/2)
  
  let r = height/1.5
  let total = random(50,75)
  
  strokeWeight(1)
  
  for(i = 0; i < total; i++) {
  let a = random(0,360)
  let a2 = random(0,360)

  let x = 0 + r * cos(a)/2
  let y = 0 + r * sin(a)/2
  let x2 = 0 + r * cos(a2)/2
  let y2 = 0 + r * sin(a2)/2
  
  strokeWeight(2)
    stroke(colors[0])
  line(x,y, x2,y2)
  }

// end draw
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// function refresh
function refresh() {
  clear();
  redraw();
}