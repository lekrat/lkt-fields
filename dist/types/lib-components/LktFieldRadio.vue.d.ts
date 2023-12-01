declare const _default: {
    name: string;
    mixins: {
        emits: string[];
        mixins: {
            computed: {
                classes(): string;
            };
        }[];
        props: {
            modelValue: {
                type: (StringConstructor | NumberConstructor | ArrayConstructor)[];
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
            closeOnSelect: {
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
            options: {
                type: ArrayConstructor;
                default: () => IOption[];
            };
            disabledOptions: {
                type: ArrayConstructor;
                default: () => any[];
            };
        };
        data(): import("lkt-ts-interfaces").LktObject;
        computed: {
            isValid(): any;
            changed(): boolean;
            canRenderLabelSlot(): boolean;
            canRenderLabelHtml(): boolean;
        };
        watch: {
            modelValue(v: string): void;
            value(v: string): void;
            options: {
                handler(): void;
                deep: boolean;
            };
        };
        methods: {
            renderOption(option: import("../types/Option").Option): any;
            focus(): void;
            setIsDisabled(status?: boolean): any;
            isDisabled(): any;
            reset(): void;
            getValue(): any;
        };
    }[];
    props: {
        value: {
            type: StringConstructor;
            default: string;
        };
    };
};
export default _default;
