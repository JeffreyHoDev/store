import { combineReducers } from 'redux'
import RequestItemReducer from '../requestitem/requestitem.reducer'


const rootReducer = combineReducers({
    RequestItemReducer: RequestItemReducer
})

export default rootReducer