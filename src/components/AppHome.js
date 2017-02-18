import React from 'react'
import styled from 'styled-components'

import {Calendar} from 'Calendar'
import TransactionPanel from 'TransactionPanel'

const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 56px);

  @media screen and (min-width: 768px) {
    align-items: center;
    flex-direction: row;
    justify-content: center;
  }
`

export let AppHome = props =>
  <Main>
    <Calendar />
    <TransactionPanel />
  </Main>
