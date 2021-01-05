const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var dustbin;
function preload(){
dustbin = loadImage("dustbingreen.png")
}
function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,690,1200,20,"indigo");
    side1 = new Stick(1000,680,200,20,"lawngreen");
    side2 = new Stick(900,650,20,100,"lawngreen");
    side3 = new Stick(1100,650,20,100,"lawngreen");
    ball = new Ball(100,600,40);
}

function draw(){
    background("salmon");
    Engine.update(engine);
    imageMode(CENTER);
    image(dustbin,1000,630,220,110);
   ground.display();
   ball.display();
}
function keyPressed(){
    if(keyCode=== UP_ARROW){
        Matter.Body.applyForce(ball.body,ball.body.position,{x:190, y:-190});
    }
}