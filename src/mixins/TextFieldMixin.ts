import {generateRandomString} from "lkt-string-tools";
import {LktObject} from "lkt-ts-interfaces";
import {slotProvided} from "lkt-vue-tools";
import {emitBlur, emitClick, emitFocus, emitKeyDown, emitKeyUp} from "../functions/vm-functions";
import {FieldClassesMixin} from "./styling/FieldClassesMixin";

export const TextFieldMixin = {
    emits: ['update:modelValue', 'keyup', 'keydown', 'focus', 'blur', 'click'],
    mixins: [FieldClassesMixin],
    props: {
        modelValue: {type: String, default: ''},
        placeholder: {type: String, default: ''},
        label: {type: String, default: ''},
        state: {type: String, default: ''},
        name: {type: String, default: generateRandomString(16)},
        valid: { type: [Boolean, Function], default: false, },
        disabled: { type: Boolean, default: false, },
        readonly: { type: Boolean, default: false, },
        emptyLabel: { type: Boolean, default: false, },
    },
    data(): LktObject {
        return {
            Identifier: generateRandomString(16),
            originalValue: this.modelValue,
            value: this.modelValue,
        }
    },
    computed: {
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
            console.log('updated modelValue', v, this.modelValue);
        },
        value(v: string) {
            console.log('updated value', v, this.value);
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

        reset() {
            this.modelValue = this.originalValue;
        },

        getValue(){
            return this.modelValue;
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
}