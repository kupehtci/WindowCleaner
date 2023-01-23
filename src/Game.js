//____________________________________________________________________
//MAIN VARS

var canvas; 
var ctx; 
var screenWidth = 1080; 
var screenHeight = 720; 

//____________________________________________________________________
//MAIN GAME VARS


//____________________________________________________________________
//#region SOUNDS
const cleanedDirt = new Audio("sounds/WindowWipe.wav");
const moneySpent = new Audio("sounds/Purchase.wav");
const spray1 = new Audio("sounds/WaterSpray1.wav");
const spray2 = new Audio("sounds/WaterSpray2.wav");
const spray3 = new Audio("sounds/WaterSpray3.wav");
const spray4 = new Audio("sounds/WaterSpray4.wav");
const noMoney = new Audio("sounds/NotEnoughMoney.wav");
//#endregion

//____________________________________________________________________
//#region CREATE CANVAS AND BACKGROUND IN SCREEN
canvas = document.createElement("canvas"); 
ctx = canvas.getContext("2d"); 

canvas.width = screenWidth; 
canvas.height = screenHeight;

document.body.appendChild(canvas);      //Create the canvas in the HTML document

//Background
var bgPattern;
var tileReady = false;
var tileImage = new Image();
tileImage.onload = function () {
	tileReady = true;
	bgPattern = ctx.createPattern(tileImage,"repeat");
};
tileImage.src = "./assets/brickWall1.png";

//#endregion

//____________________________________________________________________
//INSTANTIATE THE GAME OBJECTS 
var spray = new Spray();

//Create windows
var windows = [];
windows[0] = new Window(20, 120);
windows[1] = new Window(20,320);
windows[2] = new Window(20,520);
windows[3] = new Window(220,120);
windows[4] = new Window(220,320);
windows[5] = new Window(220,520);
windows[6] = new Window(420,120);
windows[7] = new Window(420,320);
windows[8] = new Window(420,520);

//Take reference to the windows in column and rows to use the autockick 
var windowsC1 = [windows[0], windows[1], windows[2]];
var windowsC2 = [windows[3], windows[4], windows[5]];
var windowsC3 = [windows[6], windows[7], windows[8]];

var windowsR1 = [windows[0], windows[3], windows[6]];
var windowsR2 = [windows[1], windows[4], windows[7]];
var windowsR3 = [windows[2], windows[5], windows[8]];

//Create manager to manage the game, hud, and the shop
var manager = new Manager();

//____________________________________________________________________
//#region HANDLE AUTOCLICK

function HandleAutoclick(windowArray){
	let randomWindowToAutoclickOn = Math.floor(Math.random() * windowArray.length);
	let randomIndexStainFromWindow = Math.floor(Math.random() * windowArray[randomWindowToAutoclickOn].dirts.length);
	if(windowArray[randomWindowToAutoclickOn]?.dirts[randomIndexStainFromWindow]?.Clean(manager?.damageToDirt))
	{
		windowArray[randomWindowToAutoclickOn].dirtsRemaining--;
	}
	console.log("Autoclick"); 

	//Show an sprite only a time

	//If no dirts remainig in the window, create new dirts after a delay and earn the window cleaned money
	// if(windowArray[randomWindowToAutoclickOn].dirtsRemaining <= 0){
	// 	setTimeout(function(window){
	// 		window.CreateDirtness();
	// 	}, 
	// 	manager.timeToRespawnDirt,
	// 		windowArray[randomWindowToAutoclickOn]);
	// 		//Earn the money because have cleaned the entire window
	// 	manager.EarnMoneyFinishWindow(); 
	// }
}

//AUTOCLICK ON WINDOWS IN COLUMNS AND ROWS AT STABLISHED TIME
setInterval(HandleAutoclick, manager.autoclickTimeC1, windowsC1);
setInterval(HandleAutoclick, manager.autoclickTimeC2, windowsC2);
setInterval(HandleAutoclick, manager.autoclickTimeC3, windowsC3);
setInterval(HandleAutoclick, manager.autoclickTimeR1, windowsR1);
setInterval(HandleAutoclick, manager.autoclickTimeR2, windowsR2);
setInterval(HandleAutoclick, manager.autoclickTimeR3, windowsR3);


//#endregion 



//___________________________________________________________________
//#region CHECK MOUSE POSITION
addEventListener("mousemove", function(event) {
	var mouseX = event.clientX;
	var mouseY = event.clientY;
	//console.log("Coordenadas X: " + x + ", Coordenadas Y: " + y);

	spray.x = mouseX + spray.width/2;
	spray.y = mouseY;// - spray.height;
});
//#endregion

