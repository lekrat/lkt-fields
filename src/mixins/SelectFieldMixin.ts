import {generateRandomString} from "lkt-string-tools";
import {slotProvided} from "lkt-vue-tools";
import {getNoOptionsMessage} from "../functions/settings-functions";
import {existsHTTPResource, httpCall} from "lkt-http";
import {LktObject} from "lkt-ts-interfaces";
import {FieldClassesMixin} from "./styling/FieldClassesMixin";
import {SearchOptionsValue} from "../value-objects/SearchOptionsValue";
import {OptionsValue} from "../value-objects/OptionsValue";

export const SelectFieldMixin = {
    emits: ['update:modelValue'],
    mixins: [FieldClassesMixin],
    props: {
        modelValue: {type: [String, Number, Array], default: ''},
        placeholder: {type: String, default: ''},
        label: {type: String, default: ''},
        palette: {type: String, default: ''},
        name: {type: String, default: generateRandomString(16)},
        valid: {type: [Boolean, Function], default: false,},
        disabled: {type: Boolean, default: false,},
        closeOnSelect: {type: Boolean, default: false,},
        readonly: {type: Boolean, default: false,},
        emptyLabel: {type: Boolean, default: false,},
        options: {type: Array, default: (): Array<IOption> => []},
        disabledOptions: {type: Array, default: (): Array<any> => []},
        multiple: {type: Boolean, default: false},
        canTag: {type: Boolean, default: false},
        noOptionsMessage: {type: String, default: getNoOptionsMessage()},
        resource: {type: String, default: (): null => null},
        searchStringResourceParam: {type: String, default: 'query'},
        searchOptions: {type: [Object, Function], default: (): null => null},
        searchPlaceholder: {type: String, default: ''},
    },
    data(): LktObject {
        const searchOptionsValue = new SearchOptionsValue(this.searchOptions);
        const optionsValue = new OptionsValue(this.options);
        return {
            Identifier: generateRandomString(16),
            originalValue: this.modelValue,
            value: this.modelValue,
            loading: false,
            updatedModelValue: false,
            latestTimestamp: Date.now(),
            visibleOptions: [],
            optionsHaystack: [],
            searchString: '',
            searchOptionsValue,
            optionsValue
        }
    },
    computed: {
        isSearchable(): boolean {
            return true;
        },
        isRemoteSearch(): boolean {
            return existsHTTPResource(this.resource);
        },
        renderSelectedOption: {
            cache: false,
            get() {
                let option = this.Options.filter((opt: any) => {
                    return opt.selected === true;
                });
                return option && option.length > 0 && typeof this.optionFormatter === 'function' ? this.optionFormatter(option[0]) : this.fetchString;
            }
        },
        isValid() {
            if (typeof this.valid === 'function') {
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
        },
        value(v: string) {
            this.$emit('update:modelValue', v)
            this.updatedModelValue = true;
            this.$nextTick(() => {this.updatedModelValue = false;})
        },
        searchOptions: {
            handler() {
                const searchOptionsValue = new SearchOptionsValue(this.searchOptions);
                this.searchOptionsValue = searchOptionsValue;
            }, deep: true
        },
        options: {
            handler() {
                const optionsValue = new OptionsValue(this.options);
                this.optionsValue = optionsValue;
            }, deep: true
        },
    },
    methods: {
        buildVisibleOptions() {
            this.optionsHaystack = this.optionsValue.all();
            this.visibleOptions = this.optionsValue.filter(this.searchString);
        },
        resetSearch () {
            this.searchString = '';
            this.buildVisibleOptions();
        },
        handleFocus() {
            if (this.isRemoteSearch) {
                const opts = this.searchOptionsValue.getOptions();

                if (this.searchStringResourceParam) {
                    opts[this.searchStringResourceParam] = this.searchString;
                }

                return httpCall(this.resource, opts).then( (results: any) => {
                    this.optionsValue.receiveOptions(results);
                    this.buildVisibleOptions();
                });

            } else {
                this.buildVisibleOptions();
            }
        },
        async handleInput(inputEvent: InputEvent) {
            if (this.updatedModelValue) {
                return ;
            }
            const target = inputEvent.target as HTMLInputElement | null;
            this.searchString = target?.value;

            await this.handleFocus();
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
            return typeof this.optionFormatter === 'function' ? this.optionFormatter(option) : option.label;
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
    mounted() {
        this.buildVisibleOptions();
    }
}