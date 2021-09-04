const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1,rope1,bob2,rope2,bob3,rope3,bob4,rope4,bob5,rope5;
var roof1;
//Create multiple bobs, mulitple ropes varibale here
     
function setup() {
	createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;
	bob1=new bob(320,350);
  bob2=new bob(360,350);
  bob3=new bob(400,350);
  bob4=new bob(440,350);
  bob5=new bob(480,350);
  roof1=new roof(400,100,230,20);
  rope1=new rope(bob1.body,roof1.body,-80,0);
  rope2=new rope(bob2.body,roof1.body,-40,0);
  rope3=new rope(bob3.body,roof1.body,0,0);
  rope4=new rope(bob4.body,roof1.body,40,0);
  rope5=new rope(bob5.body,roof1.body,80,0);
	Engine.run(engine);
	
  
}

function draw() {
  
  background("#99004d");
  Engine.update(engine);
  
    
  //call display() to show ropes here

    
    bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();
    roof1.display();
    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display(); 
  //create ellipse shape for multiple bobs here
  
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
  if (keyCode=== UP_ARROW ) {
  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-500,y:0})
    
  }
}