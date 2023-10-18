<script lang="ts">
export default {name: "LktFieldText", inheritAttrs: false}
</script>

<script lang="ts" setup>
// Emits
import {generateRandomString} from "lkt-string-tools";
import {computed, nextTick, ref, useSlots, watch} from "vue";
import {createLktEvent} from "lkt-events";
import {FieldCallToAction} from "../types/FieldCallToAction";
import {getStateConfigFromCTAForTextField} from "../functions/functions";
import {LktEvent} from "lkt-events/dist/types/classes/LktEvent";
import {StateKey} from "../types/StateKey";
import LktFieldState from "@/components/LktFieldState.vue";

const emits = defineEmits(['update:modelValue', 'keyup', 'keydown', 'focus', 'blur', 'click', 'click-ui']);

// Slots
const slots = useSlots()

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
    tabindex: {type: [Number, Boolean], default: false},
    reset: {type: [Boolean, String, Array<FieldCallToAction>], default: false},
    info: {type: [Boolean, String, Array<FieldCallToAction>], default: false},
    error: {type: [Boolean, String, Array<FieldCallToAction>], default: false},
});

let stateConfigValue = ref(null),
    stateTextValue = ref(null);


const refreshCTA = () => {
    //@ts-ignore
    const stateConfig = getStateConfigFromCTAForTextField(props.reset, props.info, props.error);

    stateConfigValue = ref(stateConfig.config).value;
    stateTextValue = ref(stateConfig.texts).value;
}

refreshCTA();

// Constant data
const Identifier = generateRandomString(16);


// Components refs
const inputElement = ref(null);

// Reactive data
const originalValue = ref(props.modelValue),
    value = ref(props.modelValue);


const isValid = computed(() => {
    // @ts-ignore
    if (typeof props.valid === 'function') return props.valid();
    return props.valid;
})
const changed = computed(() => value.value !== originalValue.value);


const showInfoUi = computed(() => {
    return stateConfigValue.amountEnabled() > 0;
});


const classes = computed(() => {
    const r = ['lkt-field'];

    if (props.palette) r.push(`lkt-field--${props.palette}`);
    if (changed.value) r.push('is-changed');
    if (props.disabled) r.push('is-disabled');

    r.push(isValid.value ? 'is-valid' : 'is-error');
    r.push(!!props.modelValue ? 'is-filled' : 'is-empty');

    return r.join(' ');
})

const focus = () => {
    nextTick(() => {
        inputElement.value.focus();
    });
};


// Watch data
watch(() => props.modelValue, (v) => value.value = v)
watch(value, (v) => emits('update:modelValue', v))

const reset = () => value.value = originalValue.value;
const getValue = () => value.value;
const onKeyUp = ($event: any) => emits('keyup', $event, createLktEvent(Identifier, {value: value.value}));
const onKeyDown = ($event: any) => emits('keydown', $event, createLktEvent(Identifier, {value: value.value}));
const onFocus = ($event: any) => emits('focus', $event, createLktEvent(Identifier, {value: value.value}));
const onBlur = ($event: any) => emits('blur', $event, createLktEvent(Identifier, {value: value.value}));
const onClick = ($event: any) => emits('click', $event, createLktEvent(Identifier, {value: value.value}));

const onClickUi = ($event: any, event: LktEvent) => {
    const id: StateKey = event.id;
    if (id === 'reset') return reset();
    emits('click-ui', $event, createLktEvent(event.id, {field: this}));
}

defineExpose({
    Identifier,
    reset,
    focus,
    value: getValue,
});
</script>


<template>
    <div class="is-text"
         v-bind:class="classes"
         v-bind:data-show-ui="showInfoUi"
         v-bind:data-labeled="!!!slots.label"
    >
        <slot name="prefix"></slot>
        <template v-if="placeholder">
            <input v-model="value"
                   :ref="(el) => inputElement = el"
                   type="text"
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
                   type="text"
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

        <lkt-field-state
            v-if="showInfoUi"
            v-bind:state-config-value="stateConfigValue"
            v-bind:state-texts-value="stateTextValue"
            v-on:click-ui="onClickUi"
        ></lkt-field-state>
    </div>
</template>