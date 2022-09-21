import { StateConfig } from "../types/StateConfig";
import { StateKey } from "../types/StateKey";
export declare class StateConfigValue {
    private readonly value;
    private readonly disabled;
    constructor(value?: StateConfig, disabled?: boolean);
    enabled(): StateKey[];
    amountEnabled(): number;
}
