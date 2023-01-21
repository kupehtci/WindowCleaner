//class that manages the money and the HUD, shooping bonus and others.

class Manager{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;



        this.money = 321;
        this.moneyText = "Money: " + this.money;
        this.totalMoneyEarned = 0;


        // this.imageReady = false;
        // this.sprite = null;
        // this.scale = 0.3;

        // let image = new Image();
        // image.onload = () => {
        //     this.height = image.height * this.scale;
        //     this.width = image.width * this.scale;
        //     this.sprite = image;
        //     this.imageReady = true;
        // }
        // image.src = "./assets/hud.png";
    }

    Render(){
        // if(this.imageReady){
        //     ctx.drawImage(this.sprite, this.x, this.y, this.width, this.height);
        // }

        ctx.fillStyle = "black";
        ctx.font = "30px Arial";
        ctx.fillText(this.moneyText, 10, 50);
    }

    Update(){
        //Update the money text
        this.moneyText = "Money: " + this.money;

    }

    EarnMoney(amount){
        this.money += amount;
        this.totalMoneyEarned += amount;
    }
}