export default class Money {
    private readonly amount: number 
    private readonly currency: Intl.NumberFormat

    constructor(amount: number , currency: Intl.NumberFormat) {
        if(amount < 0) {
            throw new Error("金額が0以上でありません。");
        }
        if(currency === null) {
            throw new Error("通貨を指定して下さい。");
        }
        this.amount = amount;
        this.currency = currency;
    }

    // 引数の定数化はJavaScriptではできない？ or 型エイリアスで宣言が必要？
    add(other:Money):Money {
        if(this.currency === other.currency){
            throw new Error("通貨単位が違います。");            
        }

        const added:number = this.amount + other.amount;
        return new Money(added, this.currency);
    }

    display():String {
        return this.currency.format(this.amount);
    }
}


