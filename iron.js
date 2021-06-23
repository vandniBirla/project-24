class Iron{
    constructor(x,y,width,height){
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;
        var options={
            restitutions:0.8,
            friction:3,
            density:30
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position
        translate(pos.x,pos.y)
        rectMode(CENTER);
        strokeWeight(4);
        stroke("black");
        fill("red");
        rect(0,0,this.width,this.height);
    }
}