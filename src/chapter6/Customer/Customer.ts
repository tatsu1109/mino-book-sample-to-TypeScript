import PurchaseHistory from "./PurchaseHistory";

export default class Customer {


    isSilverCustomer(history:PurchaseHistory) {
        if(10 <= history.purchaseFrequenryPerMonth) {
            if(history.returnRate <= 0.001) {
                return true;
            }
        }
        
        return false;
    }

    isGoldCustomer(history:PurchaseHistory) {
        if(100000 <= history.totalAmount) {
            if(10 <= history.purchaseFrequenryPerMonth) {
                if(history.returnRate <= 0.001) {
                    return true;
                }
            }
        }
    }


}