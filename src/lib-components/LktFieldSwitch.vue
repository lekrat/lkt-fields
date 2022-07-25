<template>
    <div data-lkt="field-switch"
         v-bind:data-state="state"
         v-bind:data-error="invalid"
         v-bind:data-disabled="disabled"
         v-bind:data-changed="changed"
         v-bind:data-empty="!Value"
         v-bind:data-filled="!!Value"
    >
        <slot name="prefix"></slot>
        <input v-model="Value"
               type="checkbox"
               v-bind:name="name"
               v-bind:id="Identifier"
               v-bind:disabled="disabled"
               v-bind:readonly="readonly"
               v-bind:placeholder="placeholder">
        <slot v-if="canRenderLabelSlot" name="label"></slot>
        <label v-if="canRenderLabelHtml" v-bind:for="Identifier" v-html="label"></label>
    </div>
</template>

<script>
import {LktAbstractFieldMixin} from "../mixins/LktAbstractFieldMixin";

export default {
    name: "LktFieldSwitch",
    mixins: [LktAbstractFieldMixin],
    props: {
        value: {type: Boolean, default: false},
    },
    data() {
        return {
            Value: false,
            ValueOriginal: false,
        }
    },
}
</script>