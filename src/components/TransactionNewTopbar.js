import React from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'

import {transactionClearInput} from 'actions'

let TransactionNewTopbar = ({dispatch}) =>
  <div className='topbar'>
    <i className='material-icons' onClick={() => { dispatch(transactionClearInput()); dispatch(push('/app')) }}>clear</i>
    <p>New Transaction</p>
    <i className='material-icons'>done</i>
  </div>

export default connect()(TransactionNewTopbar)
