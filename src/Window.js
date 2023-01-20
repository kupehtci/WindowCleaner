class Window{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.width = 0;
        this.height = 0;

        //VARS FOR IMAGE 
        this.scale = 2; 
        this.imageReady = false;  
        this.sprite = null;  

        let image = new Image(); 
        image.onload = () => {
            this.height = image.height * this.scale;
            this.width = image.width * this.scale;
            this.sprite = image;

    //VARS FOR CLEANING THE WINDOW
    /**Represent the dirt on the window, like lives */
    this.dirtness = 100; 


    }

    //____________________________________________________________________
    //RENDER THE WINDOW
    Render(){
        if(this.imageReady){
            ctx.drawImage(this.sprite[this.spriteIndex], this.x, this.y, this.width, this.height);
        }
    }
    
    Update(){
        // CheckDirtnessLevel();
        this.spriteIndex = 0; 
    }


}



