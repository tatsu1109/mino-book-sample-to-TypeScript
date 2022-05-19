import { MagicType } from "./Magic/MagicType"
import Fire from "./Magic/Fire"
import Shiden from "./Magic/Shiden"
import HellFire from "./Magic/HellFire"
import Magic from "./Magic/Magic"
import Member from "../chapter4/Member"
import HitPoint from "../chapter4/HitPoint"
import States from "../chapter4/States"
import { StatesType } from "../chapter4/StatesType"

const member = new Member(new HitPoint(100), new States(StatesType.alive), 10, 20, 15, 12);

const magics = {
    [MagicType.fire] : new Fire(member),
    [MagicType.shiden] : new Shiden(member),
    [MagicType.hellFire] : new HellFire(member)
}

const magicAttack = (magicType:MagicType) => {
    const usingMagic:Magic = magics[magicType];
    showMagicName(usingMagic);
    consumeMagicPoint(usingMagic);
    consumeTechnicalPoint(usingMagic);
    magicDamage(usingMagic);
}

const showMagicName = (magic:Magic) => {
    console.log(magic.name());
}

const consumeMagicPoint = (magic:Magic) => {
    const costMagicPoint = magic.costMagicPoint();
}

const consumeTechnicalPoint = (magic:Magic) => {
    const costTechnicalPoint = magic.costTechnicalPoint();
}

const magicDamage = (magic:Magic) => {
    const attackPower = magic.attackPower();
}

magicAttack(MagicType.fire);