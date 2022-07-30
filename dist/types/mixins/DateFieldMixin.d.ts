import { ILktObject } from "lkt-tools";
export declare const DateFieldMixin: {
    emits: string[];
    props: {
        modelValue: {
            type: (StringConstructor | DateConstructor)[];
            default: string;
        };
        disabledDates: {
            type: ObjectConstructor;
            default(): {};
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
            default: () => Array<any>;
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
        state: {
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
    data(): ILktObject;
    computed: {
        isValid(): any;
        changed(): boolean;
        canRenderLabelSlot(): boolean;
        canRenderLabelHtml(): boolean;
    };
    watch: {
        modelValue(v: string): void;
    };
    methods: {
        focus(): void;
        setIsDisabled(status?: boolean): any;
        isDisabled(): any;
        reset(): void;
        getValue(): any;
    };
};
