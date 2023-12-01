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
import LktFieldTextArea from "./lib-components/LktFieldTextArea.vue";
import LktFieldUnit from "./lib-components/LktFieldUnit.vue";
import LktFieldRadio from "./lib-components/LktFieldRadio.vue";
import LktFieldDate from "./lib-components/LktFieldDate.vue";
import LktFieldEditor from "./lib-components/LktFieldEditor.vue";
import LktFieldKatex from "./lib-components/LktFieldKatex.vue";

/**
 * Additional imports
 */
import {App} from "vue";


const LktFields = {
    install: (app: App) => {

        app
            .component('Datepicker', Datepicker)
            .component('lkt-field-date', LktFieldDate)
            .component('lkt-field-text-area', LktFieldTextArea)
            .component('lkt-field-unit', LktFieldUnit)
            .component('lkt-field-radio', LktFieldRadio)
            .component('lkt-field-editor', LktFieldEditor)
            .component('lkt-field-katex', LktFieldKatex)
        ;
    },
};


export {getDefaultPresetRanges} from "./functions/date-functions";
export default LktFields;