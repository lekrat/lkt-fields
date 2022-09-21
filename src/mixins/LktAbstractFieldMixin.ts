import {generateRandomString} from "lkt-string-tools";
import {emitBlur, emitClick, emitFocus, emitKeyDown, emitKeyUp} from "../functions/vm-functions";

export const LktAbstractFieldMixin = {
    props: {
        modelValue: {type: [String, Number, Object, Array, Date, Boolean], default: (): undefined => { return undefined; }},
        placeholder: {type: String, default: ''},
        label: {type: String, default: ''},
        palette: {type: String, default: ''},
        name: {type: String, default: generateRandomString(16)},
        invalid: { type: Boolean, default: false, },
        disabled: { type: Boolean, default: false, },
        readonly: { type: Boolean, default: false, },
        canReset: { type: Boolean, default: false, },
        emptyLabel: { type: Boolean, default: false, },
    },
    data(): object {
        return {
            Value: this.modelValue,
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
            emitKeyUp(this, $event, this.name, {value: this.Value});
        },

        onKeyDown($event: any) {
            emitKeyDown(this, $event, this.name, {value: this.Value});
        },

        onFocus($event: any) {
            emitFocus(this, $event, this.name, {value: this.Value});
        },

        onBlur($event: any) {
            emitBlur(this, $event, this.name, {value: this.Value});
        },

        onClick($event: any) {
            emitClick(this, $event, this.name, {value: this.Value});
        }

    },
    watch: {
        value(v: any) {
            this.Value = v;
        },
        Value(v: any) {
            if (this.canEmit === true) {
                this.$emit('input', v);
                this.$emit('change', v);
            }
        },
    },
    mounted() {
        this.canEmit = true;
    }
}