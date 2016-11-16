function random(min, max){
    return Math.floor(Math.random() * max) + min;
    
}


function startGame() {
    myGameArea.start();
}
var ctx;


var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        ctx = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
}
    
    
var myGamePiece;

var intervalId;
function startGame() {
    myGameArea.start();
    myGamePiece = new component(30, 30, "blue", 10, 120);
    myGamePiece2 = new component(70, 70, "green", 50, 80);
    console.log(myGamePiece)
    intervalId = window.setInterval(draw, 50)

}


function drawcomponent(component) {

    ctx.fillStyle = component.color;
    ctx.fillRect(component.x, component.y, component.width, component.height);
    //ctx.drawImage();
}

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y; 
    this.velocity = 10;
}

function draw() {
    ctx.clearRect(0,0,480, 270);
     drawcomponent(myGamePiece);
     drawcomponent(myGamePiece2);
     console.log(myGamePiece.y);
     myGamePiece.y += myGamePiece.velocity; 
     myGamePiece2.x -= myGamePiece2.velocity; 
     
    if(myGamePiece.y + myGamePiece.height === 270){
        window.clearInterval(intervalId);
    }
       
}
/*

    
//   document.onkeypress = function(e) {
//        e = e || window.event;
//        var charCode = (typeof e.which == "number") ? e.which : e.keyCode;
//        if (String.fromCharCode(charCode) === " ") {
//            console.log("cool")
//        }
//   }; 
   
    
    
    
    
    




 //classes
var Building = function(X,Y,Width,Height,GREEN){
    this.x = X; 
    this.y = Y;
    this.w = Width;
    this.h = -Height;
    this.green = GREEN;
};

// layer class
var Layer = function(speed,GREEN,Y){
    this.speed = speed;
    this.buildingList =[];
    this.green = GREEN;
    this.y = Y;
    var Xposition = -20;
    for(var i=0; i < 15; i++){
        var building = new Building(Xposition,this.y,50,random(50,200),this.green);
        this.buildingList.push(building);
        Xposition = Xposition + 50;
    }
};

//function that make the building show up
Building.prototype.appear = function(){
    console.log(this.green)
    fill(this.green);
    rect(this.x,this.y, this.w,this.h);
};

//function makes building move at given speed parameter
//by increasing the x position by speed amount
Building.prototype.move = function(speed){
    this.x = this.x + speed;
    if (this.x > 400){
        this.x = -60;
    }
};

//function that make the layer show up
Layer.prototype.appear = function(){
    fill(this.green);
    rect(this.x,this.y,this.w,this.h);
    for(var i = 0; i < this.buildingList.length; i++) {
        this.buildingList[i].appear();
    }
};

Layer.prototype.move = function(speed){
    for(var i = 0; i < this.buildingList.length; i++) {
        this.buildingList[i].move(speed);
    }
};

var LayerList=[];
var Layer1 = new Layer(5, 255,0,10,300);
LayerList.push(Layer1);
for(var i = 0; i<5; i++){
    var Layer1 = new Layer(Layer1.speed - 2,random(0,255),random(0,255),random(0,255),Layer1.y + 20);
    LayerList.push(Layer1);
}

//var draw = function() {
//    background(48, 48, 107);
//    noStroke();
//    var SPEED = 5;
//    for(var i = 0; i < LayerList.length; i++){
//        LayerList[i].appear();
//        LayerList[i].move(SPEED);
//        SPEED = SPEED - 0.8;
//    }
//};

//    var building1 = new Building(100, 100, 20, 50, "green")
//    console.log(building1)
////    building1.appear()
//    draw()







/*
