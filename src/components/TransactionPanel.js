import React from 'react'
import styled from 'styled-components'

import TransactionPanelDate from 'TransactionPanelDate'
import Transactions from 'Transactions'

const Wrapper = styled.div`
  display: flex;
  height: 1000px;
  margin: 0 auto;
  max-width: 26rem;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    background: #f44336;
    color: #fff;
    flex-basis: calc(100vw - 25rem);
    flex-direction: column;
    margin-left: 0;
    height: 540px;
    max-width: 30rem;
  }
`

let TransactionPanel = () => {
  return (
    <Wrapper>
      <TransactionPanelDate />
      <Transactions />
    </Wrapper>
  )
}

export default TransactionPanel
