<template>
    <div class="is-password"
         v-bind:class="classes"
         v-bind:data-show-ui="showInfoUi"
         v-bind:data-labeled="canRenderLabelHtml"
    >
        <slot name="prefix"></slot>
        <template v-if="placeholder">
            <input v-model="value"
                   v-bind:type="inputType"
                   v-bind:name="name"
                   v-bind:id="Identifier"
                   v-bind:disabled="disabled"
                   v-bind:readonly="readonly"
                   v-bind:placeholder="placeholder">
        </template>
        <template v-else>
            <input v-model="value"
                   v-bind:type="inputType"
                   v-bind:name="name"
                   v-bind:id="Identifier"
                   v-bind:disabled="disabled"
                   v-bind:readonly="readonly">
        </template>
        <slot v-if="canRenderLabelSlot" name="label"></slot>
        <label v-if="canRenderLabelHtml" v-bind:for="Identifier" v-html="label"></label>

        <lkt-field-state
            v-if="showInfoUi"
            v-bind:show-add="showAdd"
            v-bind:show-password="showPassword && value.length > 0"
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
            v-bind:text-password="textPassword"
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
    name: "LktFieldPassword",
    components: {lktFieldState},
    mixins: [TextFieldMixin, LktFieldStateMixin],
    data() {
        return {
            visiblePassword: false
        };
    },
    computed: {
        inputType() {
            if (this.visiblePassword) {
                return 'text';
            }
            return 'password';
        }
    }
}
</script>