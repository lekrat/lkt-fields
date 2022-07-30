import '@vuepic/vue-datepicker/dist/main.css';
import 'vue-next-select/dist/index.min.css';
/**
 * Import editor
 */
import 'suneditor/dist/css/suneditor.min.css';
import 'katex/dist/katex.min.css';
import { App } from "vue";
declare const LktFields: {
    install: (app: App, options?: IPluginOptions) => void;
};
export { getDefaultPresetRanges } from "./functions/date-functions";
export default LktFields;
