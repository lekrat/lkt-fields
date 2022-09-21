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
        VueNextSelect: import("vue").DefineComponent<{
            modelValue: {
                required: true;
            };
            emptyModelValue: {};
            options: {
                required: true;
                type: ArrayConstructor;
            };
            labelBy: {
                type: (FunctionConstructor | StringConstructor)[];
            };
            valueBy: {
                type: (FunctionConstructor | StringConstructor)[];
            };
            disabledBy: {
                default: string;
                type: (FunctionConstructor | StringConstructor)[];
            };
            groupBy: {
                default: string;
                type: (FunctionConstructor | StringConstructor)[];
            };
            visibleOptions: {
                type: ArrayConstructor;
                default: null;
            };
            multiple: {
                default: boolean;
                type: BooleanConstructor;
            };
            min: {
                default: number;
                type: NumberConstructor;
            };
            max: {
                default: number;
                type: NumberConstructor;
            };
            searchable: {
                default: boolean;
                type: BooleanConstructor;
            };
            searchPlaceholder: {
                default: string;
                type: StringConstructor;
            };
            clearOnSelect: {
                default: boolean;
                type: BooleanConstructor;
            };
            clearOnClose: {
                default: boolean;
                type: BooleanConstructor;
            };
            taggable: {
                default: boolean;
                type: BooleanConstructor;
            };
            collapseTags: {
                default: boolean;
                type: BooleanConstructor;
            };
            autocomplete: {
                default: string;
                type: StringConstructor;
            };
            disabled: {
                default: boolean;
                type: BooleanConstructor;
            };
            loading: {
                default: boolean;
                type: BooleanConstructor;
            };
            closeOnSelect: {
                default: boolean;
                type: BooleanConstructor;
            };
            hideSelected: {
                default: boolean;
                type: BooleanConstructor;
            };
            placeholder: {
                default: string;
                type: StringConstructor;
            };
            tabindex: {
                default: number;
                type: NumberConstructor;
            };
            autofocus: {
                default: boolean;
                type: BooleanConstructor;
            };
            maxHeight: {
                default: number;
                type: NumberConstructor;
            };
            openDirection: {
                type: import("vue").PropType<"top" | "bottom">;
                validator: (value: string) => boolean;
            };
        }, {
            instance: import("vue").ComponentInternalInstance;
            isFocusing: import("vue").Ref<boolean>;
            wrapper: import("vue").Ref<any>;
            dropdown: import("vue").Ref<any>;
            input: import("vue").Ref<any>;
            focus: () => void;
            blur: (e?: any) => void;
            toggle: () => void;
            searchingInputValue: import("vue").Ref<string>;
            handleInputForInput: (event: any) => void;
            handleChangeForInput: (event: any) => void;
            handleFocusForInput: (event: any) => void;
            handleBlurForInput: (event: any) => void;
            optionsWithInfo: import("vue").ComputedRef<any>;
            addOrRemoveOption: (event: any, option: any) => void;
            dataAttrs: import("vue").ComputedRef<{
                'data-is-focusing': boolean;
                'data-visible-length': any;
                'data-not-selected-length': number;
                'data-selected-length': any;
                'data-addable': boolean;
                'data-removable': boolean;
                'data-total-length': any;
                'data-multiple': boolean;
                'data-loading': boolean;
                'data-disabled': boolean;
            }>;
            innerPlaceholder: import("vue").ComputedRef<string>;
            selected: import("vue").ComputedRef<any>;
            highlightedOriginalIndex: import("vue").Ref<number>;
            pointerForward: () => void;
            pointerBackward: () => void;
            pointerFirst: () => void;
            pointerLast: () => void;
            typeAhead: (event: any) => void;
            pointerSet: (originalIndex: number) => boolean;
            direction: import("vue").Ref<any>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("closed" | "removed" | "toggle" | "blur" | "focus" | "selected" | "update:modelValue" | "opened" | "search:input" | "search:change" | "search:focus" | "search:blur")[], "closed" | "removed" | "toggle" | "blur" | "focus" | "selected" | "update:modelValue" | "opened" | "search:input" | "search:change" | "search:focus" | "search:blur", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
            modelValue?: unknown;
            emptyModelValue?: unknown;
            options?: unknown;
            labelBy?: unknown;
            valueBy?: unknown;
            disabledBy?: unknown;
            groupBy?: unknown;
            visibleOptions?: unknown;
            multiple?: unknown;
            min?: unknown;
            max?: unknown;
            searchable?: unknown;
            searchPlaceholder?: unknown;
            clearOnSelect?: unknown;
            clearOnClose?: unknown;
            taggable?: unknown;
            collapseTags?: unknown;
            autocomplete?: unknown;
            disabled?: unknown;
            loading?: unknown;
            closeOnSelect?: unknown;
            hideSelected?: unknown;
            placeholder?: unknown;
            tabindex?: unknown;
            autofocus?: unknown;
            maxHeight?: unknown;
            openDirection?: unknown;
        } & {
            disabled: boolean;
            modelValue: unknown;
            options: unknown[];
            disabledBy: string | Function;
            groupBy: string | Function;
            visibleOptions: unknown[];
            multiple: boolean;
            min: number;
            max: number;
            searchable: boolean;
            searchPlaceholder: string;
            clearOnSelect: boolean;
            clearOnClose: boolean;
            taggable: boolean;
            collapseTags: boolean;
            autocomplete: string;
            loading: boolean;
            closeOnSelect: boolean;
            hideSelected: boolean;
            placeholder: string;
            tabindex: number;
            autofocus: boolean;
            maxHeight: number;
        } & {
            emptyModelValue?: unknown;
            labelBy?: string | Function;
            valueBy?: string | Function;
            openDirection?: "top" | "bottom";
        }> & {
            onSelected?: (...args: any[]) => any;
            onRemoved?: (...args: any[]) => any;
            "onUpdate:modelValue"?: (...args: any[]) => any;
            onFocus?: (...args: any[]) => any;
            onBlur?: (...args: any[]) => any;
            onToggle?: (...args: any[]) => any;
            onOpened?: (...args: any[]) => any;
            onClosed?: (...args: any[]) => any;
            "onSearch:input"?: (...args: any[]) => any;
            "onSearch:change"?: (...args: any[]) => any;
            "onSearch:focus"?: (...args: any[]) => any;
            "onSearch:blur"?: (...args: any[]) => any;
        }, {
            disabled: boolean;
            disabledBy: string | Function;
            groupBy: string | Function;
            visibleOptions: unknown[];
            multiple: boolean;
            min: number;
            max: number;
            searchable: boolean;
            searchPlaceholder: string;
            clearOnSelect: boolean;
            clearOnClose: boolean;
            taggable: boolean;
            collapseTags: boolean;
            autocomplete: string;
            loading: boolean;
            closeOnSelect: boolean;
            hideSelected: boolean;
            placeholder: string;
            tabindex: number;
            autofocus: boolean;
            maxHeight: number;
        }>;
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
            resource: {
                type: StringConstructor;
                default: () => null;
            };
            searchStringResourceParam: {
                type: StringConstructor;
                default: string;
            };
            searchOptions: {
                type: (ObjectConstructor | FunctionConstructor)[];
                default: () => null;
            };
            searchPlaceholder: {
                type: StringConstructor;
                default: string;
            };
        };
        data(): import("lkt-ts-interfaces").LktObject;
        computed: {
            showInfoUi(): boolean;
            isSearchable(): boolean;
            isRemoteSearch(): boolean;
            renderSelectedOption: {
                cache: boolean;
                get(): any;
            };
            isValid(): any;
            isEmpty(): boolean;
            changed(): boolean;
            canRenderLabelSlot(): boolean;
            canRenderLabelHtml(): boolean;
        };
        watch: {
            modelValue(v: string): void;
            value(v: string): void;
            searchOptions: {
                handler(): void;
                deep: boolean;
            };
            options: {
                handler(): void;
                deep: boolean;
            };
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
            buildVisibleOptions(): void;
            resetSearch(): void;
            handleFocus(): Promise<void>;
            handleInput(inputEvent: InputEvent): Promise<void>;
            getDropdownOptionSelector(option: any, highlightOption?: number, i?: number): {
                'is-highlight': boolean;
                'is-selected': boolean;
            };
            renderOption(option: any): any;
            focus(): void;
            setIsDisabled(status?: boolean): any;
            isDisabled(): any;
            reset(): void;
            getValue(): any;
        };
        mounted(): void;
    })[];
};
export default _default;
