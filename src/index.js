import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute/*, browserHistory*/ } from 'react-router'

import App from './App'
import Home  from './components/Home'
import Dashboard from './components/Dashboard'
import Login from './components/auth/Login'

import { Provider } from 'react-redux'
import store, { history } from './store'


const root = (
  <Provider store={store} >
    <Router history={history} >
      <Route path="/" component={App} >
        <IndexRoute component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
      </Route>
    </Router>
  </Provider>
)

render(
  root,
  document.getElementById('root')
)
