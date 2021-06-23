class Stone{
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        var options={
            restitution:0.8,
            density:12,
            firction:0.9
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);

        
    }
    display(){
        var stonepos=this.body.position;
        push()
        translate(stonepos.x,stonepos.y);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("black");
        fill("grey");
        rect(0,0,this.width,this.height);
        pop();
    }
}