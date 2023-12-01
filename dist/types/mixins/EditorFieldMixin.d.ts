import { LktObject } from "lkt-ts-interfaces";
export declare const EditorFieldMixin: {
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
        computed: {
            classes(): string;
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
            tabindex: {
                type: (BooleanConstructor | NumberConstructor)[];
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
    data(): LktObject;
    watch: {
        disabled(): void;
    };
    methods: {
        storeEditorValue(content: string): void;
        updateEditorDisabled(): void;
    };
};
