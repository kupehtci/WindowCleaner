//class that manages the money and the HUD, shooping bonus and others.

class Manager{
    constructor(){

        // if(localStorage.getItem("money") != null){
        //     this.money = parseInt(localStorage.getItem("money"));
        // }else{
        //     this.money = 0;
        // }
        this.money = 0; 
        this.moneyText = "Money: " + this.money;
        this.totalMoneyEarned = 0;        

        /**
         * Money earned for each dirt cleaned
         * @type {number} Money earned for each dirt cleaned
         */
        this.moneyEarn = 5; 

        //TIME CONTROL VARS 
        /**
         * Time in miliseconds to respawn a dirt in the window
         * @type {number} Time in miliseconds to respawn a dirt in the window
         */
        this.timeToRespawnDirt = 2000;
        this.damageToDirt = 0.20;
        
        
        //OPTION BOXES
        this.optionBoxes = [];

        /**X axis for the clickable boxes */
        let cbX = 750; 

        /**Intiial Y position for the clickable boxes */
        let cbInitialY = 180;

        /** Separation in Y axis between each box */
        let cbSepY = 70;
        
        for(let i = 0; i < 7; i++){
            this.optionBoxes[i] = new ClickableBox(cbX, cbInitialY + (i * cbSepY), 200, 40);
            this.optionBoxes[i].integerOption = i;
        }
    }

    Render(){
        //Render the money text
        ctx.fillStyle = "white";
        ctx.font = "20px Arial";
        ctx.fillText(this.moneyText, canvas.width - 300, 30);

        //Render the total money earned
        ctx.fillStyle = "white";
        ctx.font = "20px Arial";
        ctx.fillText("Total Money Earned: " + this.totalMoneyEarned, canvas.width - 300, 50);

        //Render Upgrade Text
        ctx.fillStyle = "white";
        ctx.font = "20px Arial";
        ctx.fillText("Upgrades:", canvas.width - 320, 170);
    
        //render the option boxes
        for(let i = 0; i < this.optionBoxes?.length; i++){
            this.optionBoxes[i].Render();
        }
        for(let i = 0; i < this.optionBoxes.length; i++){
            switch (this.optionBoxes[i].integerOption) {
                case 0:
                    ctx.fillStyle = "white";
                    ctx.font = "15px Arial";
                    ctx.fillText("Spray Power", this.optionBoxes[i].x + 15, this.optionBoxes[i].y + 25);
                    ctx.fillText("Price: " + this.optionBoxes[i].price, this.optionBoxes[i].x + 15, this.optionBoxes[i].y + 45);
                    ctx.font = "20px Arial";
                    ctx.fillText("Level: " + this.optionBoxes[i].level, this.optionBoxes[i].x + this.optionBoxes[i].width + 15, this.optionBoxes[i].y + 35);
                    break;
                case 1:
                    ctx.fillStyle = "white";
                    ctx.font = "15px Arial";
                    ctx.fillText("Auto Clean Row 1", this.optionBoxes[i].x + 15, this.optionBoxes[i].y + 25);
                    ctx.fillText("Price: " + this.optionBoxes[i].price, this.optionBoxes[i].x + 15, this.optionBoxes[i].y + 45);
                    ctx.font = "20px Arial";
                    ctx.fillText("Level: " + this.optionBoxes[i].level, this.optionBoxes[i].x + this.optionBoxes[i].width + 15, this.optionBoxes[i].y + 35);
                    break;
                case 2:
                    ctx.fillStyle = "white";
                    ctx.font = "15px Arial";
                    ctx.fillText("Auto Clean Row 2", this.optionBoxes[i].x + 15, this.optionBoxes[i].y + 25);
                    ctx.fillText("Price: " + this.optionBoxes[i].price, this.optionBoxes[i].x + 15, this.optionBoxes[i].y + 45);
                    ctx.font = "20px Arial";
                    ctx.fillText("Level: " + this.optionBoxes[i].level, this.optionBoxes[i].x + this.optionBoxes[i].width + 15, this.optionBoxes[i].y + 35);
                    break;
                case 3:
                    ctx.fillStyle = "white";
                    ctx.font = "15px Arial";
                    ctx.fillText("Auto Clean Row 3", this.optionBoxes[i].x + 15, this.optionBoxes[i].y + 25);
                    ctx.fillText("Price: " + this.optionBoxes[i].price, this.optionBoxes[i].x + 15, this.optionBoxes[i].y + 45);
                    ctx.font = "20px Arial";
                    ctx.fillText("Level: " + this.optionBoxes[i].level, this.optionBoxes[i].x + this.optionBoxes[i].width + 15, this.optionBoxes[i].y + 35);
                    break;
                case 4:
                    ctx.fillStyle = "white";
                    ctx.font = "15px Arial";
                    ctx.fillText("Auto Clean Column 1", this.optionBoxes[i].x + 15, this.optionBoxes[i].y + 25);
                    ctx.fillText("Price: " + this.optionBoxes[i].price, this.optionBoxes[i].x + 15, this.optionBoxes[i].y + 45);
                    ctx.font = "20px Arial";
                    ctx.fillText("Level: " + this.optionBoxes[i].level, this.optionBoxes[i].x + this.optionBoxes[i].width + 15, this.optionBoxes[i].y + 35);
                    break; 
                case 5:
                    ctx.fillStyle = "white";
                    ctx.font = "15px Arial";
                    ctx.fillText("Auto Clean Column 2", this.optionBoxes[i].x + 15, this.optionBoxes[i].y + 25);
                    ctx.fillText("Price: " + this.optionBoxes[i].price, this.optionBoxes[i].x + 15, this.optionBoxes[i].y + 45);
                    ctx.font = "20px Arial";
                    ctx.fillText("Level: " + this.optionBoxes[i].level, this.optionBoxes[i].x + this.optionBoxes[i].width + 15, this.optionBoxes[i].y + 35);
                    break;
                case 6:
                    ctx.fillStyle = "white";
                    ctx.font = "15px Arial";
                    ctx.fillText("Auto Clean Column 3", this.optionBoxes[i].x + 15, this.optionBoxes[i].y + 25);
                    ctx.fillText("Price: " + this.optionBoxes[i].price, this.optionBoxes[i].x + 15, this.optionBoxes[i].y + 45);
                    ctx.font = "20px Arial";
                    ctx.fillText("Level: " + this.optionBoxes[i].level, this.optionBoxes[i].x + this.optionBoxes[i].width + 15, this.optionBoxes[i].y + 35);
                    break;
                }
        }
    }

    Update(){
        //Update the money text
        this.moneyText = "Money: " + this.money;

    }

    EarnMoney(){
        this.money += this.moneyEarn; 
        this.totalMoneyEarned += this.moneyEarn;
    }
}
