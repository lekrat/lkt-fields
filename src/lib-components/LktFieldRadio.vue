<template>
    <div class="is-radio"
         v-bind:class="classes"
         v-bind:data-labeled="canRenderLabelHtml"
    >
        <slot name="prefix"></slot>
        <div class="lkt-field__option" v-for="(opt, i) in optionsValue.all()">
            <input type="radio"
                   v-model="Value"
                   v-bind:name="name"
                   v-bind:id="Identifier + i"
                   v-bind:disabled="disabled"
                   v-bind:readonly="readonly"
                   v-bind:placeholder="placeholder"
                   v-bind:value="opt.value"
                   v-bind:checked="opt.value === Value"
            >
            <label v-bind:for="Identifier + i" v-html="opt.label"></label>
        </div>
    </div>
</template>

<script lang="ts">
import {RadioFieldMixin} from "../mixins/RadioFieldMixin";

export default {
    name: "LktFieldRadio",
    mixins: [RadioFieldMixin],
    props: {
        value: {type: String, default: ''},
    },
}
</script>