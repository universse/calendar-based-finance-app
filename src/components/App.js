import React from 'react'

import styled from 'styled-components'

import {Calendar} from 'Calendar'
import Transactions from 'Transactions'
import {TransactionAdd} from 'TransactionAdd'
import Logout from 'Logout'

const Main = styled.main`
  margin: 0 auto;
  max-width: 45rem;
  width: 100%;
`

export let App = props =>
  <Main>
    <Calendar />
    <Transactions />
    <TransactionAdd />
    <Logout />
  </Main>
