const INITIAL_STATE = {
    displayAddItem: false
}

const StoreItemReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case "DISPLAY_ADDITEM_COMPONENT":
            return {
                ...state,
                displayAddItem: !state.displayAddItem
            }
        default:
            return state
    }
}

export default StoreItemReducer