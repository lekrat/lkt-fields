declare const _default: {
    name: string;
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
        props: {
            options: {
                type: ArrayConstructor;
                default: () => any[];
            };
            multiple: {
                type: BooleanConstructor;
                default: boolean;
            };
            canTag: {
                type: BooleanConstructor;
                default: boolean;
            };
            noOptionsMessage: {
                type: StringConstructor;
                default: string;
            };
            optionFormatter: {
                type: FunctionConstructor;
                default: (option?: any) => any;
            };
            optionParser: {
                type: FunctionConstructor;
                default: (option?: any, i?: number) => any;
            };
        };
        data(): any;
        computed: {
            renderSelectedOption: {
                cache: boolean;
                get(): any;
            };
        };
        watch: {
            options: {
                handler(): void;
                deep: boolean;
            };
        };
        methods: {
            getDropdownOptionSelector(option: any, highlightOption?: number, i?: number): {
                'is-highlight': boolean;
                'is-selected': boolean;
            };
            renderOption(option: any): any;
        };
    })[];
    props: {
        value: {
            type: StringConstructor;
            default: string;
        };
    };
};
export default _default;
