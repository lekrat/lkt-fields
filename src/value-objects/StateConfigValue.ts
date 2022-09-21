import {StateConfig} from "../types/StateConfig";
import {StateKey} from "../types/StateKey";

export class StateConfigValue {
    private readonly value: StateConfig;
    private readonly disabled: boolean;

    constructor(value?: StateConfig, disabled?: boolean) {
        if (!value) {
            value = {};
        }
        this.value = value;
        if (!disabled) {
            disabled = false;
        }
        this.disabled = disabled;
    }

    enabled() {
        const keys: StateKey[] = Object.keys(this.value) as StateKey[];

        return keys.filter(key => {
            if (key === 'reset' && this.disabled) {
                return false;
            }
            return this.value[key] === true;
        });
    }

    amountEnabled() {
        return this.enabled().length;
    }
}