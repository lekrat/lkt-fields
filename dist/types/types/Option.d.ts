import { LktObject } from "lkt-ts-interfaces";
export declare type Option = {
    value: string | number | Option[];
    label: string;
    data?: LktObject;
    disabled?: boolean;
    group?: boolean;
};
