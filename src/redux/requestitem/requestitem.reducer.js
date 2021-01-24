import REQUEST_ITEM_CONSTANT from './requestitem.constant'

const INITIAL_STATE = {
    summaryItems: [],
    errorMessage: "",
    is_submitting: false,
    requestList: [],
    is_fetching: false,
    is_singleFetching: false,
    singleRequest: [],
    request_items_detail: []
}

const RequestItemReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case REQUEST_ITEM_CONSTANT.ADD_TO_SUMMARY:
            if(action.payload.quantity >= 0){
                state.summaryItems.map((item, index) => {
                    if(item.name === action.payload.name){
                        state.summaryItems.splice(index, 1)
                        return {
                            ...state,
                            summaryItems: state.summaryItems.concat(action.payload)
                        }
                    }
                })
                return {
                    ...state,
                    summaryItems: state.summaryItems.concat(action.payload)
                }
            }
            else {
                return state
            }
        case REQUEST_ITEM_CONSTANT.REMOVE_FROM_SUMMARY:
            let newArray = state.summaryItems.filter(item => {
                return item.name !== action.payload.name
            })
            return {
                ...state,
                summaryItems: [].concat(newArray)
            }
        case REQUEST_ITEM_CONSTANT.SUBMIT_REQUEST_START:
            return {
                ...state,
                is_submitting: true
            }
        case REQUEST_ITEM_CONSTANT.SUBMIT_REQUEST_SUCCESS:
            return {
                ...state,
                is_submitting: false,
                errorMessage: ""
            }
        case REQUEST_ITEM_CONSTANT.SUBMIT_REQUEST_FAILED:
            return {
                ...state,
                is_submitting: false,
                errorMessage: action.payload
            }
        case REQUEST_ITEM_CONSTANT.FETCH_REQUEST_LIST_START:
            return {
                ...state,
                is_fetching: true
            }
        case REQUEST_ITEM_CONSTANT.FETCH_REQUEST_LIST_SUCCESS:
            return {
                ...state,
                is_fetching: false,
                errorMessage: "",
                requestList: Array.from(action.payload)
            }
        case REQUEST_ITEM_CONSTANT.FETCH_REQUEST_LIST_FAILED:
            return {
                ...state,
                is_fetching: false,
                errorMessage: action.payload
            }
        case REQUEST_ITEM_CONSTANT.FETCH_FULFILLED_REQUEST_START:
            return {
                ...state,
                is_fetching: true
            }
        case REQUEST_ITEM_CONSTANT.FETCH_FULFILLED_REQUEST_SUCCESS:
            return {
                ...state,
                is_fetching: false,
                errorMessage: "",
                requestList: Array.from(action.payload)
            }
        case REQUEST_ITEM_CONSTANT.FETCH_FULFILLED_REQUEST_FAILED:
            return {
                ...state,
                is_fetching: false,
                errorMessage: action.payload
            }
        case REQUEST_ITEM_CONSTANT.FETCH_SINGLEREQUEST_START:
            return {
                ...state,
                is_singleFetching: true
            }
        case REQUEST_ITEM_CONSTANT.FETCH_SINGLEREQUEST_SUCCESS: 
            return {
                ...state,
                is_singleFetching: false,
                errorMessage: "",
                singleRequest: Array.from(action.payload),
                request_items_detail: Array.from(action.payload[0]["item_details"])
            }
        case REQUEST_ITEM_CONSTANT.FETCH_SINGLEREQUEST_FAILED:
            return {
                ...state,
                is_singleFetching: false,
                errorMessage: action.payload
            }
        case REQUEST_ITEM_CONSTANT.RESET_SUMMARY:
            return {
                ...state,
                errorMessage: "",
                summaryItems: []
            }
        default:
            return state
    }
}


export default RequestItemReducer