<script lang="ts">
import lktFieldState from "../components/LktFieldState.vue";
import {LktFieldStateMixin} from "../mixins/LktFieldStateMixin";
import VueNextSelect from 'vue-next-select';

export default {
    name: "LktFieldSelect",
    inheritAttrs: false,
    components: {lktFieldState, VueNextSelect},
    mixins: [LktFieldStateMixin]
}
</script>

<script lang="ts" setup>
import {generateRandomString} from "lkt-string-tools";
import {getNoOptionsMessage} from "../functions/settings-functions";
import {SearchOptionsValue} from "../value-objects/SearchOptionsValue";
import {OptionsValue} from "../value-objects/OptionsValue";
import {computed, nextTick, ref, useSlots, watch} from "vue";
import {existsHTTPResource, httpCall} from "lkt-http";
import {LktEvent} from "lkt-events/dist/types/classes/LktEvent";
import {StateKey} from "../types/StateKey";
import {Option} from "../types/Option";
import {createLktEvent} from "lkt-events";

// Emits
const emits = defineEmits(['update:modelValue', 'click-ui']);

// Slots
const slots = useSlots()

// Props
const props = defineProps({
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
    options: {type: Array, default: (): Option[] => []},
    disabledOptions: {type: Array, default: (): Array<any> => []},
    multiple: {type: Boolean, default: false},
    canTag: {type: Boolean, default: false},
    noOptionsMessage: {type: String, default: getNoOptionsMessage()},
    resource: {type: String, default: (): null => null},
    searchStringResourceParam: {type: String, default: 'query'},
    searchOptions: {type: [Object, Function], default: (): null => null},
    searchPlaceholder: {type: String, default: ''}
});

// Constant data
const Identifier = generateRandomString(16);

// Reactive data
const searchOptionsValue = ref(new SearchOptionsValue(props.searchOptions)),
    //@ts-ignore
    optionsValue = ref(new OptionsValue([...props.options])),
    closeAfterSelect = ref(false),
    originalValue = ref(props.modelValue),
    value = ref(props.modelValue),
    loading = ref(false),
    updatedModelValue = ref(false),
    visibleOptions = ref([...props.options]),
    optionsHaystack = ref([...props.options]),
    searchString = ref('')
;

if (props.closeOnSelect === null) {
    closeAfterSelect.value = props.multiple === true;
} else {
    closeAfterSelect.value = props.closeOnSelect;
}

// Computed data
const canRenderLabelSlot = computed(() => !!slots.label);
const canRenderLabelHtml = computed(() => {
    if (canRenderLabelSlot) return false;
    if (!props.label && props.emptyLabel) return true;
    return !!props.label;
});
const isRemoteSearch = computed(() => existsHTTPResource(props.resource));
const isValid = computed(() => {
    if (typeof props.valid === 'function') return props.valid();
    return props.valid;
})
const changed = computed(() => value.value !== originalValue.value);

const classes = computed(() => {
    const r = ['lkt-field'];

    if (props.palette) {
        r.push(`lkt-field--${props.palette}`);
    }

    if (changed.value) {
        r.push('is-changed');
    }

    if (props.multiple) {
        r.push('is-multiple');
    }

    if (props.disabled) {
        r.push('is-disabled');
    }

        // const amountEnabled = this.stateConfigValue.amountEnabled();
        // if (amountEnabled > 0) {
        //     r.push(`has-icons`);
        //     r.push(`has-icons-${amountEnabled}`);
        // }

    r.push(isValid.value ? 'is-valid' : 'is-error');
    r.push(!!props.modelValue ? 'is-filled' : 'is-empty');

    return r.join(' ');
})

// Watch data
watch(() => props.modelValue, (v) => {
    value.value = v;
})

watch(value, (v) => {
    emits('update:modelValue', v);
    updatedModelValue.value = true;
    nextTick(() => updatedModelValue.value = false);
})

watch(() => props.searchOptions, (v) => {
    searchOptionsValue.value = new SearchOptionsValue(v);
})

watch(() => props.options, (v: Option[]) => {
    optionsValue.value = new OptionsValue(v);
})

// Methods
const buildVisibleOptions = () => {
    optionsHaystack.value = optionsValue.value.all();
    visibleOptions.value = optionsValue.value.filter(searchString.value);
}


const resetSearch = () => {
    searchString.value = '';
    buildVisibleOptions();
}

const handleFocus = async () => {
    if (isRemoteSearch.value) {
        const opts = searchOptionsValue.value.getOptions();

        if (props.searchStringResourceParam) {
            opts[props.searchStringResourceParam] = searchString.value;
        }

        const results = await httpCall(props.resource, opts);
        optionsValue.value.receiveOptions(results);
        buildVisibleOptions();

    } else {
        buildVisibleOptions();
    }
}

const handleInput = async (inputEvent: InputEvent) => {
    if (updatedModelValue.value) return;
    const target = inputEvent.target as HTMLInputElement | null;
    searchString.value = target?.value;

    await handleFocus();
}

const reset = () => {
    value.value = originalValue.value;
}

const getValue = () => {
    return props.modelValue;
}

const onClickUi = ($event: any, event: LktEvent) => {
    const id: StateKey = event.id;
    if (id === 'reset') return reset();
    emits('click-ui', $event, createLktEvent(event.id, {field: this}));
}


// Mounted actions
buildVisibleOptions();

</script>

<template>
    <div class="is-select"
         v-bind:class="classes"
         v-bind:data-show-ui="false"
         v-bind:data-labeled="canRenderLabelHtml"
    >
        <slot name="prefix"></slot>

        <vue-next-select
            v-model="value"
            v-bind:options="optionsHaystack"
            v-bind:label-by="'label'"
            v-bind:group-by="'group'"
            v-bind:value-by="'value'"
            v-bind:visible-options="visibleOptions"
            v-bind:searchable="true"
            v-bind:multiple="multiple"
            v-bind:taggable="multiple"
            v-bind:loading="loading"
            v-bind:disabled="disabled"
            v-on:focus="handleFocus"
            v-on:search:input="handleInput"
            v-on:update:modelValue="resetSearch"
            v-bind:search-placeholder="searchPlaceholder"
            v-bind:close-on-select="closeAfterSelect"
            clear-on-close
        ></vue-next-select>

        <slot v-if="canRenderLabelSlot" name="label"></slot>
        <label v-if="canRenderLabelHtml" :for="Identifier" v-html="label"></label>

        <lkt-field-state
            v-if="false"
            v-bind:state-config-value="undefined"
            v-bind:state-texts-value="undefined"
            v-on:click-ui="onClickUi"
        ></lkt-field-state>
    </div>
</template>