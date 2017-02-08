import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute/*, browserHistory*/ } from 'react-router'

import App from './App'
import Home  from './components/Home'
import Dashboard from './components/Dashboard'
import Login from './components/auth/Login'

import { Provider } from 'react-redux'
import store, { history } from './store'

const requireAuth = (nextState, replace) => {
  let {auth} = store.getState()

  console.log('AUTH', auth)

  if (!auth.user._id) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

const root = (
  <Provider store={store} >
    <Router history={history} >
      <Route path="/" component={App} >
        <IndexRoute component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} onEnter={requireAuth} />
      </Route>
    </Router>
  </Provider>
)

render(
  root,
  document.getElementById('root')
)
