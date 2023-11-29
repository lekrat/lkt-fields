import {Settings} from "../settings/Settings";

export const getNoOptionsMessage = () => {
    return Settings.NO_OPTIONS_MESSAGE;
}

export const setFieldsResetMessage = (str: string) => {
    Settings.RESET_MESSAGE = str;
    return true;
}