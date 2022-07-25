declare const _default: {
    name: string;
    components: {
        lktFieldState: {
            name: string;
            mixins: {
                props: {
                    showAdd: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    showLink: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    showOpen: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    showInfo: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    showPassword: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    showMandatory: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    showError: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    showWarn: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    showLog: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    showReset: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    textAdd: {
                        type: StringConstructor;
                        default: string;
                    };
                    textInfo: {
                        type: StringConstructor;
                        default: string;
                    };
                    textPassword: {
                        type: StringConstructor;
                        default: string;
                    };
                    textMandatory: {
                        type: StringConstructor;
                        default: string;
                    };
                    textError: {
                        type: StringConstructor;
                        default: string;
                    };
                    textWarn: {
                        type: StringConstructor;
                        default: string;
                    };
                    textLog: {
                        type: StringConstructor;
                        default: string;
                    };
                    textLink: {
                        type: StringConstructor;
                        default: string;
                    };
                    textOpen: {
                        type: StringConstructor;
                        default: string;
                    };
                    textReset: {
                        type: StringConstructor;
                        default: string;
                    };
                };
                computed: {
                    showInfoUi(): any;
                };
                methods: {
                    onUIStatusClick($event: any, key: string, data?: any): void;
                };
            }[];
        };
    };
    mixins: ({
        props: {
            value: {
                type: (ObjectConstructor | StringConstructor | BooleanConstructor | NumberConstructor | DateConstructor | ArrayConstructor)[];
                default: () => undefined;
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
            invalid: {
                type: BooleanConstructor;
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
            canReset: {
                type: BooleanConstructor;
                default: boolean;
            };
            emptyLabel: {
                type: BooleanConstructor;
                default: boolean;
            };
        };
        data(): object;
        computed: {
            changed(): boolean;
            canRenderLabelSlot(): boolean;
            canRenderLabelHtml(): boolean;
        };
        methods: {
            setIsDisabled(status?: boolean): any;
            isDisabled(): any;
            reset(): void;
            getValue(): any;
            onKeyUp($event: any): void;
            onKeyDown($event: any): void;
            onFocus($event: any): void;
            onBlur($event: any): void;
            onClick($event: any): void;
        };
        watch: {
            value(v: any): void;
            Value(v: any): void;
        };
        mounted(): void;
    } | {
        mixins: {
            props: {
                showAdd: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                showLink: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                showOpen: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                showInfo: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                showPassword: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                showMandatory: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                showError: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                showWarn: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                showLog: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                showReset: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                textAdd: {
                    type: StringConstructor;
                    default: string;
                };
                textInfo: {
                    type: StringConstructor;
                    default: string;
                };
                textPassword: {
                    type: StringConstructor;
                    default: string;
                };
                textMandatory: {
                    type: StringConstructor;
                    default: string;
                };
                textError: {
                    type: StringConstructor;
                    default: string;
                };
                textWarn: {
                    type: StringConstructor;
                    default: string;
                };
                textLog: {
                    type: StringConstructor;
                    default: string;
                };
                textLink: {
                    type: StringConstructor;
                    default: string;
                };
                textOpen: {
                    type: StringConstructor;
                    default: string;
                };
                textReset: {
                    type: StringConstructor;
                    default: string;
                };
            };
            computed: {
                showInfoUi(): any;
            };
            methods: {
                onUIStatusClick($event: any, key: string, data?: any): void;
            };
        }[];
        methods: {
            onClickUi($event: any, key: string): void;
        };
    })[];
    props: {
        value: {
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
            default: any;
        };
        multiCalendars: {
            type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
            default: any;
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
            default: any;
        };
        maxDate: {
            type: (StringConstructor | DateConstructor)[];
            default: any;
        };
    };
};
export default _default;
