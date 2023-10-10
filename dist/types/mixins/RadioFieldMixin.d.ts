import { LktObject } from "lkt-ts-interfaces";
import { Option } from "../types/Option";
export declare const RadioFieldMixin: {
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
    };
    data(): LktObject;
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
        renderOption(option: Option): any;
        focus(): void;
        setIsDisabled(status?: boolean): any;
        isDisabled(): any;
        reset(): void;
        getValue(): any;
    };
};
