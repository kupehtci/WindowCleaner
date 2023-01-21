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
        
        
        //OPTION BOXES
        this.optionBoxes = [];
    }

    Render(){
        //Render the money text
        ctx.fillStyle = "white";
        ctx.font = "20px Arial";
        ctx.fillText(this.moneyText, canvas.width - 300, 50);

        //Render the total money earned
        ctx.fillStyle = "white";
        ctx.font = "20px Arial";
        ctx.fillText("Total Money Earned: " + this.totalMoneyEarned, canvas.width - 300, 100);
    }

    Update(){
        //Update the money text
        this.moneyText = "Money: " + this.money;

    }

    EarnMoney(amount){
        this.money += this.moneyEarn; 
        this.totalMoneyEarned += this.moneyEarn;
    }
}

