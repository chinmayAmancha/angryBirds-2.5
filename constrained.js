class Chain{
    constructor(A,B) {
        var options = {
            bodyA: A,
            bodyB: B,
            stiffness: 0.04,
            lenth: 1.3
        }

        this.chain = Constreint.create(options);
        
        World.add(this.chain,world);
    }
    display() {
        var thingA = this.chain.bodyA.position;
        var thingB = this.chain.bodyB.position;
        strokeWeight(4);
        Line(thingA.x,thingA.y,thingB.x,thingB.y);
    }
}