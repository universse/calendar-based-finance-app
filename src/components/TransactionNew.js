import React from 'react'
import styled from 'styled-components'

import TransactionNewTopbar from 'TransactionNewTopbar'
import TransactionNewValue from 'TransactionNewValue'
import TransactionNewCategories from 'TransactionNewCategories'
import TransactionNewNote from 'TransactionNewNote'
import TransactionNewInput from 'TransactionNewInput'

const Main = styled.main`
  background: #fefefe;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 48px);
`

export let TransactionNew = props =>
  <Main>
    <TransactionNewTopbar />
    <TransactionNewValue />
    <TransactionNewCategories />
    <TransactionNewNote />
    <TransactionNewInput />
  </Main>
