var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleimg,leaf,leafing,red,redimge
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleimg = loadImage("apple.png")
  leafing = loadImage("orangeLeaf.png")
  redimge = loadImage("redimage.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  rabbit.x=World.mouseX
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();

var no = Math.round(random(1,3))
if(frameCount%80==0){
  if(no==1){
    apples()
  }
  else if(no==2){
    leaves()
  }
else{
  red1()
}
}
}
function apples(){
apple = createSprite(random(50,350),40,10,10)
apple.addImage(appleimg)
apple.scale=0.07
apple.velocityY=3
}

function leaves(){
    leaf = createSprite(random(50,350),40,10,10)
    leaf.addImage(leafing)
    leaf.scale=0.07
    leaf.velocityY=3
}

function red1(){
  red= createSprite(random(50,350),40,10,10)
  red.addImage(redimge)
  red.scale=0.07
  red.velocityY=3

}







