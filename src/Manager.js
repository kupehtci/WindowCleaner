//class that manages the money and the HUD, shooping bonus and others.

class Manager{
    constructor(){


        this.money = 321;
        this.moneyText = "Money: " + this.money;
        this.totalMoneyEarned = 0;


        
    }

    Render(){
        //Render the money text
        ctx.fillStyle = "black";
        ctx.font = "30px Arial";
        ctx.fillText(this.moneyText, 10, 50);

        //Render the total money earned
        ctx.fillStyle = "black";
        ctx.font = "30px Arial";
        ctx.fillText("Total Money Earned: " + this.totalMoneyEarned, 10, 100);
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