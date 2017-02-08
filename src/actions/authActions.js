import * as actions from './index'
import * as api from '../api/auth-api'

import { push } from 'react-router-redux'

const sendingRequest = (actionType) => ({
  type: actionType
})

const loginFailed = (error) => ({
  type: actions.LOGIN_FAILURE,
  error
})

const loginSuccessful = (user) => ({
  type: actions.LOGIN_SUCCESSFUL,
  user
})

// TODO: use redux-observable, it's cool
export const loginUser = (username, password) => dispatch => {
  dispatch(sendingRequest(actions.LOGIN))
  return api.loginWithCredentials(username, password)
    .then(user => {
      dispatch(loginSuccessful(user))
      dispatch(push('/dashboard')) // handled by routerMiddleware
    })
    .catch(err => dispatch(loginFailed(err)))
}

export const updateLoginForm = (key, value) => dispatch => {
  dispatch({type: actions.LOGIN_FORM_UPDATE, key, value})
}


const logoutFailed = (error) => ({
  type: actions.LOGOUT_FAILURE,
  error
})

const logoutSuccessful = () => ({
  type: actions.LOGOUT_SUCCESSFUL
})

export const logout = () => dispatch => {
  dispatch(sendingRequest(actions.LOGOUT))
  dispatch(logoutSuccessful())

  return api.logout()
    .then(user => dispatch(logoutSuccessful()))
    .catch(err => dispatch(logoutFailed(err)))
}


const registerFailed = (error) => ({
  type: actions.REGISTER_FAILURE,
  error
})

const registerSuccessful = (user) => ({
  type: actions.REGISTER_SUCCESSFUL,
  user
})

export const registerUser = (username, password) => dispatch => {
  dispatch(sendingRequest(actions.REGISTER))
  return api.registerNewUser(username, password)
    .then(user => dispatch(registerSuccessful(user)))
    .catch(err => dispatch(registerFailed(err)))
}
