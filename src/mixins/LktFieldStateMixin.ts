import {LktStateUIMixin} from "./LktStateUIMixin";
import {emitClickUI} from "../functions/vm-functions";
import {LktEvent} from "lkt-events/dist/types/classes/LktEvent";
import {StateKey} from "../types/StateKey";

export const LktFieldStateMixin = {

    mixins: [LktStateUIMixin],

    methods: {
        /**
         *
         * @param $event
         * @param event
         */
        onClickUi($event: any, event: LktEvent){
            const id: StateKey = event.id;
            if (id === 'reset') {
                this.reset();
                return;
            }
            if (id === 'password' && 'visiblePassword' in this) {
                this.visiblePassword = !this.visiblePassword;
                return;
            }
            emitClickUI(this, $event, event.id, {field: this});
        }
    }
};