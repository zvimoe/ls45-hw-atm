var cash = {
    denom: [],
    bills: [0, 0, 0],
    addBills: function (bills) {
        this.bills = bills;

    },
    canDispense: function (sum) { //if ATM have enough to dispense the sum
        for (var i = this.denom.length - 1; i >= 0; i--) {
            var dave = Math.min(sum / this.denom[i], this.bills[i])

            sum -= Math.min(sum / this.denom[i], this.bills[i]) *
                this.denom[i];

        }
        return sum;
    },
    dispense: function (sum) { // check if can dispense, if so call putout
        if (this.canDispense(sum) == 0) {
            var give = [];
            var amount = 0;
            for (var i = this.denom.length - 1; i >= 0; i--) {
                var num = Math.min(sum / this.denom[i], this.bills[i])
                give.push(num)
                amount += (this.bills[i] * this.denom[i])
                sum -= Math.min(sum / this.denom[i], this.bills[i]) *
                    this.denom[i];
            }
            this.putout(give.reverse())
            this.balance = amount - sum;

        }
        else {
            return "not enugh cash in atm missing " + this.canDispense(sum)

        }



    },
    putout: function (give) {
        this.cashOut = []
        for (var i = 0; i < this.denom.length; i++) {

           this.cashOut.push(give[i] + " " + this.denom[i])
        }
       
    },

    cashBalance: function () { //how much money left in ATM
        return this.balance
    }
}


cash.denom = [50, 100, 200];
cash.addBills([5, 2, 4]);
cash.dispense(1050)
console.log(cash.cashOut)
console.log(cash.balance)










