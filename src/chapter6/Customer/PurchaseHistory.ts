export default class PurchaseHistory {
    readonly purchaseFrequenryPerMonth:number;
    readonly returnRate: number;
    readonly totalAmount:number;

    constructor(purchaseFrequenryPerMonth:number, returnRate: number, totalAmount:number) {
        this.purchaseFrequenryPerMonth = purchaseFrequenryPerMonth;
        this.returnRate = returnRate;
        this.totalAmount = totalAmount;
    }
}