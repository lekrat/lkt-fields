declare const _default: {
    name: string;
    components: {
        lktFieldState: {
            name: string;
            emits: string[];
            props: {
                stateConfigValue: {
                    type: import("vue").PropType<import("../value-objects/StateConfigValue").StateConfigValue>;
                    default: () => {};
                };
                stateTextsValue: {
                    type: import("vue").PropType<import("../value-objects/StateTextValue").StateTextValue>;
                    default: () => {};
                };
            };
            computed: {
                enabledIcons(): any;
            };
            methods: {
                onUIStatusClick($event: any, key: string, data?: any): void;
            };
        };
    };
    mixins: ({
        mixins: {
            methods: {
                onUIStatusClick($event: any, key: string, data?: any): void;
            };
        }[];
        methods: {
            onClickUi($event: any, event: import("lkt-events/dist/types/classes/LktEvent").LktEvent): void;
        };
    } | {
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
                default: () => any[];
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
                default: () => any[];
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
        data(): import("lkt-ts-interfaces").LktObject;
        computed: {
            showInfoUi(): boolean;
            isValid(): any;
            isEmpty(): boolean;
            changed(): boolean;
            canRenderLabelSlot(): boolean;
            canRenderLabelHtml(): boolean;
        };
        watch: {
            modelValue(v: any): void;
            value(v: any): void;
            stateConfig: {
                handler(): void;
                deep: boolean;
            };
            stateTexts: {
                handler(): void;
                deep: boolean;
            };
        };
        methods: {
            focus(): void;
            setIsDisabled(status?: boolean): any;
            isDisabled(): any;
            reset(): void;
            getValue(): any;
        };
    })[];
};
export default _default;
