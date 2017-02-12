import React from 'react'
import styled from 'styled-components'

import CalendarMonth from 'CalendarMonth'
import {CalendarWeekdays} from 'CalendarWeekdays'
import CalendarDatesContainer from 'CalendarDatesContainer'
import CalendarWeekviewToggler from 'CalendarWeekviewToggler'

const Wrapper = styled.div`
  background-color: #fefefe;
  margin: 0 auto;
  max-width: 26rem;
  width: 100%;

  @media screen and (min-width: 768px) {
    border-bottom-left-radius: 15px;
    border-top-left-radius: 15px;
    margin-right: 0;
    width: 24rem;
    padding: 0 2vw 0 1vw;
  }
`

export let Calendar = props =>
  <Wrapper>
    <CalendarMonth />
    <CalendarWeekdays />
    <CalendarDatesContainer />
    <CalendarWeekviewToggler />
  </Wrapper>
