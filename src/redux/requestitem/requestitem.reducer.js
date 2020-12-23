const INITIAL_STATE = {
    summaryItems: []
}


const RequestItemReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case "ADD_TO_SUMMARY":
            return {
                ...state,
                summaryItems: state.summaryItems.concat(action.payload)
            }
        default:
            return state
    }
}


export default RequestItemReducer