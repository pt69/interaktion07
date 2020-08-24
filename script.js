function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  frameRate(30);
}

function draw() {
  if(frameCount%4000==0){ background(0) }
  
  strokeWeight(mouseX%3);
  stroke((mouseX)%255, (10+mouseY)%255, (mouseY+frameCount)%255, 25); 
  fill((mouseX+frameCount)%255, (225-mouseY)%255, (mouseY-mouseX)%255, 7); 
  ellipse((width/2) + sin(frameCount/18) * (width/2), mouseY, 200, sin(frameCount/21) * 200);

  strokeWeight(mouseX%3);
  stroke((215-mouseY+frameCount)%255, (mouseX)%255, (mouseY-mouseX)%255, 25); 
  fill((235-mouseY)%255, (mouseX+frameCount)%255, (mouseY-mouseX)%255, 7); 
  ellipse(mouseX, (height/2) + sin(frameCount/25) * (height/2), sin(frameCount/17) * 190, 150); 

  strokeWeight(mouseY%3);
  stroke((mouseY-mouseX)%255, (mouseX)%255, (205-mouseY+frameCount)%255, 10); 
  fill((mouseX+frameCount)%255, (mouseY-mouseX)%255, (245-mouseY+frameCount)%255, 5);  
  ellipse(mouseX, mouseY, 10+sin(frameCount/8) * 150, 20+sin(frameCount/17) * 150);  
}

//mit einem Mausklick kann der Bildschirm gelöscht werden
function mousePressed() {
  background(0);
}