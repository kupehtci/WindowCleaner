//class that manages the money and the HUD, shooping bonus and others.

//The Number(x.ToFixed(2)) is used to round the number to 2 decimals, constantly used in this script due to javascript float error of presition

class Manager{
    constructor(){

        //MONEY VARS
        this.money = 100000000000; 
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
        this.damageToDirt = 0; 

        this.autoclickTimeC1 = 3100;
        this.autoclickTimeC2 = 3100;
        this.autoclickTimeC3 = 3100;
        this.autoclickTimeR1 = 3100;
        this.autoclickTimeR2 = 3100;
        this.autoclickTimeR3 = 3100;

        
        //OPTION BOXES
        this.optionBoxes = [];
        this.levelBoxes = [];

        /**X axis for the clickable boxes */
        let cbX = 700; 

        /**Intiial Y position for the clickable boxes */
        let cbInitialY = 120;

        /** Separation in Y axis between each box */
        let cbSepY = 70;
        
        //Create box for money HUD
        this.MoneyBox = new TextDisplayBox (canvas.width - 390, 20, 350, 52, 1);
        //Create the option boxes and set the integer option that defines the upgrade behaviour when clicked -----------------
        for(let i = 0; i < 8; i++){
            this.optionBoxes[i] = new ClickableBox(cbX, cbInitialY + (i * cbSepY), 250, 40);
            this.optionBoxes[i].integerOption = i;
            this.levelBoxes[i] = new TextDisplayBox(cbX + 257, cbInitialY + (i * cbSepY) + 14, 100, 20, 0);
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

        this.MoneyBox.Render();
        //Render the money text
        ctx.fillStyle = "black";
        ctx.font = "20px Arial";
        ctx.fillText("Money: " + this.money + "€", canvas.width - 350, 50);
 
        //Render the total money earned
        ctx.fillStyle = "black";
        ctx.font = "20px Arial";
        ctx.fillText("Total Money Earned: " + this.totalMoneyEarned + "€", canvas.width - 350, 80);
    
        //render the option boxes
        for(let i = 0; i < this.optionBoxes?.length; i++){
            this.optionBoxes[i].Render();
            this.levelBoxes[i].Render();
        }
        for(let i = 0; i < this.optionBoxes.length; i++){
            switch (this.optionBoxes[i].integerOption) {
                case 0:
                    ctx.fillStyle = "black";
                    
                    ctx.font = "15px Arial";
                    ctx.fillText("Spray Brand", this.optionBoxes[i].x + 15, this.optionBoxes[i].y + 20);
                    ctx.fillText("Price: " + this.optionBoxes[i].price, this.optionBoxes[i].x + 15, this.optionBoxes[i].y + 40);
                    ctx.fillText("Damage: " + (this.damageToDirt * 100) + "%", this.optionBoxes[i].x + 120, this.optionBoxes[i].y + 40)
                    ctx.font = "20px Arial";
                    ctx.fillText("Level: " + this.optionBoxes[i].level, this.optionBoxes[i].x + this.optionBoxes[i].width + 15, this.optionBoxes[i].y + 35);
                    break;
                case 1:
                    ctx.fillStyle = "black";
                    ctx.font = "15px Arial";
                    ctx.fillText("RoboCleaner Row 1", this.optionBoxes[i].x + 15, this.optionBoxes[i].y + 20);
                    ctx.fillText("Price: " + this.optionBoxes[i].price, this.optionBoxes[i].x + 15, this.optionBoxes[i].y + 40);
                    ctx.fillText("Time delay: " + (this.autoclickTimeR1/1000) + "s", this.optionBoxes[i].x + 120, this.optionBoxes[i].y + 40)
                    ctx.font = "20px Arial";
                    ctx.fillText("Level: " + this.optionBoxes[i].level, this.optionBoxes[i].x + this.optionBoxes[i].width + 15, this.optionBoxes[i].y + 35);
                    break;
                case 2:
                    ctx.fillStyle = "black";
                    ctx.font = "15px Arial";
                    ctx.fillText("RoboCleaner Row 2", this.optionBoxes[i].x + 15, this.optionBoxes[i].y + 20);
                    ctx.fillText("Price: " + this.optionBoxes[i].price, this.optionBoxes[i].x + 15, this.optionBoxes[i].y + 40);
                    ctx.fillText("Time delay: " + (this.autoclickTimeR2/1000) + "s", this.optionBoxes[i].x + 120, this.optionBoxes[i].y + 40)
                    ctx.font = "20px Arial";
                    ctx.fillText("Level: " + this.optionBoxes[i].level, this.optionBoxes[i].x + this.optionBoxes[i].width + 15, this.optionBoxes[i].y + 35);
                    break;
                case 3:
                    ctx.fillStyle = "black";
                    ctx.font = "15px Arial";
                    ctx.fillText("RoboCleaner Row 3", this.optionBoxes[i].x + 15, this.optionBoxes[i].y + 20);
                    ctx.fillText("Price: " + this.optionBoxes[i].price, this.optionBoxes[i].x + 15, this.optionBoxes[i].y + 40);
                    ctx.fillText("Time delay: " + (this.autoclickTimeR3/1000) + "s", this.optionBoxes[i].x + 120, this.optionBoxes[i].y + 40)
                    ctx.font = "20px Arial";
                    ctx.fillText("Level: " + this.optionBoxes[i].level, this.optionBoxes[i].x + this.optionBoxes[i].width + 15, this.optionBoxes[i].y + 35);
                    break;
                case 4:
                    ctx.fillStyle = "black";
                    ctx.font = "15px Arial";
                    ctx.fillText("RoboCleaner Column 1", this.optionBoxes[i].x + 15, this.optionBoxes[i].y + 20);
                    ctx.fillText("Price: " + this.optionBoxes[i].price, this.optionBoxes[i].x + 15, this.optionBoxes[i].y + 40);
                    ctx.fillText("Time delay: " + (this.autoclickTimeC1/1000) + "s", this.optionBoxes[i].x + 120, this.optionBoxes[i].y + 40)
                    ctx.font = "20px Arial";
                    ctx.fillText("Level: " + this.optionBoxes[i].level, this.optionBoxes[i].x + this.optionBoxes[i].width + 15, this.optionBoxes[i].y + 35);
                    break; 
                case 5:
                    ctx.fillStyle = "black";
                    ctx.font = "15px Arial";
                    ctx.fillText("RoboCleaner Column 2", this.optionBoxes[i].x + 15, this.optionBoxes[i].y + 20);
                    ctx.fillText("Price: " + this.optionBoxes[i].price, this.optionBoxes[i].x + 15, this.optionBoxes[i].y + 40);
                    ctx.fillText("Time delay: " + (this.autoclickTimeC2/1000) + "s", this.optionBoxes[i].x + 120, this.optionBoxes[i].y + 40)
                    ctx.font = "20px Arial";
                    ctx.fillText("Level: " + this.optionBoxes[i].level, this.optionBoxes[i].x + this.optionBoxes[i].width + 15, this.optionBoxes[i].y + 35);
                    break;
                case 6:
                    ctx.fillStyle = "black";
                    ctx.font = "15px Arial";
                    ctx.fillText("RoboCleaner Column 3", this.optionBoxes[i].x + 15, this.optionBoxes[i].y + 20);
                    ctx.fillText("Price: " + this.optionBoxes[i].price, this.optionBoxes[i].x + 15, this.optionBoxes[i].y + 40);
                    ctx.fillText("Time delay: " + (this.autoclickTimeC3/1000) + "s", this.optionBoxes[i].x + 120, this.optionBoxes[i].y + 40)
                    ctx.font = "20px Arial";
                    ctx.fillText("Level: " + this.optionBoxes[i].level, this.optionBoxes[i].x + this.optionBoxes[i].width + 15, this.optionBoxes[i].y + 35);
                    break;
                case 7:
                    ctx.fillStyle = "black";
                    ctx.font = "15px Arial";
                    ctx.fillText("Get A Raise", this.optionBoxes[i].x + 15, this.optionBoxes[i].y + 20);
                    ctx.fillText("Price: " + this.optionBoxes[i].price, this.optionBoxes[i].x + 15, this.optionBoxes[i].y + 40);
                    ctx.fillText("Multiplier: x" + this.moneyEarnMultiplier, this.optionBoxes[i].x + 120, this.optionBoxes[i].y + 40)
                    ctx.font = "20px Arial";
                    ctx.fillText("Level: " + this.optionBoxes[i].level, this.optionBoxes[i].x + this.optionBoxes[i].width + 15, this.optionBoxes[i].y + 35);
                }
        }

        //DRAW THE TITLE CARTEL 
        if(this.imageReady){
            //console.log("Render title cartel at " + (screenWidth - this.imageWidth - 20) + " y: " + 500 + " width: " + this.width + " height: " + this.height + ""); 
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

        //UPDATE OTHER VARS WITH THE BUY LEVEL OPTIONS
        this.moneyEarnMultiplier = (1 + ((this.optionBoxes[7].level - 1) * 1));
        this.moneyEarnMultiplier = Number(this.moneyEarnMultiplier.toFixed(2));

        this.damageToDirt = 0.10 + ((this.optionBoxes[0].level - 1) * 0.05);
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
