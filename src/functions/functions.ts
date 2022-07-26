import {ILktObject, rmArrayValue} from "lkt-tools";

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
        let r: IOption[] = [];


        options.forEach((opt: ILktObject) => {

            let keys = Object.keys(opt);

            rmArrayValue(keys, 'id');
            rmArrayValue(keys, 'text');
            rmArrayValue(keys, 'children');
            rmArrayValue(keys, 'disabled');

            let group = false,
                children: IOption[] = [];

            if (opt['children']) {
                group = true;
                children = mapOptions(opt['children'], parser, select2Compatibility);
            }

            let data: ILktObject = {};
            keys.forEach(z => {
                data[z] = opt[z];
            });


            r.push({
                group,
                disabled: opt.disabled && opt.disabled === true || group,
                value: group ? children : opt.id,
                label: opt.text,
                data,
            });

            children.forEach(z => {
                r.push(z);
            })
        });

        return r;
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