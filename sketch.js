var shipImage,ship,seaImage,sea;
function preload() {
  
 shipImage=loadAnimation("ship-1.png", "ship-2.png","ship-3.png","ship-4.png") 
 seaImage=loadImage("sea.png") 

}
function setup() {
  createCanvas(600,300);
  sea = createSprite(400,200);
  sea.addImage(seaImage);
  sea.velocityX = -2;
  sea.scale=0.3;
  ship = createSprite(70,180,20,20)
  ship.addAnimation("ship",shipImage)
  ship.scale=0.2

}
function draw() {
  
  background(seaImage)

if (sea.x < 0) {
  sea.x = sea.width / 2;
}

drawSprites() 
  
}  
  
  