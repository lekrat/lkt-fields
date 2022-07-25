<template>
    <div data-lkt="field-text"
         v-bind:data-state="state"
         v-bind:data-show-ui="showInfoUi"
         v-bind:data-error="invalid"
         v-bind:data-disabled="disabled"
         v-bind:data-changed="changed"
         v-bind:data-empty="!Value"
         v-bind:data-filled="!!Value"
         v-bind:data-labeled="canRenderLabelHtml"
    >
        <slot name="prefix"></slot>
        <template v-if="placeholder">
            <input v-model="Value"
                   ref="input"
                   type="text"
                   v-bind:name="name"
                   v-bind:id="Identifier"
                   v-bind:disabled="disabled"
                   v-bind:readonly="readonly"
                   v-bind:placeholder="placeholder"
                   v-on:keyup="onKeyUp"
                   v-on:keydown="onKeyDown"
                   v-on:focus="onFocus"
                   v-on:blur="onBlur"
                   v-on:click="onClick"
            >
        </template>
        <template v-else>
            <input v-model="Value"
                   ref="input"
                   type="text"
                   v-bind:name="name"
                   v-bind:id="Identifier"
                   v-bind:disabled="disabled"
                   v-bind:readonly="readonly"
                   v-on:keyup="onKeyUp"
                   v-on:keydown="onKeyDown"
                   v-on:focus="onFocus"
                   v-on:blur="onBlur"
                   v-on:click="onClick">
        </template>
        <slot v-if="canRenderLabelSlot" name="label"></slot>
        <label v-if="canRenderLabelHtml" :for="Identifier" v-html="label"></label>

        <lkt-field-state
            v-if="showInfoUi"
            v-bind:show-add="showAdd"
            v-bind:show-error="showError"
            v-bind:show-info="showInfo"
            v-bind:show-log="showLog"
            v-bind:show-warn="showWarn"
            v-bind:text-add="textAdd"
            v-bind:text-error="textError"
            v-bind:text-info="textInfo"
            v-bind:text-log="textLog"
            v-bind:text-warn="textWarn"
            v-bind:show-mandatory="showMandatory"
            v-bind:text-mandatory="textMandatory"
            v-bind:show-open="showOpen"
            v-bind:text-open="textOpen"
            v-bind:show-link="showLink"
            v-bind:text-link="textLink"
            v-bind:text-reset="textReset"
            v-bind:show-reset="showReset && !disabled"
            v-on:click-ui="onClickUi"
        ></lkt-field-state>
    </div>
</template>

<script>
import {LktAbstractFieldMixin} from "../mixins/LktAbstractFieldMixin";
import {LktFieldStateMixin} from "../mixins/LktFieldStateMixin";
import lktFieldState from "../components/LktFieldState.vue";

export default {
    name: "LktFieldText",
    components: {lktFieldState},
    mixins: [LktAbstractFieldMixin, LktFieldStateMixin],
    emits: ['input', 'change', 'keyup', 'keydown', 'focus', 'blur', 'click'],
    props: {
        value: {type: String, default: ''},
    },
    methods: {
        focus() {
            this.$nextTick(() => {
                this.$refs.input.focus();
            });
        }
    }
}
</script>