import {emitClickUI} from "../functions/vm-functions";

export const LktStateUIMixin = {

    methods: {
        /**
         *
         * @param $event
         * @param key
         * @param data
         */
        onUIStatusClick($event: any, key: string, data:any = {}){
            emitClickUI(this, $event, key, data);
        },
    }
};