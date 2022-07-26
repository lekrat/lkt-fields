import {endOfMonth, endOfYear, startOfMonth, startOfYear, subMonths} from 'date-fns';
import {Settings} from "../settings/Settings";

export const getTodayRange = (): IDateRange => {
    return {label: Settings.TODAY_RANGE_TEXT, range: [new Date(), new Date()]};
}

export const getThisMonthRange = (): IDateRange => {
    return {label: Settings.THIS_MONTH_RANGE_TEXT, range: [startOfMonth(new Date()), endOfMonth(new Date())]};
}

export const getLastMonthRange = (): IDateRange => {
    return {
        label: Settings.LAST_MONTH_RANGE_TEXT,
        range: [startOfMonth(subMonths(new Date(), 1)), endOfMonth(subMonths(new Date(), 1))]
    };
}

export const getThisYearRange = (): IDateRange => {
    return {label: Settings.THIS_YEAR_RANGE_TEXT, range: [startOfYear(new Date()), endOfYear(new Date())]};
}

export const getDefaultPresetRanges = (): Array<IDateRange> => {
    return [
        getTodayRange(),
        getThisMonthRange(),
        getLastMonthRange(),
        getThisYearRange(),
    ];
}