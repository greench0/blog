const post = '005';


// $(".post").update('post');
// $('.post').html('whatever');
$('#post').text("new dialog title");

// $('#dialog_title_span').text("new dialog title");


// var el = $('#dialog_title_span');

// el.html(el.html().replace(/Old Text/ig, "New Text"));


let sliderG, sliderP

function setup() {
  createCanvas(windowWidth-18, windowHeight-18);
      // noLoop()
  angleMode(DEGREES)
  rectMode(CENTER)
  // noLoop()
  
  sliderG = createSlider(2 ,10,6);
  sliderG.position(20, windowHeight-100);
  sliderG.class('slider')
  
  sliderP = createSlider(5,50, 10);
  sliderP.position(20, windowHeight-50);
  sliderP.class('slider')
  
  button = createButton("redraw");
  button.position(20,height - 175);
  button.mouseClicked(refresh);
  button.class('button')

noLoop()
}

function draw() {
  background('darkgrey')


  let gridTotal = sliderG.value()
  let shapeSize = width/gridTotal
  let pad = sliderP.value()

  for( w=0; w< gridTotal; w++) {
      for( h=0; h < gridTotal; h++) {
        stroke('black');

        let val = random(1)
      // let n = map(noise(1), 0, 1, 0,255);   //  noise
stroke('white')
        strokeWeight(2)
        noFill()
//                 rect(w*shapeSize+(shapeSize/2),h*shapeSize+(shapeSize/2), shapeSize,shapeSize)


    if (val < .25) {
        rect(w*shapeSize+(shapeSize/2),h*shapeSize+(shapeSize/2), shapeSize-pad,shapeSize-pad)

        }
        else if(val < .5){
           push()
  translate(w*shapeSize,h*shapeSize)
  triangle(0+pad/2, shapeSize-pad/2, shapeSize/2, 0+pad/2, shapeSize-pad/2, shapeSize-pad/2);
pop()
        }
        
    else if (val < .75){
      ellipse(w*shapeSize+(shapeSize/2),h*shapeSize+(shapeSize/2), shapeSize-pad,shapeSize-pad);
    }
        
        else {
      ellipse(w*shapeSize+(shapeSize/2),h*shapeSize+(shapeSize/2), (shapeSize/1.5)-pad,(shapeSize/1.5)-pad);
        }
        
// end for loops
    }}
push()
  stroke('black')
  fill('black')
  strokeWeight(1)
  text('Grid Total:', 20,windowHeight-100);
  text(sliderG.value(), 80,windowHeight-100);
  
  text('Padding:', 20,windowHeight-50);
  text(sliderP.value(), 80,windowHeight-50);
  pop()
  // end draw
}


// functions
function refresh() {
  clear()
  redraw();
}



function createMySlider(name,x,y) {
  let elemWidth = width/2.5;
	let slider = createSlider(0,255,random(255),1);
  slider.addClass('slider');
  slider.attribute('name',name);
  slider.position(x,y);
  slider.style('height','1.5em');
  slider.size(elemWidth);
  let label = createP(name + ': ' + slider.value());
  label.position(x+elemWidth,y);
  // label.style('font-size', '20px');
  // label.style('margin', '0');
  // label.style('padding-left', '5px');

  // label.style('color','white');
  slider.label = label
  slider.input(onSliderChange);
  return slider;
}

function onSliderChange() {
	let name = this.attribute('name');
  let value = this.value();
  this.label.html(`${name}: ${value}`);
  loop();
}


  function hexagon(x, y, radius, npoints) {

  let angle = 360 / npoints;
    
  push()
      translate(width / 2, height / 2);
  beginShape();
  for (let a = 0; a < 360; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
    pop()
  }

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}