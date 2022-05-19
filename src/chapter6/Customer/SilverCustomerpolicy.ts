import ExcellentCustomerPolicy from "./ExcellentCustomerPolicy";
import ExcellentCustomerRule from "./ExcellentCustomerRule";
import GoldCustomerPurchaseAmountRule from "./GoldCustomerPurchaseAmountRule copy";
import PurchaseFrequenryRule from "./PurchaseFrequenryRule";
import PurchaseHistory from "./PurchaseHistory";
import ReturnRateRule from "./ReturnRateRule";

export default class SilverCustomerpolicy {
    private readonly policy!:ExcellentCustomerPolicy;

    constructor() {
        const policy = new Set<ExcellentCustomerRule>();
        policy.add(new PurchaseFrequenryRule);
        policy.add(new ReturnRateRule());
    }

    complyWithAll(history:PurchaseHistory):boolean {
        return this.policy.complyWithAll(history);
    }
}