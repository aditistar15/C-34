class Rope {
    constructor(firstbody,pointB){
        var options = {
            bodyA : firstbody,
            pointB : pointB,
            stiffness : 0.04,
            length : 200
        }
        this.pointB = pointB;
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }
  
    display() {
      strokeWeight (3.0);
      stroke("blue");
      fill("blue");
     line(this.chain.bodyA.position.x,this.chain.bodyA.position.y, this.pointB.x, this.pointB.y);
    }
  }
  