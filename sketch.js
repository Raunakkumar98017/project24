const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    Stone = new Stone(300,100,70,70);
    Iron = new Iron(300,100,100,100);
    rubberball = new Rubber(500,100,30);


}

function draw(){
    background("lightpink");
    Engine.update(engine);


    plane.display();
    hammer.display();
    Stone.display();
    Iron.display();
    rubberball.display();

 
}