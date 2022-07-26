import {createLktEvent} from "lkt-events";
import {ILktObject} from "lkt-tools";

export const emitClickUI = ($vm: any, $event: any, key: string, data:ILktObject = {}) => {
    $vm.$emit('click-ui', $event, createLktEvent(key, data));
}

export const emitKeyUp = ($vm: any, $event: any, key: string, data:ILktObject = {}) => {
    $vm.$emit('keyup', $event, createLktEvent(key, data))
}

export const emitKeyDown = ($vm: any, $event: any, key: string, data:ILktObject = {}) => {
    $vm.$emit('keydown', $event, createLktEvent(key, data))
}

export const emitFocus = ($vm: any, $event: any, key: string, data:ILktObject = {}) => {
    $vm.$emit('focus', $event, createLktEvent(key, data))
}

export const emitBlur = ($vm: any, $event: any, key: string, data:ILktObject = {}) => {
    $vm.$emit('blur', $event, createLktEvent(key, data))
}

export const emitClick = ($vm: any, $event: any, key: string, data:ILktObject = {}) => {
    $vm.$emit('click', $event, createLktEvent(key, data))
}