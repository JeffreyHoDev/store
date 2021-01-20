import STORE_ITEM_CONSTANT from './storeitem.constant.js'

export const DISPLAY_ADDITEM_COMPONENT = {
    type: STORE_ITEM_CONSTANT.DISPLAY_ADDITEM_COMPONENT
}

export const ADD_NEW_ITEM_START = () => ({
    type: STORE_ITEM_CONSTANT.ADD_NEW_ITEM_START
})

export const ADD_NEW_ITEM_SUCCESS = () => ({
    type: STORE_ITEM_CONSTANT.ADD_NEW_ITEM_START
})

export const ADD_NEW_ITEM_FAILED = () => ({
    type: STORE_ITEM_CONSTANT.ADD_NEW_ITEM_START
})

export const ADD_NEW_ITEM_ASYNC = () => {
    return dispatch => {
        dispatch(ADD_NEW_ITEM_START())
    }
}