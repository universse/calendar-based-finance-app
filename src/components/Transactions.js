import React from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'

import Transaction from 'Transaction'

let Transactions = ({transactions = [], dispatch}) =>
  <div>
    <ul className='transactions' onClick={() => dispatch(push('/edit'))}>
      {transactions.map(transaction => <Transaction key={transaction.id} {...transaction} />)}
    </ul>
  </div>

export default connect(
  state => ({
    transactions: state.transactionList[state.currentDate.toDateString()]
  })
)(Transactions)
