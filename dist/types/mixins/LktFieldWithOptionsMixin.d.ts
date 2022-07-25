export declare const LktFieldWithOptionsMixin: {
    props: {
        options: {
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
        optionFormatter: {
            type: FunctionConstructor;
            default: (option?: any) => any;
        };
        optionParser: {
            type: FunctionConstructor;
            default: (option?: any, i?: number) => any;
        };
    };
    data(): any;
    computed: {
        renderSelectedOption: {
            cache: boolean;
            get(): any;
        };
    };
    watch: {
        options: {
            handler(): void;
            deep: boolean;
        };
    };
    methods: {
        getDropdownOptionSelector(option: any, highlightOption?: number, i?: number): {
            'is-highlight': boolean;
            'is-selected': boolean;
        };
        renderOption(option: any): any;
    };
};
