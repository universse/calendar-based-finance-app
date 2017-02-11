import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'

const CurrentDate = styled.div`
  font-size: 3rem;
  margin: 1em 0;
  padding-right: 1em;
  text-align: right;

  @media screen and (max-width: 767px) {
    display: none;
  }
`

let TransactionPanelDate = props =>
  <CurrentDate>monday</CurrentDate>

export default connect()(TransactionPanelDate)
