import Member from "../../chapter4/Member";
import Magic from "./Magic";
import AttackPower from "../Capability/AttackPower";
import MagicPoint from "../Capability/MagicPoint";
import TechnicalPoint from "../Capability/TechnicalPoint";

export default class HellFire implements Magic {

    private readonly member:Member;    

    constructor(member:Member) {
        this.member = member
    }

    name(): string {
        return '地獄の業火';
    }
    costMagicPoint(): MagicPoint {
        return new MagicPoint(16);
    }
    attackPower(): AttackPower {
        return new AttackPower(200 + (this.member.magicAttack * 1.5 + this.member.vitality * 1.5));
    }
    costTechnicalPoint(): TechnicalPoint {
        return new TechnicalPoint(20 + (this.member.level * 0.4));
    }

}