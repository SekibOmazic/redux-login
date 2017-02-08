import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as authActions from '../actions/authActions'

import { Link } from 'react-router'

const Navigation = ({ user, logout }) => {
  const navButtons = user && user._id ?
  (<div>
    <div>
      <Link to="/dashboard" activeClassName="active">Dashboard</Link>
    </div>
    <div>
      <a href="/" onClick={() => logout()}>Logout</a>
    </div>
  </div>)
  :
  (
    <div>
      <Link to="/login" activeClassName="active">Login</Link>
    </div>
  )

  return (
    <div className="nav">
      <div className="nav__wrapper">
        <Link to="/" onlyActiveOnIndex={true} activeClassName="active">Home</Link>
        { navButtons }
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return state.auth
}

const mapDispachToProps = (dispatch) => (
  bindActionCreators({...authActions}, dispatch)
)

export default connect(mapStateToProps, mapDispachToProps)(Navigation)
