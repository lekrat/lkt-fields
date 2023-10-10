import { StateTexts } from "../types/StateTexts";
import { StateKey } from "../types/StateKey";
export declare class StateTextValue {
    private readonly value;
    constructor(value?: StateTexts);
    text(key: StateKey): string;
}
