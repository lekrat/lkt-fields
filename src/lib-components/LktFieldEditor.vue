<template>
    <div data-lkt="field-editor"
         :data-state="state"
         :data-show-ui="showInfoUi"
         :data-error="!isValid"
         :data-disabled="disabled"
         :data-changed="changed"
         :data-empty="isEmpty"
         :data-filled="!isEmpty"
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
import LktFieldState from "./../components/LktFieldState.vue";
import {createSunEditor} from "../functions/wysiwyg-functions";
import {EditorFieldMixin} from "../mixins/EditorFieldMixin";

export default {
    name: "LktFieldEditor",
    components: {LktFieldState},
    mixins: [EditorFieldMixin],

    mounted() {
        this.editor = createSunEditor(this.editorOptions, this.lang, this.Identifier);
        this.editor.onChange = this.storeEditorValue;
        this.updateEditorDisabled();
    }
}
</script>