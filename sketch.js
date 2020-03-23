
const {Engine, World, Bodies, Constraint} = Matter;
var engine, world;

var ground;
var block1, block2, block3, block4, block5, block6, block7, block8, block9;
var block10, block11, block12, block13, block14, block15, block16;
var block17, block18, block19, block20, block21;
var block22, block23, block24;
var block25;
var ball;
var slingShot;

function setup() 
{
  createCanvas(800, 600);
  
  engine = Engine.create();
  world = engine.world;
  
  ground = new GroundG(400, 575, 800, 50);
  
  ball = new boomboom(100, 500);
  
  block1 = new Block(700, 500, 25, 30);
  block2 = new Block(700 - 25, 500, 25, 30);
  block3 = new Block(700 - (25*2), 500, 25, 30);
  block4 = new Block(700 - (25*3), 500, 25, 30);
  block5 = new Block(700 - (25*4), 500, 25, 30);
  block6 = new Block(700 - (25*5), 500, 25, 30);
  block7 = new Block(700 - (25*6), 500, 25, 30);
  block8 = new Block(700 - (25*7), 500, 25, 30);
  block9 = new Block(700 - (25*8), 500, 25, 30);

  block10 = new Block(700 - 25, 500 - 30, 25, 30);
  block11 = new Block(700 - (25*2), 500 - 30, 25, 30);
  block12 = new Block(700 - (25*3), 500 - 30, 25, 30);
  block13 = new Block(700 - (25*4), 500 - 30, 25, 30);
  block14 = new Block(700 - (25*5), 500 - 30, 25, 30);
  block15 = new Block(700 - (25*6), 500 - 30, 25, 30);
  block16 = new Block(700 - (25*7), 500 - 30, 25, 30);

  block17 = new Block(700 - (25*2), 500 - (30*2), 25, 30);
  block18 = new Block(700 - (25*3), 500 - (30*2), 25, 30);
  block19 = new Block(700 - (25*4), 500 - (30*2), 25, 30);
  block20 = new Block(700 - (25*5), 500 - (30*2), 25, 30);
  block21 = new Block(700 - (25*6), 500 - (30*2), 25, 30);

  block22 = new Block(700 - (25*3), 500 - (30*3), 25, 30);
  block23 = new Block(700 - (25*4), 500 - (30*3), 25, 30);
  block24 = new Block(700 - (25*5), 500 - (30*3), 25, 30);

  block25 = new Block(700 - (25*4), 500 - (30*4), 25, 30);
  
  slingShot = new SlingShot(ball.body,{x: 150, y: 450});
}

function draw() 
{
  //console.log(frameCount);
  background("yellow");
  Engine.update(engine);
    
  ground.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  block22.display();
  block23.display();
  block24.display();

  block25.display();

  slingShot.display();
  ball.display();
}

function mouseDragged()
{
  Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY});
}

function mouseReleased()
{
  slingShot.fly();
}