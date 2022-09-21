declare const _default: {
    name: string;
    emits: string[];
    mixins: {
        props: {
            showAdd: {
                type: BooleanConstructor;
                default: boolean;
            };
            showLink: {
                type: BooleanConstructor;
                default: boolean;
            };
            showOpen: {
                type: BooleanConstructor;
                default: boolean;
            };
            showInfo: {
                type: BooleanConstructor;
                default: boolean;
            };
            showPassword: {
                type: BooleanConstructor;
                default: boolean;
            };
            showMandatory: {
                type: BooleanConstructor;
                default: boolean;
            };
            showError: {
                type: BooleanConstructor;
                default: boolean;
            };
            showWarn: {
                type: BooleanConstructor;
                default: boolean;
            };
            showLog: {
                type: BooleanConstructor;
                default: boolean;
            };
            showReset: {
                type: BooleanConstructor;
                default: boolean;
            };
            textAdd: {
                type: StringConstructor;
                default: string;
            };
            textInfo: {
                type: StringConstructor;
                default: string;
            };
            textPassword: {
                type: StringConstructor;
                default: string;
            };
            textMandatory: {
                type: StringConstructor;
                default: string;
            };
            textError: {
                type: StringConstructor;
                default: string;
            };
            textWarn: {
                type: StringConstructor;
                default: string;
            };
            textLog: {
                type: StringConstructor;
                default: string;
            };
            textLink: {
                type: StringConstructor;
                default: string;
            };
            textOpen: {
                type: StringConstructor;
                default: string;
            };
            textReset: {
                type: StringConstructor;
                default: string;
            };
        };
        computed: {
            showInfoUi(): any;
        };
        methods: {
            onUIStatusClick($event: any, key: string, data?: any): void;
        };
    }[];
};
export default _default;
