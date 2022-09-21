import {generateRandomString} from "lkt-string-tools";
import {slotProvided} from "lkt-vue-tools";
import {LktObject} from "lkt-ts-interfaces";
import {FieldClassesMixin} from "./styling/FieldClassesMixin";
import {OptionsValue} from "../value-objects/OptionsValue";
import {Option} from "../types/Option";

export const RadioFieldMixin = {
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
    },
    data(): LktObject {
        const optionsValue = new OptionsValue(this.options);
        return {
            Identifier: generateRandomString(16),
            originalValue: this.modelValue,
            value: this.modelValue,
            loading: false,
            updatedModelValue: false,
            latestTimestamp: Date.now(),
            optionsValue
        }
    },
    computed: {
        isValid() {
            if (typeof this.valid === 'function') {
                return this.valid();
            }
            return this.valid;
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
        options: {
            handler() {
                const optionsValue = new OptionsValue(this.options);
                this.optionsValue = optionsValue;
            }, deep: true
        },
    },
    methods: {
        renderOption(option: Option) {
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
}