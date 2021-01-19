import { combineReducers } from 'redux'
import RequestItemReducer from '../requestitem/requestitem.reducer'
import StoreItemReducer from '../storeitem/storeitem.reducer'
import { UserReducer } from '../user/user.reducer'
import verificationReducer from '../verification/verification.reducer'

const rootReducer = combineReducers({
    RequestItemReducer: RequestItemReducer,
    StoreItemReducer: StoreItemReducer,
    verificationReducer: verificationReducer,
    userReducer: UserReducer
})

export default rootReducer