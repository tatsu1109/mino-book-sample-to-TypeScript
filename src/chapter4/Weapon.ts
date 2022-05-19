import AttackPower from "./AttackPower";

export default class Weapon {
    readonly attackPower : AttackPower

    constructor(attackPower:AttackPower){
        this.attackPower = attackPower;
    }

    reinForce(increment:AttackPower):Weapon{
        const reinforced:AttackPower = this.attackPower.reinForce(increment);
        return new Weapon(reinforced);
    }
}