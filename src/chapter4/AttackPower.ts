export default class AttackPower {
    private static readonly MIN: number = 0;
    public readonly value: number;

    constructor(value:number) {
        if(value < AttackPower.MIN) {
            throw new Error("値が0以上でありません。");
        }
        this.value = value;
    }

    reinForce(increment:AttackPower):AttackPower {
        return new AttackPower(this.value + increment.value);
    }

    disabled():AttackPower {
        return new AttackPower(AttackPower.MIN);
    }
}