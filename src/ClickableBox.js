//CLASS THAT REPRESENTS A CLICKABLE BOX
class ClickableBox{

    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
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
