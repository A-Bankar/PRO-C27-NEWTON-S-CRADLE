class ball
{
   constructor(x,y,r)
{
   var options = {
      restitution:0.3,
      friction :0.5,
      isStatic:false,
      density:1.2



   }
this.x=x
this.y=y
this.r=r
this.body = Bodies.circle(this.x,this.y,this.r/2,options)
World.add(userWorld,this.body);

}
display()
{
    var ballpos= this.body.position;

    push()
    translate(ballpos.x,ballpos.y);
    rectMode(CENTER)
    strokeWeight(3);
    fill(69,69,69);
    ellipse(0,0,this.r,this.r);
    pop()
}

}