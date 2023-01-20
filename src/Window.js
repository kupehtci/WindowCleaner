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
        image.src = "./assets/window.png";

        //VARS FOR DIRTNESS AND STAIN SPAWN IN THE WINDOW
        this.numStainsPerWindow = 10;
        this.dirts = [this.numStainsPerWindow]; 
        for(let i = 0; i < this.numStainsPerWindow; i++){
            this.dirts[i] = null;
        }
        this.CreateDirtness(this.numStainsPerWindow);
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
        // CheckDirtnessLevel();
        this.spriteIndex = 0; 
    }

    //____________________________________________________________________
    //OWN METHODS

    /**
     * Create all the stains in the window
     * @param {number} numberOfStains
     */
    CreateDirtness(numberOfStains){
        let maxWidth = 90; 
        let maxHeight = 90;

        for(var i = 0; i < numberOfStains; i++){
            let x = this.x + Math.floor(Math.random() * maxWidth);
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
            console.log("Has create a dirt in the window x: " + x + " y: " + y + " width: " + width + " height: " + height)
        }
    }

}



