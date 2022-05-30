import RegularPrice from "./RegularPrice";

export default class SummerDiscountedPrice {
    private static readonly MIN_AMOUNT:number = 0;
    private static readonly DISCOUNT_AMOUNT:number = 400;
    readonly amount:number;

    constructor(price:RegularPrice) {
        let discountedAmount:number = price.amount - SummerDiscountedPrice.DISCOUNT_AMOUNT;
        if(discountedAmount < SummerDiscountedPrice.MIN_AMOUNT) {
            discountedAmount = SummerDiscountedPrice.MIN_AMOUNT;
        }
        
        this.amount = discountedAmount;
    }
}