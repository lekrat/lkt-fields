<template>
    <div class="is-editor"
         v-bind:class="classes"
         v-bind:data-show-ui="showInfoUi"
         v-bind:data-labeled="canRenderLabelHtml"
    >
        <slot name="prefix"></slot>
        <textarea v-model="value"
                  :name="name"
                  :id="Identifier"
                  :disabled="disabled"
                  :readonly="readonly"
                  :placeholder="placeholder"></textarea>
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
import {createKatexEditor} from "../functions/wysiwyg-functions";
import LktFieldState from "../components/LktFieldState.vue";
import {EditorFieldMixin} from "../mixins/EditorFieldMixin";
import {DEFAULT_KATEX_BUTTONS} from "../constants";

export default {
    name: "LktFieldKatex",
    components: {LktFieldState},
    mixins: [EditorFieldMixin],
    props: {
        editorOptions: {
            type: Object, default() {
                return {buttonList: DEFAULT_KATEX_BUTTONS};
            }
        }
    },

    mounted() {
        this.editor = createKatexEditor(this.editorOptions, this.lang, this.Identifier);
        this.editor.onChange = this.storeEditorValue;
        this.updateEditorDisabled();
    }
}
</script>