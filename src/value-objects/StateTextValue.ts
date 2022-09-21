import {StateTexts} from "../types/StateTexts";
import {StateKey} from "../types/StateKey";

export class StateTextValue {
    private readonly value: StateTexts;

    constructor(value?: StateTexts) {
        if (!value) {
            value = {};
        }
        this.value = value;
    }

    text(key: StateKey) {
        return this.value[key];
    }
}