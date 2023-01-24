//CLASS THAT REPRESENTS A CLICKABLE BOX
class ClickableBox{

    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height*1.5;

        
        let image = new Image();
        this.imageReady = false; 
        this.image = image;
        this.image.src = "./assets/Button1.png";
        image.onload = () => {
            this.imageReady = true;
            this.sprite = image;
        }

        this.integerOption = 0; 
        this.price = 300;
        this.priceMultiplier = 1.5;
        this.level = 1;
    }

    /**
     * Render the box
     */
    Render(){

        switch(this?.integerOption){
            case 0:
                this.image.src = "./assets/Button2.png";
            break;
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                this.image.src = "./assets/Button1.png";
            break;
            case 7:
                this.image.src = "./assets/Button4.png";
            break;
            }   

            if(this.imageReady){
                ctx.drawImage(this.sprite, this.x, this.y, this.width, this.height);
            }
    }



    /**
     * Check if the mouse is clicking on this box
     * @param {number} mX Mouse position X 
     * @param {number} mY Mouse position Y
     * @returns true if the mouse is clicking on this box, false if the mouse is not clicking on this box
     */
    IsClicked(mX, mY){
        return (mX > this.x && mX < (this.x + this.width) && mY > this.y && mY < (this.y + this.height));
    }
}
