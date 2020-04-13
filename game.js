
var canvasBg = document.getElementById("canvasBg"),
ctxBg = canvasBg.getContext("2d"),
canvasEntities = document.getElementById("canvasEntities"),
ctxEntities = canvasEntities.getContext("2d"),
canvasHeight = canvasBg.height ,
canvadWidth = canvasBg.width ,
player = new Player(canvadWidth,canvasHeight,ctxEntities),
slides = [
    //new Slide(canvadWidth,canvasHeight,120,50,ctxEntities),
    //new Slide(canvadWidth,canvasHeight,150,100,ctxEntities),
   // new Slide(canvadWidth,canvasHeight,80,130,ctxEntities),
    new Slide(canvadWidth,canvasHeight,200,70,ctxEntities)
],
numberSlides = 5,
isPlaying = false,
requestAnimationFrame = window.requestAnimationFrame ||
                        window.msRequestAnimationFrame ||
                        window.webkitRequestAnimationFrame ||
                        window.mozRequestAnimationFrame ||
                        function(callback){
                            window.setTimeout(callback,1000/60);
                        },
imgSprite = new Image();
imgSprite.src = "images/Screenshot-2.jpg";
imgSprite.addEventListener("load",init,false);

function init(){
    
    begin();
}

function begin(){
    ctxBg.beginPath();
    ctxBg.rect(0,0,canvadWidth,canvasHeight);
    ctxBg.fillStyle = "blue";
    ctxBg.fill();
    isPlaying=true;
    requestAnimationFrame(loop);
    //ctxBg.drawImage(imgSprite,0,0,canvadWidth,canvasHeight,0,0,canvadWidth,canvasHeight);
}

function update(){
    clear(ctxEntities);

    handleCollision();
    for(let i=0;i<slides.length;i++){
        this.slides[i].update();
    }
    //updateAllLines();
    player.update();
}

function draw(){
    for(let i=0;i<slides.length;i++){
        this.slides[i].draw();
    }
    //drawAllLines();
    this.player.draw();
    //this.slide= new Slide(canvadWidth,canvasHeight,ctxBg);
    //this.slide.draw();
}

function loop(){
    if(isPlaying){
        update();
        draw();
        requestAnimationFrame(loop);
    }
}

function clear(ctx){
    ctx.clearRect(0,0,canvadWidth,canvasHeight);
}

function handleCollision(){
    for(let i=0;i<slides.length;i++){
        this.slides[i].collision(this.player);
    }
}