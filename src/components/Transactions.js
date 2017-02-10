import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'

import Transaction from 'Transaction'
import Ul from 'Ul'

const Wrapper = styled.div`
  height: 1000px;
  margin: 0 auto;
  max-width: 26rem;
  overflow: hidden;

  @media screen and (min-width: 48rem) {
    background: #f44336;
    color: #fff;
    flex-basis: calc(100vw - 25rem);
    height: 50%;
    margin-left: 10px;
    max-width: 30rem;
  }
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
