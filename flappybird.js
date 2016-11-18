/* Flappy Bird
 * Group members: 
 *
 *
 */
 
 
// Get canvas and context from DOM
var canvas = document.getElementById("flappybirdcanvas");
var ctx = canvas.getContext("2d");

// Declare constants
var INIT_X = canvas.width / 3;
var INIT_Y = canvas.height / 2;

// Declare variables
var bird;       // the bird object
var pipes;      // array to hold pipe objects
var interval; // stores interval
var kbdUp;      // boolean to hold keyboard input

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
    this.velocity = 10;
    
    // Update the bird y position
    this.move = function () {
        this.y += this.velocity;
    };
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
    };
}

// Returns a random integer between min and max
function random(min, max) {
    return Math.floor(Math.random() * max) + min;
}

// Re-initializes variables and starts the game
function startGame() {
    bird = new Bird(40, 40, "blue", INIT_X, INIT_Y);
    
    // todo: refactor pipe into an array!
    pipe = new Pipe(40, canvas.height, "green", canvas.width - 140, 50);
    
    // Send the draw function to be called by setInterval every 50 milliseconds
    interval = setInterval(draw, 50);
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
        clearInterval(interval);
        startGame();
    }
}

// Call each frame to re-draw the screen
function draw() {
    
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Check for collisions
    collisionDetection();
    
    // Move stuff
    bird.move();
    pipe.move();
    
    // Draw everything
    drawcomponent(bird);
    drawcomponent(pipe);
}


