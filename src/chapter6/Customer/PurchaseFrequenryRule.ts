import ExcellentCustomerRule from "./ExcellentCustomerRule";
import PurchaseHistory from "./PurchaseHistory";

export default class PurchaseFrequenryRule implements ExcellentCustomerRule {
    ok(history: PurchaseHistory): boolean {
        return 10 <= history.purchaseFrequenryPerMonth;
    }
}