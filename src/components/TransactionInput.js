import React from 'react'

export default class TransactionInput extends React.Component {
  constructor (props) {
    super(props)
    this._setTransactionValue = this._setTransactionValue.bind(this)
  }

  _setTransactionValue (e) {

  }

  render () {
    let buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', <i className='material-icons' style={{position: 'relative', top: '3px'}}>backspace</i>]
    return (
      <div className='transaction-input'>
        {buttons.map((button, i) => <button key={i}>{button}</button>)}
      </div>
    )
  }
}
