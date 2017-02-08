import React from 'react'
import { connect } from 'react-redux'

//import { bindActionCreators } from 'redux'
//import * as authActions from '../actions/authActions'

const Dashboard = (props) =>
  (
    <div>
      <h1>Dashboard, visible if logged in</h1>
      <pre>
        <code>
          {JSON.stringify(props.user)}
        </code>
      </pre>
    </div>
  )

  const mapStateToProps = (state) => {
    return state.auth
  }

  //const mapDispachToProps = (dispatch) => (
  //  bindActionCreators({...authActions}, dispatch)
  //)

  export default connect(mapStateToProps/*, mapDispachToProps*/)(Dashboard)
