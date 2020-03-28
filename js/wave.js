var waveObj = function(){
    this.x = [];
    this.y = [];
    this.alive = [];
    this.r = [];
}

waveObj.prototype.num = 15;

waveObj.prototype.init = function(){
    for(var i = 0;i < this.num;i++){
        this.alive[i] = false;
        this.r[i] = 0;
    }

}

waveObj.prototype.born = function(x,y){
    for (var i = 0; i <this.num;i++){
        if(!this.alive[i]){
            this.alive[i] = true;
            this.x[i] =x;
            this.y[i] =y;
            this.r[i] = 10;
            return;
        }
    }

}

waveObj.prototype.draw = function(){

    ctx1.save();
    for (var i = 0; i <this.num;i++){
        if(this.alive[i]){
            //draw
            this.r[i] += deltaTime*0.05;
            if (this.r[i]>50){
                this.alive[i] = false;
                break;
                i++;
            }
            var alpha = 1 - this.r[i]/50;

            ctx1.beginPath();
            ctx1.arc(this.x[i],this.y[i],this.r[i],0,Math.PI*2,true);
            ctx1.strokeStyle = "rgba(255,255,255," + alpha +")";
            ctx1.lineWidth = 3;
            ctx1.shadowBlur = 10;
            ctx1.shadowColor = "white";
            ctx1.stroke();
           
        }
    }
    ctx1.restore();
}