import React from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'

import styled from 'styled-components'

import {editStateStartSetting} from 'actions'

const TransactionLi = styled.li`
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 48px;
  width: 100%;

  &:not(:last-child) {
    border-bottom: 1px solid #eee;
  }

  @media screen and (min-width: 48rem) {
    border-bottom: none;
    height: 64px;
  }
`

const Icon = styled.i`
  flex-basis: 25%;
  text-align: center;
`

const Note = styled.span`
  flex-grow: 1;
  font-size: 1rem;
  line-height: 36px;
  text-align: left;
`

const Value = styled.span`
  flex-basis: content;
  font-size: 1rem;
  line-height: 36px;
  padding-right: 2em;
  text-align: right;

  @media screen and (min-width: 768px) {
    padding-right: 4em;
  }
`

let Transaction = ({id, category, note, value, dispatch}) => {
  let _editTransaction = () => {
    dispatch(editStateStartSetting(id))
    dispatch(push('/edit'))
  }

  return (
    <TransactionLi onClick={_editTransaction}>
      <Icon className={`fa fa-${category} fa-2x`} />
      <Note>{note}</Note>
      <Value className='value'>${value}</Value>
    </TransactionLi>
  )
}

export default connect()(Transaction)
