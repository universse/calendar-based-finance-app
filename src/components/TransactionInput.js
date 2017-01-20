import React from 'react'
import {connect} from 'react-redux'

import {transactionInput} from 'actions'

let TransactionInput = ({dispatch}) => {
  let buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', <i className='material-icons' style={{position: 'relative', top: '3px'}}>backspace</i>]
  return (
    <div className='transaction-input' onClick={e => { dispatch(transactionInput(e.target.innerHTML)) }}>
      {buttons.map((button, i) => <button key={i}>{button}</button>)}
    </div>
  )
}

export default connect()(TransactionInput)
