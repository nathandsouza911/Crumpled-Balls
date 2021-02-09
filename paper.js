class Paper{
    constructor(x, y, diameter, angle) {
        var options = {
            isstatic:false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.circle(x, y, diameter, options);
        this.diameter = diameter;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(RIGHT);
        this.image.resize(100,100)
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}