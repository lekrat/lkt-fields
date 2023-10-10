interface IPluginOptions {
    noOptionsMessage?: string;
    showPasswordMessage?: string;
    isMandatoryMessage?: string;
    todayRangeText?: string;
    thisMonthRangeText?: string;
    lastMonthRangeText?: string;
    thisYearRangeText?: string;
    followLinkMessage?: string;
    openMessage?: string;
    resetMessage?: string;
    components?: {
        text?: boolean;
        textarea?: boolean;
        check?: boolean;
        switch?: boolean;
        email?: boolean;
        tel?: boolean;
        unit?: boolean;
        password?: boolean;
        radio?: boolean;
        date?: boolean;
        select?: boolean;
        editor?: boolean;
        katex?: boolean;
    };
}
