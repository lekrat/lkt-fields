import {LktStateUIMixin} from "./LktStateUIMixin";

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
            this.onUIStatusClick($event, key, {
                field: this,
            });
        }
    }
};