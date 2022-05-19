import ExcellentCustomerRule from "./ExcellentCustomerRule";
import PurchaseHistory from "./PurchaseHistory";

export default class ReturnRateRule implements ExcellentCustomerRule {
    ok(history: PurchaseHistory): boolean {
        return history.returnRate <= 0.001;
    }
}