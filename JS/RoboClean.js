class RoboClean{
    constructor(x, y){
        this.x = x; 
        this.y = y; 

        this.width = 0; 
        this.height = 0; 
        let image = new Image();
        this.imageReady = false;
        image.src = "./assets/RoboCleanerMini.png";
        image.onload = () =>{
            this.width = image.width;
            this.height = image.height;
            this.sprite = image; 
            this.imageReady = true;
        }
    }
    Render(){
        if(this.imageReady){
            ctx.drawImage(this.sprite, this.x, this.y, this.width, this.height);
        }
    }
}