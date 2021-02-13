const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ball, ground;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  var ground_properties = {
    isStatic:true,
    'restitution':1.0
  }
  ground = Bodies.rectangle(200, 390, 200, 20, ground_properties)
  World.add(world, ground)
  console.log(ground)
  
  var ball_properties = {
    'restitution':1.0
  }
  ball = Bodies.circle(200,100,20, ball_properties)
  World.add(world, ball)
}

function draw() {
  background(255,255,255);
  Engine.update(engine) 
  rectMode(CENTER) 
  rect(ground.position.x,ground.position.y,200,20)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y, 20)
  
}