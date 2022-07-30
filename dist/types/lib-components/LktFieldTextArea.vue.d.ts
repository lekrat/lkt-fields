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
    } | {
        emits: string[];
        props: {
            modelValue: {
                type: StringConstructor;
                default: string;
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
        data(): import("lkt-tools").ILktObject;
        computed: {
            isValid(): any;
            isEmpty(): boolean;
            changed(): boolean;
            canRenderLabelSlot(): boolean;
            canRenderLabelHtml(): boolean;
        };
        watch: {
            modelValue(v: string): void;
            value(v: string): void;
        };
        methods: {
            focus(): void;
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
    })[];
};
export default _default;
