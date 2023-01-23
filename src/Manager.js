//class that manages the money and the HUD, shooping bonus and others.

//The Number(x.ToFixed(2)) is used to round the number to 2 decimals, constantly used in this script due to javascript float error of presition

class Manager{
    constructor(){

        //MONEY VARS
        this.money = 0; 
        this.totalMoneyEarned = 0;        

        
        this.moneyEarn = 5; 
        this.moneyEarnFinishWindow = 100; 
        this.moneyEarnMultiplier = 1.0000; 

        //TIME CONTROL VARS 
        /**
         * Time in miliseconds to respawn a dirt in the window
         * @type {number} Time in miliseconds to respawn a dirt in the window
         */
        this.timeToRespawnDirt = 2000;
        this.damageToDirt = 0.15; 

        this.autoclickTimeC1 = 3100;
        this.autoclickTimeC2 = 3100;
        this.autoclickTimeC3 = 3100;
        this.autoclickTimeR1 = 3100;
        this.autoclickTimeR2 = 3100;
        this.autoclickTimeR3 = 3100;

        
        //OPTION BOXES
        this.optionBoxes = [];

        /**X axis for the clickable boxes */
        let cbX = 700; 

        /**Intiial Y position for the clickable boxes */
        let cbInitialY = 120;

        /** Separation in Y axis between each box */
        let cbSepY = 70;
        
        //Create the option boxes and set the integer option that defines the upgrade behaviour when clicked
        for(let i = 0; i < 8; i++){
            this.optionBoxes[i] = new ClickableBox(cbX, cbInitialY + (i * cbSepY), 250, 40);
            this.optionBoxes[i].integerOption = i;
        }

        //TITLE BOX
        let image = new Image();
        this.imageReady = false;
        this.imageWidth = 0; 
        this.imageHeight = 0; 
        this.imageScale = 0.3;
        image.src = "./assets/Cartel.png";
        image.onload = () => {
            this.imageReady = true;
            this.sprite = image;
            this.imageHeight = image.height * this.imageScale * 0.7;
            this.imageWidth = image.width * this.imageScale;
        }
    }

