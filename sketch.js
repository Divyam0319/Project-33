const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var snow=[]
var totalSnow=50

var bgImage


function preload() {

  bgImage=loadImage("snow3.jpg")


}


function setup() {
 createCanvas(1900,900);

 engine = Engine.create();
 world = engine.world;

 if(frameCount % 100 === 0){

     for(var i=0; i<totalSnow; i++){
         snow.push(new Snow(random(0,1900), random(0,500)));
     }

 }


}
  

function draw() {
  background(bgImage);  

  Engine.update(engine);

  for(var i = 0; i<totalSnow; i++){
    snow[i].displaySnow();
    snow[i].updateFunction()
   
    
}

  drawSprites();
}