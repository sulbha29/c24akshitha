class Paper {
    constructor(x, y,radius) {
      var options = {
         
          restitution:1.6
      }
      this.body = Bodies.circle(x, y, radius, options);
     this.radius=radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
     // pos.x = mouseX;
     // pos.y = mouseY;
var angle=this.body.angle
      push();
      translate(pos.x,pos.y);
      rotate(angle)
      fill("purple");
      ellipseMode(RADIUS)
      ellipse(0,0,this.radius)
      pop();
    }
  };