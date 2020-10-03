
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body  = Matter.Body;

var d1,d2,d3;
var g;
var b;
function setup()
 {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   d1 = new dustbin(630,670,120,20);
   d2 = new dustbin(580,610,20,100);
   d3 = new dustbin(680,610,20,100);

   g = new ground(500,690,1000,20);

   //b = new bal(50,600,10);
   var options=
   {      'isStatic':false,
          'restitution':1,
          'density':1.2,
          'friction':0.5
   }

   b=Bodies.circle(100,500,15,options);
   World.add(world,b);

	Engine.run(engine);
  
  console.log(b);
}


function draw() 
{
  background(0);

  d1.display();
  d2.display();
  d3.display();

  g.display();

       ellipseMode(RADIUS);
       fill("violet");
       ellipse(b.position.x,b.position.y,15,15);

       keyPressed();
  //b.display();
  

  fill("yellow");
  textSize(30);
  stroke ("white");  
  text ("UP_ARROW",300,400);
}

function keyPressed()
{
  if(keyDown(UP_ARROW))
  {
   Matter.Body.applyForce(b,b.position,{x:30,y:-40});
    
  }
}