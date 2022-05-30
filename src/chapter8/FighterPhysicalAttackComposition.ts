import PhysicalAttack from "./PhysicalAttack";

export default class FighterPhysicalAttackComposition {
    private readonly physicalAttack:PhysicalAttack;

    constructor(physicalAttack:PhysicalAttack) {
        this.physicalAttack = physicalAttack;
    }

    singleAttackDamage():number {
        return this.physicalAttack.singleAttackDamage() + 20;
    }

    doubleAttackDamage():number {
        return this.physicalAttack.doubleAttackDamage() + 10;
    }
}