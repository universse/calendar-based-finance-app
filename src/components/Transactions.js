import React from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import styled from 'styled-components'

import Transaction from 'Transaction'
import Ul from 'Ul'

const Wrapper = styled.div`
  height: 200px;
  overflow: hidden;
  @media screen and (min-width: 416px) {
  }
`

const TransactionList = styled(Ul)`
  height: 100%;
  margin-right: -20px;
  overflow-y: auto;
`

let Transactions = ({transactions = [], dispatch}) =>
  <Wrapper>
    <TransactionList onClick={() => dispatch(push('/edit'))}>
      {transactions.map(transaction => <Transaction key={transaction.id} {...transaction} />)}
    </TransactionList>
  </Wrapper>

export default connect(
  state => ({
    transactions: state.transactionList[state.currentDate.toDateString()]
  })
)(Transactions)
