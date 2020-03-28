var aneObj = function (){
    //root position,control point,head position(sin)
    this.rootx = [];
    this.headx = [];
    this.heady = [];
    this.amp = [];//海葵摆动振幅
    this.alpha = 0;
}

aneObj.prototype.num = 50;
aneObj.prototype.init = function() {
    for (var i = 0;i < this.num;i++){
        this.rootx[i] = i * 20 + Math.random()*20;  //location
        this.headx[i] = this.rootx[i];
        this.heady[i] = canHeight - (200 + Math.random()*50);
        this.amp[i] = Math.random()*50 +50;
    }
  
}

aneObj.prototype.draw = function(){
    //beginPath,moveTo,lineTo,stroke,lineCap,strokeStyle,lineWidth,globalAlpha

    ctx2.save();
    ctx2.globalAlpha = 0.6;
    ctx2.strokeStyle = "#3b154e";
    ctx2.lineWidth = "18";
    ctx2.lineCap = "round";
    this.alpha += deltaTime * 0.001;
    var l = Math.sin(this.alpha);
    for (var i = 0;i < this.num;i++){
        this.headx[i] = this.rootx[i] + l *this.amp[i];
        ctx2.beginPath();
        ctx2.moveTo(this.rootx[i],canHeight);
        ctx2.quadraticCurveTo(this.rootx[i],canHeight - 150,this.headx[i] ,this.heady[i]);
        ctx2.stroke();
    }
   
    ctx2.restore();
    //ctx1.drawImage(dustPic[3],canWidth*0.5,canHeight*0.5);
}