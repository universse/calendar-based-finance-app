import React from 'react'
import styled from 'styled-components'

import CalendarMonth from 'CalendarMonth'
import {CalendarWeekdays} from 'CalendarWeekdays'
import CalendarDatesContainer from 'CalendarDatesContainer'
import CalendarWeekviewToggler from 'CalendarWeekviewToggler'

const Wrapper = styled.div`
  background-color: #fefefe;
  box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24);
  margin: 0 auto;
  max-width: 26rem;
  width: 100%;

  @media screen and (min-width: 768px) {
    box-shadow: 5px 5px 15px 0 rgba(0, 0, 0, .25);
    height: 570px;
    margin: 0;
    padding: 0 2vw 0 1vw;
    width: 24rem;
  }
`

export let Calendar = props =>
  <Wrapper>
    <CalendarMonth />
    <CalendarWeekdays />
    <CalendarDatesContainer />
    <CalendarWeekviewToggler />
  </Wrapper>
