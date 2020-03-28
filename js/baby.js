
var babyObj = function(){
    this.x ;
    this.y ;
    this.angle;
    //this.babyEye = new Image() ;
    //this.babyBody = new Image() ;
    //this.babyTail = new Image(); 
    this.babyTailTimer = 0;
    this.babyTailCount = 0;
    this.babyEyeTimer = 0;
    this.babyEyeCount = 0;
    this.babyEyeInterval = 1000;
    this.babyBodyTimer = 0;
    this.babyBodyCount = 0;
   
}

babyObj.prototype.init = function(){
    this.x = canWidth * 0.5- 50;
    this.y = canHeight * 0.5 + 50;
    this.angle = 0;
    //this.babyEye.src = "./src/babyEye0.png";
    //this.babyBody.src = "./src/babyFade10.png";
    //this.babyTail.src = "./src/babyTail0.png";
}

babyObj.prototype.draw = function(){
    //lerp x,y
    this.x = lerpDistance(mom.x,this.x,0.98);
    this.y = lerpDistance(mom.y,this.y,0.98);
    //belta,atan2(y,x)
    var beltaX = mom.x - this.x;
    var beltaY = mom.y - this.y;
    var delta = Math.atan2(beltaY,beltaX) + Math.PI //-PI,PI
    //lerp angle
    this.angle = lerpAngle(delta,this.angle,0.6);

    //babyTail count
    this.babyTailTimer += deltaTime;
    if(this.babyTailTimer > 50){
        this.babyTailCount = (this.babyTailCount + 1) % 8;
        this.babyTailTimer %= 50;
    }
    // baby Eye
    this.babyEyeTimer += deltaTime;
    if(this.babyEyeTimer > this.babyEyeInterval){
        this.babyEyeCount = (this.babyEyeCount + 1)%2;
        this.babyEyeTimer %= this.babyEyeInterval;

        if (this.babyEyeCount == 0){
            this.babyEyeInterval = Math.random()* 2000 + 200;
        } else{
            this.babyEyeInterval = 200;
        }
    }

    //baby body fade
    this.babyBodyTimer += deltaTime;
    if (this.babyBodyTimer > 500 ){
        this.babyBodyCount++;
        this.babyBodyTimer %=500;
        if (this.babyBodyCount > 19){
            this.babyBodyCount = 19;
            data.gameOver = true;
            //game over
        }
    }

    var babyTCount = this.babyTailCount; 
    var babyECount = this.babyEyeCount;
    var babyBCount = this.babyBodyCount;
    ctx1.save();
    ctx1.translate(this.x,this.y)
    ctx1.rotate(this.angle);
    
    ctx1.drawImage(babyTail[babyTCount], - babyTail[babyTCount].width * 0.5 + 25,- babyTail[babyTCount].height * 0.5);
    ctx1.drawImage(babyBody[babyBCount],-babyBody[babyBCount].width  * 0.5 ,-babyBody[babyBCount].height * 0.5);
    ctx1.drawImage(babyEye[babyECount],-babyEye[babyECount].width * 0.5,-babyEye[babyECount].height * 0.5);
    ctx1.restore();
}