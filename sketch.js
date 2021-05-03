const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;
var box1;
var box2;
var box3, box4;
var ground;
var log1;
var birdl;
var pig1;
var bg1;
var platform;
var slingShot;

function preload(){
bg1=loadImage("sprites/bg.png");
}

function setup(){
var canvas = createCanvas(1400,500);
engine = Engine.create();
world = engine.world;

ground=new Ground(700,height-7.5,1400,15);
box1 = new Box(900,height-15,70,70);
box2= new Box(1100,height-15,70,70);
box3= new Box(900,height-130,70,70);
box4= new Box(1100,height-130,70,70);
box5=new Box(1002,height-245,70,70);
log1= new Log(1002,height-100,270,PI/2)
log2= new Log(1002,height-205,270,PI/2);
log3=new Log(960,height-310,160,PI/7);
log4=new Log(1050,height-310,160,-PI/7);

bird1=new Bird(200,100);
pig1=new Pig(1000,height-15);
pig2=new Pig(1000,height-130);

platform=new Ground(150,380,300,210);
slingShot=new ConstraintClass(bird1.body,{x:200,y:100});

}

function draw(){
background(bg1);

Engine.update(engine);
    
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();

ground.display();
platform.display();

log1.display();
log2.display();
log3.display();
log4.display();

bird1.display();
pig1.display();
pig2.display();


slingShot.display();
}

function mouseDragged(){

Matter.Body.setPosition(bird1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
slingShot.fly();
}

function keyPressed(){

if(keyCode===32){
slingShot.attach(bird1.body);
}

}