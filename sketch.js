const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ball, ground;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  var ball_option = {
   restitution:1.5
  }
  ball = Bodies.circle(100, 100, 20, ball_option);
  World.add(world, ball);

  var ground_options = {
    isStatic:true 
  }
  ground = Bodies.rectangle(400, 380, 800,20, ground_options);
  World.add(world, ground);

}

function draw() {
Engine.update(engine);

  background(0);  

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y,20,20);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y, 800,20);  
}