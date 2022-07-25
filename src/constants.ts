import {LktFieldsSettings} from "./settings/LktFieldsSettings";

export const FIELD_STATE_PROPS = {
    showAdd: {
        type: Boolean,
        default: false,
    },
    showLink: {
        type: Boolean,
        default: false,
    },
    showOpen: {
        type: Boolean,
        default: false,
    },
    showInfo: {
        type: Boolean,
        default: false,
    },
    showPassword: {
        type: Boolean,
        default: false,
    },
    showMandatory: {
        type: Boolean,
        default: false,
    },
    showError: {
        type: Boolean,
        default: false,
    },
    showWarn: {
        type: Boolean,
        default: false,
    },
    showLog: {
        type: Boolean,
        default: false,
    },
    showReset: {
        type: Boolean,
        default: false,
    },
    textAdd: {
        type: String,
        default: '',
    },
    textInfo: {
        type: String,
        default: 'More info',
    },
    textPassword: {
        type: String,
        default: LktFieldsSettings.SHOW_PASSWORD_MESSAGE,
    },
    textMandatory: {
        type: String,
        default: LktFieldsSettings.IS_MANDATORY_MESSAGE,
    },
    textError: {
        type: String,
        default: '',
    },
    textWarn: {
        type: String,
        default: '',
    },
    textLog: {
        type: String,
        default: '',
    },
    textLink: {
        type: String,
        default: 'Follow link',
    },
    textOpen: {
        type: String,
        default: 'Show details',
    },
    textReset: {
        type: String,
        default: 'Reset',
    },
};

export const SHOW_PASSWORD_MESSAGE = 'Show password';
export const IS_MANDATORY_MESSAGE = 'This is mandatory';
export const FOLLOW_LINK_MESSAGE = 'Follow link';
export const OPEN_MESSAGE = 'Show details';
export const RESET_MESSAGE = 'Reset';

export const NO_OPTIONS_MESSAGE = 'No results. Try typing some text.';

export const TODAY_RANGE_TEXT = 'Today';
export const THIS_MONTH_RANGE_TEXT = 'This month';
export const LAST_MONTH_RANGE_TEXT = 'Last month';
export const THIS_YEAR_RANGE_TEXT = 'This year';

export const DEFAULT_PLUGIN_OPTIONS:IPluginOptions = {
    noOptionsMessage: NO_OPTIONS_MESSAGE,
    showPasswordMessage: SHOW_PASSWORD_MESSAGE,
    isMandatoryMessage: IS_MANDATORY_MESSAGE,
    followLinkMessage: FOLLOW_LINK_MESSAGE,
    openMessage: OPEN_MESSAGE,
    resetMessage: RESET_MESSAGE,
    todayRangeText: TODAY_RANGE_TEXT,
    thisMonthRangeText: THIS_MONTH_RANGE_TEXT,
    lastMonthRangeText: LAST_MONTH_RANGE_TEXT,
    thisYearRangeText: THIS_YEAR_RANGE_TEXT,
}