import * as actions from '../actions'

const credentialsUpdate = (key, value, credentials) => ({...credentials, [key]: value})

const validateLoginForm = (key, value, errors) => {
  if (!value) {
    return {...errors, [key]: true}
  } else {
    return {...errors, [key]: false}
  }
}

const defaultAuth = {
  sendingRequest: false,
  loggedIn: false,
  user: null,
  errors : null,
  credentials: {},
  token: null
}

const authReducer = (state = defaultAuth, action) => {

  switch (action.type) {
    case actions.LOGIN_FORM_UPDATE:
      return {
        ...state,
        credentials: credentialsUpdate(action.key, action.value, state.credentials),
        errors: validateLoginForm(action.key, action.value, state.errors)
      }
    case actions.LOGIN:
      return {...state, sendingRequest: true}
    case actions.LOGIN_SUCCESSFUL:
      const usr = {...state, sendingRequest: false, loggedIn: true, errors: {}, user: action.user}
      console.log('LOGIN_SUCCESSFUL state after update', usr)
      return usr
    case actions.LOGIN_FAILURE:
      return {...state, sendingRequest: false, errors: {network: action.error.message}}
    default:
      return state
  }
}

export default authReducer
