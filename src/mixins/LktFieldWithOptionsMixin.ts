import {getNoOptionsMessage} from "../functions/settings-functions";
import {defaultOptionFormatter, defaultOptionParser, mapOptions} from "../functions/functions";
import {isFunction} from "lkt-tools";

export const LktFieldWithOptionsMixin = {
    props: {
        options: {type: Array, default: (): Array<IOption> => []},
        multiple: {type: Boolean, default: false},
        canTag: {type: Boolean, default: false},
        noOptionsMessage: {type: String, default: getNoOptionsMessage()},
        optionFormatter: {type: Function, default: defaultOptionFormatter},
        optionParser: {type: Function, default: defaultOptionParser},
        select2Compatibility: {type: Boolean, default: false},
    },

    data(): any {
        return {
            Options: mapOptions(this.options, this.optionParser, this.select2Compatibility),
        }
    },

    computed: {
        renderSelectedOption: {
            cache: false,
            get() {
                let option = this.Options.filter((opt: any) => {
                    return opt.selected === true;
                });
                return option && option.length > 0 && isFunction(this.optionFormatter) ? this.optionFormatter(option[0]) : this.fetchString;
            }
        }
    },

    watch: {
        'options': {
            handler() {
                this.Options = mapOptions(this.options, this.optionParser, this.select2Compatibility);
            }, deep: true
        }
    },

    methods: {
        getDropdownOptionSelector(option: any, highlightOption: number = -1, i: number = -1) {
            let r = {'is-highlight': highlightOption == i, 'is-selected': option.selected === true};
            if (option.selector) {
                let temp = option.selector.split(' ');
                temp.forEach((t: any) => {
                    //@ts-ignore
                    r[t] = true;
                });
            }
            return r;
        },

        renderOption(option: any) {
            return isFunction(this.optionFormatter) ? this.optionFormatter(option) : option.label;
        },
    }
};