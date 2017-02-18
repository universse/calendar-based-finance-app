import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'

import {transactionClear, transactionStartAdding, transactionStartEditting} from 'actions'
import {backgroundColor} from 'variables'

const Topbar = styled.div`
  align-items: center;
  background-color: ${backgroundColor};
  box-shadow: 0 3px 6px rgba(0, 0, 0, .16), 0 3px 6px rgba(0, 0, 0, .23);
  color: #fff;
  display: flex;
  height: 64px;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 26rem;
  width: 100%;
`

const Icon = styled.i`
  padding: 20px;
`

const Para = styled.p`
  margin: 0;
  font-size: 1.15rem;
`

let TransactionNewTopbar = ({idToEdit, category, note, value, dispatch}) => {
  let _clear = () => dispatch(transactionClear())
  let _check = () => {
    if (value !== '0') {
      let transaction = {category, note, value}
      return idToEdit ? dispatch(transactionStartEditting(transaction)) : dispatch(transactionStartAdding(transaction))
    }
  }

  return (
    <Topbar>
      <Icon className='icon-close' onClick={_clear} />
      <Para>{idToEdit ? 'Edit' : 'New'} Transaction</Para>
      <Icon className='icon-check' onClick={_check} />
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
