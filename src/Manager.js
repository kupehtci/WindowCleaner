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
        this.damageToDirt = 0.25;
        
        
        //OPTION BOXES
        this.optionBoxes = [];

        /**X axis for the clickable boxes */
        let cbX = 750; 

        /**Intiial Y position for the clickable boxes */
        let cbInitialY = 80;

        /** Separation in Y axis between each box */
        let cbSepY = 70;
        
        for(let i = 0; i < 9; i++){
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
    
        //render the option boxes
        for(let i = 0; i < this.optionBoxes?.length; i++){
            this.optionBoxes[i].Render();
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

