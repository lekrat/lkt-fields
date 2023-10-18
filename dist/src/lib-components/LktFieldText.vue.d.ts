import { nextTick } from "vue";
import { FieldCallToAction } from "../types/FieldCallToAction";
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            error?: string | boolean | FieldCallToAction[];
            name?: string;
            label?: string;
            reset?: string | boolean | FieldCallToAction[];
            disabled?: boolean;
            readonly?: boolean;
            placeholder?: string;
            tabindex?: number | boolean;
            info?: string | boolean | FieldCallToAction[];
            modelValue?: string | number | unknown[];
            palette?: string;
            valid?: boolean;
            key?: string | number | symbol;
            style?: unknown;
            onFocus?: (...args: any[]) => any;
            onBlur?: (...args: any[]) => any;
            onKeydown?: (...args: any[]) => any;
            onKeyup?: (...args: any[]) => any;
            onClick?: (...args: any[]) => any;
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
        $emit: (event: "blur" | "click" | "focus" | "keydown" | "keyup" | "click-ui" | "update:modelValue", ...args: any[]) => void;
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
            tabindex: {
                type: (BooleanConstructor | NumberConstructor)[];
                default: boolean;
            };
            reset: {
                type: (StringConstructor | BooleanConstructor | {
                    (arrayLength: number): FieldCallToAction[];
                    (...items: FieldCallToAction[]): FieldCallToAction[];
                    new (arrayLength: number): FieldCallToAction[];
                    new (...items: FieldCallToAction[]): FieldCallToAction[];
                    isArray(arg: any): arg is any[];
                    readonly prototype: any[];
                    from<T>(arrayLike: ArrayLike<T>): T[];
                    from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
                    from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
                    from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
                    of<T_4>(...items: T_4[]): T_4[];
                    readonly [Symbol.species]: ArrayConstructor;
                })[];
                default: boolean;
            };
            info: {
                type: (StringConstructor | BooleanConstructor | {
                    (arrayLength: number): FieldCallToAction[];
                    (...items: FieldCallToAction[]): FieldCallToAction[];
                    new (arrayLength: number): FieldCallToAction[];
                    new (...items: FieldCallToAction[]): FieldCallToAction[];
                    isArray(arg: any): arg is any[];
                    readonly prototype: any[];
                    from<T>(arrayLike: ArrayLike<T>): T[];
                    from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
                    from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
                    from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
                    of<T_4>(...items: T_4[]): T_4[];
                    readonly [Symbol.species]: ArrayConstructor;
                })[];
                default: boolean;
            };
            error: {
                type: (StringConstructor | BooleanConstructor | {
                    (arrayLength: number): FieldCallToAction[];
                    (...items: FieldCallToAction[]): FieldCallToAction[];
                    new (arrayLength: number): FieldCallToAction[];
                    new (...items: FieldCallToAction[]): FieldCallToAction[];
                    isArray(arg: any): arg is any[];
                    readonly prototype: any[];
                    from<T>(arrayLike: ArrayLike<T>): T[];
                    from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
                    from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
                    from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
                    of<T_4>(...items: T_4[]): T_4[];
                    readonly [Symbol.species]: ArrayConstructor;
                })[];
                default: boolean;
            };
        }>> & {
            onFocus?: (...args: any[]) => any;
            onBlur?: (...args: any[]) => any;
            onKeydown?: (...args: any[]) => any;
            onKeyup?: (...args: any[]) => any;
            onClick?: (...args: any[]) => any;
            "onClick-ui"?: (...args: any[]) => any;
            "onUpdate:modelValue"?: (...args: any[]) => any;
        }, {
            Identifier: string;
            reset: () => string | number | unknown[];
            focus: () => void;
            value: () => string | number | unknown[];
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("blur" | "click" | "focus" | "keydown" | "keyup" | "click-ui" | "update:modelValue")[], string, {
            error: string | boolean | FieldCallToAction[];
            name: string;
            label: string;
            reset: string | boolean | FieldCallToAction[];
            disabled: boolean;
            readonly: boolean;
            placeholder: string;
            tabindex: number | boolean;
            info: string | boolean | FieldCallToAction[];
            modelValue: string | number | unknown[];
            palette: string;
            valid: boolean;
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
        $watch<T_5 extends string | ((...args: any) => any)>(source: T_5, cb: T_5 extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
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
        tabindex: {
            type: (BooleanConstructor | NumberConstructor)[];
            default: boolean;
        };
        reset: {
            type: (StringConstructor | BooleanConstructor | {
                (arrayLength: number): FieldCallToAction[];
                (...items: FieldCallToAction[]): FieldCallToAction[];
                new (arrayLength: number): FieldCallToAction[];
                new (...items: FieldCallToAction[]): FieldCallToAction[];
                isArray(arg: any): arg is any[];
                readonly prototype: any[];
                from<T>(arrayLike: ArrayLike<T>): T[];
                from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
                from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
                from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
                of<T_4>(...items: T_4[]): T_4[];
                readonly [Symbol.species]: ArrayConstructor;
            })[];
            default: boolean;
        };
        info: {
            type: (StringConstructor | BooleanConstructor | {
                (arrayLength: number): FieldCallToAction[];
                (...items: FieldCallToAction[]): FieldCallToAction[];
                new (arrayLength: number): FieldCallToAction[];
                new (...items: FieldCallToAction[]): FieldCallToAction[];
                isArray(arg: any): arg is any[];
                readonly prototype: any[];
                from<T>(arrayLike: ArrayLike<T>): T[];
                from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
                from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
                from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
                of<T_4>(...items: T_4[]): T_4[];
                readonly [Symbol.species]: ArrayConstructor;
            })[];
            default: boolean;
        };
        error: {
            type: (StringConstructor | BooleanConstructor | {
                (arrayLength: number): FieldCallToAction[];
                (...items: FieldCallToAction[]): FieldCallToAction[];
                new (arrayLength: number): FieldCallToAction[];
                new (...items: FieldCallToAction[]): FieldCallToAction[];
                isArray(arg: any): arg is any[];
                readonly prototype: any[];
                from<T>(arrayLike: ArrayLike<T>): T[];
                from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
                from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
                from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
                of<T_4>(...items: T_4[]): T_4[];
                readonly [Symbol.species]: ArrayConstructor;
            })[];
            default: boolean;
        };
    }>> & {
        onFocus?: (...args: any[]) => any;
        onBlur?: (...args: any[]) => any;
        onKeydown?: (...args: any[]) => any;
        onKeyup?: (...args: any[]) => any;
        onClick?: (...args: any[]) => any;
        "onClick-ui"?: (...args: any[]) => any;
        "onUpdate:modelValue"?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<{
        Identifier: string;
        reset: () => string | number | unknown[];
        focus: () => void;
        value: () => string | number | unknown[];
    }> & {} & import("vue").ComponentCustomProperties & {};
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
    tabindex: {
        type: (BooleanConstructor | NumberConstructor)[];
        default: boolean;
    };
    reset: {
        type: (StringConstructor | BooleanConstructor | {
            (arrayLength: number): FieldCallToAction[];
            (...items: FieldCallToAction[]): FieldCallToAction[];
            new (arrayLength: number): FieldCallToAction[];
            new (...items: FieldCallToAction[]): FieldCallToAction[];
            isArray(arg: any): arg is any[];
            readonly prototype: any[];
            from<T>(arrayLike: ArrayLike<T>): T[];
            from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
            from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
            from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
            of<T_4>(...items: T_4[]): T_4[];
            readonly [Symbol.species]: ArrayConstructor;
        })[];
        default: boolean;
    };
    info: {
        type: (StringConstructor | BooleanConstructor | {
            (arrayLength: number): FieldCallToAction[];
            (...items: FieldCallToAction[]): FieldCallToAction[];
            new (arrayLength: number): FieldCallToAction[];
            new (...items: FieldCallToAction[]): FieldCallToAction[];
            isArray(arg: any): arg is any[];
            readonly prototype: any[];
            from<T>(arrayLike: ArrayLike<T>): T[];
            from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
            from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
            from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
            of<T_4>(...items: T_4[]): T_4[];
            readonly [Symbol.species]: ArrayConstructor;
        })[];
        default: boolean;
    };
    error: {
        type: (StringConstructor | BooleanConstructor | {
            (arrayLength: number): FieldCallToAction[];
            (...items: FieldCallToAction[]): FieldCallToAction[];
            new (arrayLength: number): FieldCallToAction[];
            new (...items: FieldCallToAction[]): FieldCallToAction[];
            isArray(arg: any): arg is any[];
            readonly prototype: any[];
            from<T>(arrayLike: ArrayLike<T>): T[];
            from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
            from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
            from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
            of<T_4>(...items: T_4[]): T_4[];
            readonly [Symbol.species]: ArrayConstructor;
        })[];
        default: boolean;
    };
}>> & {
    onFocus?: (...args: any[]) => any;
    onBlur?: (...args: any[]) => any;
    onKeydown?: (...args: any[]) => any;
    onKeyup?: (...args: any[]) => any;
    onClick?: (...args: any[]) => any;
    "onClick-ui"?: (...args: any[]) => any;
    "onUpdate:modelValue"?: (...args: any[]) => any;
}, {
    Identifier: string;
    reset: () => string | number | unknown[];
    focus: () => void;
    value: () => string | number | unknown[];
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("blur" | "click" | "focus" | "keydown" | "keyup" | "click-ui" | "update:modelValue")[], "blur" | "click" | "focus" | "keydown" | "keyup" | "click-ui" | "update:modelValue", {
    error: string | boolean | FieldCallToAction[];
    name: string;
    label: string;
    reset: string | boolean | FieldCallToAction[];
    disabled: boolean;
    readonly: boolean;
    placeholder: string;
    tabindex: number | boolean;
    info: string | boolean | FieldCallToAction[];
    modelValue: string | number | unknown[];
    palette: string;
    valid: boolean;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        prefix: (_: {}) => any;
        label: (_: {}) => any;
    };
});
export default _default;
