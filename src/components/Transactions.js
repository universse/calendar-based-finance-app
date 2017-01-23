import React from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'

import Transaction from 'Transaction'

class Transactions extends React.Component {
  constructor (props) {
    super(props)
    this._editTransaction = this._editTransaction.bind(this)
  }

  _editTransaction () {
    let {dispatch} = this.props
    dispatch(push('/edit'))
  }

  render () {
    let {transactions = []} = this.props

    return (
      <div>
        <ul className='transactions' onClick={this._editTransaction}>
          {transactions.map(transaction => <Transaction key={transaction.id} {...transaction} />)}
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({
    transactions: state.transactionList[state.currentDate.toDateString()]
  })
)(Transactions)
