import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'

const Value = styled.div`
  box-sizing: border-box;
  font-size: 2rem;
  margin: 0 auto;
  max-width: 26rem;
  width: 100%;
  padding: 8px 24px 8px 0;
  text-align: right;
`

let TransactionNewValue = ({newTransactionValue}) =>
  <Value>${newTransactionValue}</Value>

export default connect(
  state => ({
    newTransactionValue: state.newTransactionValue
  })
)(TransactionNewValue)
