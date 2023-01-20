class Dirt{
    constructor(x, y, width, height){
        //Position and size
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    
        //Image vars
        this.imageReady = false;
        this.spriteIndex = 0;
        this.numSprites = 5;
        this.sprite = [this.numSprites];


        
        var image1 = new Image();
        image1.onload = () => {
            this.sprite[0] = image1;
            this.imageReady = true;
        }

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
    
        //Image sources
        image1.src = "./assets/dirt_0.png";
        // image2.src = "./assets/dirt_1.png";
        // image3.src = "./assets/dirt_2.png";
        // image4.src = "./assets/dirt_3.png";
        // image5.src = "./assets/dirt_4.png";

        //Cleaning vars
        this.maxHealth = 1000;
        this.health =  this.maxHealth; 

        this.active = true;
    }

    Render(){
        if(this.imageReady && this.active){

            //Sets the alpha depending on the health remaining
            ctx.globalAlpha = this.health/this.maxHealth;

            //Draws the current sprite
            ctx.drawImage(this.sprite[this.spriteIndex], this.x, this.y, this.width, this.height);

            //Resets the alpha
            ctx.globalAlpha = 1;


            //Checks if entered this rutine
            console.log("Rendering dirt with sprite index: " + this.spriteIndex); 
        }
    }

    Update(){
        //Check dirt health
        //this.CheckDirtHealth();
        this.spriteIndex = 0; 
        
        // //Destroy dirt if health is 0
        // if(this.health <= 0){
        //     this.Destroy();
        // }

        console.log("Updating dirt");
    }

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
    Destroy(){
        console.log("Dirt destroyed"); 
    }
}