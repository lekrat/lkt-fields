import { LktEvent } from "lkt-events/dist/types/classes/LktEvent";
export declare const LktFieldStateMixin: {
    mixins: {
        methods: {
            onUIStatusClick($event: any, key: string, data?: any): void;
        };
    }[];
    methods: {
        /**
         *
         * @param $event
         * @param event
         */
        onClickUi($event: any, event: LktEvent): void;
    };
};
