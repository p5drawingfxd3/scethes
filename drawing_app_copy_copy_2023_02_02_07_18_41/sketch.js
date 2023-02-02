//setup runs once, draw runs over and over again

function setup() {// function is box of code that does things that are connected 
  createCanvas(300, 450);//(width of my canvs , height of canvas )
   background(150, 20, 50);
}
function draw() {
  noStroke()
 fill('midnightblue')
  circle(mouseX, mouseY, 10)// x position, y position and the diameter   
}