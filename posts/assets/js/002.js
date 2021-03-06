function setup() {
  createCanvas(windowWidth, windowHeight, SVG);
  noLoop()
  rectMode(CENTER);
  stroke('black')
strokeWeight(3)
  button = createButton("shuffle");
  button.position(width/2 - 100 ,height - 75);
  button.mouseClicked(refresh);
  button.class('button')

  buttonSave = createButton("save")
  buttonSave.position(width/2 +50 ,height - 75)
  buttonSave.mouseClicked(saving)
  buttonSave.class('button')
  }
  
  
  function draw() {
    // background("white");

    let colors = ['pink', 'blue', 'orange']

    let randomC = random(colors)
    fill(randomC)

  translate(width/2, height/2)
  
  var recW = random(75,350);
  var recH = random(75,350);
  
  let recW2 = recW / 2;
  let recH2 = recH / 2; 
  
  let pointA = random(recW2 + 10, recW2 + 50);
  let pointB = random(- recH2 , recW2);
  
  let pointA1 = recW - pointA; 
  
  push()
  rotate(random(360))
  strokeWeight(0);
  rect(0 , 0, recW, recH)
  
  // back fills
  beginShape();
  vertex(recW2 , recH2)
  vertex(- recW2 , recH2)
  vertex(- pointA1 , pointB)
  vertex(pointA , pointB)
  endShape(CLOSE)
  
  beginShape();
  vertex(- recW2 , - recH2)
  vertex(recW2 , - recH2);
  vertex(pointA1 , - pointB)
  vertex(- pointA , - pointB)
  endShape(CLOSE)
  
  // left side squre
  strokeWeight(2);
  beginShape();
  vertex(- pointA , - pointB)
  vertex(- recW2 , - recH2)
  vertex(- pointA1 , pointB)
  vertex(- recW2 , recH2)
  endShape(CLOSE)
  
  // right side square
  beginShape();
  vertex(pointA , pointB)
  vertex(recW2 , recH2)
  vertex(pointA1 , - pointB)
  vertex(recW2 ,- recH2)
  endShape(CLOSE)
  
  // vertical lines
  line(pointA , pointB , - pointA1 ,  pointB )
  line(- recW2, recH2, recW2 , recH2 )
  
  line(pointA1 , - pointB , - pointA , - pointB)
  line(- recW2 , - recH2 , recW2 ,- recH2)
  
  
  strokeWeight(6)
  point(- pointA , - pointB)
  point(- recW2 , - recH2)
  point(- pointA1 , pointB)
  point(- recW2 , recH2)
  point(pointA , pointB)
  point(recW2 , recH2)
  point(pointA1 , - pointB)
  point(recW2 ,- recH2)
  
  pop()
  // end draw
  }
  


  function windowResized() {
      resizeCanvas(windowWidth, windowHeight);
    }
  
    function refresh() {
        canvas.getContext('2d').clearRect(0,0,width,height);
      redraw();
    }

  function saving() {
    save("mySVG.svg"); // give file name
    print("saved svg");
  }