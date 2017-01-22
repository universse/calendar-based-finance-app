import React from 'react'
import {connect} from 'react-redux'

import {startLogin} from 'actions'

let Login = props =>
  <div onClick={() => props.dispatch(startLogin())}>
    Login with GitHub
  </div>

export default connect()(Login)
