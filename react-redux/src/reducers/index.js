import {combineReducers} from 'redux'

import counterReducer from './counterReducer'
import authReducer from './login'

//this is registry
const rootReducer=combineReducers({
    counter:counterReducer,
    auth:authReducer
})


export default rootReducer