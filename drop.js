class Drop {
    constructor(x, y,radius) {
        var options = {
            friction: 0.1
        }
        this.body = Matter.Bodies.circle(x, y,radius, options);
        this.r = radius;
        World.add(world,this.body);
    
    }
    display() {
        ellipse(this.body.x, this.body.y,this.r,this.r);
    }
    update() {
        if (this.body.position.y > height) {
            Matter.Body.setPosition(this.body, { x: random(0, 400), y: random(0, 400) });
        }
    }
    
}