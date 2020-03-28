var can1;
var can2;

var ctx1;
var ctx2;

var canWidth;
var canHeight;

var lastTime;
var deltaTime;

var bgImg = new Image();
var ane;
var fruit;
var mom;
var baby;

var mx;
var my;

var babyTail = [ ];
var babyEye = [ ];
var babyBody = [ ];

var momTail = [ ];
var momEye = [];
var momBodyOra = [];
var momBodyBlue = [];

var data;

var wave;
var halo;

var dust;
var dustPic = [];



document.body.onload = game;
function game(){
    init();
    lastTime = Date.now();
    deltaTime = 0;
    gameloop();
}

function init(){
    can1 = document.getElementById("canvas1");//fish,dust,ui,circle
    ctx1 = can1.getContext("2d");
    can2 = document.getElementById("canvas2");//bg,ane,fruits
    ctx2 = can2.getContext("2d");
    
    can1.addEventListener("mousemove",onmousemove,false);

    canWidth = can1.width;
    canHeight = can1.height;
    bgImg.src = "./src/background.jpg";

    ane = new aneObj();
    ane.init();

    fruit = new fruitObj();
    fruit.init();

    mom = new momObj();
    mom.init();

    baby = new babyObj();
    baby.init();

    mx = canWidth * 0.5;
    my = canHeight * 0.5;

    for(var i = 0;i < 8;i++){
        babyTail[i]= new Image();
        babyTail[i].src = "./src/babyTail" + i + ".png";
    } 

    for (var i = 0;i < 2; i++){
        babyEye[i] = new Image();
        babyEye[i].src = "./src/babyEye" + i + ".png"
    }
    for (var i = 0;i < 20; i++){
        babyBody[i] = new Image();
        babyBody[i].src = "./src/babyFade" + i + ".png";
    }
    for (var i = 0 ;i < 8;i++){
        momTail[i] = new Image();
        momTail[i].src = "./src/bigTail" + i + ".png";
    }
    for (var i = 0;i<2;i++ ){
        momEye[i] = new Image();
        momEye[i].src = "./src/bigEye" + i +".png";
    }
    for (var i=0;i < 8; i++){
        momBodyOra[i] = new Image();
        momBodyBlue[i] = new Image();

        momBodyOra[i].src = "./src/bigSwim" + i + ".png";
        momBodyBlue[i].src = "./src/bigSwimBlue" + i + ".png";
    }

    data = new dataObj();
    wave = new waveObj();
    wave.init(); 
    halo = new haloObj();
    halo.init();

    for (var i = 0 ; i < 7 ; i++){
        dustPic[i] = new Image();
        dustPic[i].src = "./src/dust" + i + ".png";
    }
    dust = new dustObj();
    dust.init();
    
    

    
}

function gameloop(){
    window.requestAnimationFrame(gameloop);
    var now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;
    //console.log(deltaTime);
    if(deltaTime > 40) deltaTime = 40;

    drawBackground();
    ane.draw();
    fruit.fruitMonitor();
    fruit.draw();
    ctx1.clearRect(0,0,canWidth,canHeight)
    mom.draw();
    momFruitsCollision();
    momBabyColllision();
    baby.draw();
    data.draw();
    wave.draw();
    halo.draw();
    dust.draw();

}

//获取鼠标坐标
function onmousemove(e){
    if(!data.gameOver){
        if(e.offSetX || e.layerX){
            mx = e.offSetX == undefined ? e.layerX : e.offSetX;
            my = e.offSetY == undefined ? e.layerY : e.offSetY;
        }
        //console.log(mx);
    }
}
