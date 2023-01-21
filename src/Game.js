//____________________________________________________________________
//MAIN VARS

var canvas; 
var ctx; 
var screenWidth = 1080; 
var screenHeight = 720; 

//____________________________________________________________________
//MAIN GAME VARS

/**
 * Time in miliseconds to respawn a dirt in the window
 * @type {number} Time in miliseconds to respawn a dirt in the window
 */
var timeToRespawnDirt = 2000; 



//____________________________________________________________________
//CREATE CANVAS IN SCREEN
canvas = document.createElement("canvas"); 
ctx = canvas.getContext("2d"); 

canvas.width = screenWidth; 
canvas.height = screenHeight;

document.body.appendChild(canvas);      //Create the canvas in the HTML document

//____________________________________________________________________
//INSTANTIATE THE GAME OBJECTS 

windows = [];
windows[0] = new Window(20,20);

//___________________________________________________________________
//CHECK IF IS CLICKING ON A WINDOW

addEventListener("click",function(e){
		let eX = e.offsetX;
		let eY = e.offsetY;

		console.log("Check if window has been clicked"); 

		//check if is clicking on a window
		for(var i = 0; i < windows.length; i++){
			
			//for each of the dirts from a window check if is clicking on it
			for(var j = 0; j < windows[i].dirts.length; j++){
				if(windows[i].dirts[j] != null){
					if(eX > windows[i].dirts[j].x && eX < (windows[i].dirts[j].x + windows[i].dirts[j].width) && eY > windows[i].dirts[j].y && eY < (windows[i].dirts[j].y + windows[i].dirts[j].height)){
						
						let clickedDirt = windows[i]?.dirts[j];
						
						if(clickedDirt.IsActive()){
							if(clickedDirt.Clean(0.25)){
								windows[i].dirtsRemaining--;

								if(windows[i].dirtsRemaining <= 0){
									setTimeout(function(window){
										window.CreateDirtness(window.numStainsPerWindow);
									}, 5000, windows[i]);
								}

								console.log("Dirt Cleaned");
							}
							console.log("Dirt Clicked");
						}
						return windows?.[i]?.dirts[j];
					}
				}
			}
		}
		return null;  
	}
	, false); //false -> for disable options of the event

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
	console.log("Restart Game");
} 

//____________________________________________________________________
//RENDER THE GAME
function Render(){
	//Render background
	ctx.fillStyle = "rgb(200, 200, 200)";
	ctx.fillRect(0, 0, screenWidth, screenHeight);
	
	//Render the windows
	for(var i = 0; i < windows.length; i++){
		windows[i].Render();
	}

	//Render the cleanerd

	//Render the score

	//Render the time

	//Render the dirt
	// for(var i = 0; i < dirts.length; i++){
	// 	dirts[i].Render();
	// }
}

function Update(keysDownArray, modifier){
	
	//Update the cleaner

	//Update the windows
	for(var i = 0; i < windows.length; i++){
		windows[i].Update();
	}
	
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
