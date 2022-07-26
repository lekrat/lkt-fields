import {LktStateUIMixin} from "./LktStateUIMixin";
import {emitClickUI} from "../functions/vm-functions";

export const LktFieldStateMixin = {

    mixins: [LktStateUIMixin],

    methods: {
        /**
         *
         * @param $event
         * @param key
         */
        onClickUi($event: any, key: string){
            if (key === 'reset') {
                this.reset();
                return;
            }
            if (key === 'show-password' && this.hasOwnProperty('visiblePassword')) {
                this.visiblePassword = !this.visiblePassword;
                return;
            }
            emitClickUI(this, $event, key, {field: this});
        }
    }
};