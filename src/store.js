import { createStore, applyMiddleware, compose } from 'redux'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'

import thunkMiddleware from 'redux-thunk'

// import the root reducer
import rootReducer from './reducers'

const defaultState = {
  auth: {
    sendingRequest: false,
    loggedIn: false,
    user: {},
    errors : {},
    credentials: {},
    token: null
  }
}


const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify here name, actionsBlacklist, actionsCreators and other options
      }) : compose

const enhancer = composeEnhancers(
    applyMiddleware(thunkMiddleware, routerMiddleware(browserHistory)),
    // other store enhancers if any
  )



const store = createStore(rootReducer, defaultState, enhancer)

export const history = syncHistoryWithStore(browserHistory, store)

export default store
