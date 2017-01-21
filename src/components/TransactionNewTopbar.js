import React from 'react'
import {connect} from 'react-redux'

import {transactionClear, transactionStartAdding} from 'actions'

let TransactionNewTopbar = ({category, note, value, dispatch}) => {
  let transaction = {category, note, value}

  return (
    <div className='topbar'>
      <i className='material-icons' onClick={() => dispatch(transactionClear())}>clear</i>
      <p>New Transaction</p>
      <i className='material-icons' onClick={() => dispatch(transactionStartAdding(transaction))}>done</i>
    </div>
  )
}

export default connect(
  state => ({
    category: state.newTransactionCategory,
    note: state.newTransactionNote,
    value: state.newTransactionValue
  })
)(TransactionNewTopbar)
