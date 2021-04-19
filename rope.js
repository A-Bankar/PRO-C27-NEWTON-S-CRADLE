class Rope
{
   constructor(body1,body2,offsetx,offsety)
   {
    this.offsetX = offsetx;
    this.offsetY = offsety;
    var options = {
        bodyA: body1,
        bodyB: body2,
        pointB: {x:this.offsetX, y:this.offsetY}
    }
    

    this.rope = Constraint.create(options)
    World.add(userWorld,this.rope); 
    }


   display(){

    
   }

}