const INITIAL_STATE = {
    summaryItems: {}
}


const RequestItemReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case "ADD_TO_SUMMARY":
            return {
                ...state,
                summaryItems: action.payload
            }
        default:
            return state
    }
}


export default RequestItemReducer