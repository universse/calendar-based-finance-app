import React from 'react'
import styled from 'styled-components'

import {Calendar} from 'Calendar'
import Transactions from 'Transactions'
import Main from 'Main'

const Wrapper = styled(Main)`
  @media screen and (min-width: 48rem) {
    flex-direction: row;
    margin-top: 2rem;
  }
`

export let AppHome = props =>
  <Wrapper>
    <Calendar />
    <Transactions />
  </Wrapper>
