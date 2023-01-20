//THIS FILE IS FOR SAVING THE CODE THAT HAS BEEN RETIRED FROM THE CODE

//CONSTRUCTOR DEPRECATED CODE
Window deprecated code from a system that keeps 5 sprites to control the dirtness level of the window. This whas been sustituted with a sistem of stains that appear inside the size of the window. 

// {
//     let image1 = new Image(); 
//     image1.onload = () => {
//         this.height = image1.height * this.scale; 
//         this.width = image1.width * this.scale; 

//         this.sprite[0] = image1;        //Assign the image to the var sprite and set ready
//         this.imageReady = true; 
//     }
    
//     let image2 = new Image();   
//     image2.onload = () => {
//         this.height = image2.height * this.scale; 
//         this.width = image2.width * this.scale; 

//         this.sprite[1] = image2;        //Assign the image to the var sprite and set ready 
//     }

//     let image3 = new Image();
//     image3.onload = () => {
//         this.height = image3.height * this.scale; 
//         this.width = image3.width * this.scale; 

//         this.sprite[2] = image3;        //Assign the image to the var sprite and set ready 
//     }

//     let image4 = new Image();
//     image4.onload = () => {
//         this.height = image4.height * this.scale; 
//         this.width = image4.width * this.scale; 

//         this.sprite[3] = image4;        //Assign the image to the var sprite and set ready 
//     }

//     let image5 = new Image();
//     image5.onload = () => {
//         this.height = image5.height * this.scale; 
//         this.width = image5.width * this.scale; 

//         this.sprite[4] = image5;        //Assign the image to the var sprite and set ready 
//     }

//     //IMAGE SOURCES
//     image1.src = "./assets/test_window_0.png";
//     image2.src = "./assets/test_window_1.png";
//     image3.src = "./assets/test_window_2.png";
//     image4.src = "./assets/test_window_3.png";
//     image5.src = "./assets/test_window_4.png";
// }



Check the health of the window to check with sprite to drawn. Sustyituted with the sistem of stains. 

//DEPRECATED METHODS

// CheckDirtnessLevel(){
//     let numStates = this.stateMax + 1;
//     let state = this.state;
//     let dirtness = this.dirtness;

//     if(dirtness <= 20){
//         this.spriteIndex = 0;
//     }
//     else if(dirtness > 20 && dirtness <= 40){
//         this.spriteIndex = 1;
//     }
//     else if(dirtness > 40 && dirtness <= 60){
//         this.spriteIndex = 2;
//     }
//     else if(dirtness > 60 && dirtness <= 80){
//         this.spriteIndex = 3;
//     }
//     else if(dirtness > 80 && dirtness <= 100){
//         this.spriteIndex = 4;
//     }
    




//DIRT CLASS DEPRECATED METHOD
To inplement different sprites for the stains and dirtness

// let image2 = new Image();
// image2.onload = () => {
//     this.sprite[1] = image2;
// }

// let image3 = new Image();
// image3.onload = () => {
//     this.sprite[2] = image3;
// }

// let image4 = new Image();
// image4.onload = () => {
//     this.sprite[3] = image4;
// }

// let image5 = new Image();
// image5.onload = () => {
//     this.sprite[4] = image5;
// }

//DIRT CLASS DEPRECATED TO CHECK HEALTH AND CHANGE THE SPRITE DEPENDING ON THE HEALTH

/**
* Check the health of the dirt and change sprite depending on health
*/
CheckDirtHealth(){
if(this.health > 0 && this.heaglth < (this.maxHealth/this.numSprites * 1)){
    this.spriteIndex = 4; 
}
else if(this.health > (this.maxHealth/this.numSprites * 1) && this.health < (this.maxHealth/this.numSprites * 2)){
    this.spriteIndex = 3; 
}
else if(this.health > (this.maxHealth/this.numSprites * 2) && this.health < (this.maxHealth/this.numSprites * 3)){
    this.spriteIndex = 2; 
}
else if(this.health > (this.maxHealth/this.numSprites * 3) && this.health < (this.maxHealth/this.numSprites * 4)){
    this.spriteIndex = 1; 
}
else if(this.health > (this.maxHealth/this.numSprites * 4) && this.health < (this.maxHealth/this.numSprites * 5)){
    this.spriteIndex = 0; 
}
}