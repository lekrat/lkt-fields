import {generateRandomString, isFunction} from "lkt-tools";
import {createLktEvent} from "lkt-events";

export const LktAbstractFieldMixin = {
    props: {
        value: {type: [String, Number, Object, Array, Date, Boolean], default: (): undefined => { return undefined; }},
        placeholder: {type: String, default: ''},
        label: {type: String, default: ''},
        state: {type: String, default: ''},
        name: {type: String, default: generateRandomString(16)},
        invalid: { type: Boolean, default: false, },
        disabled: { type: Boolean, default: false, },
        readonly: { type: Boolean, default: false, },
        canReset: { type: Boolean, default: false, },
        emptyLabel: { type: Boolean, default: false, },
    },
    data(): object {
        return {
            Value: this.value,
            Identifier: generateRandomString(16),
            canEmit: false,
            originalValue: this.value,
        }
    },
    computed: {
        changed() {
            return this.Value !== this.originalValue;
        },
        canRenderLabelSlot() {
            return !!this.$slots['label'];
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
    methods: {
        setIsDisabled(status: boolean = false) {
            this.disabled = status === true;
            return this;
        },
        isDisabled() {
            return this.disabled;
        },

        reset() {
            this.Value = undefined;
        },

        getValue(){
            return this.Value;
        },

        onKeyUp($event: any) {
            this.$emit('keyup', $event, createLktEvent(this.name, {value: this.Value}))
        },

        onKeyDown($event: any) {
            this.$emit('keydown', $event, createLktEvent(this.name, {value: this.Value}))
        },

        onFocus($event: any) {
            this.$emit('focus', $event, createLktEvent(this.name, {value: this.Value}))
        },

        onBlur($event: any) {
            this.$emit('blur', $event, createLktEvent(this.name, {value: this.Value}))
        },

        onClick($event: any) {
            this.$emit('click', $event, createLktEvent(this.name, {value: this.Value}))
        }

    },
    watch: {
        value(v: any) {
            this.Value = v;
        },
        Value(v: any) {
            this.validate(v);
            if (this.canEmit === true) {
                this.$emit('input', v);
                this.$emit('change', v);
            }
        }
    },
    // created() {
    //     if (this.loadOptions && isFunction(this.loadOptions)){
    //         this.loadOptions(this.options);
    //     }
    // },
    mounted() {
        this.canEmit = true;
    }
}