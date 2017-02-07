import React from 'react'
import styled from 'styled-components'

import TransactionNewTopbar from 'TransactionNewTopbar'
import TransactionNewValue from 'TransactionNewValue'
import TransactionNewCategories from 'TransactionNewCategories'
import TransactionNewInput from 'TransactionNewInput'

const Wrapper = styled.div`
  & > div + div {
    border-top: 1px solid #ddd;
  }
`

export let TransactionNew = props =>
  <Wrapper>
    <TransactionNewTopbar />
    <TransactionNewValue />
    <TransactionNewCategories />
    <TransactionNewInput />
  </Wrapper>
