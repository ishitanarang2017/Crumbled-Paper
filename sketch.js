const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,690,1200,20,"indigo");
    side1 = new Ground(1000,680,200,20,"lawngreen");
    side2 = new Ground(900,650,20,100,"lawngreen");
    side3 = new Ground(1100,650,20,100,"lawngreen");
    ball = new Ball(100,600,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    side1.display();
    side2.display();
    side3.display();
   ground.display();
   ball.display();
}
function keyPressed(){
    if(keyCode=== UP_ARROW){
        Matter.Body.applyForce(ball.body,ball.body.position,{x:70, y:-70});
    }
}