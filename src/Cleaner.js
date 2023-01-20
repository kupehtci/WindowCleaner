class Cleaner{
    constructor(){
        this.x = 0; 
        this.y = 0;
        this.width = 0;
        this.height = 0;

        //VARS FOR IMAGE
        this.scale = 1;
        this.imageReady = false;
        this.sprite = null;

        let image = new Image();
        image.onload = () => {
            this.height = image.height * this.scale;
            this.width = image.width * this.scale;

            this.sprite = image;        //Assign the image to the var sprite and set ready
            this.imageReady = true;
        }
    }

    Render(){
        if(this.imageReady){
            ctx.drawImage(this.sprite, this.x, this.y, this.width, this.height);
        }
    }

    Update(){
        
    }
}