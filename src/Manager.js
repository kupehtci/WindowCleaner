//class that manages the money and the HUD, shooping bonus and others.

class Manager{
    constructor(){

        this.money = 0;
        this.moneyText = "Money: " + this.money;
        this.totalMoneyEarned = 0;        
    }

    Render(){
        //Render the money text
        ctx.fillStyle = "black";
        ctx.font = "30px Arial";
        ctx.fillText(this.moneyText, canvas.wdith - 100, 50);

        //Render the total money earned
        ctx.fillStyle = "black";
        ctx.font = "20px StayPixelRegular";
        ctx.fillText("Total Money Earned: " + this.totalMoneyEarned, canvas.width - 100, 100);
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