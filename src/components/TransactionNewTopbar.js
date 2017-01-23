import React from 'react'
import {connect} from 'react-redux'

import {transactionClear, transactionStartAdding, transactionStartEditting} from 'actions'

let TransactionNewTopbar = ({idToEdit, category, note, value, dispatch}) => {
  let transaction = {category, note, value}

  return (
    <div className='topbar'>
      <i className='material-icons' onClick={() => dispatch(transactionClear())}>clear</i>
      <p>{idToEdit ? 'Edit' : 'New'} Transaction</p>
      <i className='material-icons' onClick={() => idToEdit ? dispatch(transactionStartEditting(transaction)) : dispatch(transactionStartAdding(transaction))}>done</i>
    </div>
  )
}

export default connect(
  state => ({
    idToEdit: state.transactionIdEdit,
    category: state.newTransactionCategory,
    note: state.newTransactionNote,
    value: state.newTransactionValue
  })
)(TransactionNewTopbar)
