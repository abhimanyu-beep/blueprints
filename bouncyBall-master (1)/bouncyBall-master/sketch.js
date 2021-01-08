const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var Ground1
var Box1
var Box2

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    Ground1 = new Ground(200,350,400,20)
    Box1 = new box(50,30,20,20)
    Box2 = new box(60,50,30,20)

    

}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);

    Ground1.display()
    Box1.display()
    Box2.display()
}