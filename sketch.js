const WORLD = Matter.World;
 const BODIES = Matter.Bodies; 
 const ENGINE = Matter.Engine;
  var MyWorld,MyEngine,ground;
  var ball ;
  var box1,box2;
  var Pigs1;
var log1

  function setup() { createCanvas(800,400);
     MyEngine = ENGINE.create(); 
     MyWorld = MyEngine.world;
      var ground_options={ isStatic:true 
      }

      ground=BODIES.rectangle(400,390,800,20,ground_options); 
      WORLD.add(MyWorld,ground); console.log(ground);
      
box1=new box(200,300,50,50);
 box2= new box(240,100,50,50);   
 Pigs1= new Pigs(300,200);
log1= new log(200,200,300,PI/2);
console.log(log1);
}
          
     function draw() { background("pink");
      ENGINE.update(MyEngine);
       rectMode(CENTER);
        rect(ground.position.x,ground.position.y,800,20); 
    
     
    box1.display();
    box2.display();
    Pigs1.display();
    log1.display();
    
    }

