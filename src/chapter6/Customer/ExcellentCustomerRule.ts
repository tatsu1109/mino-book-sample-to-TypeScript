import PurchaseHistory from "./PurchaseHistory";

export default interface ExcellentCustomerRule {
    ok(history:PurchaseHistory):boolean;
}