
var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}
function createApples( ) {
  apple = createSprite(random(50,350),40,10,10)
  appleImg = loadImage("apple.png")
  apple.addImage(appleImg)
  apple.scale = 0.1
  apple.velocityY = 6
  apple.lifetime = 70
}
function createLeafs( ) {
  leaf = createSprite(random(50,350),40,10,10)
  leafImg = loadImage("orangeLeaf.png")
  leaf.addImage(leafImg)
  leaf.scale = 0.1
  leaf.velocityY=6
  leaf.lifetime = 70
}
function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX
  var select_sprites = Math.round(random(1,2)) 
  if(frameCount % 80 == 0){
     if (select_sprites==1){
       createApples();
     }
     else if (select_sprites==2){
       createLeafs();
     }



  }
  console.log(frameCount)
  drawSprites();
}