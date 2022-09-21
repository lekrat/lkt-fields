import { LktObject } from "lkt-ts-interfaces";
export declare const SelectFieldMixin: {
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
            default: () => Array<IOption>;
        };
        disabledOptions: {
            type: ArrayConstructor;
            default: () => Array<any>;
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
    data(): LktObject;
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
};
