class bob{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:1,
            density:7,
            friction:0,
            
      }
      this.body=Bodies.circle(x,y,20,options);
       World.add(world,this.body);
    }
    display(){
    
        
        fill("yellow");
        ellipseMode(RADIUS);
        var pos=this.body.position;
        ellipse(pos.x,pos.y,20,20);
    
    }
}