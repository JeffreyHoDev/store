import { combineReducers } from 'redux'
import RequestItemReducer from '../requestitem/requestitem.reducer'
import StoreItemReducer from '../storeitem/storeitem.reducer'

const rootReducer = combineReducers({
    RequestItemReducer: RequestItemReducer,
    StoreItemReducer: StoreItemReducer
})

export default rootReducer