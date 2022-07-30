import {generateRandomString, ILktObject, isFunction, isObject, slotProvided} from "lkt-tools";
import {getNoOptionsMessage} from "../functions/settings-functions";
import {defaultOptionFormatter, defaultOptionParser, mapDisabledOptions, mapOptions} from "../functions/functions";
// import {existsHTTPResource} from "lkt-http";
export const SelectFieldMixin = {
    emits: ['update:modelValue'],
    props: {
        modelValue: {type: [String, Number, Array], default: ''},
        placeholder: {type: String, default: ''},
        label: {type: String, default: ''},
        state: {type: String, default: ''},
        name: {type: String, default: generateRandomString(16)},
        valid: {type: [Boolean, Function], default: false,},
        disabled: {type: Boolean, default: false,},
        readonly: {type: Boolean, default: false,},
        emptyLabel: {type: Boolean, default: false,},
        options: {type: Array, default: (): Array<IOption> => []},
        disabledOptions: {type: Array, default: (): Array<any> => []},
        multiple: {type: Boolean, default: false},
        canTag: {type: Boolean, default: false},
        noOptionsMessage: {type: String, default: getNoOptionsMessage()},
        optionFormatter: {type: Function, default: defaultOptionFormatter},
        optionParser: {type: Function, default: defaultOptionParser},
        select2Compatibility: {type: Boolean, default: false},
        resource: {type: String, default: (): null => null},
        searchOptions: {type: [Object, Function], default: (): null => null},
        searchPlaceholder: {type: String, default: ''},
    },
    data(): ILktObject {
        return {
            Identifier: generateRandomString(16),
            originalValue: this.modelValue,
            value: this.modelValue,
            Options: mapDisabledOptions(mapOptions(this.options, this.optionParser, this.select2Compatibility), this.disabledOptions),
            loading: false,
            visibleOptions: [],
            latestTimestamp: Date.now(),
            apiOptions: [],
        }
    },
    computed: {
        isSearchable(): boolean {
            return true;
            //@todo fix this
            // return existsHTTPResource(this.resource);
        },
        renderSelectedOption: {
            cache: false,
            get() {
                let option = this.Options.filter((opt: any) => {
                    return opt.selected === true;
                });
                return option && option.length > 0 && isFunction(this.optionFormatter) ? this.optionFormatter(option[0]) : this.fetchString;
            }
        },
        isValid() {
            if (isFunction(this.valid)) {
                return this.valid();
            }
            return this.valid;
        },
        isEmpty() {
            return !this.modelValue;
        },
        changed() {
            return this.value !== this.originalValue;
        },
        canRenderLabelSlot() {
            return slotProvided(this, 'label');
        },
        canRenderLabelHtml() {
            if (this.canRenderLabelSlot) {
                return false;
            }
            if (!this.label && this.emptyLabel) {
                return true;
            }
            return !!this.label;
        }
    },
    watch: {
        modelValue(v: string) {
            this.value = v;
            console.log('updated modelValue', v, this.modelValue);
        },
        value(v: string) {
            console.log('updated value', v, this.value);
            this.$emit('update:modelValue', v)
        },
        options: {
            handler() {
                this.Options = mapDisabledOptions(mapOptions(this.options, this.optionParser, this.select2Compatibility), this.disabledOptions);
                this.buildVisibleOptions();
            }, deep: true
        },
        apiOptions: {
            handler() {
                console.log('visibleOptions watcher', this.visibleOptions);
                this.buildVisibleOptions();
            }, deep: true
        }
    },
    methods: {
        buildVisibleOptions() {
            this.visibleOptions = [].concat(this.Options, this.apiOptions);
        },
        async handleInput(inputEvent: InputEvent) {
            console.log('inputEvent', inputEvent);

            if (this.isSearchable) {
                console.log('resource', this.resource);

                const opts = isFunction(this.searchOptions)
                    ? this.searchOptions() : (isObject(this.searchOptions) ? this.searchOptions :  {})

                console.log('searchOptions', this.searchOptions, opts);
                console.log('$http', this.$http);
                this.$http(this.resource, opts).then( (r: any) => {
                    this.apiOptions = mapDisabledOptions(mapOptions(r.data.results, this.optionParser, this.select2Compatibility), this.disabledOptions);

                    // this.visibleOptions = [].concat(this.Options, this.apiOptions);
                    console.log('visibleOptions', this.visibleOptions);
                });
            }

            // const timestamp = (this.latestTimestamp = Date.now())
            // const target = inputEvent.target as HTMLInputElement | null
            //
            // if (target?.value === '') {
            //     this.visibleOptions = [...this.modelValue]
            //     return
            // }
            //
            // this.loading = true
            // await new Promise(resolve => setTimeout(resolve, 500))
            // // if (timestamp === this.latestTimestamp) {
            // //     this.visibleOptions = this.userNames.filter(name => name.includes(target?.value!))
            // // }
            // this.loading = false
        },
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

        focus() {
            this.$nextTick(() => {
                this.$refs.input.focus();
            });
        },
        setIsDisabled(status: boolean = false) {
            this.disabled = status === true;
            return this;
        },
        isDisabled() {
            return this.disabled;
        },

        reset() {
            this.modelValue = this.originalValue;
        },

        getValue() {
            return this.modelValue;
        },
    },
}