class Ball {
    constructor(x, y, r) {
      var options = {
          'restitution':0.3,
          'friction':0,
          'density':1.5,
          isStatic : false
      }
      this.r = r
      this.body = Bodies.circle(x, y,r, options);
      
      this.image = loadImage("p.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      push();
      translate(pos.x, pos.y);
      
      imageMode(CENTER);
      //fill(255);
      //strokeWeight(4);
      //stroke("green");
      image(this.image,0,0,this.r,this.r);
      pop();
    }
  };