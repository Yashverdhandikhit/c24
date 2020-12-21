class Pigs {
constructor(x,y){
var option ={
    'restitution':0.8,'friction':0.3,'density':1.0
} 
this.BODY=BODIES.rectangle(x,y,50,50,option);
this.width=50;
this.height=50;

WORLD.add(MyWorld,this.BODY);

}

display(){
 var pos=this.BODY.position;
 var angle=this.BODY.angle;
  push();
  translate(pos.x,pos.y);
  rotate(angle);
  rectMode(CENTER);
  fill("green")
  rect(0,0,this.width,this.height);
pop();
}


} 










