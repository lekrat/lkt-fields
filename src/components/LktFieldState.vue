<template>
    <div class="lkt-field__state">
        <i class="lkt-field__add-icon" v-if="showAdd" v-bind:title="textAdd" v-on:click="onUIStatusClick($event, 'add')"></i>
        <i class="lkt-field__open-icon" v-if="showOpen" v-bind:title="textOpen" v-on:click="onUIStatusClick($event, 'open')"></i>
        <i class="lkt-field__link-icon" v-if="showLink" v-bind:title="textLink" v-on:click="onUIStatusClick($event, 'link')"></i>
        <i class="lkt-field__info-icon" v-if="showInfo" v-bind:title="textInfo" v-on:click="onUIStatusClick($event, 'info')"></i>
        <i class="lkt-field__show-password-icon" v-if="showPassword" v-bind:title="textPassword" v-on:click="onUIStatusClick($event, 'show-password')"></i>
        <i class="lkt-field__log-icon" v-if="showLog" v-bind:title="textLog" v-on:click="onUIStatusClick($event, 'log')"></i>
        <i class="lkt-field__warn-icon" v-if="showWarn" v-bind:title="textWarn" v-on:click="onUIStatusClick($event, 'warn')"></i>
        <i class="lkt-field__error-icon" v-if="showError" v-bind:title="textError" v-on:click="onUIStatusClick($event, 'error')"></i>
        <i class="lkt-field__mandatory-icon" v-if="showMandatory" v-bind:title="textMandatory" v-on:click="onUIStatusClick($event, 'mandatory')"></i>
        <i class="lkt-field__reset-icon" v-if="showReset" v-bind:title="textReset" v-on:click="onUIStatusClick($event, 'reset')"></i>
    </div>
</template>

<script lang="ts">
import {LktStateUIMixin} from "../mixins/LktStateUIMixin";

export default {
name: "lktFieldState",
    emits: ['click-ui'],
    mixins: [LktStateUIMixin]
}
</script>
