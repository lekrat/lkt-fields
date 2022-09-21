declare const _default: {
    name: string;
    components: {
        LktFieldState: {
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
    mixins: {
        mixins: ({
            computed: {
                classes(): string;
            };
        } | {
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
                stateConfig: {
                    type: import("vue").PropType<import("../types/StateConfig").StateConfig>;
                    default: () => {};
                };
                stateTexts: {
                    type: import("vue").PropType<import("../types/StateTexts").StateTexts>;
                    default: () => {};
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
                modelValue(v: string): void;
                value(v: string): void;
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
                onKeyUp($event: any): void;
                onKeyDown($event: any): void;
                onFocus($event: any): void;
                onBlur($event: any): void;
                onClick($event: any): void;
            };
        })[];
        props: {
            lang: {
                type: StringConstructor;
                default: string;
            };
            editorOptions: {
                type: ObjectConstructor;
                default(): {
                    buttonList: (string | string[])[];
                };
            };
        };
        data(): import("lkt-ts-interfaces").LktObject;
        watch: {
            disabled(): void;
        };
        methods: {
            storeEditorValue(content: string): void;
            updateEditorDisabled(): void;
        };
    }[];
    props: {
        editorOptions: {
            type: ObjectConstructor;
            default(): {
                buttonList: (string | string[])[];
            };
        };
    };
    mounted(): void;
};
export default _default;
