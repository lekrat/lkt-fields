<template>
    <div class="lkt-field-radio"
         v-bind:data-state="state"
         v-bind:data-error="invalid"
         v-bind:data-disabled="disabled"
         v-bind:data-changed="changed"
         v-bind:data-empty="!Value"
         v-bind:data-filled="!!Value"
    >
        <slot name="prefix"></slot>
        <div data-role="option" v-for="(opt, i) in Options">
            <input type="radio"
                   v-model="Value"
                   v-bind:name="name"
                   v-bind:id="Identifier + i"
                   v-bind:disabled="disabled"
                   v-bind:readonly="readonly"
                   v-bind:placeholder="placeholder"
                   v-bind:value="opt.id"
                   v-bind:checked="opt.id === Value"
            >
            <label v-bind:for="Identifier + i" v-html="opt.text"></label>
        </div>
    </div>
</template>

<script lang="ts">
import {LktAbstractFieldMixin} from "../mixins/LktAbstractFieldMixin";
import {LktFieldWithOptionsMixin} from "../mixins/LktFieldWithOptionsMixin";

export default {
    name: "LktFieldRadio",
    mixins: [LktAbstractFieldMixin, LktFieldWithOptionsMixin],
    props: {
        value: {type: String, default: ''},
    },
}
</script>