import * as actions from './index'
import * as api from '../api/auth-api'

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

export const loginUser = (username, password) => dispatch => {
  console.log('login user action creator invoked', username, password)
  dispatch(sendingRequest(actions.LOGIN))

  return api.loginWithCredentials(username, password)
    .then(user => dispatch(loginSuccessful(user)))
    .catch(err => dispatch(loginFailed(err)))
}

export const updateLoginForm = (key, value) => dispatch => {
  dispatch({type: actions.LOGIN_FORM_UPDATE, key, value})
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
