import ExcellentCustomerRule from "./ExcellentCustomerRule";
import PurchaseHistory from "./PurchaseHistory";

export default class ExcellentCustomerPolicy {
    private readonly rules:Set<ExcellentCustomerRule>;

    constructor(rules:Set<ExcellentCustomerRule>) {
        this.rules = rules;
    }

    add(rule:ExcellentCustomerRule):void {
        this.rules.add(rule);
    }

    complyWithAll(history:PurchaseHistory):boolean {
        for(const each of this.rules) {
            if(!each.ok(history)) return false;
        }
        return true;        
    }
}