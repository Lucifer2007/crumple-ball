class Paper{
    constructor(){
        var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2

			
			}
        this.body=Bodies.circle(400,150,40,options)
            World.add(world,this.body);
    }
 display(){
    var paperpos=this.body.position;		

    push()
    translate(paperpos.x, paperpos.y);
    ellipseMode(RADIUS)
    fill("red")
    ellipse(0,0,40,40);
    pop()
 }


}