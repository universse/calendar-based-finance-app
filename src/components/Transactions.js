import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'

import Transaction from 'Transaction'
import {transactionsFetch} from 'actions'
import Ul from 'Ul'

const TransactionList = styled(Ul)`
  background-color: #fefefe;
  color: rgba(0, 0, 0, .75);
  margin-right: -20px;
  overflow-y: auto;
  width: calc(100% + 20px);

  @media screen and (min-width: 768px) {
    background-color: inherit;
    color: rgba(255, 255, 255, .95);
  }
`

class Transactions extends React.Component {
  render () {
    let transactions = this.props.transactions || []

    return (
      <TransactionList>
        {transactions.map(transaction => <Transaction key={transaction.id} {...transaction} />)}
      </TransactionList>
    )
  }

  componentDidMount () {
    this._timer = setInterval(() => this.props.dispatch(transactionsFetch()), 10000)
  }

  componentWillUnmount () {
    clearInterval(this._timer)
  }
}

export default connect(
  state => ({
    transactions: state.transactionList[state.currentDate.toDateString()]
  })
)(Transactions)
