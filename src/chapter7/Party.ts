import Member from "../chapter4/Member";

export default class Party {
    private readonly members:Member[]
    static readonly MAX_NUMBER_COUNT = 4;

    constructor(members:Member[]) {
        this.members = members;
    }

    add(newMember:Member):Party {
        if(this.exists(newMember)) {
            throw new Error("既にパーティに加わっています。");
            
        }
        if(this.isFull()) {
            throw new Error("これ以上メンバーを追加できません。");
            
        }

        const adding:Member[] = [...this.members, newMember];
        return new Party(adding);
    }

    isAlive():boolean {
        return this.members.some(value => value.isAlive());
    }

    exists(member:Member):boolean {
        return this.members.some(value => value.id === member.id);
    }

    isFull():boolean {
        return this.members.length === Party.MAX_NUMBER_COUNT;
    }

    getMembers():Member[] {
        return Object.seal(this.members);
    }

}