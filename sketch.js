const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var land;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    land = new ground(200,375,400,20);
    box2 = new Box(240,100,50,50);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    land.display();
   box2.display();
}