function Player(x,y,ctx){
    this.canvasWidth=x;
    this.canvasHeight = y;
    this.width = 10;
    this.height = 10;
    this.ctx = ctx;
    this.x=(x/2)-10;
    this.y=y-10;
    this.speed = 2;
    this.velocity = new Vector2(0,0);
    this.jumpHeight = 3;
    this.jumping = false;
    this.jumpVelocity=2;
    this.gravity=1.5;
    this.collideBottom = false;
    this.collideTop = false;
   // this.moving=false;
    //this.keyUp=false;
    //this.keyRight=false;
    //this.keyLeft=false;
}

Player.prototype.draw = function(){
    
    this.ctx.beginPath();

    this.ctx.rect(this.x,this.y,this.width,this.height);
    this.ctx.fillStyle = "red";
    this.ctx.fill();
}


Player.prototype.update = function(){
    this.velocity.x *= 0.8;
  //  let Mouse = new MouseHandler();
    if(Mouse.left.down){
        if((this.canvasWidth-this.x)>this.width){
            this.x = this.x+this.speed;
        }
    
        
    }
    if(Mouse.right.down){
        if((this.canvasWidth+this.x)>this.canvasWidth){
            this.x = this.x-this.speed;
        }
    }
    if(Mouse.middle.down){
       this.jumping=true;
      
        
    } 

        if(this.jumping ){
           // console.log("jumping");
           if(this.y>0){
            this.y -=this.jumpHeight;
            this.jumpHeight -=0.09;
           // console.log(this.y+":"+this.jumpHeight);
            
            if(this.jumpHeight<=0){
                this.jumping=false;
            }
        }else{
            this.jumping=false;
        }
        }else{
           
            if((this.canvasHeight-this.y-10)>0){
                this.y +=this.gravity;
                //console.log(this.y);
            }
                this.jumpHeight=4;
        
    }
    
}
