import { PropType } from "vue";
import { StateConfigValue } from "../value-objects/StateConfigValue";
import { StateTextValue } from "../value-objects/StateTextValue";
declare const _default: {
    name: string;
    emits: string[];
    props: {
        stateConfigValue: {
            type: PropType<StateConfigValue>;
            default: () => {};
        };
        stateTextsValue: {
            type: PropType<StateTextValue>;
            default: () => {};
        };
    };
    computed: {
        enabledIcons(): any;
    };
    methods: {
        /**
         *
         * @param $event
         * @param key
         * @param data
         */
        onUIStatusClick($event: any, key: string, data?: any): void;
    };
};
export default _default;
