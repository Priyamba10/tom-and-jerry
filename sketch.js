var bgImg,cat1Img,cat2Img,cat3Img,mouseImg1,mouseImg2,mouseImg3;
var cat,mouse;
function preload() {
  cat1Img = loadImage("images/cat1.png");
  cat2Img = loadAnimation("images/cat2.png","images/cat3.png");
  cat3Img = loadImage("images/cat4.png");
  
  mouseImg1 = loadImage("images/mouse1.png");
  mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
  mouseImg3 = loadImage("images/mouse4.png");

  bgImg = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(870,600);
    cat.addImage(cat1Img);
    cat.scale=0.2;

    mouse=createSprite(200,600);
    mouse.addImage(mouseImg1);
    mouse.scale=0.15;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<(cat.width-mouse.width)/2)
    {
      cat.velocityX=0;
      cat.addAnimation("cat",cat3Img);
      cat.x=300;
      cat.scale=0.2;
      cat.changeAnimation("cat");
      mouse.addAnimation("mouse",mouseImg3);
      mouse.scale=0.15;
      mouse.changeAnimation("mouse");
   }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
      if(keyCode===LEFT_ARROW){
        mouse.addAnimation("mouseTeasing",mouseImg2);
        mouse.changeAnimation("mouseTeasing");
        mouse.frameDelay=25;
        cat.velocityX=-5;
        cat.addAnimation("catRunning",cat2Img);
        cat.changeAnimation("catRunning");

      }

}
