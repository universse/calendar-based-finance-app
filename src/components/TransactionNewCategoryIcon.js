import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'

import {transactionCategoryInput} from 'actions'

const IconWrapper = styled.span`
  display: flex;
  justify-content: center;
  margin: .6rem 0;
  padding: .75rem 0;
  position: relative;
  width: 20%;
`

let TransactionNewCategoryIcon = ({category, dispatch}) =>
  <IconWrapper><i className={`icon-${category} icons-custom`} onClick={() => dispatch(transactionCategoryInput(category))} /></IconWrapper>

export default connect()(TransactionNewCategoryIcon)
