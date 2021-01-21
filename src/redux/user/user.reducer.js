const INITIAL_STATE = {
    is_deleting: false,
    errorMessage: "",
    is_adding: false,
    user_list: [],
    is_fetching: false,
    singleUser: []
}

export const UserReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case "DELETE_USER_FROM_DATABASE_START":
            return {
                ...state,
                is_deleting: true,
                errorMessage: ""
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
        case "FETCH_USER_FROM_DATABASE_START":
            return {
                ...state,
                is_fetching: true,
                errorMessage: ""
            }
        case "FETCH_USER_FROM_DATABASE_SUCCESS":
            return {
                ...state,
                is_fetching: false,
                user_list: Array.from(action.payload)
            }
        case "FETCH_USER_FROM_DATABASE_FAILED":
            return {
                ...state,
                is_fetching: false,
                errorMessage: action.payload
            }
        case "FETCH_SINGLEUSER_FROM_DATABASE_START":
            return {
                ...state,
                is_fetching: true,
                errorMessage: ""
            }
        case "FETCH_SINGLEUSER_FROM_DATABASE_SUCCESS":
            return {
                ...state,
                is_fetching: false,
                singleUser: Array.from(action.payload)
            }
        case "FETCH_SINGLEUSER_FROM_DATABASE_FAILED":
            return {
                ...state,
                is_fetching: false,
                errorMessage: action.payload
            }
        case "ADD_NEW_USER_START":
            return {
                ...state,
                is_adding: true
            }
        case "ADD_NEW_USER_SUCCESS":
            return {
                ...state,
                is_adding: false,
                errorMessage: ""
            }
        case "ADD_NEW_USER_FAILED":
            return {
                ...state,
                is_adding: false,
                errorMessage: action.payload
            }
        default:
            return state
    }
}