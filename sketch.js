var gameState, canvas, lab
var ratioBase
var next, next1, next2
var nextImg
var reportingBgImg,reportingImg ,reporter, reporterImg
var gameState2Img
var heart1, heart2, heart3, maingame
var score, flag =1;

function preload() {
  nextImg = loadImage("Untitled.png")
  reportingBgImg = loadImage("news.jpg")
  reporterImg = loadImage("images-removebg-preview.png")
  gameState2Img = loadImage("gamestate 2.jpeg")
  manimg = loadImage("person.png")
  
}

function setup() {
  canvas = createCanvas(800,400);
  gameState = 0
  lab = new Lab()
  maingame = new Game();
  news = new News();
  score = 0
  next =  createSprite(-700, -350, 100,50);
  next1 =  createSprite(-700, -350, 100,50);
  man = createSprite(-999, -999, 10,20)
  

}

function draw() {
  background(0);
  drawSprites();
  if(gameState === 0){
    lab.display();
    next.x = 100;
    next.y = 200;
    man.x = 400
    man.y = 200
    man.addImage(manimg)
    next.scale = 0.5
    next1.scale = 0.5
    next.addImage(nextImg)
    if(mousePressedOver(next)){
      gameState = 1;
    } 
    if(keyDown("l")){
      gameState = 1
    }
  }
  else if(gameState === 1){
    lab.remove();
    news.display();
    next.destroy();
    man.destroy()
    next1.x = 700;
    next1.y = 150;
    next1.addImage(nextImg)
    if(mousePressedOver(next1)){
      gameState = 2;
    } 
    if(keyDown("enter")){
      gameState = 2
    }
  }
  else if(gameState === 2){
    news.remove();
    next1.destroy();

    maingame.play();
  
    
 
 
  
    maingame.sanitizers()
    maingame.mask()
    maingame.gameWin()
  
  }

 

   
    }