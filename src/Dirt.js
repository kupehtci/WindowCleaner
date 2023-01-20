class Dirt{
    /**
     * Default constructor of Dirt
     * @param {float} x Position x to draw the dirt
     * @param {float} y Position y to draw the dirt
     * @param {int} typeOfDirt Integer from 1 to 5 to choose the stain is going to be used
     */
    constructor(x, y, typeOfDirt){
        //Position and size
        this.x = x;
        this.y = y;
        this.width = 0;
        this.height = 0;
    
        //Image vars
        this.imageReady = false;
        this.sprite = null;


        
        var image = new Image();
        image.onload = () => {
            this.sprite = image;
            this.imageReady = true;

            // this.width = image.width;
            // this.height = image.height;
        }
    
        //Image sources switch depending of the type of dirt
        switch(typeOfDirt){
            case 1:
                image.src = "./assets/dirt1.png";
                break;
            case 2:
                image.src = "./assets/dirt2.png";
                break;
            case 3:
                image.src = "./assets/dirt3.png";
                break;
            case 4:
                image.src = "./assets/dirt4.png";
                break;
            case 5:
                image.src = "./assets/dirt5.png";
                break;
            case 6: 
                image.src = "./assets/dirt6.png";
            default:
                image.src = "./assets/dirt1.png";
                break; 
        }

        //Cleaning vars
        this.maxHealth = 1000;
        this.health =  this.maxHealth; 
        this.active = true;
    }

    /**
     * Render the dirt if the image has been loaded and the object is still active
     */
    Render(){
        if(this.imageReady && this.active){

            //Sets the alpha depending on the health remaining
            ctx.globalAlpha = this.health/this.maxHealth;

            //Draws the current sprite
            ctx.drawImage(this.sprite, this.x, this.y, this.width, this.height);

            //Resets the alpha
            ctx.globalAlpha = 1;
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
    }

    /**
     * Clean the stain by reducing their health in the specified percentaje
     * @param {number} percentaje between 0 to 1 to reduce the health of the stain 
     */
    Clean(percentaje){
        this.health -= percentaje * this.maxHealth;
    }
    
    Destroy(){
        console.log("Dirt destroyed"); 
    }
}



