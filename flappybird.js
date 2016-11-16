
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
    myGamePiece = new component(30, 30, "red", 10, 120);
    console.log(myGamePiece)
    intervalId = window.setInterval(draw, 50)

}


function drawcomponent(component) {

    ctx.fillStyle = component.color;
    ctx.fillRect(component.x, component.y, component.width, component.height);
    
}

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y; 
    this.velocity = 1;
}

function draw() {
    ctx.clearRect(0,0,480, 270);
     drawcomponent(myGamePiece);
     console.log(myGamePiece.y);
     myGamePiece.y += myGamePiece.velocity; 
     
    if(myGamePiece.y + myGamePiece.height === 270){
        window.clearInterval(intervalId);
    }
    
}
