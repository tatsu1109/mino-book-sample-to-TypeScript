import AttackPower from "./AttackPower";
import HitPoint from "./HitPoint";
import Member from "./Member";
import States from "./States";
import Weapon from "./Weapon"
import { StatesType } from "./StatesType";

const attackPowerA:AttackPower = new AttackPower(20);
const attackPowerB:AttackPower = new AttackPower(20);

const weaponA:Weapon = new Weapon(attackPowerA);
const weaponB:Weapon = new Weapon(attackPowerB);

const increment:AttackPower = new AttackPower(5);
const reinForcedWeaponA:Weapon = weaponA.reinForce(increment);

console.log(`WeaponA AttackPower ${reinForcedWeaponA.attackPower.value}`);
console.log(`WeaponB AttackPower ${weaponB.attackPower.value}`);

const hitPointA = new HitPoint(100);
const statesA = new States(StatesType.alive);
const memberA = new Member(hitPointA, statesA);

memberA.display();
memberA.damage(101);
memberA.display();
