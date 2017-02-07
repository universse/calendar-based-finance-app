import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'

import {editStateStartSetting} from 'actions'
import Li from 'Li'

const TransactionLi = styled(Li)`
  align-items: center;
  border-bottom: 1px solid $light-gray-border;
  display: flex;
  height: 60px;
  width: 100%;
`

const Icon = styled.i`
  flex-basis: 25%;
  text-align: center;
`

const Note = styled.span`
  flex-basis: 55%;
  font-size: 18px;
  line-height: 36px;
  text-align: left;
`

const Value = styled.span`
  flex-basis: 20%;
  font-size: 18px;
  line-height: 36px;
  text-align: right;
`

let Transaction = ({id, category, note, value, dispatch}) =>
  <TransactionLi onClick={() => dispatch(editStateStartSetting(id))}>
    <Icon className={`fa fa-${category} fa-2x`} />
    <Note>Housing</Note>
    <Value className='value'>${value}</Value>
  </TransactionLi>

export default connect()(Transaction)
