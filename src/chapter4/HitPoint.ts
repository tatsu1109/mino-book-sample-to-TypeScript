export default class HitPoint {
    private static readonly MIN: number = 0;
    amount:number;

    constructor(amount:number) {
        if(amount < HitPoint.MIN) {
            throw new Error("HPが0未満です。");
        }
        this.amount = amount;
    }
    
    damage(damageAmount:number):void {
        const nextAmonut = this.amount - damageAmount;
        this.amount = Math.max(HitPoint.MIN, nextAmonut);
    }

    isZero() :boolean {
        return this.amount === (HitPoint.MIN);
    }
}