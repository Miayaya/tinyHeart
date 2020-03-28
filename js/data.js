var dataObj = function(){
    this.num = 0;
    this.double = 1;//判断果实颜色是否为蓝色，数值2代表蓝色
    this.score = 0;
    this.gameOver = false;
    this.alpha = 0;

}

dataObj.prototype.reset = function(){
    this.num = 0;
    this.double = 1;
}

dataObj.prototype.draw = function(){

    ctx1.save();
    ctx1.fillStyle ="white";
    ctx1.font = "30px Arial";
    ctx1.textAlign = "center";
    ctx1.shadowBlur = 10;
    ctx1.shadowColor = "red";
    //ctx1.fillText("num "+this.num,mx,canHeight - 50);
    //ctx1.fillText("double " + this.double,mx,canHeight - 80);
    ctx1.fillText("SCORE: " + this.score,canWidth*0.5,80);
    if (this.gameOver){
        this.alpha += deltaTime * 0.0005;
        if (this.alpha > 1){
            this.alpha = 1;
        }
       
        ctx1.fillStyle = "rgba(255,255,255,"+this.alpha+")";
        ctx1.fillText("GAME "+"OVER",canWidth*0.5,canHeight*0.5)
    }
    ctx1.restore();
}

dataObj.prototype.addScore = function(){
    this.score += this.num * 20 *this.double;
    this.num = 0;
    //this.double = 1;
}