/* eslint-disable import/prefer-default-export */

/**
 * Import datepicker
 */
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

/**
 * Import Select
 */
import VueNextSelect from 'vue-next-select';

/**
 * Import library components
 */
import LktFieldCheck from "./lib-components/LktFieldCheck.vue";
import LktFieldSwitch from "./lib-components/LktFieldSwitch.vue";
import LktFieldText from "./lib-components/LktFieldText.vue";
import LktFieldTextArea from "./lib-components/LktFieldTextArea.vue";
import LktFieldEmail from "./lib-components/LktFieldEmail.vue";
import LktFieldTel from "./lib-components/LktFieldTel.vue";
import LktFieldUnit from "./lib-components/LktFieldUnit.vue";
import LktFieldPassword from "./lib-components/LktFieldPassword.vue";
import LktFieldRadio from "./lib-components/LktFieldRadio.vue";
import LktFieldDate from "./lib-components/LktFieldDate.vue";
import LktFieldSelect from "./lib-components/LktFieldSelect.vue";

/**
 * Additional imports
 */
import {isObject, isUndefined} from "lkt-tools";
import {LktFieldsSettings} from "./settings/LktFieldsSettings";
import {DEFAULT_PLUGIN_OPTIONS} from "./constants";


const LktFields = {
    install: (app: any, options: IPluginOptions = DEFAULT_PLUGIN_OPTIONS) => {
        app
            .component('Datepicker', Datepicker)
            .component('vue-next-select', VueNextSelect)
            .component('lkt-field-text', LktFieldText)
            .component('lkt-field-text-area', LktFieldTextArea)
            .component('lkt-field-check', LktFieldCheck)
            .component('lkt-field-switch', LktFieldSwitch)
            .component('lkt-field-email', LktFieldEmail)
            .component('lkt-field-tel', LktFieldTel)
            .component('lkt-field-unit', LktFieldUnit)
            .component('lkt-field-password', LktFieldPassword)
            .component('lkt-field-radio', LktFieldRadio)
            .component('lkt-field-date', LktFieldDate)
            .component('lkt-field-select', LktFieldSelect)
        ;

        if (isObject(options)) {
            if (!isUndefined(options.noOptionsMessage)) {
                LktFieldsSettings.NO_OPTIONS_MESSAGE = options.noOptionsMessage;
            }
            if (!isUndefined(options.showPasswordMessage)) {
                LktFieldsSettings.SHOW_PASSWORD_MESSAGE = options.showPasswordMessage;
            }
            if (!isUndefined(options.isMandatoryMessage)) {
                LktFieldsSettings.IS_MANDATORY_MESSAGE = options.isMandatoryMessage;
            }
            if (!isUndefined(options.todayRangeText)) {
                LktFieldsSettings.TODAY_RANGE_TEXT = options.todayRangeText;
            }
            if (!isUndefined(options.thisMonthRangeText)) {
                LktFieldsSettings.THIS_MONTH_RANGE_TEXT = options.thisMonthRangeText;
            }
            if (!isUndefined(options.lastMonthRangeText)) {
                LktFieldsSettings.LAST_MONTH_RANGE_TEXT = options.lastMonthRangeText;
            }
            if (!isUndefined(options.thisYearRangeText)) {
                LktFieldsSettings.THIS_YEAR_RANGE_TEXT = options.thisYearRangeText;
            }
            if (!isUndefined(options.followLinkMessage)) {
                LktFieldsSettings.FOLLOW_LINK_MESSAGE = options.followLinkMessage;
            }
            if (!isUndefined(options.openMessage)) {
                LktFieldsSettings.OPEN_MESSAGE = options.openMessage;
            }
            if (!isUndefined(options.resetMessage)) {
                LktFieldsSettings.RESET_MESSAGE = options.resetMessage;
            }
        }
    },
};


export {getDefaultPresetRanges} from "./functions/date-functions";
export default LktFields;