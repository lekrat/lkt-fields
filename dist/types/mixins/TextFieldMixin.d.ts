import { LktObject } from "lkt-ts-interfaces";
export declare const TextFieldMixin: {
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
    };
    data(): LktObject;
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
};
