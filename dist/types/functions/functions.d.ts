import { FieldCallToAction } from "../types/FieldCallToAction";
import { StateConfigValue } from "../value-objects/StateConfigValue";
import { StateTextValue } from "../value-objects/StateTextValue";
/**
 *
 * @param option
 */
export declare const defaultOptionFormatter: (option?: any) => any;
/**
 *
 * @param option
 * @param i
 */
export declare const defaultOptionParser: (option?: any, i?: number) => any;
/**
 *
 * @param options
 * @param parser
 * @param select2Compatibility
 */
export declare const mapOptions: (options: Array<any>, parser: Function, select2Compatibility?: boolean) => IOption[];
export declare const mapDisabledOptions: (options: IOption[], disabledOptions: any[]) => IOption[];
/**
 *
 * @param value
 * @param label
 * @param data
 */
export declare const createOption: (value: string | number | IOption[], label: string, data?: object) => IOption;
export declare const getStateConfigFromCTAForTextField: (reset: boolean | string | FieldCallToAction, error: boolean | string | FieldCallToAction, info: boolean | string | FieldCallToAction) => {
    config: StateConfigValue;
    texts: StateTextValue;
    amountEnabled: number;
};
