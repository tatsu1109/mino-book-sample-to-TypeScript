export default class RegularPrice {
    readonly amount:number;

    constructor(amount:number) {
        if(amount < 0) {
            throw new Error("");
        }
        this.amount = amount;
    }
}