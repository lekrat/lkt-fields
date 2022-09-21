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
            v-bind:state-config-value="stateConfigValue"
            v-bind:state-texts-value="stateTextValue"
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