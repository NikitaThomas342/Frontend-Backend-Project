import userinfoReducers from './current_user_name'
import loggedinReducers from './loggedin'
import useridReducers from './current_user_id'
import authReducers from './auth'

import { combineReducers } from 'redux'

const allReducers = combineReducers({
    auth:authReducers,
    user:userinfoReducers,
    logged:loggedinReducers,
    user_id:useridReducers,
    
})

export default allReducers