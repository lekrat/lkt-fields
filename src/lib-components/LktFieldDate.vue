<template>
    <div data-lkt="field-date"
         :data-state="state"
         :data-show-ui="showInfoUi"
         :data-error="!isValid"
         :data-disabled="disabled"
         :data-changed="changed"
         :data-empty="isEmpty"
         :data-filled="!isEmpty"
    >
        <slot name="prefix"></slot>

        <Datepicker v-model="value"
                    v-bind:uid="Identifier"
                    v-bind:disabled="disabled"
                    v-bind:name="name"
                    v-bind:range="range"
                    v-bind:auto-range="autoRange"
                    v-bind:multi-calendars="multiCalendars"
                    v-bind:month-picker="monthPicker"
                    v-bind:time-picker="timePicker"
                    v-bind:inline="inline"
                    v-bind:multi-dates="multiDates"
                    v-bind:flow="flow"
                    v-bind:utc="utc"
                    v-bind:week-picker="weekPicker"
                    v-bind:year-picker="yearPicker"
                    v-bind:preset-ranges="presetRanges"
                    v-bind:disabled-dates="disabledDates"
                    v-bind:min-date="minDate"
                    v-bind:max-date="maxDate"
                    v-bind:prevent-min-max-navigation="preventMinMaxNavigation"
        ></Datepicker>
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
import lktFieldState from "../components/LktFieldState.vue";
import {LktFieldStateMixin} from "../mixins/LktFieldStateMixin";
import {DateFieldMixin} from "../mixins/DateFieldMixin";

export default {
    name: "LktFieldDate",
    components: {lktFieldState},
    mixins: [DateFieldMixin, LktFieldStateMixin],
}
</script>