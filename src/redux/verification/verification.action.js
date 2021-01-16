import {VERIFICATION_CONSTANT} from './verification.constant'

export const SHOW_VERIFICATION_COMPONENT = (id) => ({
    type: VERIFICATION_CONSTANT.SHOW_VERIFICATION_COMPONENT,
    payload: id
})

export const CLOSE_DISPLAY = {
    type: VERIFICATION_CONSTANT.CLOSE_DISPLAY
}