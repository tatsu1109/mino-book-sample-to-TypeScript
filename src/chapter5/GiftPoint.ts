import ConsumptionPoint from "./ConsumptionPoint" 

export default class GiftPoint {
    private static readonly MIN_POINT:number = 0;
    private static readonly STANDARD_MEMBERSHIP_POINT:number = 3000;
    private static readonly PREMIUM_MEMBERSHIP_POINT:number = 10000;
    private readonly value:number;

    // コンストラクタをprivateにすることでファクトリメソッドを通してのみしかインスタンス生成できないようにする
    private constructor(point:number) {
        if(point < GiftPoint.MIN_POINT) {
            throw new Error(`ポイントが${GiftPoint.MIN_POINT}以上ではありません`); 
        }

        this.value = point;
    }

    static forStandardMemberShip():GiftPoint {
        return new GiftPoint(GiftPoint.STANDARD_MEMBERSHIP_POINT);
    }

    static forPremiumMemberShip():GiftPoint {
        return new GiftPoint(GiftPoint.PREMIUM_MEMBERSHIP_POINT);
    }

    add(other:GiftPoint):GiftPoint {
        return new GiftPoint(this.value + other.value)
    }

    isEnough(point:ConsumptionPoint):boolean {
        return point.value <= this.value;
    }

    consume(point:ConsumptionPoint):GiftPoint {
        if(this.isEnough(point)) {
            throw new Error("ポイントが不足しています");            
        }
        return new GiftPoint(this.value - point.value);
    }
}