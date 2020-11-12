class stone{
    constructor(x,y){
      this.brock = loadImage("stone.png");
      var property={
          
          restitution:0.5,
          density:0.4
      }
      this.LIAM = Bodies.circle(x,y,10,property);

      World.add(world,this.LIAM);
    }
    create(){
        var haff = this.LIAM.position;
        var angle = this.LIAM.angle;

        push();
        translate(haff.x,haff.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.brock,0,0,30,30);
        pop();
    }
}