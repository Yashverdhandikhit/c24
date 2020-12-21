class log {
    constructor (x,y,height,angle){
    
     var option = {
         'restitution':0.8,'friction':0.3,'density':1
 } 
 this.body=BODIES.rectangle(x,y,20,height,option);
 this.width=20;
 this.height=this.height;
 Matter.Body.setAngle(this.body,angle);
 WORLD.add(MyWorld,this.body);
 
 
 }
 display(){
     var pos=this.body.position;
     var angle= this.body.angle;
     push();
     translate(pos.x,pos.y);
     rotate(angle);
     strokeWeight(4);
     stroke("green");
     fill(255);
     rectMode(CENTER);
     rect(0,0,this.width,this.height);
 
 pop();
 }
 }
 
 