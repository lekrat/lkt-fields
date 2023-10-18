import {LktObject} from "lkt-ts-interfaces";
import {rmArrayValue} from "lkt-tools";
import {FieldCallToAction} from "../types/FieldCallToAction";
import {StateConfigValue} from "../value-objects/StateConfigValue";
import {StateTextValue} from "../value-objects/StateTextValue";

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


        options.forEach((opt: LktObject) => {

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

            let data: LktObject = {};
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
    return options.map((option:any, i:number): IOption => parser(option, i))
}

export const mapDisabledOptions = (options: IOption[], disabledOptions: any[]) => {
    options.forEach(z => {
        z.disabled = z.disabled === true || (disabledOptions.indexOf(z.value) > -1);
    });
    return options;
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

export const getStateConfigFromCTAForTextField = (reset: boolean|string|FieldCallToAction, error: boolean|string|FieldCallToAction, info: boolean|string|FieldCallToAction) => {
    const resetCTA:FieldCallToAction = [false, ''],
        errorCTA:FieldCallToAction = [false,''],
        infoCTA:FieldCallToAction = [false, ''];

    if (reset === true) resetCTA[0] = true;
    if (error === true) errorCTA[0] = true;
    if (info === true) infoCTA[0] = true;

    if (Array.isArray(reset)) {
        resetCTA[0] = reset[0];
        resetCTA[1] = reset[1];
    }
    if (Array.isArray(error)) {
        errorCTA[0] = error[0];
        errorCTA[1] = error[1];
    }
    if (Array.isArray(info)) {
        infoCTA[0] = info[0];
        infoCTA[1] = info[1];
    }

    if (typeof reset === 'string' && reset.length > 0) {
        resetCTA[0] = true;
        resetCTA[1] = reset;
    }

    if (typeof error === 'string' && error.length > 0) {
        errorCTA[0] = true;
        errorCTA[1] = error;
    }

    if (typeof info === 'string' && info.length > 0) {
        infoCTA[0] = true;
        infoCTA[1] = info;
    }

    return {
        config: new StateConfigValue({
            reset: resetCTA[0],
            error: errorCTA[0],
            info: infoCTA[0],
        }),
        texts: new StateTextValue({
            reset: resetCTA[1],
            error: errorCTA[1],
            info: infoCTA[1],
        })
    };
}