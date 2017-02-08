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
    case actions.LOGOUT:
      return {...state, sendingRequest: true}
    case actions.LOGIN_SUCCESSFUL:
      return {...state, sendingRequest: false, errors: {}, user: action.user}
    case actions.LOGIN_FAILURE:
      return {...state, sendingRequest: false, errors: {network: action.error.message}}
    case actions.LOGOUT_SUCCESSFUL:
    case actions.LOGOUT_FAILURE:
      return {...state, sendingRequest: false, errors: {}, user: null}

    default:
      return state
  }
}

export default authReducer
