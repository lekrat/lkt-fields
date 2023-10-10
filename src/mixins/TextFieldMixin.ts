import {generateRandomString} from "lkt-string-tools";
import {LktObject} from "lkt-ts-interfaces";
import {slotProvided} from "lkt-vue-tools";
import {emitBlur, emitClick, emitFocus, emitKeyDown, emitKeyUp} from "../functions/vm-functions";
import {FieldClassesMixin} from "./styling/FieldClassesMixin";
import {StateConfigValue} from "../value-objects/StateConfigValue";
import {PropType} from "vue";
import {StateConfig} from "../types/StateConfig";
import {StateTexts} from "../types/StateTexts";
import {StateTextValue} from "../value-objects/StateTextValue";

export const TextFieldMixin = {
    emits: ['update:modelValue', 'keyup', 'keydown', 'focus', 'blur', 'click', 'click-ui'],
    mixins: [FieldClassesMixin],
    props: {
        modelValue: {type: String, default: ''},
        placeholder: {type: String, default: ''},
        label: {type: String, default: ''},
        palette: {type: String, default: ''},
        name: {type: String, default: generateRandomString(16)},
        valid: { type: [Boolean, Function], default: false, },
        disabled: { type: Boolean, default: false, },
        readonly: { type: Boolean, default: false, },
        emptyLabel: { type: Boolean, default: false, },
        tabindex: { type: [Number, Boolean], default: false, },

        stateConfig: {type: Object as PropType<StateConfig>, default: () => { return {}}},
        stateTexts: {type: Object as PropType<StateTexts>, default: () => { return {}}}
    },
    data(): LktObject {

        return {
            Identifier: generateRandomString(16),
            originalValue: this.modelValue,
            value: this.modelValue,
            stateConfigValue: new StateConfigValue(this.stateConfig, this.disabled || this.readonly),
            stateTextValue: new StateTextValue(this.stateTexts),
        }
    },
    computed: {
        showInfoUi(){
            return this.stateConfigValue.amountEnabled() > 0;
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
        },
        stateConfig: {
            handler() {
                this.stateConfigValue = new StateConfigValue(this.stateConfig, this.disabled || this.readonly);
            }, deep: true
        },
        stateTexts: {
            handler() {
                this.stateTextValue = new StateTextValue(this.stateTexts);
            }, deep: true
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
            this.value = this.originalValue;
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