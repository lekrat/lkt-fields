/* eslint-disable import/prefer-default-export */
/**
 * Import editor
 */
import 'suneditor/dist/css/suneditor.min.css'
import 'katex/dist/katex.min.css'

/**
 * Import library components
 */
import LktFieldRadio from "./lib-components/LktFieldRadio.vue";
import LktFieldEditor from "./lib-components/LktFieldEditor.vue";
import LktFieldKatex from "./lib-components/LktFieldKatex.vue";

/**
 * Additional imports
 */
import {App} from "vue";


const LktFields = {
    install: (app: App) => {

        app
            .component('lkt-field-radio', LktFieldRadio)
            .component('lkt-field-editor', LktFieldEditor)
            .component('lkt-field-katex', LktFieldKatex)
        ;
    },
};


export {getDefaultPresetRanges} from "./functions/date-functions";
export default LktFields;