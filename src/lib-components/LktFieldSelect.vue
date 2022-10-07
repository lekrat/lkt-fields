<template>
    <div class="is-select"
         v-bind:class="classes"
         v-bind:data-show-ui="showInfoUi"
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
            v-bind:searchable="isSearchable"
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
        > </vue-next-select>

        <slot v-if="canRenderLabelSlot" name="label"></slot>
        <label v-if="canRenderLabelHtml" :for="Identifier" v-html="label"></label>

        <lkt-field-state
            v-if="showInfoUi"
            v-bind:state-config-value="stateConfigValue"
            v-bind:state-texts-value="stateTextValue"
            @click-ui="onClickUi"
        ></lkt-field-state>
    </div>
</template>

<script lang="ts">
import lktFieldState from "../components/LktFieldState.vue";
import {LktFieldStateMixin} from "../mixins/LktFieldStateMixin";
import VueNextSelect from 'vue-next-select';
import {SelectFieldMixin} from "../mixins/SelectFieldMixin";

export default {
    name: "LktFieldSelect",
    components: {lktFieldState, VueNextSelect},
    mixins: [SelectFieldMixin, LktFieldStateMixin],
    props: {showTest: {type: Boolean, default: false}}
}
</script>