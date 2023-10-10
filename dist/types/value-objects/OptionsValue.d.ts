import { Option } from "../types/Option";
export declare class OptionsValue {
    private value;
    private labels;
    constructor(value?: Option[]);
    all(): Option[];
    filter(query: string): Option[];
    receiveOptions(options: Option[]): void;
}
