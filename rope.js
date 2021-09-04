class rope{
	constructor(body1,body2,pointA,pointB)
	{
     this.pointA=pointA;
	 this.pointB=pointB;
	 var options={
		 bodyA:body1,
		bodyB:body2 ,
		posB:{x:this.pointA,y:this.pointB}
	 }
	//create rope constraint here
	this.rope=Matter.Constraint.create(options);
     World.add(world,this.rope);
	}


    //create display() here 
     display(){
		  var posA=this.rope.bodyA.position;
		  var posB=this.rope.bodyB.position;
		  var positionA=posA.x;
		  var positionB=posA.y;
		  var positionC=posB.x+this.pointA;
		  var positionD=posB.y+this.pointB;
		  strokeWeight(2);
		  stroke("white");
		line(positionA,positionB,positionC,positionD)
	  }
}
