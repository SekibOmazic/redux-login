import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as authActions from '../../actions/authActions'
import LoginForm from './LoginForm'


const Login = (props) => {
  return (
    <LoginForm {...props} />
  )
}


const mapStateToProps = (state) => {
  return state.auth
}

const mapDispachToProps = (dispatch) => (
  bindActionCreators({...authActions}, dispatch)
)

export default connect(mapStateToProps, mapDispachToProps)(Login)
