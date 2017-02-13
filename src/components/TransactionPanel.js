import React from 'react'
import styled from 'styled-components'

import TransactionPanelDateContainer from 'TransactionPanelDateContainer'
import Transactions from 'Transactions'

const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 26rem;
  overflow: hidden;
  width: 100%;

  @media screen and (min-width: 768px) {
    background-color: #f44336;
    border-bottom-right-radius: 15px;
    border-top-right-radius: 15px;
    color: #fff;
    flex-basis: calc(100vw - 25rem);
    flex-direction: column;
    margin-left: 0;
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
