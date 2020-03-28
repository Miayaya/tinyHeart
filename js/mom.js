var momObj = function(){
    this.x ;
    this.y ;
    this.angle;
    //this.bigEye = new Image() ;
    //this.bigBody = new Image() ;
    //this.bigTail = new Image(); 
    this.momTailTimer = 0;
    this.momTailCount = 0;
    this.momEyeTimer = 0;
    this.momEyeCount = 0;
    this.momEyeInterval = 1000;
    this.momBodyCount = 0;
}

momObj.prototype.init = function(){
    this.x = canWidth * 0.5;
    this.y = canHeight * 0.5;
    this.angle = 0;
   // this.bigEye.src = "./src/bigEye0.png";
   // this.bigBody.src = "./src/bigSwim7.png";
   // this.bigTail.src = "./src/bigTail0.png";
}

momObj.prototype.draw = function(){
    //lerp x,y
    this.x = lerpDistance(mx,this.x,0.8);
    this.y = lerpDistance(my,this.y,0.8);
    //belta,atan2(y,x)
    var beltaX = mx - this.x;
    var beltaY = my - this.y;
    var delta = Math.atan2(beltaY,beltaX) + Math.PI //-PI,PI
    //lerp angle
    this.angle = lerpAngle(delta,this.angle,0.6)

    //mom tail
    this.momTailTimer += deltaTime;
    if (this.momTailTimer > 50){
        this.momTailCount = (this.momTailCount + 1) % 8;
        this.momTailTimer %= 50;
    }

    //mom Eye
    this.momEyeTimer += deltaTime;
    if (this.momEyeTimer > this.momEyeInterval){
        this.momEyeCount = (this.momEyeCount + 1) % 2;
        this.momEyeTimer %= this.momEyeInterval;
        if (this.momEyeCount == 0){
            this.momEyeInterval = Math.random() * 1500 +500;
        }else{
            this.momEyeInterval = 200;
        }
    }

    momTCount = this.momTailCount;
    momECount = this.momEyeCount ; 
    momBCount = this.momBodyCount;
    ctx1.save();
    ctx1.translate(this.x,this.y)
    ctx1.rotate(this.angle);
    
    ctx1.drawImage(momTail[momTCount],-momTail[momTCount].width * 0.5 + 30,-momTail[momTCount].height * 0.5);
    if(data.double == 2){
        ctx1.drawImage(momBodyBlue[momBCount],-momBodyBlue[momBCount].width * 0.5 ,-momBodyBlue[momBCount].height * 0.5);
    }else{
        ctx1.drawImage(momBodyOra[momBCount],-momBodyOra[momBCount].width * 0.5 ,-momBodyOra[momBCount].height * 0.5);
    }
    
    ctx1.drawImage(momEye[momECount],-momEye[momECount].width * 0.5,-momEye[momECount].height * 0.5);
    ctx1.restore();
}