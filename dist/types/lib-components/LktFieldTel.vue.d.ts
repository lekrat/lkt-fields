import { FieldCallToAction } from "../types/FieldCallToAction";
declare const _default: {
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
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
            type: NumberConstructor;
            default: any;
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
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("blur" | "click" | "focus" | "keydown" | "keyup" | "click-ui" | "update:modelValue")[], import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
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
            type: NumberConstructor;
            default: any;
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
        error: string | boolean | FieldCallToAction[];
        name: string;
        label: string;
        reset: string | boolean | FieldCallToAction[];
        disabled: boolean;
        readonly: boolean;
        placeholder: string;
        tabindex: number;
        info: string | boolean | FieldCallToAction[];
        modelValue: string | number | unknown[];
        palette: string;
        valid: boolean;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
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
            type: NumberConstructor;
            default: any;
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
    }, {}, {}, {}, {}, {
        error: string | boolean | FieldCallToAction[];
        name: string;
        label: string;
        reset: string | boolean | FieldCallToAction[];
        disabled: boolean;
        readonly: boolean;
        placeholder: string;
        tabindex: number;
        info: string | boolean | FieldCallToAction[];
        modelValue: string | number | unknown[];
        palette: string;
        valid: boolean;
    }>;
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
        type: NumberConstructor;
        default: any;
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
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("blur" | "click" | "focus" | "keydown" | "keyup" | "click-ui" | "update:modelValue")[], "blur" | "click" | "focus" | "keydown" | "keyup" | "click-ui" | "update:modelValue", {
    error: string | boolean | FieldCallToAction[];
    name: string;
    label: string;
    reset: string | boolean | FieldCallToAction[];
    disabled: boolean;
    readonly: boolean;
    placeholder: string;
    tabindex: number;
    info: string | boolean | FieldCallToAction[];
    modelValue: string | number | unknown[];
    palette: string;
    valid: boolean;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        label: (_: {}) => any;
    };
});
export default _default;
