import {FIELD_STATE_PROPS} from "../constants";
import {createLktEvent} from "lkt-events";

export const LktStateUIMixin = {

    props: FIELD_STATE_PROPS,

    computed: {
        showInfoUi(){
            return this.showAdd
                || this.showMandatory
                || this.showOpen
                || this.showInfo
                || this.showError
                || this.showLog
                || this.showWarn
                || this.showLink
                || this.showReset
                || this.showPassword
                ;
        }
    },

    methods: {
        /**
         *
         * @param $event
         * @param key
         * @param data
         */
        onUIStatusClick($event: any, key: string, data:any = {}){
            this.$emit('click-ui', $event, createLktEvent(key, data));
        },
    }
};