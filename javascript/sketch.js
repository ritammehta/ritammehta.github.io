function preload() {
    timeFont = loadFont("../fonts/glitch_in_time.otf");
}


function setup() {
  // put setup code here
  stars = [];
  for(i = 0; i < 200; i ++){
      stars[2*i] = random(windowWidth)
      stars[(2*i)+1] = random(windowHeight)
  }
  createCanvas(windowWidth, windowHeight);
  centerx = windowWidth / 2;
  centery = windowHeight / 2;
  clockSize = 0;
  pastX =  0;
  futureX =  0;
}

function draw() {
  // put drawing code here
  background("black");
  starDraw();
  stroke("white");
  strokeWeight(10);
  line(0,centery,width,centery);
  strokeWeight(1);
  stroke("black");
  textSize(windowWidth / 20);
  textAlign(CENTER);
  textFont(timeFont);
  fill("white")
  text("From which time are you visiting?", centerx,centery/3);
  drawClock(mouseX, mouseY)
  timeline();
}

function timeline() {
    textFont("monospace");
    count = 1970;
    for(i = windowWidth / 10; i < windowWidth; i += windowWidth / 10){
        strokeWeight(5);
        stroke("white");
        dfm = distFromMouse(i, centery);
        gf =  (300 -  dfm) / 3
        linelength = 25;
        if (dfm < 300){
            linelength = 25 + gf;
        }
        line(i, centery - linelength, i, centery + linelength);

        textSize(linelength / 1.5 - 10)
        strokeWeight(1);
        yearString = ""
        if(count === 1970){
            pastX = i;
            yearString = "The Past"
        }
        else if(count === 2010){
            yearString = "The Present"
        }
        else if(count === 2050){
            futureX = i;
            yearString = "The Future"
        }
        textAlign(CENTER, TOP)

        text(yearString,i,centery + linelength + 20)
        count += 10;
    }
}

function distFromMouse(linex, liney){
    return dist(mouseX,mouseY,linex,liney);
}

function mousePressed(){
  if (mouseY < centery + 100 && mouseY > centery - 100 && mouseX < centerx + 100 && mouseX > centerx - 100){
    //range accounting for text length
    window.open("../present.html");
    }
    if (mouseY < centery + 100 && mouseY > centery - 100 && mouseX < pastX + 100 && mouseX > pastX - 100){
      //range accounting for text length
      window.open("../past.html");
    }
    if (mouseY < centery + 100 && mouseY > centery - 100 && mouseX < futureX + 100 && mouseX > futureX - 100){
      //range accounting for text length
      window.open("../future.html");
    }
}



function drawClock(clockx,clocky){
    if(mouseIsPressed){
        if(clockSize < 40){
            clockSize = 40;
        }
        clockSize += 2;
    }
    else{
        clockSize -= 4;
    }
    if(mouseIsPressed || clockSize > 0){
        fill("white")
        strokeWeight(2);
        stroke("black")
        ellipse(clockx, clocky, clockSize, clockSize);
        line(clockx, clocky, clockx + clockSize / 3, clocky);
        line(clockx, clocky, clockx, clocky + clockSize / 2.5);
    }
}

function starDraw(){
  background('black');
    stroke('black');
    strokeWeight(1);
	fill('white');
	for(i = 0; i < 200; i++){
		ellipse(stars[2*i], stars[(2*i)+1], 3);
		}
}
