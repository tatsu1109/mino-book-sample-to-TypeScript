import { MagicType } from "./MagicType";
import Member from "../../chapter4/Member";

export default class Magic {

    private readonly name:string;
    private costMagicPoint:number;
    private attackPower:number;
    private costTechnicalPoint:number;

    constructor(magicType:MagicType, member:Member) {
        switch (magicType) {
            case MagicType.fire:
                this.name = 'ファイア';
                this.costMagicPoint = 2;
                this.attackPower = 20 + (member.level * 0.5);
                this.costTechnicalPoint = 0;
            case MagicType.shiden:
                this.name = '紫電';
                this.costMagicPoint = 5 + (member.level * 0.2);
                this.attackPower = 20 + (member.agility * 1.5);
                this.costTechnicalPoint = 5;
         case MagicType.hellFire:
                this.name = '地獄の業火';
                this.costMagicPoint = 16;
                this.attackPower = 200 + (member.magicAttack * 1.5 + member.vitality * 1.5);
                this.costTechnicalPoint = 20 + (member.level * 0.4);
            default:
                throw new Error("");
        }

    }
}