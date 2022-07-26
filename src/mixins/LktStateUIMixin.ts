import {FIELD_STATE_PROPS} from "../constants";
import {emitClickUI} from "../functions/vm-functions";

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
            emitClickUI(this, $event, key, data);
        },
    }
};