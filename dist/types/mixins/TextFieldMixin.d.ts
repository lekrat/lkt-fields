import { LktObject } from "lkt-ts-interfaces";
import { PropType } from "vue";
import { StateConfig } from "../types/StateConfig";
import { StateTexts } from "../types/StateTexts";
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
        stateConfig: {
            type: PropType<StateConfig>;
            default: () => {};
        };
        stateTexts: {
            type: PropType<StateTexts>;
            default: () => {};
        };
    };
    data(): LktObject;
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
};
