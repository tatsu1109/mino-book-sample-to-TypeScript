import RegularPrice from "./RegularPrice";

export default class RegularDiscountedPrice {
    private static readonly MIN_AMOUNT:number = 0;
    private static readonly DISCOUNT_AMOUNT:number = 400;
    readonly amount:number;

    constructor(price:RegularPrice) {
        let discountedAmount:number = price.amount - RegularDiscountedPrice.DISCOUNT_AMOUNT;
        if(discountedAmount < RegularDiscountedPrice.MIN_AMOUNT) {
            discountedAmount = RegularDiscountedPrice.MIN_AMOUNT;
        }
        
        this.amount = discountedAmount;
    }
}