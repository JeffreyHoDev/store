const INITIAL_STATE = {
    summaryItems: []
}


const RequestItemReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case "ADD_TO_SUMMARY":
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
        default:
            return state
    }
}


export default RequestItemReducer