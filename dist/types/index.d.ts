/**
 * Import editor
 */
import 'suneditor/dist/css/suneditor.min.css';
import 'katex/dist/katex.min.css';
/**
 * Additional imports
 */
import { App } from "vue";
declare const LktFields: {
    install: (app: App) => void;
};
export { getDefaultPresetRanges } from "./functions/date-functions";
export default LktFields;
