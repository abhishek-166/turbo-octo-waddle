function Slide(canvasWidth,canvasHeight,x,y,ctx){
    this.width = 40;
    this.height = 2;
    this.ctx = ctx;
   // this.x= x;
   // this.y= y;
   this.x= x;
   this.y=y;
   this.velocity=1.5;
   this.canvasWidth = canvadWidth;
   this.canvasHeight = canvasHeight;
   this.movingLeft = false;
   this.movingRight = true;
}

Slide.prototype.draw = function(){
    this.ctx.beginPath();
    //console.log(this.x+":"+this.y);
    this.ctx.rect(this.x,this.y,this.width,this.height);
    this.ctx.fillStyle = "green";
    this.ctx.fill();
}

Slide.prototype.collision = function(player){
    var platformTop = this.y;
  var playerBottom = player.y - player.height / 2 ;
   
  if (playerBottom < platformTop+1 && platformTop < playerBottom) {
console.log("inside");
this.collideBottom=true;
    var platformLeftX = this.x; // platform lefter-most x bound
    var platformRightX = this.x + this.width; // platform righter-most x bound

    var playerLeftX = player.x - player.width / 2; // doodler lefter-most x bound
    var playerRightX = player.x + player.width / 2; // doodler righter-most x bound

    if( ((playerLeftX >= platformLeftX && // if the doodler's left X falls between the platform
    playerLeftX <= platformRightX) ||
			(playerRightX >= platformLeftX && // if the doodler's right X falls between the platform
			playerRightX <= platformRightX))){

            }

  }

  if(this.collideBottom){
   player.x = this.x-player.height;
   player.y = this.y-player.height;
   player.jumping = false;
   this.collideBottom=false;
 }
  
}



Slide.prototype.update = function(){
   // console.log("inside update");
    // if(this.x<0 && !this.movingRight){
    //     this.movingRight = true;
    //     this.movingLeft=false;
    // }
    //      if(this.x>this.canvasWidth-this.width && this.movingRight){
    //         this.movingRight=false;
    //         this.movingLeft=true;
    //     }

    //     if(this.movingRight){
    //         this.x +=this.velocity;
    //     }
    //     if(this.movingLeft){
    //         this.x -=this.velocity;
    //     }
    
}

function randomRange(min,max){
  
   return Math.floor(Math.random() * (max+1-min))+min;
}
    
