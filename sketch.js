const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var userEngine, userWorld;

var ground;

var ball1;
var ball2;
var ball3;
var ball4;
var ball5;

var rope1;

var ballDiameter = 100;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 1200);

	userEngine = Engine.create();
	userWorld = userEngine.world;

	//Create the Bodies Here.

  ground = new Ground(600,100,600,60);

  ball1 = new ball(600,700,100);
  ball2 = new ball(500,700,100);
  ball3 = new ball(400,700,100);
  ball4 = new ball(700,700,100);
  ball5 = new ball(800,700,100);

  rope1 = new Rope(ball3.body,ground.body, -ballDiameter*2,0);
  rope2 = new Rope(ball2.body,ground.body, -ballDiameter*1,0);
  rope3 = new Rope(ball1.body,ground.body, -ballDiameter*0,0);
  rope4 = new Rope(ball4.body,ground.body, -ballDiameter*-1,0);
  rope5 = new Rope(ball5.body,ground.body, -ballDiameter*-2,0);

	Engine.run(userEngine);
  
}


function draw() {
  rectMode(CENTER);
  background(420,69,69);

  
  //display

  ground.display();

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  //rope1.display();
  
  strokeWeight(3);
  line(ball3.body.position.x,ball3.body.position.y,ground.body.position.x,ground.body.positionyx);

  drawSprites();

  if(keyCode === 38){
    Matter.Body.setVelocity(ball3.body,{x: -10,y:0});
  }
 
}
