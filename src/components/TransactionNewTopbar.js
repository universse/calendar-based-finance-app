import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'

import {transactionClear, transactionStartAdding, transactionStartEditting} from 'actions'

const Topbar = styled.div`
  align-items: center;
  background: #f44336;
  color: #fff;
  display: flex;
  height: 64px;
  justify-content: space-between;
`

const Icon = styled.i`
  padding: 20px;
`

const Para = styled.p`
  margin: 0;
  font-size: 1.15rem;
`

let TransactionNewTopbar = ({idToEdit, category, note, value, dispatch}) => {
  let transaction = {category, note, value}

  return (
    <Topbar>
      <Icon className='icon-close' onClick={() => dispatch(transactionClear())} />
      <Para>{idToEdit ? 'Edit' : 'New'} Transaction</Para>
      <Icon className='icon-check' onClick={() => idToEdit ? dispatch(transactionStartEditting(transaction)) : dispatch(transactionStartAdding(transaction))} />
    </Topbar>
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
