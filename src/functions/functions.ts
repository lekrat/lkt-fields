import {ILktObject} from "lkt-tools";

/**
 *
 * @param option
 */
export const defaultOptionFormatter = (option:any = {}) => {
    return option.label;
}

/**
 *
 * @param option
 * @param i
 */
export const defaultOptionParser = (option: any = {}, i:number = 0) => {
    return option;
}

/**
 *
 * @param options
 * @param parser
 * @param select2Compatibility
 */
export const mapOptions = (options: Array<any>, parser: Function, select2Compatibility: boolean = false): IOption[] => {
    if (select2Compatibility) {
        return options.map((opt: any) => {

            let keys = Object.keys(opt);

            let index = keys.indexOf('id');
            keys.splice(index, 1);

            index = keys.indexOf('text');
            keys.splice(index, 1);

            let data: ILktObject = {};
            keys.forEach(z => {
                data[z] = opt[z];
            });


            return {
                value: opt.id,
                label: opt.text,
                data,
            }
        });
    }
    return options.map((option:any, i:number) => parser(option, i))
}

/**
 *
 * @param value
 * @param label
 * @param data
 */
export const createOption = (value: string|number|IOption[], label: string, data:object = {}): IOption => {
    return { value, label, data };
}