
  class Stone {
    constructor(x, y,height,angle) {
      var options = {
          'density':12,
          'friction' :0.9,
          'restitution':0.8
      }
      this.body = Bodies.rectangle(x, y, 20, height, options);
      this.width = 20;
      this.height = height;
      Matter .Body.setAngle(this.body,angle)
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      push ()
      translate (pos.x,pos.y)
      rotate (angle) 
      rectMode(CENTER);
      fill(255);
      stroke("blue")
      strokeWeight(4)
      rect(0,0, this.width, this.height);
      pop();  }
  }; 