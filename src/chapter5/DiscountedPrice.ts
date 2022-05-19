import RegularPrice from "./RegularPrice";
import DiscountRate from "./DiscountRate";

export default class DiscountedPrice {
    readonly value:number;

    constructor(regularPrice:RegularPrice, discountRate:DiscountRate) {
        this.value = regularPrice.amount * discountRate.value;
    }
}