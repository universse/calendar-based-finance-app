import React from 'react'
import styled from 'styled-components'

import TransactionNewTopbar from 'TransactionNewTopbar'
import TransactionNewValue from 'TransactionNewValue'
import TransactionNewCategories from 'TransactionNewCategories'
import TransactionNewNote from 'TransactionNewNote'
import TransactionNewInput from 'TransactionNewInput'

const Main = styled.main`
  display: flex;
  flex-direction: column;
`

const Wrapper = styled.div`
  background-color: #fefefe;
  box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24);
  display: flex;
  flex-direction: column;
  height: calc(100vh - 56px);
  margin: 0 auto;
  max-width: 26rem;
  width: 100%;
`

export let TransactionNew = props =>
  <Main>
    <Wrapper>
      <TransactionNewTopbar />
      <TransactionNewValue />
      <TransactionNewCategories />
      <TransactionNewNote />
      <TransactionNewInput />
    </Wrapper>
  </Main>
