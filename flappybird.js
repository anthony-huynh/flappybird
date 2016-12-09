/* Flappy Bird
 * Group members: 
 *
 *
 */
 
 
// Get canvas and context from DOM
var canvas = document.getElementById("flappybirdcanvas");
var ctx = canvas.getContext("2d");

// Declare constants
var BIRD_INIT_X = canvas.width / 10;
var BIRD_INIT_Y = canvas.height / 2;
var GRAVITY = 4;
var PIPE_INIT_X = canvas.width;
var HOLE_HEIGHT = 140;
var NUMBER_OF_PIPES = 2
var NEW_PIPE_X = canvas.width - canvas.width / NUMBER_OF_PIPES;


// Declare variables
var bird;       // the bird object
var pipes = [];      // array to hold pipe objects
var interval; // stores interval
var kbdUp;      // boolean to hold keyboard input

var images = [];
var imageCount = 2;

for(var i=0; i<imageCount; i++){
    var img = document.createElement("img");
    img.src="imgs/" + i + ".png";
    images.push(img);
    images.push(img);
}

// Generates a random integer between two bounds
function rand(lo, hi) {
    return Math.floor(Math.random() * (hi - lo)) + lo;
}




 
// Load images
//var fImg = new Image();
//fImg.src = "flap.png";


// Class to represent a bird
function Bird(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y; 
    this.velocity = 0;
    this.frame = 0;
    this.move = function () {
        this.velocity += GRAVITY;
        this.y += this.velocity;
        if (this.y >= canvas.height - this.height){
            this.y = canvas.height - this.height
        }
    };
    this.draw = function () {
        var img = images[this.frame];
        ctx.drawImage(img, this.x, this.y, this.width, this.height);
        this.frame = this.frame + 1;
        if (this.frame >= images.length){
            this.frame = 0;
        }
            
    }
    
    // Update the bird y position
    
}

// Class to represent a pipe
function Pipe(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y; 
    this.velocity = -10;
    
    // Update the pipe x position
    this.move = function () {
        this.x += this.velocity;
    }
}



function addPipe(){

	var holeY = rand(50, 550);

	pipes.unshift(new Pipe(40, holeY, "green", canvas.width, 0));
    pipes.unshift(new Pipe(40, canvas.height, "yellow", canvas.width, holeY + HOLE_HEIGHT));

    if (pipes.length > NUMBER_OF_PIPES * 2 + 2 ){
    	pipes.pop();
    	pipes.pop();

    }


	
}


// Re-initializes variables and starts the game
function startGame() {
    bird = new Bird(40, 40, "blue", BIRD_INIT_X, BIRD_INIT_Y);
    
    // todo: refactor pipe into an array!
    addPipe();


    
    // Send the draw function to be called by setInterval every 50 milliseconds
    interval = setInterval(draw, 50);
    // pipeInterval = setInterval(function() {
    //     addIfPipeNeeded();
    // }, 250)
    
    document.addEventListener("keydown", function(event){
        
       
        if (event.keyCode === 32){
            bird.velocity = -20;
        }
    });
}

// Draws something on screen
function drawcomponent(component) {
    ctx.beginPath();
    ctx.fillStyle = component.color;
    ctx.fillRect(component.x, component.y, component.width, component.height);
    ctx.closePath();
    
    //ctx.drawImage();
}

// Detect collisions
function collisionDetection() {
    
    // Did our bird hit the bottom of the screen?
    if (bird.y + bird.height === canvas.height){
        
        // Start a new game
        
        //startGame();
    }

    var collided = false;

    for (var i = 0; i < pipes.length ; i++) {
        var pipe = pipes[i];
        
		// check  pipe
		if (bird.x + bird.width >= pipe.x && 
		   bird.x <= pipe.x + pipe.width && bird.y + bird.height >= pipe.y && bird.y <= pipe.y + pipe.height){
		   collided = true;
		}
	}
        if (collided){
			bird.color = "red";
		}
		else{
			bird.color = "blue"
		}
}

setInterval(function() {
    addPipe();    
}, 1500);

function addIfPipeNeeded(){
	var pipe = pipes[pipes.length - 1];

   // console.log(pipe.x);
    //console.log("New Pipe X: ", NEW_PIPE_X);

	if (pipe.x === NEW_PIPE_X){
    
		// addPipe();
	}

}


// Call each frame to re-draw the screen
function draw() {
    
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    addIfPipeNeeded();

    // Check for collisions
    collisionDetection();
    
    for (var i = 0; i < pipes.length ; i++) {
        var pipe = pipes[i];
        pipe.move();
        drawcomponent(pipe);
    }
//    
    // Move stuff
    bird.move();
   
    
    // Draw everything
   
    bird.draw();
}


