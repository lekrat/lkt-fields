<template>
    <div class="is-check"
         v-bind:class="classes"
         v-bind:data-labeled="canRenderLabelHtml"
    >
        <slot name="prefix"></slot>
        <input v-model="Value"
               type="checkbox"
               ref="input"
               v-bind:name="name"
               v-bind:id="Identifier"
               v-bind:disabled="disabled"
               v-bind:readonly="readonly"
               v-bind:placeholder="placeholder"
               v-bind:value="Value ? 'true' : 'false'">
        <slot v-if="canRenderLabelSlot" name="label"></slot>
        <label v-if="canRenderLabelHtml" v-bind:for="Identifier" v-html="label"></label>
    </div>
</template>

<script>
import {BooleanFieldMixin} from "../mixins/BooleanFieldMixin";

export default {
    name: "LktFieldCheck",
    mixins: [BooleanFieldMixin],
}
</script>