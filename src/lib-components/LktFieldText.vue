<template>
    <div class="is-text"
         v-bind:class="classes"
         v-bind:data-show-ui="showInfoUi"
         v-bind:data-labeled="canRenderLabelHtml"
    >
        <slot name="prefix"></slot>
        <template v-if="placeholder">
            <input v-model="value"
                   ref="input"
                   type="text"
                   v-bind:name="name"
                   v-bind:id="Identifier"
                   v-bind:disabled="disabled"
                   v-bind:readonly="readonly"
                   v-bind:placeholder="placeholder"
                   v-bind:tabindex="tabindex"
                   v-on:keyup="onKeyUp"
                   v-on:keydown="onKeyDown"
                   v-on:focus="onFocus"
                   v-on:blur="onBlur"
                   v-on:click="onClick"
            >
        </template>
        <template v-else>
            <input v-model="value"
                   ref="input"
                   type="text"
                   v-bind:name="name"
                   v-bind:id="Identifier"
                   v-bind:disabled="disabled"
                   v-bind:readonly="readonly"
                   v-bind:tabindex="tabindex"
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
            v-bind:state-config-value="stateConfigValue"
            v-bind:state-texts-value="stateTextValue"
            v-on:click-ui="onClickUi"
        ></lkt-field-state>
    </div>
</template>

<script>
import {LktFieldStateMixin} from "../mixins/LktFieldStateMixin";
import lktFieldState from "../components/LktFieldState.vue";
import {TextFieldMixin} from "../mixins/TextFieldMixin";

export default {
    name: "LktFieldText",
    components: {lktFieldState},
    mixins: [TextFieldMixin, LktFieldStateMixin],
}
</script>