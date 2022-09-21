<template>
    <div class="lkt-field__state">
        <i v-for="icon in enabledIcons" v-bind:class="'lkt-field__' + icon + '-icon'" v-bind:title="stateTextsValue.text(icon)" v-on:click="onUIStatusClick($event, icon)"></i>
    </div>
</template>

<script lang="ts">
import {PropType} from "vue";
import {emitClickUI} from "../functions/vm-functions";
import {StateConfigValue} from "../value-objects/StateConfigValue";
import {StateTextValue} from "../value-objects/StateTextValue";

export default {
name: "lktFieldState",
    emits: ['click-ui'],
    props: {
        stateConfigValue: {type: Object as PropType<StateConfigValue>, default: () => { return {}}},
        stateTextsValue: {type: Object as PropType<StateTextValue>, default: () => { return {}}}
    },
    computed: {
        enabledIcons(){
            return this.stateConfigValue.enabled();
        }
    },

    methods: {
        /**
         *
         * @param $event
         * @param key
         * @param data
         */
        onUIStatusClick($event: any, key: string, data:any = {}){
            emitClickUI(this, $event, key, data);
        },
    }
}
</script>
