import {VERIFICATION_CONSTANT} from './verification.constant'


const INITIAL_STATE = {
    verificationDisplay: false,
    capturedID: null,
    authenticated: false
}

const verificationReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case VERIFICATION_CONSTANT.SHOW_VERIFICATION_COMPONENT:
            return {
                ...state,
                verificationDisplay: true,
                capturedID: action.payload
            }
        case VERIFICATION_CONSTANT.CLOSE_DISPLAY:
            return {
                ...state,
                verificationDisplay: false
            }
        default:
            return state
    }
}

export default verificationReducer