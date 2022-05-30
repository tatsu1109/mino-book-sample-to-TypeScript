export default class RegularPrice {
    private static readonly MIN_AMOUNT:number = 0;
    readonly amount:number;

    constructor(amount:number) {
        if(amount < RegularPrice.MIN_AMOUNT) {
            throw new Error("価格が0以上でありません。");
        }

        this.amount = amount;
    }

}