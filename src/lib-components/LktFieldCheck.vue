<template>
    <div data-lkt="field-check"
         v-bind:data-state="state"
         v-bind:data-error="!isValid"
         v-bind:data-disabled="disabled"
         v-bind:data-changed="changed"
         v-bind:data-empty="!modelValue"
         v-bind:data-filled="!!modelValue"
    >
        <slot name="prefix"></slot>
        <input v-model="modelValue"
               type="checkbox"
               v-bind:name="name"
               v-bind:id="Identifier"
               v-bind:disabled="disabled"
               v-bind:readonly="readonly"
               v-bind:placeholder="placeholder"
               v-bind:value="modelValue ? 'true' : 'false'">
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