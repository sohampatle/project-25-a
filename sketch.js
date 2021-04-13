
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,img1;
var ball,line1;


function setup() {
	createCanvas(800, 800);

	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	


	//Create the Bodies Here.
    ground = new Ground(400,height-10,800,20);
	line1 = new Box(600,height-15,80,100);
    ball = new Ball(200,450,70)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  line1.display();
  ball.display();
 ground.display();
 

drawSprites();
 }
 function keyPressed(){
if (keyCode=== UP_ARROW){
	Matter.Body.applyForce(ball.body,ball.body.position,{x:135,y:-145});
}
 }