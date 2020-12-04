const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies

var engine;
var world;
var body;
var ball;
function setup(){
  createCanvas(400,400)

  engine = Engine.create()
  world = engine.world
  var options={
    isStatic : true
  }
  body = Bodies.rectangle(200,380,400,20,options)
  World.add(world,body)


  var balloptions={
    restitution : 4
  }
  ball = Bodies.circle(200,200,60,balloptions)
  World.add(world,ball)

}


function draw(){
  background("black")
  Engine.update(engine)
  rectMode(CENTER)
  rect(body.position.x,body.position.y,400,20);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,60,60)
}