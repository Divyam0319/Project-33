class Snow{

    constructor(x,y){
        var options = {
            "friction":0.0000001,
            "restitution":0.1
        }
        this.body = Bodies.circle(x,y,random(30,45),options);
        this.radius = random(30,45);
        this.image=loadImage("snow4.webp")
        World.add(world,this.body);



    }

    updateFunction(){     
        if(this.body.position.y > height){

            Matter.Body.setPosition(this.body, {x:random(0,1900), y:random(0,100)})
        }
    }
   

        displaySnow(){
            
            imageMode(CENTER);
            image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius);
        }



}