import AttackPower from "../Capability/AttackPower";
import MagicPoint from "../Capability/MagicPoint";
import TechnicalPoint from "../Capability/TechnicalPoint";


export default interface Magic {
    name():string;
    costMagicPoint():MagicPoint;
    attackPower():AttackPower;
    costTechnicalPoint():TechnicalPoint;
}