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
var PIPE_INIT_X = canvas.width


// Declare variables
var bird;       // the bird object
var pipes = [];      // array to hold pipe objects
var interval; // stores interval
var kbdUp;      // boolean to hold keyboard input



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
    this.move = function () {
        this.velocity += GRAVITY;
        this.y += this.velocity;
        if (this.y >= canvas.height - this.height){
            this.y = canvas.height - this.height
        }
    };
    
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
        if (this.x + this.width <= 0){
            this.x = PIPE_INIT_X;
        }
    };
}


// Re-initializes variables and starts the game
function startGame() {
    bird = new Bird(40, 40, "blue", BIRD_INIT_X, BIRD_INIT_Y);
    
    // todo: refactor pipe into an array!
    pipe = new Pipe(40, canvas.height, "green", canvas.width - 140, 50);
    
    // Send the draw function to be called by setInterval every 50 milliseconds
    interval = setInterval(draw, 50);
    
    document.addEventListener("keydown", function(event){
        
       
        if (event.keyCode === 32){
            console.log(event.keyCode);
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
    
    // check top pipe
    if (bird.x + bird.width >= pipe.x){
        console.log("coao");
    }
        
}

// Call each frame to re-draw the screen
function draw() {
    
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Check for collisions
    collisionDetection();
    
//    for (var i = 0; i < bldgs.length ; i++) {
//        bldgs[i].move();
//        bldgs[i].draw();
//    }
//    
    // Move stuff
    bird.move();
    pipe.move();
    
    // Draw everything
    drawcomponent(bird);
    drawcomponent(pipe);
}


