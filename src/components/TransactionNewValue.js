import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'

const Value = styled.div`
  font-size: 2rem;
  margin: 0;
  padding: 8px;
  padding-right: 24px;;
  padding-left: 0;
  text-align: right;
`

let TransactionNewValue = ({newTransactionValue}) =>
  <Value>${newTransactionValue}</Value>

export default connect(
  state => ({
    newTransactionValue: state.newTransactionValue
  })
)(TransactionNewValue)
