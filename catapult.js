class XD{
    constructor(bodyA,pointB){
        var GG={
          bodyA:bodyA,
          pointB:pointB,
          length:80,
          stiffness:0.03
      }
      this.ropeEEE = bind.create(GG);
      this.pointB = pointB;
  
      World.add(world,this.ropeEEE);
    }
    detach(){
      this.ropeEEE.bodyA = null;
    }
  }