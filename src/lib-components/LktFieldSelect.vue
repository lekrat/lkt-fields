<template>
    <div data-lkt="api-select"
         :data-state="state"
         :data-multiple="multiple"
         :data-show-ui="showInfoUi"
         :data-error="invalid"
         :data-disabled="disabled"
         :data-changed="changed"
         :data-empty="!Value"
         :data-filled="!!Value"
    >
        <slot name="prefix"></slot>

        <vue-next-select
            v-model="Value"
            v-bind:options="[{label: 'red', id: 1}, {label: 'green', value: 2,},{ label: 'test', id: 3, children: [{label: 'yellow', id: 4}]}]"
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
import {LktAbstractFieldMixin} from "../mixins/LktAbstractFieldMixin";
import {LktFieldStateMixin} from "../mixins/LktFieldStateMixin";
import {LktFieldWithOptionsMixin} from "../mixins/LktFieldWithOptionsMixin";
import VueNextSelect from 'vue-next-select';

export default {
    name: "LktFieldSelect",
    components: {lktFieldState, VueNextSelect},
    mixins: [LktAbstractFieldMixin, LktFieldStateMixin, LktFieldWithOptionsMixin],
}
</script>