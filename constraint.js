class ConstraintClass {
constructor(bodyA, pointB){

this.sling1_img=loadImage("sprites/sling1.png");
this.sling2_img=loadImage("sprites/sling2.png");
this.sling3_img=loadImage("sprites/sling3.png");
    
var options={
bodyA: bodyA,
pointB: pointB,
length: 10,
stiffness: 0.04
}

this.slingshot=Constraint.create(options);
this.pointB=pointB;
World.add(world,this.slingshot);
}

fly(){
this.slingshot.bodyA=null;
}
attach(body){
this.slingshot.bodyA=body;

}
display(){

image(this.sling1_img,200,77);
image(this.sling2_img,170,74);

if(this.slingshot.bodyA){
var pointA=this.slingshot.bodyA.position;
var pointB=this.pointB;

push();
strokeWeight(4.5);
line(pointA.x-20,pointA.y,pointB.x+30,pointB.y);
line(pointA.x-20,pointA.y,pointB.x-10,pointB.y);
image(this.sling3_img,pointA.x-25,pointA.y-10,15,30);
pop();
}
}
}