//___________________________________________________________________
//#region CHECK IF IS CLICKING ON A WINDOW
addEventListener("click",function(e){
		let eX = e.offsetX;
		let eY = e.offsetY;

		console.log("Check if window has been clicked"); 

		//check if is clicking on a window
		for(var i = 0; i < windows.length; i++){
			
			//for each of the dirts from a window check if is clicking on it
			for(var j = 0; j < windows[i].dirts.length; j++){

				let clickedDirt = windows[i]?.dirts[j];

				if(eX > clickedDirt?.x && eX < (clickedDirt?.x + clickedDirt?.width) && eY > clickedDirt?.y && eY < (clickedDirt?.y + clickedDirt?.height)){
					
					//crear un generador de numeros aleatorios del 1 al 4
					let random = Math.floor(Math.random() * 4) + 1;
					switch(random){
						case 1:
							spray1.currentTime = 0;
							spray1.play();
							break;
						case 2:
							spray2.currentTime = 0;
							spray2.play();
							break;
						case 3:
							spray3.currentTime = 0;
							spray3.play();
							break;
						case 4:
							spray4.currentTime = 0;
							spray4.play();
							break;
						default: 
							spray4.currentTime = 0;
							spray4.play();
							break;
					}
					
					if(clickedDirt.IsActive()){
						if(clickedDirt.Clean(0.25)){
							windows[i].dirtsRemaining--;
							manager.EarnMoney()
							cleanedDirt.currentTime = 0;
							cleanedDirt.play();

							//If no dirts remainig in the window, create new dirts after a delay and earn the window cleaned money
							// if(windows[i].dirtsRemaining <= 0){
							// 	setTimeout(function(window){
							// 		window.CreateDirtness();
							// 	}, 
							// 	manager.timeToRespawnDirt,
							// 		windows[i]);
							// 		//Earn the money because have cleaned the entire window
							// 	manager.EarnMoneyFinishWindow(); 
							// }

							// console.log("Dirt Cleaned");
						}
						// console.log("Dirt Clicked");
					}
					return windows?.[i]?.dirts[j];
				}
			}
		}
		return null;  
	}
	, false); //false -> for disable options of the event
//#endregion

//#region CHECK IF IS CLICKING ON A BUY OPTION
addEventListener("click",function(e){
	let eX = e.offsetX;
	let eY = e.offsetY;

	console.log("Check if buy option has been clicked");
	
	//check if is clicking on a buy option
	for(var i = 0; i < manager.optionBoxes.length; i++){

		let clickedOption = manager.optionBoxes[i];
		if(clickedOption?.IsClicked(eX, eY)){
			if(manager.money >= clickedOption?.price){
			manager.money -= clickedOption?.price;
			//play sound
			moneySpent.currentTime = 0;
			moneySpent.play();
			manager.optionBoxes[i].level += 1;
			manager.optionBoxes[i].price = Math.floor(manager.optionBoxes[i].price * manager.optionBoxes[i].priceMultiplier);
			console.log("Option Clicked");
			switch(clickedOption?.integerOption){
				case 0:
					//Behaviour of box 7
					//Spray Power
					manager.damageToDirt += 0.1; //NO FUNCIONA PORQUE EN REALIDAD NO USAS ESTA VARIABLE; LO HAS HARDCODEADO CON EL clickedDirt.Clean(0.25)
					spray.Update(manager.optionBoxes[i].level);
					break;
				default: 
					break;
			}
		}
		else{
			noMoney.currentTime = 0;
			noMoney.play();
		}
		}
	}
}
, false); //false -> for disable options of the event
//#endregion

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
	//ctx.fillStyle = "rgb(200, 200, 200)";
	//ctx.fillRect(0, 0, screenWidth, screenHeight);
	if(tileReady){
		ctx.fillStyle = bgPattern;
		ctx.fillRect(0, 0, screenWidth, screenHeight);
	}
	
	//Render the windows
	for(var i = 0; i < windows.length; i++){
		windows[i].Render();
	}

	//Render the cleanerd

	//Render the score and buy options
	manager.Render();
	spray.Render();
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

	//Update the Hud
	manager.Update(); 
	spray.Update();
	
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

//Clears the data saved in the local storage by clicking R
document.addEventListener("keydown", (e) => {
    if(e.key == "r"){
        localStorage.clear(); 
        console.log("Local Storage cleared");
    }
}, false); 

document.addEventListener("keydown", (e) => {
    if(e.key == "s"){
        console.log("Saving money to local storage"); 
        localStorage.setItem("money", manager.money); 
    }
}, false); 

document.addEventListener("keydown", (e) => {
    if(e.key == "l"){
        console.log("Loading money from local storage"); 
        manager.money = parseInt(localStorage.getItem("money"));
    }
}, false);

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


