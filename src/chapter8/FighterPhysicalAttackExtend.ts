import PhysicalAttack from "./PhysicalAttack";

export default class FighterPhysicalAttackExtend extends PhysicalAttack {

    constructor() {
        super()
    }
 
    singleAttackDamage():number {
        return this.singleAttackDamage() + 20;
    }

    doubleAttackDamage():number {
        return this.doubleAttackDamage() + 10;
    }
}