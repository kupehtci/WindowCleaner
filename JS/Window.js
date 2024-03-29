class Window{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.width = 0;
        this.height = 0;

        //VARS FOR IMAGE 
        this.scale = 0.3; 
        this.imageReady = false;  
        this.sprite = null;  

        let image = new Image(); 
        image.onload = () => {
            this.height = image.height * this.scale;
            this.width = image.width * this.scale;
            this.sprite = image;
            this.imageReady = true;
        }
        image.src = "./assets/windowBrownStraight.png";

        //VARS FOR DIRTNESS AND STAIN SPAWN IN THE WINDOW

        // hacer random
        this.dirtsRemaining = 0; 
        this.dirts = [7]; 

        for(let i = 0; i < this.dirts.length; i++){
            this.dirts[i] = null;
        }
        //Create initial dirtness
        this.CreateDirtness();

        this.le = true; 
    }

    //____________________________________________________________________
    //RENDER THE WINDOW
    Render(){

        //RENDER THE WINDOW
        if(this.imageReady){
            ctx.drawImage(this.sprite, this.x, this.y, this.width, this.height);
        }

        //RENDER THE STAINS
        for(let i = 0; i < this.dirts.length; i++){

            this.dirts?.[i]?.Render();      //Render the dirtness after check if its not undefined ?. works as a checker
        }
    }
    
    Update(){
        
        //Update all the stains
        for(let i = 0; i < this.dirts.length; i++){
            this.dirts?.[i]?.Update();
        }

        // if(this.dirtsRemaining <= 0 && this.le){
        //     setTimeout(function(window){
        //         window.CreateDirtness();
        //         this.le = true;
        //     }, 
        //     manager.timeToRespawnDirt,
        //         this);
        //     manager.EarnMoneyFinishWindow(); 
        //     this.le = false;
        // }

    }

    //____________________________________________________________________
    //OWN METHODS

    /**
     * Create the number of stains specidied in the window
     * @param {number} numberOfStains Number of the stains to create in the window
     */
    CreateDirtness(){
        //Define initial values for clamping the width and height to avoid the stains to be too big or too small
        let maxWidth = 90; 
        let maxHeight = 90;

        //Get a random number of stains to create in the window bw 1 and 6
        let numStains = Math.floor(Math.random() * 5) + 1;

        //Create the stains in a random place and random size inside the window
        for(var i = 0; i < numStains; i++){

            let x = this.x + Math.floor(Math.random() * maxHeight);
            let y = this.y + Math.floor(Math.random() * maxHeight);

            let width = Math.floor(Math.random() * 20) + 10;
            let height = Math.floor(Math.random() * 20) + 10;
            
            width = Clamp(width, 10, maxWidth) * 3;
            height = Clamp(height, 10, maxHeight) * 3;
            
            let typeOfDirt = Math.floor(Math.random() * 6) + 1;

            let l_dirt = new Dirt(x, y,typeOfDirt);
            l_dirt.width = width;
            l_dirt.height = height;

            this.dirts.push(l_dirt);
        }
        this.dirtsRemaining = numStains; 
    }

}



