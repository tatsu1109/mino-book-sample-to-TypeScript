import ExcellentCustomerRule from "./ExcellentCustomerRule";
import PurchaseHistory from "./PurchaseHistory";

export default class GoldCustomerPurchaseAmountRule implements ExcellentCustomerRule {
    ok(history: PurchaseHistory): boolean {
        return 100000 <= history.totalAmount;
    }
}