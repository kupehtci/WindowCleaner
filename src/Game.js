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

function isClickingOnWindow(event){
	let x = event.offsetX;
	let y = event.offsetY;

	//check if is clicking on a window
	for(var i = 0; i < windows.length; i++){
		if(x > windows[i].x && x < windows[i].x + windows[i].width && y > windows[i].y && y < windows[i].y + windows[i].height){
			return true;
		}
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