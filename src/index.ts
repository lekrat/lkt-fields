/* eslint-disable import/prefer-default-export */

/**
 * Import datepicker
 */
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

/**
 * Import editor
 */
import 'suneditor/dist/css/suneditor.min.css'
import 'katex/dist/katex.min.css'

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
import LktFieldEditor from "./lib-components/LktFieldEditor.vue";
import LktFieldKatex from "./lib-components/LktFieldKatex.vue";

/**
 * Additional imports
 */
import {Settings} from "./settings/Settings";
import {DEFAULT_PLUGIN_OPTIONS} from "./constants";
import {App} from "vue";


const LktFields = {
    install: (app: App, options: IPluginOptions = DEFAULT_PLUGIN_OPTIONS) => {

        app
            .component('Datepicker', Datepicker)
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
            .component('lkt-field-editor', LktFieldEditor)
            .component('lkt-field-katex', LktFieldKatex)
        ;

        if (typeof options === 'object') {
            if (typeof options.noOptionsMessage !== 'undefined') {
                Settings.NO_OPTIONS_MESSAGE = options.noOptionsMessage;
            }
            if (typeof options.showPasswordMessage !== 'undefined') {
                Settings.SHOW_PASSWORD_MESSAGE = options.showPasswordMessage;
            }
            if (typeof options.isMandatoryMessage !== 'undefined') {
                Settings.IS_MANDATORY_MESSAGE = options.isMandatoryMessage;
            }
            if (typeof options.todayRangeText !== 'undefined') {
                Settings.TODAY_RANGE_TEXT = options.todayRangeText;
            }
            if (typeof options.thisMonthRangeText !== 'undefined') {
                Settings.THIS_MONTH_RANGE_TEXT = options.thisMonthRangeText;
            }
            if (typeof options.lastMonthRangeText !== 'undefined') {
                Settings.LAST_MONTH_RANGE_TEXT = options.lastMonthRangeText;
            }
            if (typeof options.thisYearRangeText !== 'undefined') {
                Settings.THIS_YEAR_RANGE_TEXT = options.thisYearRangeText;
            }
            if (typeof options.followLinkMessage !== 'undefined') {
                Settings.FOLLOW_LINK_MESSAGE = options.followLinkMessage;
            }
            if (typeof options.openMessage !== 'undefined') {
                Settings.OPEN_MESSAGE = options.openMessage;
            }
            if (typeof options.resetMessage !== 'undefined') {
                Settings.RESET_MESSAGE = options.resetMessage;
            }
        }
    },
};


export {getDefaultPresetRanges} from "./functions/date-functions";
export default LktFields;