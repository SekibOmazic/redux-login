import React from 'react'
//import { Link } from 'react-router'
import Navigation from './components/Navigation'

const App = (props) =>
  (
    <div>
      <h1>App</h1>
      <Navigation />

      {/*
      <ul role="navigation">
        <li><Link to="/" onlyActiveOnIndex={true} activeClassName="active">Home</Link></li>
        <li><Link to="/dashboard" activeClassName="active">Dashboard</Link></li>
        <li><Link to="/login" activeClassName="active">Login</Link></li>
      </ul>
      */}

      {props.children}

    </div>
  )

export default App
