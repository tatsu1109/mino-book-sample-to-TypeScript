import Member from "../../chapter4/Member";
import Magic from "./Magic";
import AttackPower from "../Capability/AttackPower";
import MagicPoint from "../Capability/MagicPoint";
import TechnicalPoint from "../Capability/TechnicalPoint";


export default class Shiden implements Magic {

    private readonly member:Member;    

    constructor(member:Member) {
        this.member = member
    }

    name(): string {
        return '紫電';
    }
    costMagicPoint(): MagicPoint {
        return new MagicPoint(5 + (this.member.level * 0.2));
    }
    attackPower(): AttackPower {
        return new AttackPower(20 + (this.member.agility * 1.5));
    }
    costTechnicalPoint(): TechnicalPoint {
        return new TechnicalPoint(5);
    }

}