import { StatesType } from "./StatesType";

export default class States {
    value:StatesType;
    
    constructor(value:StatesType){
        this.value = value;
    }

    change(target:StatesType):void {
        this.value = target;
    }
}
