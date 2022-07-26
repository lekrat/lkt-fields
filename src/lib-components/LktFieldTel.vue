<template>
    <div data-lkt="field-tel"
         v-bind:data-show-ui="showInfoUi"
         v-bind:data-error="!isValid"
         v-bind:data-disabled="disabled"
         v-bind:data-changed="changed"
         v-bind:data-empty="isEmpty"
         v-bind:data-filled="!isEmpty"
    >
        <slot name="prefix"></slot>
        <template v-if="placeholder">
            <input v-model="value"
                   type="tel"
                   v-bind:name="name"
                   v-bind:id="Identifier"
                   v-bind:disabled="disabled"
                   v-bind:readonly="readonly"
                   v-bind:placeholder="placeholder">
        </template>
        <template v-else>
            <input v-model="value"
                   type="tel"
                   v-bind:name="name"
                   v-bind:id="Identifier"
                   v-bind:disabled="disabled"
                   v-bind:readonly="readonly">
        </template>
        <slot v-if="canRenderLabelSlot" name="label"></slot>
        <label v-if="canRenderLabelHtml" :for="Identifier" v-html="label"></label>
        <lkt-field-state
            v-if="showInfoUi"
            v-bind:show-error="showError"
            v-bind:show-info="showInfo"
            v-bind:show-log="showLog"
            v-bind:show-warn="showWarn"
            v-bind:text-error="textError"
            v-bind:text-info="textInfo"
            v-bind:text-log="textLog"
            v-bind:text-warn="textWarn"
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

<script lang="ts">
import {LktFieldStateMixin} from "../mixins/LktFieldStateMixin";
import lktFieldState from "../components/LktFieldState.vue";
import {TextFieldMixin} from "../mixins/TextFieldMixin";

export default {
    name: "LktFieldTel",
    components: {lktFieldState},
    mixins: [TextFieldMixin, LktFieldStateMixin],
}
</script>