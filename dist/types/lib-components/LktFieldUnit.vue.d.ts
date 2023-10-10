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
        props: {
            modelValue: {
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
            palette: {
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
    })[];
    props: {
        value: {
            type: (StringConstructor | NumberConstructor)[];
            default: string;
        };
        min: {
            type: NumberConstructor[];
            default: any;
        };
        max: {
            type: NumberConstructor[];
            default: any;
        };
        step: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        addRange: {
            type: BooleanConstructor;
            default: boolean;
        };
    };
    data(): {
        Value: number;
        updating: boolean;
    };
    computed: {
        Min(): number | false;
        Max(): number | false;
    };
    watch: {
        Value(v: any): void;
        min(): void;
        max(): void;
    };
    methods: {
        reAssign(v: any): boolean;
    };
};
export default _default;
