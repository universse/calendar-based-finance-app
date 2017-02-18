import React from 'react'
import styled from 'styled-components'

import TransactionPanelDateContainer from 'TransactionPanelDateContainer'
import Transactions from 'Transactions'
import {backgroundColor} from 'variables'

const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 26rem;
  overflow: hidden;
  width: 100%;

  @media screen and (min-width: 768px) {
    background-color: ${backgroundColor};
    box-shadow: 5px 5px 15px 0 rgba(0, 0, 0, .25);
    color: #fff;
    flex-basis: calc(100vw - 25rem);
    flex-direction: column;
    margin: 0;
    height: 570px;
    max-width: 30rem;
  }
`

let TransactionPanel = () => {
  return (
    <Wrapper>
      <TransactionPanelDateContainer />
      <Transactions />
    </Wrapper>
  )
}

export default TransactionPanel
