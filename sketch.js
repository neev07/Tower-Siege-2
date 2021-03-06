const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5, box6;
var slingShot,bird;

function preload() {

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    platform = new Ground(753, 350, 530, 30);

    box1 = new Box(700,300,70,70);
    box2 = new Box(920,300,70,70);
    box3 = new Box(700,300,70,70);
    box4 = new Box(920,300,70,70);
    box5 = new Box(810,300,70,70);
    box6 = new Box(720,300,70,70);

    bird = new Bird(200,200,10,10);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background("white");
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    bird.display();
    platform.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}