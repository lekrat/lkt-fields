import {StateConfig} from "../types/StateConfig";

export class StateConfigValue {
    private readonly value: StateConfig;

    constructor(value?: StateConfig) {
        if (!value) {
            value = {};
        }
        this.value = value;
    }

    amountEnabled() {
        return Object.values(this.value).filter(z => z === true).length;
    }
}