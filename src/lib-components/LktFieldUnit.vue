<template>
    <div class="lkt-field-unit"
         v-bind:data-state="state"
         v-bind:data-show-ui="showInfoUi"
         v-bind:data-error="invalid"
         v-bind:data-disabled="disabled"
         v-bind:data-changed="changed"
         v-bind:data-empty="!Value"
         v-bind:data-filled="!!Value"
         v-bind:data-ranged="addRange"
    >
        <input v-if="addRange"
               type="range"
               v-bind:id="Identifier + 'Points'"
               v-bind:name="name + 'Points'"
               v-model="Value"
               v-bind:disabled="disabled"
               v-bind:readonly="readonly"
               v-bind:min="Min"
               v-bind:max="Max">

        <slot name="prefix"></slot>
        <input v-model="Value"
               type="number"
               v-bind:name="name"
               v-bind:id="Identifier"
               v-bind:disabled="disabled"
               v-bind:readonly="readonly"
               v-bind:min="Min"
               v-bind:max="Max"
               v-bind:step="step"
               v-bind:placeholder="placeholder">
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

<script lang="ts">
import {LktAbstractFieldMixin} from "../mixins/LktAbstractFieldMixin";
import {LktFieldStateMixin} from "../mixins/LktFieldStateMixin";
import lktFieldState from "../components/LktFieldState.vue";

export default {
    name: "LktFieldUnit",
    components: {lktFieldState},
    mixins: [LktAbstractFieldMixin, LktFieldStateMixin],
    props: {
        value: { type: [Number, String], default: ''},
        min: { type: [Number, undefined], default: undefined },
        max: { type: [Number, undefined], default: undefined },
        step: { type: [Number, String], default: 1 },
        addRange: { type: Boolean, default: false }
    },
    data() {
        return {
            Value: 0,
            updating: false,
        }
    },
    computed: {
        Min(){
            if (typeof this.min !== 'undefined') {
                return parseInt(this.min);
            }
            return false;
        },
        Max(){
            if (typeof this.max !== 'undefined') {
                return parseInt(this.max);
            }
            return false;
        }
    },
    watch: {
        Value(v: any) {
            if (this.canEmit === true) {
                if (this.updating) {
                    return;
                }
                this.updating = true;
                if (this.reAssign(v)) {
                    this.$nextTick(() => {
                        this.updating = false;
                    });
                    return;
                }
                this.validate(v);
                this.$emit('input', v);
                this.$emit('change', v);
                this.$nextTick(() => {
                    this.updating = false;
                });
            }
        },
        min() {
            this.reAssign(this.Value);
        },
        max() {
            this.reAssign(this.Value);
        },
    },
    methods: {
        reAssign(v: any) {
            v = Number(v);
            let reAssign = false;
            if (this.min !== false && v < this.min) {
                v = this.min;
                reAssign = true;
            } else if (this.max !== false && v > this.max) {
                v = this.max;
                reAssign = true;
            }
            if (reAssign === true) {
                this.Value = v;
                return true;
            }
            return false;
        }
    }
}
</script>
