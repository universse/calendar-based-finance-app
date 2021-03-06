import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'

import {transactionValueInput} from 'actions'

const TransactionInput = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 26rem;
  width: 100%;
`

const Button = styled.button`
  background: none;
  border: 0;
  ${({border}) => border && 'border-bottom: 1px solid #ddd'};
  color: rgba(0, 0, 0, .7);
  font-size: 18px;
  outline: none;
  padding: 14px;
  cursor: pointer;
  width: calc(100% /3);

  &:active {
    background-color: #ddd;
  }

  &:nth-child(3n + 2) {
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
  }
`

let TransactionNewInput = ({dispatch}) => {
  let buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', <i className='icon-backspace' />]
  let _inputValue = e => dispatch(transactionValueInput(e.target.innerHTML))

  return (
    <TransactionInput onClick={_inputValue}>
      {buttons.map((button, i) => <Button key={i} border={i < 9}>{button}</Button>)}
    </TransactionInput>
  )
}

export default connect()(TransactionNewInput)
