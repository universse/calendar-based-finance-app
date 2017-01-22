import React from 'react'
import {connect} from 'react-redux'
import {startLogout} from 'actions'

let Logout = props =>
  <button onClick={() => props.dispatch(startLogout())}>Log Out!</button>

export default connect()(Logout)
