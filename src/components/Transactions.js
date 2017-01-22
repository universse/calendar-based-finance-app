import React from 'react'
import {connect} from 'react-redux'

import {Transaction} from 'Transaction'

let Transactions = ({transactions = []}) =>
  <div>
    <ul className='transactions'>
      {transactions.map(({id, ...others}) => <Transaction key={id} {...others} />)}
    </ul>
  </div>

export default connect(
  state => ({
    transactions: state.transactionList[state.currentDate.toDateString()]
  })
)(Transactions)
