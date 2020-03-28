//判断大鱼与果实的距离，阈值

function momFruitsCollision(){
    if(!data.gameOver){
        for (var i = 0;i < fruit.num;i++){
            var l = calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
            if (fruit.alive[i]){
                if (l < 500){
                    //果实被吃掉
                    fruit.dead(i);
                    data.num ++;
                    mom.momBodyCount++;
                    if (mom.momBodyCount > 7){
                        mom.momBodyCount = 7;
                    }
                    if(fruit.fruitType[i] == "blue"){
                        data.double = 2;
                    } else{
                        data.double = 1;
                    }
                    wave.born(fruit.x[i],fruit.y[i]);
                }
            }
        }
    }                                                                                                                                                                                                                                          
}

//mom and baby collision

function momBabyColllision(){
    if(!data.gameOver){
        if (data.num){
            var l= calLength2(mom.x,mom.y,baby.x,baby.y);
            if (l < 500){
                //baby recover
                baby.babyBodyCount = 0 ;
                //data.reset();
                mom.momBodyCount = 0;
                data.addScore();
                halo.born(baby.x,baby.y);
            }
        }
    }
}