export default class MagicPoint {
    private currentAmount:number;
    private readonly originalMaxAmount:number;
    private readonly maxIncrements:[number];

    constructor(currentAmount:number, originalMaxAmount:number, maxIncrements:[number]) {
        this.currentAmount = currentAmount;
        this.originalMaxAmount = originalMaxAmount;
        this.maxIncrements = maxIncrements;
    }

    current():number {
        return this.currentAmount;
    }

    max():number {
        let amount:number = this.originalMaxAmount;
        this.maxIncrements.map((value:number) => {
            amount += value;
        });

        return amount;
    }

    recover(recoveryAmount:number):void {
        this.currentAmount = Math.min(this.currentAmount + recoveryAmount, this.max());
    }

    consume(consumeAmount:number):void {

    }
}