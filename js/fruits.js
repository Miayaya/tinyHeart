var fruitObj = function(){
    this.alive = [];//bool
    this.orange = new Image();
    this.blue = new Image();
    this.x = [];
    this.y = [];
    this.l = [];//果实大小
    this.spd = [];
    this.fruitType = [];
    this.aneNum = [];

}

fruitObj.prototype.num = 30;

fruitObj.prototype.init = function(){

    for(var i = 0;i < this.num;i++){
        this.alive[i] = false;
        this.x[i] = 0;
        this.y[i] = 0;
        this.l[i] = 0;
        this.spd[i] = Math.random() * 0.15 +0.05;
        //this.born(i);
        this.fruitType[i] = "";
        this.aneNum[i] = 0;
    }
    this.orange.src = "./src/fruit.png";
    this.blue.src = "./src/blue.png";
    
}

fruitObj.prototype.draw = function(){
    //find ane,born ,fly up
    var pic;
    for(var i = 0;i < this.num;i++){
        if (this.fruitType[i] == "blue"){
            pic = this.blue;
        } else {
            pic = this.orange;
        }

        if (this.alive[i]){
            
            if (this.l[i] <14){
                var nm = this.aneNum[i];
                this.l[i] += this.spd[i] *deltaTime *0.5 ;
                this.x[i] = ane.headx[nm];
                this.y[i] = ane.heady[nm];
                ctx2.drawImage(pic,this.x[i] - this.l[i] * 0.5,this.y[i] - this.l[i] * 0.5,this.l[i],this.l[i]);
                //console.log(this.x[i]);
            }
            else {
                //this.x[i] =ane.rootx[nm];
                this.y[i] -= this.spd[i] * 3 + 1;
                ctx2.drawImage(pic,this.x[i] - this.l[i] * 0.5,this.y[i] - this.l[i] * 0.5,this.l[i],this.l[i]);
                
            }
            
            
            if (this.y[i] < -1){
                this.alive[i] = false;
            }
        }
    }
    
}
fruitObj.prototype.born = function(i){
    this.aneNum[i] = Math.floor(Math.random() * ane.num);
    //console(ane.num);
    this.x[i] = ane.rootx[this.aneNum[i]];
    this.l[i] = 0;
    this.alive[i] = true;
    var ran = Math.random();
    if (ran < 0.25){
        this.fruitType[i] = "blue";
    } else{
        this.fruitType[i] = "orange";
    }

}

fruitObj.prototype.dead = function(i){
        this.alive[i] = false;

}
 fruitObj.prototype.fruitMonitor = function(){
    var num = 0;
    for (var i = 0;i < this.num;i++){
        if(this.alive[i]){ 
            num++;
        }
    }
    if(num < 15){
        this.sendFruit();
        return;
    }
}

fruitObj.prototype.sendFruit = function(){
    for(var i = 0;i <this.num;i++){
        if (!this.alive[i]){
            this.born(i);
            return;
        }
    }
}