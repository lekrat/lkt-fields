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
/**
 *
 * @param value
 * @param label
 * @param data
 */
export declare const createOption: (value: string | number | IOption[], label: string, data?: object) => IOption;
