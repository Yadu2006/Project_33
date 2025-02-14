const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var count = 0;
var gameState = "PLAY";

var divisionHeight=300;
var score = 0;
var count = 0;
var a = 0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
      divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);


  Engine.update(engine);
 
  if(gameState === "PLAY")
  {   

      text("500", 25,520);
      text("500", 105,520);
      text("500", 185,520);
      text("500", 265,520);
      text("100", 265 + 80,520);
      text("100", 265 + 160,520);
      text("100", 265 + 240,520);
      text("200", 265 + 320,520);
      text("200", 265 + 400,520);
      text("200", 265 + 480,520);

      for (var i = 0; i < plinkos.length; i++) {
      
         plinkos[i].display();
      
      }
      if(frameCount%60===0){
         particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
         count++;
         
         for(a = 0; a === 10; a++)
         {


         }

         
            score = score + 100;
         
      }
   
   for (var j = 0; j < particles.length; j++) {
      
      particles[j].display();
      }
      for (var k = 0; k < divisions.length; k++) {
      
      divisions[k].display();
      }

      if(count === 6)
      {

         gameState = "END";
         score = 500;
         

      }

   }

   if(gameState === "END")
   {
      text("GAME OVER!!", 300, 300);

   }

}
