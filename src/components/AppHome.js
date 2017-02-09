import React from 'react'

import styled from 'styled-components'

import {Calendar} from 'Calendar'
import Transactions from 'Transactions'
import {TransactionAdd} from 'TransactionAdd'
// import Logout from 'Logout'

export const Main = styled.main`
  background: #fefefe;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 26rem;
  width: 100%;
`

export let AppHome = props =>
  <Main>
    <Calendar />
    <Transactions />
    <TransactionAdd />
  </Main>
