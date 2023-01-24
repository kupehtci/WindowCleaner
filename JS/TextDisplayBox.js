//CLASS THAT REPRESENTS A CLICKABLE BOX
class TextDisplayBox{

    constructor(x, y, width, height, type){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height*1.5;
        this.type = type;

        
        let image = new Image();
        this.imageReady = false; 
        this.image = image;
        this.image.src = "./assets/Button5.png";
        image.onload = () => {
            this.imageReady = true;
            this.sprite = image;
        }

    }

    /**
     * Render the box
     */
    Render(){

            if (this.type == 1){
                this.image.src = "./assets/Plate.png";
            }
            if(this.imageReady){
                ctx.drawImage(this.sprite, this.x, this.y, this.width, this.height);
            }
    }
}
