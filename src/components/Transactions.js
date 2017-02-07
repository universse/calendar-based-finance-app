import React from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'

import Transaction from 'Transaction'
import Ul from 'Ul'

let Transactions = ({transactions = [], dispatch}) =>
  <div>
    <Ul onClick={() => dispatch(push('/edit'))}>
      {transactions.map(transaction => <Transaction key={transaction.id} {...transaction} />)}
    </Ul>
  </div>

export default connect(
  state => ({
    transactions: state.transactionList[state.currentDate.toDateString()]
  })
)(Transactions)
