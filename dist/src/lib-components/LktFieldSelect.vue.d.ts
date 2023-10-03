import { nextTick } from "vue";
import { LktEvent } from "lkt-events/dist/types/classes/LktEvent";
import { Option } from "../types/Option";
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            name?: string;
            label?: string;
            disabled?: boolean;
            multiple?: boolean;
            options?: unknown[];
            readonly?: boolean;
            placeholder?: string;
            resource?: string;
            modelValue?: string | number | unknown[];
            searchPlaceholder?: string;
            closeOnSelect?: boolean;
            palette?: string;
            valid?: boolean | Function;
            emptyLabel?: boolean;
            disabledOptions?: unknown[];
            canTag?: boolean;
            noOptionsMessage?: string;
            searchStringResourceParam?: string;
            searchOptions?: Function | Record<string, any>;
            key?: string | number | symbol;
            style?: unknown;
            class?: unknown;
            ref?: import("vue").VNodeRef;
            ref_for?: boolean;
            ref_key?: string;
            "onClick-ui"?: (...args: any[]) => any;
            "onUpdate:modelValue"?: (...args: any[]) => any;
            onVnodeBeforeMount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[];
            onVnodeMounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[];
            onVnodeBeforeUpdate?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[];
            onVnodeUpdated?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[];
            onVnodeBeforeUnmount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[];
            onVnodeUnmounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[];
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot<any>;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>;
        $emit: (event: "click-ui" | "update:modelValue", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
                default: () => Option[];
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
        }>> & {
            "onClick-ui"?: (...args: any[]) => any;
            "onUpdate:modelValue"?: (...args: any[]) => any;
        }, {}, unknown, {}, {}, {
            mixins: {
                methods: {
                    onUIStatusClick($event: any, key: string, data?: any): void;
                };
            }[];
            methods: {
                onClickUi($event: any, event: LktEvent): void;
            };
        }, import("vue").ComponentOptionsMixin, ("click-ui" | "update:modelValue")[], string, {
            name: string;
            label: string;
            disabled: boolean;
            multiple: boolean;
            options: unknown[];
            readonly: boolean;
            placeholder: string;
            resource: string;
            modelValue: string | number | unknown[];
            searchPlaceholder: string;
            closeOnSelect: boolean;
            palette: string;
            valid: boolean | Function;
            emptyLabel: boolean;
            disabledOptions: unknown[];
            canTag: boolean;
            noOptionsMessage: string;
            searchStringResourceParam: string;
            searchOptions: Function | Record<string, any>;
        }, {}, string, {}> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
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
            default: () => Option[];
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
    }>> & {
        "onClick-ui"?: (...args: any[]) => any;
        "onUpdate:modelValue"?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<{}> & {
        [x: string]: never;
    } & {
        onClickUi($event: any, event: LktEvent): void;
    } & {
        onUIStatusClick($event: any, key: string, data?: any): void;
    } & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
        default: () => Option[];
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
}>> & {
    "onClick-ui"?: (...args: any[]) => any;
    "onUpdate:modelValue"?: (...args: any[]) => any;
}, {}, unknown, {}, {}, {
    mixins: {
        methods: {
            onUIStatusClick($event: any, key: string, data?: any): void;
        };
    }[];
    methods: {
        onClickUi($event: any, event: LktEvent): void;
    };
}, import("vue").ComponentOptionsMixin, ("click-ui" | "update:modelValue")[], "click-ui" | "update:modelValue", {
    name: string;
    label: string;
    disabled: boolean;
    multiple: boolean;
    options: unknown[];
    readonly: boolean;
    placeholder: string;
    resource: string;
    modelValue: string | number | unknown[];
    searchPlaceholder: string;
    closeOnSelect: boolean;
    palette: string;
    valid: boolean | Function;
    emptyLabel: boolean;
    disabledOptions: unknown[];
    canTag: boolean;
    noOptionsMessage: string;
    searchStringResourceParam: string;
    searchOptions: Function | Record<string, any>;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        prefix: (_: {}) => any;
        label: (_: {}) => any;
    };
});
export default _default;
