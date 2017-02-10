import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'

import Transaction from 'Transaction'
import Ul from 'Ul'

const Wrapper = styled.div`
  height: 1000px;
  overflow: hidden;
`

const TransactionList = styled(Ul)`
  height: 100%;
  margin-right: -20px;
  overflow-y: auto;
`

let Transactions = ({transactions = [], dispatch}) => {
  return (
    <Wrapper>
      <TransactionList>
        {transactions.map(transaction => <Transaction key={transaction.id} {...transaction} />)}
      </TransactionList>
    </Wrapper>
  )
}

export default connect(
  state => ({
    transactions: state.transactionList[state.currentDate.toDateString()]
  })
)(Transactions)
