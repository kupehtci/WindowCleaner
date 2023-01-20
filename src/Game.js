//____________________________________________________________________
//MAIN VARS

var canvas; 
var ctx; 
var screenWidth = 640; 
var screenHeight = 500; 

//____________________________________________________________________
//CREATE CANVAS IN SCREEN
canvas = document.createElement("canvas"); 
ctx = canvas.getContext("2d"); 

canvas.width = screenWidth; 
canvas.height = screenHeight;

document.body.appendChild(canvas);      //Create the canvas in the HTML document

//___________________________________________________________________
//CHECK IF IS CLICKING ON A WINDOW

/**
 * Check if is clicking on a window and return the window that is clicked
 * @param {Event} event 
 * @returns window that is clicked
 */
function isClickingOnWindow(event){
	let eX = event.offsetX;
	let eY = event.offsetY;

	//check if is clicking on a window
	for(var i = 0; i < dirtArray.length; i++){
		if(eX > dirtArray[i].x && eX < dirtArray[i].x + dirtArray[i].width && eY > dirtArray[i].y && eY < dirtArray[i].y + dirtArray[i].height){
			return dirtArray[i];
		}
		return null; 
	}

	addEventListener("click", isClickingOnWindow(event), false); 
}
//____________________________________________________________________
//START - Load things the start of the game
function Start(){
	console.log("Start Game"); 
}
//____________________________________________________________________
//RESET THE GAME
function Reset(){
	console.log("Reset Game"); 
}

//____________________________________________________________________
//RESTART THE GAME
function Restart(){

} 

//____________________________________________________________________
//RENDER THE GAME
function Render(){
	//Render background
	ctx.fillStyle = "rgb(200, 200, 200)";
	ctx.fillRect(0, 0, screenWidth, screenHeight);
	//Render the windows

	//Render the cleaner

	//Render the score

	//Render the time

	//Render the dirt
	for(var i = 0; i < dirts.length; i++){
		dirts[i].Render();
	}
}

function Update(keysDownArray, modifier){
	
}


//____________________________________________________________________
//CHECK THE INPUTS
var keysDown = {}; 
addEventListener("keydown",function(e){
	keysDown[e.keyCode] = true;
}, false); 
addEventListener("keyup",function(e){
	delete keysDown[e.keyCode];}, 
	false);  

//____________________________________________________________________
// THE MAIN GAME LOOP
var main = function () {
	var now = Date.now();
	var delta = now - then;

	Update(keysDown, delta / 1000);
	Render();

	//Update time vars
	then = now;

	// Request to do this again ASAP
	requestAnimationFrame(main);
};

//____________________________________________________________________
//Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

//TIME VARS
var then = Date.now(); 
var tick = 0; 

//MAIN GAME LOOP
Reset(); 
Start(); 

main();		//Start the main loop of the game 
