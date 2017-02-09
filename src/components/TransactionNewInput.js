import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'

import {transactionValueInput} from 'actions'

const TransactionInput = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

const Button = styled.button`
  background: none;
  border: 0;
  border-bottom: 1px solid #ddd;
  font-size: 18px;
  outline: none;
  padding: 14px;
  width: calc(100% /3);

  &:active {
    background: #ddd;
  }

  &:nth-child(3n + 2) {
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
  }
`

let TransactionNewInput = ({dispatch}) => {
  let buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', <i className='icon-backspace' />]
  return (
    <TransactionInput onClick={e => dispatch(transactionValueInput(e.target.innerHTML))}>
      {buttons.map((button, i) => <Button key={i}>{button}</Button>)}
    </TransactionInput>
  )
}

export default connect()(TransactionNewInput)
