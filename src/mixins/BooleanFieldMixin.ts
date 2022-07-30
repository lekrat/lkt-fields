import {generateRandomString, ILktObject, isFunction, slotProvided} from "lkt-tools";

export const BooleanFieldMixin = {
    emits: ['update:modelValue'],
    props: {
        modelValue: {type: Boolean, default: false},
        placeholder: {type: String, default: ''},
        label: {type: String, default: ''},
        state: {type: String, default: ''},
        name: {type: String, default: generateRandomString(16)},
        valid: { type: [Boolean, Function], default: false, },
        disabled: { type: Boolean, default: false, },
        readonly: { type: Boolean, default: false, },
        emptyLabel: { type: Boolean, default: false, },
    },
    data(): ILktObject {
        return {
            Identifier: generateRandomString(16),
            originalValue: this.modelValue,
        }
    },
    computed: {
        isValid() {
            if (isFunction(this.valid)) {
                return this.valid();
            }
            return this.valid;
        },
        changed() {
            return this.Value !== this.originalValue;
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
            this.$emit('update:modelValue', v)
        }
    },
    methods: {
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

        getValue(){
            return this.modelValue;
        },

    },
}