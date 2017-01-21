import React from 'react'
import {connect} from 'react-redux'

let TransactionNewValue = ({newTransactionValue}) =>
  <p className='value'>${newTransactionValue}</p>

export default connect(
  state => ({
    newTransactionValue: state.newTransactionValue
  })
)(TransactionNewValue)
