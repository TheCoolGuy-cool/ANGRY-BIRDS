const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

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

function preload(){
bg1=loadImage("sprites/bg.png");
}

function setup(){
var canvas = createCanvas(1400,500);
engine = Engine.create();
world = engine.world;
ground=new Ground(700,height-7.5,1400,15);
box1 = new Box(800,height-15,70,70);
box2= new Box(1000,height-15,70,70);
box3= new Box(800,height-130,70,70);
box4= new Box(1000,height-130,70,70);
box5=new Box(902,height-245,70,70);
log1= new Log(902,height-100,270,PI/2)
log2= new Log(902,height-205,270,PI/2);
log3=new Log(850,height-310,160,PI/7);
log4=new Log(950,height-310,160,-PI/7);

bird1=new Bird(100,100);
pig1=new Pig(900,height-15);
pig2=new Pig(900,height-130);

platform=new Ground(100,400,200,230);

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

}