class boomboom
{
    constructor(x, y)
    {
        var options =
        {
            restitution: 1.0
        }
        this.body = Bodies.circle(x, y, 25, options);
        this.radius = 25;
        World.add(world, this.body);
    }

    display()
    {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        fill(100, 150, 200);
        strokeWeight(4);
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }
}