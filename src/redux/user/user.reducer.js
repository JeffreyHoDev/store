const INITIAL_STATE = {
    is_deleting: false
}

export const UserReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case "DELETE_USER_FROM_DATABASE_START":
            return {
                ...state,
                is_deleting: true
            }
        case "DELETE_USER_FROM_DATABASE_SUCCESS":
            return {
                ...state,
                is_deleting: false
            }
        case "DELETE_USER_FROM_DATABASE_FAILED":
            return {
                ...state,
                is_deleting: false
            }
        default:
            return state
    }
}