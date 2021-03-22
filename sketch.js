const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    Plane1 = new Plane(600,height,1200,20)
    Hammer1 = new Hammer(100,10);
    Stone1= new Stone(50,150,20,PI/2)
    Iron1= new Iron(300,175,50,PI);
    Rubber1= new Rubber(400,48,56)
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    Plane1.display();
    Hammer1.display();
    Stone1.display();
    Iron1.display();
    Rubber1.display();
   
 
}