<template>
    <div data-lkt="field-state-ui">
        <i data-lkt="add-icon" v-if="showAdd" v-bind:title="textAdd" v-on:click="onUIStatusClick($event, 'add')"></i>
        <i data-lkt="open-icon" v-if="showOpen" v-bind:title="textOpen" v-on:click="onUIStatusClick($event, 'open')"></i>
        <i data-lkt="link-icon" v-if="showLink" v-bind:title="textLink" v-on:click="onUIStatusClick($event, 'link')"></i>
        <i data-lkt="info-icon" v-if="showInfo" v-bind:title="textInfo" v-on:click="onUIStatusClick($event, 'info')"></i>
        <i data-lkt="show-password-icon" v-if="showPassword" v-bind:title="textPassword" v-on:click="onUIStatusClick($event, 'show-password')"></i>
        <i data-lkt="log-icon" v-if="showLog" v-bind:title="textLog" v-on:click="onUIStatusClick($event, 'log')"></i>
        <i data-lkt="warn-icon" v-if="showWarn" v-bind:title="textWarn" v-on:click="onUIStatusClick($event, 'warn')"></i>
        <i data-lkt="error-icon" v-if="showError" v-bind:title="textError" v-on:click="onUIStatusClick($event, 'error')"></i>
        <i data-lkt="mandatory-icon" v-if="showMandatory" v-bind:title="textMandatory" v-on:click="onUIStatusClick($event, 'mandatory')"></i>
        <i data-lkt="reset-icon" v-if="showReset" v-bind:title="textReset" v-on:click="onUIStatusClick($event, 'reset')"></i>
    </div>
</template>

<script lang="ts">
import {LktStateUIMixin} from "../mixins/LktStateUIMixin";

export default {
name: "lktFieldState",
    mixins: [LktStateUIMixin]
}
</script>

<style lang="scss">
    [data-lkt="add-icon"] {
        &:before {
            content: '\002B';
        }
    }
    [data-lkt="info-icon"] {
        &:before {
            content: '\2139';
        }
    }
    [data-lkt="show-password-icon"] {
        &:before {
            content: '\1F441';
        }
    }
    [data-lkt="mandatory-icon"] {
        &:before {
            content: '\002A';
        }
    }
    [data-lkt="warn-icon"] {
        &:before {
            content: '\26A0';
        }
    }
    [data-lkt="error-icon"] {
        &:before {
            content: '\274C';
        }
    }
    [data-lkt="log-icon"] {
        &:before {
            content: '\003F';
        }
    }
    [data-lkt="reset-icon"] {
        &:before {
            content: '\00d7';
        }
    }
    [data-lkt="open-icon"] {
        &:before {
            content: '\21F1';
            transform: rotate(90deg);
            display: block;
        }
    }
    [data-lkt="link-icon"] {
        &:before {
            content: '\21B5';
            transform: rotate(180deg);
            display: block;
            margin-top: -5px;
        }
    }

    [data-lkt="add-icon"],
    [data-lkt="open-icon"],
    [data-lkt="show-password-icon"],
    [data-lkt="link-icon"],
    [data-lkt="mandatory-icon"],
    [data-lkt="info-icon"],
    [data-lkt="warn-icon"],
    [data-lkt="error-icon"],
    [data-lkt="reset-icon"],
    [data-lkt="undo-icon"],
    [data-lkt="log-icon"] {
        font-family: arial;
        font-style: normal;
        font-size: 16px;
        margin-right: 5px;
        cursor: help;
    }

    [data-lkt="add-icon"],
    [data-lkt="open-icon"] {
        cursor: pointer;
    }

    [data-lkt="link-icon"] {
        cursor: alias;
    }

    [data-lkt="field-state-ui"] {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        right: 0;
        bottom: 0;
    }
</style>