import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'

import Transaction from 'Transaction'
import Ul from 'Ul'

const TransactionList = styled(Ul)`
  border-top: 1px solid rgba(255, 255, 255, .5);
  margin-right: -20px;
  overflow-y: auto;

  @media screen and (min-width: 768px) {
    margin-top: 2rem;
  }
`

let Transactions = ({transactions = []}) =>
  <TransactionList>
    {transactions.map(transaction => <Transaction key={transaction.id} {...transaction} />)}
  </TransactionList>

export default connect(
  state => ({
    transactions: state.transactionList[state.currentDate.toDateString()]
  })
)(Transactions)
