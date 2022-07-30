<template>
    <div data-lkt="select"
         :data-state="state"
         :data-multiple="multiple"
         :data-show-ui="showInfoUi"
         :data-error="!isValid"
         :data-disabled="disabled"
         :data-changed="changed"
         :data-empty="isEmpty"
         :data-filled="!isEmpty"
    >
        <slot name="prefix"></slot>

        <vue-next-select
            v-model="value"
            v-bind:options="Options"
            v-bind:label-by="'label'"
            v-bind:group-by="'group'"
            v-bind:visible-options="visibleOptions"
            v-bind:searchable="isSearchable"
            v-bind:multiple="multiple"
            v-bind:loading="loading"
            v-on:search:input="handleInput"
            v-bind:search-placeholder="searchPlaceholder"
            clear-on-close
        > </vue-next-select>

        <slot v-if="canRenderLabelSlot" name="label"></slot>
        <label v-if="canRenderLabelHtml" :for="Identifier" v-html="label"></label>

        <lkt-field-state
            v-if="showInfoUi"
            :show-add="showAdd"
            :show-error="showError"
            :show-info="showInfo"
            :show-log="showLog"
            :show-warn="showWarn"
            :text-add="textAdd"
            :text-error="textError"
            :text-info="textInfo"
            :text-log="textLog"
            :text-warn="textWarn"
            :show-mandatory="showMandatory"
            :text-mandatory="textMandatory"
            :show-open="showOpen"
            :text-open="textOpen"
            :show-link="showLink"
            :text-link="textLink"
            :text-reset="textReset"
            :show-reset="showReset && !disabled"
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
}
</script>