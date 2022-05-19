import { StatesType } from "./StatesType";
import HitPoint from "./HitPoint";
import States from "./States";

export default class Member {
    isAlive(): unknown {
        throw new Error("Method not implemented.");
    }
    private readonly hitPoint:HitPoint;
    private readonly states:States;
    level: number;
    agility: number;
    magicAttack: number;
    vitality: number;
    id: any;

    constructor(hitPoint:HitPoint, states:States,level: number, agility: number, magicAttack: number, vitality: number){
        this.hitPoint = hitPoint;
        this.states = states;
        this.level = level;
        this.agility = agility;
        this.magicAttack = magicAttack;
        this.vitality = vitality;
    }
    
    damage(damageAmount:number):void {
        this.hitPoint.damage(damageAmount);
        if(this.hitPoint.isZero()) {
            this.states.change(StatesType.dead);
        }
    }

    display():void {
        console.log(`MemberA HP ${this.hitPoint.amount} States ${this.states.value}`);
    }

}
