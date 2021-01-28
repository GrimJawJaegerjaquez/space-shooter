var vg,bgimg,coin,coina,coingroup

function preload(){
  bgimg=loadImage("17.png")
  coina=loadAnimation("coin1.png","coin2.png","coin3.png","coin4.png","coin5.png","coin6.png","coin7.png","coin8.png")
}

function setup() {
  createCanvas(400,600);
  bg=createSprite(200, 300, 400, 600);
  bg.addImage(bgimg)
  bg.scale=2.2
  bg.y=bg.height/2
  coingroup=new Group()
}


function draw() {
  background(0);  
  bg.velocityY=2
  bg.y=bg.height/2
  spawnCoins()
  drawSprites();
}

function spawnCoins() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var coin = createSprite(0,0,40,10);
    coin.x = Math.round(randomNumber(30,370));
    coin.setAnimation("coins",coina);
   // coin.scale = 0.5;
    coin.velocityY = +3;
    
     //assign lifetime to the variable
    coin.lifetime = 134;

    //add each cloud to the group
    coingroup.add(coin);
  }
}