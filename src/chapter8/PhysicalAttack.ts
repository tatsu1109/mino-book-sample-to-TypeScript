export default class PhysicalAttack {
    singleAttackDamage():number {
        return 20;
    }

    doubleAttackDamage():number {
        return this.singleAttackDamage() * 2;
    }

}