import { LktObject } from "lkt-ts-interfaces";
export declare const DateFieldMixin: {
    emits: string[];
    mixins: {
        computed: {
            classes(): string;
        };
    }[];
    props: {
        modelValue: {
            type: (StringConstructor | DateConstructor)[];
            default: string;
        };
        disabledDates: {
            type: ArrayConstructor;
            default: () => Array<any>;
        };
        utc: {
            type: BooleanConstructor;
            default: boolean;
        };
        multiDates: {
            type: BooleanConstructor;
            default: boolean;
        };
        inline: {
            type: BooleanConstructor;
            default: boolean;
        };
        monthPicker: {
            type: BooleanConstructor;
            default: boolean;
        };
        timePicker: {
            type: BooleanConstructor;
            default: boolean;
        };
        weekPicker: {
            type: BooleanConstructor;
            default: boolean;
        };
        yearPicker: {
            type: BooleanConstructor;
            default: boolean;
        };
        preventMinMaxNavigation: {
            type: BooleanConstructor;
            default: boolean;
        };
        range: {
            type: BooleanConstructor;
            default: boolean;
        };
        autoRange: {
            type: (StringConstructor | NumberConstructor)[];
            default: () => null;
        };
        multiCalendars: {
            type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
            default: () => null;
        };
        flow: {
            type: ArrayConstructor;
            default: () => null;
        };
        presetRanges: {
            type: ArrayConstructor;
            default: () => Array<any>;
        };
        minDate: {
            type: (StringConstructor | DateConstructor)[];
            default: () => null;
        };
        maxDate: {
            type: (StringConstructor | DateConstructor)[];
            default: () => null;
        };
        placeholder: {
            type: StringConstructor;
            default: string;
        };
        label: {
            type: StringConstructor;
            default: string;
        };
        palette: {
            type: StringConstructor;
            default: string;
        };
        name: {
            type: StringConstructor;
            default: string;
        };
        valid: {
            type: (FunctionConstructor | BooleanConstructor)[];
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        readonly: {
            type: BooleanConstructor;
            default: boolean;
        };
        emptyLabel: {
            type: BooleanConstructor;
            default: boolean;
        };
    };
    data(): LktObject;
    computed: {
        isValid(): any;
        isEmpty(): boolean;
        changed(): boolean;
        canRenderLabelSlot(): boolean;
        canRenderLabelHtml(): boolean;
    };
    watch: {
        modelValue(v: any): void;
        value(v: any): void;
    };
    methods: {
        focus(): void;
        setIsDisabled(status?: boolean): any;
        isDisabled(): any;
        reset(): void;
        getValue(): any;
    };
};
