var issimage,spacebg,iss;
var spaceCraft1,spaceCraft;
var hasDocked=false;
var sc2,sc3,sc4;




function preload(){
issimage=loadImage("iss.png");
spacebg=loadImage("spacebg.jpg");
spaceCraft1=loadImage("spacecraft1.png")
sc2=loadImage("spacecraft2.png");
sc3=loadImage("spacecraft3.png");
sc4=loadImage("spacecraft4.png");

}

function setup() {
  createCanvas(1000,600);

  iss=createSprite(400, 200);
  iss.addImage(issimage)
  iss.scale=0.9

  spaceCraft=createSprite(400, 500);
  spaceCraft.addImage(spaceCraft1);
  spaceCraft.scale=0.3
  

}

function draw() {
  background(spacebg)

  if(!hasDocked){


 if(keyDown("LEFT_ARROW")){
  spaceCraft.addImage(sc3);
  spaceCraft.x=spaceCraft.x-5
 
 }
 if(keyDown("RIGHT_ARROW")){
  spaceCraft.addImage(sc4);
  spaceCraft.x=spaceCraft.x+5

 }
 if(keyDown("UP_ARROW")){
  spaceCraft.addImage(sc2);
  spaceCraft.y=spaceCraft.y-5
 
 }
 if(keyDown("DOWN_ARROW")){
  spaceCraft.addImage(sc2);
  spaceCraft.y=spaceCraft.y+5

 }
  }

  if(spaceCraft.y<=(iss.y+70)&& spaceCraft.x<=(iss.x-10)){
    hasDocked=true;
    fill("white")
    textSize(30)
    text("Has Docked!",400,500)
  
  }

  iss.depth=spaceCraft.depth+1
  drawSprites();
  
}