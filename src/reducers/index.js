import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import authReducer from './auth-reducer'

const rootReducer = combineReducers({
  auth: authReducer,
  routing: routerReducer
})

export default rootReducer
