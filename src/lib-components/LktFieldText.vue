<script lang="ts">
export default {name: "LktFieldText", inheritAttrs: false}
</script>

<script lang="ts" setup>
// Emits
import {generateRandomString} from "lkt-string-tools";
import {computed, nextTick, ref, useSlots, watch} from "vue";
import {createLktEvent} from "lkt-events";
import {Settings} from "../settings/Settings";

const emits = defineEmits(['update:modelValue', 'keyup', 'keydown', 'focus', 'blur', 'click', 'click-info', 'click-error']);

// Slots
const slots = useSlots();

// Props
const props = defineProps({
    modelValue: {type: [String, Number, Array], default: ''},

    placeholder: {type: String, default: ''},
    label: {type: String, default: ''},
    palette: {type: String, default: ''},
    name: {type: String, default: generateRandomString(16)},
    valid: {type: Boolean, default: false},
    disabled: {type: Boolean, default: false},
    readonly: {type: Boolean, default: false},
    tabindex: {type: Number, default: undefined},
    mandatory: {type: Boolean, default: false},
    reset: {type: Boolean, default: false},
    resetMessage: {type: String, default: ''},
    mandatoryMessage: {type: String, default: ''},
    infoMessage: {type: String, default: ''},
    errorMessage: {type: String, default: ''},
    resetPasswordMessage: {type: String, default: ''},
    isTel: {type: Boolean, default: false},
    isEmail: {type: Boolean, default: false},
    isPassword: {type: Boolean, default: false},
});

// Constant data
const Identifier = generateRandomString(16);


// Components refs
const inputElement = ref(null);

// Reactive data
const originalValue = ref(props.modelValue),
    value = ref(props.modelValue),
    showPasswordIcon = ref(false);


const isValid = computed(() => {
        // @ts-ignore
        if (typeof props.valid === 'function') return props.valid();
        return props.valid;
    }),
    changed = computed(() => value.value !== originalValue.value),
    showInfoUi = computed(() => {
        return props.reset || props.infoMessage !== '' || props.errorMessage !== '' || (props.isPassword && props.resetPasswordMessage !== '');
    }),
    resetText = computed(() => {
        if (props.resetMessage !== '') return props.resetMessage;
        return Settings.RESET_MESSAGE;
    }),
    passwordIcon = computed(() => {
        return showPasswordIcon.value ? 'lkt-field__password-icon' : 'lkt-field__show-password-icon';
    }),
    type = computed(() => {
        if (props.isEmail) return 'email';
        if (props.isPassword) return 'password';
        if (props.isTel) return 'tel';
        return 'text';
    }),
    classes = computed(() => {
        const r = ['lkt-field', 'lkt-field-text'];

        if (props.palette) r.push(`lkt-field--${props.palette}`);
        if (type) r.push(`is-${type}`);
        if (changed.value) r.push('is-changed');
        if (props.disabled) r.push('is-disabled');

        r.push(isValid.value ? 'is-valid' : 'is-error');
        r.push(!!props.modelValue ? 'is-filled' : 'is-empty');

        return r.join(' ');
    });

const focus = () => {
    nextTick(() => {
        inputElement.value.focus();
    });
};


// Watch data
watch(() => props.modelValue, (v) => value.value = v)
watch(value, (v) => emits('update:modelValue', v))

const reset = () => value.value = originalValue.value,
    getValue = () => value.value,
    onKeyUp = ($event: any) => emits('keyup', $event, createLktEvent(Identifier, {value: value.value})),
    onKeyDown = ($event: any) => emits('keydown', $event, createLktEvent(Identifier, {value: value.value})),
    onFocus = ($event: any) => emits('focus', $event, createLktEvent(Identifier, {value: value.value})),
    onBlur = ($event: any) => emits('blur', $event, createLktEvent(Identifier, {value: value.value})),
    onClick = ($event: any) => emits('click', $event, createLktEvent(Identifier, {value: value.value})),
    onClickInfo = ($event: any) => emits('click-info', $event, createLktEvent(Identifier, {value: value.value})),
    onClickError = ($event: any) => emits('click-error', $event, createLktEvent(Identifier, {value: value.value})),
    onClickShowPassword = ($event: any) => showPasswordIcon.value = !showPasswordIcon.value;

defineExpose({
    Identifier,
    reset,
    focus,
    value: getValue,
    isMandatory: () => props.mandatory
});
</script>

<template>
    <div v-bind:class="classes"
         v-bind:data-show-ui="showInfoUi"
         v-bind:data-labeled="!!!slots.label"
    >
        <slot name="prefix"></slot>
        <template v-if="placeholder">
            <input v-model="value"
                   :ref="(el) => inputElement = el"
                   v-bind:type="type"
                   v-bind:name="name"
                   v-bind:id="Identifier"
                   v-bind:disabled="disabled"
                   v-bind:readonly="readonly"
                   v-bind:placeholder="placeholder"
                   v-bind:tabindex="tabindex"
                   v-on:keyup="onKeyUp"
                   v-on:keydown="onKeyDown"
                   v-on:focus="onFocus"
                   v-on:blur="onBlur"
                   v-on:click="onClick"
            >
        </template>
        <template v-else>
            <input v-model="value"
                   :ref="(el) => inputElement = el"
                   v-bind:type="type"
                   v-bind:name="name"
                   v-bind:id="Identifier"
                   v-bind:disabled="disabled"
                   v-bind:readonly="readonly"
                   v-bind:tabindex="tabindex"
                   v-on:keyup="onKeyUp"
                   v-on:keydown="onKeyDown"
                   v-on:focus="onFocus"
                   v-on:blur="onBlur"
                   v-on:click="onClick">
        </template>
        <slot v-if="!!slots.label" name="label"></slot>
        <label v-if="!!!slots.label" :for="Identifier" v-html="label"></label>

        <div class="lkt-field__state" v-if="showInfoUi">
            <i v-if="props.errorMessage" class="lkt-field__error-icon" :title="props.errorMessage"
               v-on:click="onClickError"></i>
            <i v-if="props.infoMessage" class="lkt-field__info-icon" :title="props.infoMessage"
               v-on:click="onClickInfo"></i>
            <i v-if="props.isPassword && props.resetPasswordMessage" :class="passwordIcon"
               :title="props.resetPasswordMessage"
               v-on:click="onClickShowPassword"></i>
            <i v-if="props.reset" class="lkt-field__reset-icon" :title="resetText" v-on:click="reset"></i>
            <i v-if="props.mandatory" class="lkt-field__mandatory-icon" :title="props.mandatoryMessage"></i>
        </div>
    </div>
</template>