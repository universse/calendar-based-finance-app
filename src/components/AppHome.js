import React from 'react'
import styled from 'styled-components'

import {Calendar} from 'Calendar'
import TransactionPanel from 'TransactionPanel'

const Main = styled.main`
  display: flex;
  flex-direction: column;


  @media screen and (max-width: 767px)) {
    height: calc(100vh - 48px);
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin-top: 2rem;
  }
`

export let AppHome = props =>
  <Main>
    <Calendar />
    <TransactionPanel />
  </Main>
