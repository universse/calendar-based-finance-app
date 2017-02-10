import React from 'react'

import styled from 'styled-components'

import {Calendar} from 'Calendar'
import Transactions from 'Transactions'

export const Main = styled.main`
  background: #fefefe;
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export let AppHome = props =>
  <Main>
    <Calendar />
    <Transactions />
  </Main>
