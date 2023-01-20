class Window{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;

        //VARS FOR IMAGE 
        this.scale = 2; 

        this.imageReady = false; 
        this.spriteIndex = 0; 
        this.sprite = [5]; 
{
        let image1 = new Image(); 
        image1.onload = () => {
            this.height = image1.height * this.scale; 
            this.width = image1.width * this.scale; 

            this.sprite[0] = image1;        //Assign the image to the var sprite and set ready
            this.imageReady = true; 
        }
        
        let image2 = new Image();   
        image2.onload = () => {
            this.height = image2.height * this.scale; 
            this.width = image2.width * this.scale; 

            this.sprite[1] = image2;        //Assign the image to the var sprite and set ready 
        }

        let image3 = new Image();
        image3.onload = () => {
            this.height = image3.height * this.scale; 
            this.width = image3.width * this.scale; 

            this.sprite[2] = image3;        //Assign the image to the var sprite and set ready 
        }

        let image4 = new Image();
        image4.onload = () => {
            this.height = image4.height * this.scale; 
            this.width = image4.width * this.scale; 

            this.sprite[3] = image4;        //Assign the image to the var sprite and set ready 
        }

        let image5 = new Image();
        image5.onload = () => {
            this.height = image5.height * this.scale; 
            this.width = image5.width * this.scale; 

            this.sprite[4] = image5;        //Assign the image to the var sprite and set ready 
        }

        //IMAGE SOURCES
        image1.src = "./assets/test_window_0.png";
        image2.src = "./assets/test_window_1.png";
        image3.src = "./assets/test_window_2.png";
        image4.src = "./assets/test_window_3.png";
        image5.src = "./assets/test_window_4.png";
    }

    //VARS FOR CLEANING THE WINDOW
    /**Represent the dirt on the window, like lives */
    this.dirtness = 100; 

    //VARS FOR THE WINDOW STATE
    this.state = 0;
    this.stateMax = 4;

    }

    //____________________________________________________________________
    //RENDER THE WINDOW
    render(){
        if(this.imageReady){
            ctx.drawImage(this.sprite[this.spriteIndex], this.x, this.y, this.width, this.height);
        }
    }
    
    Update(){
        CheckDirtnessLevel(); 
    }


    CheckDirtnessLevel(){
        let numStates = this.stateMax + 1;
        let state = this.state;
        let dirtness = this.dirtness;

        if(dirtness <= 20){
            this.spriteIndex = 0;
        }
        else if(dirtness > 20 && dirtness <= 40){
            this.spriteIndex = 1;
        }
        else if(dirtness > 40 && dirtness <= 60){
            this.spriteIndex = 2;
        }
        else if(dirtness > 60 && dirtness <= 80){
            this.spriteIndex = 3;
        }
        else if(dirtness > 80 && dirtness <= 100){
            this.spriteIndex = 4;
        }
        
    }

    /**Mess the window setting the dirness into the max value again */
    MessWindow(){
        this.dirtness = 100; 
    }
}