    Render(){
        //Render the money text
        ctx.fillStyle = "white";
        ctx.font = "20px Arial";
        ctx.fillText("Bubbles: " + this.money, canvas.width - 300, 30);

        //Render the total money earned
        ctx.fillStyle = "white";
        ctx.font = "20px Arial";
        ctx.fillText("Total Bubbles Earned: " + this.totalMoneyEarned, canvas.width - 300, 50);

        //Render Upgrade Text
        ctx.fillStyle = "white";
        ctx.font = "20px Arial";
        ctx.fillText("Upgrades:", canvas.width - 320, 100);
    
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
                    ctx.fillText("Price: " + this.optionBoxes[i].price + " Damage: " + (this.damageToDirt * 100) + "%", this.optionBoxes[i].x + 15, this.optionBoxes[i].y + 45);
                    ctx.font = "20px Arial";
                    ctx.fillText("Level: " + this.optionBoxes[i].level, this.optionBoxes[i].x + this.optionBoxes[i].width + 15, this.optionBoxes[i].y + 35);
                    break;
                case 1:
                    ctx.fillStyle = "white";
                    ctx.font = "15px Arial";
                    ctx.fillText("Auto Clean Row 1", this.optionBoxes[i].x + 15, this.optionBoxes[i].y + 25);
                    ctx.fillText("Price: " + this.optionBoxes[i].price + " Time delay: " + (this.autoclickTimeR1/1000) + " s", this.optionBoxes[i].x + 15, this.optionBoxes[i].y + 45);
                    ctx.font = "20px Arial";
                    ctx.fillText("Level: " + this.optionBoxes[i].level, this.optionBoxes[i].x + this.optionBoxes[i].width + 15, this.optionBoxes[i].y + 35);
                    break;
                case 2:
                    ctx.fillStyle = "white";
                    ctx.font = "15px Arial";
                    ctx.fillText("Auto Clean Row 2", this.optionBoxes[i].x + 15, this.optionBoxes[i].y + 25);
                    ctx.fillText("Price: " + this.optionBoxes[i].price + " Time delay: " + (this.autoclickTimeR2/1000) + " s", this.optionBoxes[i].x + 15, this.optionBoxes[i].y + 45);
                    ctx.font = "20px Arial";
                    ctx.fillText("Level: " + this.optionBoxes[i].level, this.optionBoxes[i].x + this.optionBoxes[i].width + 15, this.optionBoxes[i].y + 35);
                    break;
                case 3:
                    ctx.fillStyle = "white";
                    ctx.font = "15px Arial";
                    ctx.fillText("Auto Clean Row 3", this.optionBoxes[i].x + 15, this.optionBoxes[i].y + 25);
                    ctx.fillText("Price: " + this.optionBoxes[i].price + " Time delay: " + (this.autoclickTimeR3/1000) + " s", this.optionBoxes[i].x + 15, this.optionBoxes[i].y + 45);
                    ctx.font = "20px Arial";
                    ctx.fillText("Level: " + this.optionBoxes[i].level, this.optionBoxes[i].x + this.optionBoxes[i].width + 15, this.optionBoxes[i].y + 35);
                    break;
                case 4:
                    ctx.fillStyle = "white";
                    ctx.font = "15px Arial";
                    ctx.fillText("Auto Clean Column 1", this.optionBoxes[i].x + 15, this.optionBoxes[i].y + 25);
                    ctx.fillText("Price: " + this.optionBoxes[i].price + " Time delay: " + (this.autoclickTimeC1/1000) + " s", this.optionBoxes[i].x + 15, this.optionBoxes[i].y + 45);
                    ctx.font = "20px Arial";
                    ctx.fillText("Level: " + this.optionBoxes[i].level, this.optionBoxes[i].x + this.optionBoxes[i].width + 15, this.optionBoxes[i].y + 35);
                    break; 
                case 5:
                    ctx.fillStyle = "white";
                    ctx.font = "15px Arial";
                    ctx.fillText("Auto Clean Column 2", this.optionBoxes[i].x + 15, this.optionBoxes[i].y + 25);
                    ctx.fillText("Price: " + this.optionBoxes[i].price + " Time delay: " + (this.autoclickTimeC2/1000) + " s", this.optionBoxes[i].x + 15, this.optionBoxes[i].y + 45);
                    ctx.font = "20px Arial";
                    ctx.fillText("Level: " + this.optionBoxes[i].level, this.optionBoxes[i].x + this.optionBoxes[i].width + 15, this.optionBoxes[i].y + 35);
                    break;
                case 6:
                    ctx.fillStyle = "white";
                    ctx.font = "15px Arial";
                    ctx.fillText("Auto Clean Column 3", this.optionBoxes[i].x + 15, this.optionBoxes[i].y + 25);
                    ctx.fillText("Price: " + this.optionBoxes[i].price + " Time delay: " + (this.autoclickTimeC3/1000) + " s", this.optionBoxes[i].x + 15, this.optionBoxes[i].y + 45);
                    ctx.font = "20px Arial";
                    ctx.fillText("Level: " + this.optionBoxes[i].level, this.optionBoxes[i].x + this.optionBoxes[i].width + 15, this.optionBoxes[i].y + 35);
                    break;
                case 7:
                    ctx.fillStyle = "white";
                    ctx.font = "15px Arial";
                    ctx.fillText("Money Multiplier", this.optionBoxes[i].x + 15, this.optionBoxes[i].y + 25);
                    ctx.fillText("Price: " + this.optionBoxes[i].price + " Money Multiplier: x" + this.moneyEarnMultiplier, this.optionBoxes[i].x + 15, this.optionBoxes[i].y + 45);
                    ctx.font = "20px Arial";
                    ctx.fillText("Level: " + this.optionBoxes[i].level, this.optionBoxes[i].x + this.optionBoxes[i].width + 15, this.optionBoxes[i].y + 35);
                }
        }

        //DRAW THE TITLE CARTEL 
        if(this.imageReady){
            console.log("Render title cartel at " + (screenWidth - this.imageWidth - 20) + " y: " + 500 + " width: " + this.width + " height: " + this.height + ""); 
            ctx.drawImage(this.sprite, 0, 0, this.imageWidth,this.imageHeight);
        }
    }

    Update(){
        //CHECK BEFORE RELEASE
        
        let minTime = 100; 
        let maxTime = 4000;

        //UPDATE AUTOCLICK TIMERS with their buy level options
        this.autoclickTimeC1 = 3100 - (this.optionBoxes[4].level * 100);
        this.autoclickTimeC1 = Clamp(this.autoclickTimeC1, minTime, maxTime); 

        this.autoclickTimeC2 = 3100 - (this.optionBoxes[5].level * 100);
        this.autoclickTimeC2 = Clamp(this.autoclickTimeC2, minTime, maxTime); 

        this.autoclickTimeC3 = 3100 - (this.optionBoxes[6].level * 100);
        this.autoclickTimeC3 = Clamp(this.autoclickTimeC3, minTime, maxTime);

        this.autoclickTimeR1 = 3100 - (this.optionBoxes[1].level * 100);
        this.autoclickTimeR1 = Clamp(this.autoclickTimeR1, minTime, maxTime);

        this.autoclickTimeR2 = 3100 - (this.optionBoxes[2].level * 100);
        this.autoclickTimeR2 = Clamp(this.autoclickTimeR2, minTime, maxTime);

        this.autoclickTimeR3 = 3100 - (this.optionBoxes[3].level * 100);
        this.autoclickTimeR3 = Clamp(this.autoclickTimeR3, minTime, maxTime);

        //UPDATE OTHER VARS WHITH THE BUY LEVEL OPTIONS
        this.moneyEarnMultiplier = (1 + ((this.optionBoxes[7].level - 1) * 0.1));
        this.moneyEarnMultiplier = Number(this.moneyEarnMultiplier.toFixed(2));

        this.damageToDirt = 0.15 + ((this.optionBoxes[0].level - 1) * 0.05);
        this.damageToDirt = Number(this.damageToDirt.toFixed(2));
    }

    /**
     * Money earn when clean a dirt (stain) 
     * Take into consideration the multiplier that can be upgraded in the store
     */
    EarnMoney(){
        //Update money earned and total 
        this.money += this.moneyEarn * this.moneyEarnMultiplier; 
        this.totalMoneyEarned += this.moneyEarn * this.moneyEarnMultiplier;
    }

    /**
     * Money earn when finish cleaning a window
     * Take into consideration the multiplier that can be upgraded in the store
     */
    EarnMoneyFinishWindow(){
        //Update money earned and total 
        this.money += this.moneyEarnFinishWindow * this.moneyEarnMultiplier; 
        this.money = Number(this.money.toFixed(2)); //Round to 2 decimals

        this.totalMoneyEarned += this.moneyEarnFinishWindow * this.moneyEarnMultiplier;
        this.totalMoneyEarned = Number(this.totalMoneyEarned.toFixed(2)); //Round to 2 decimals
    }
}
