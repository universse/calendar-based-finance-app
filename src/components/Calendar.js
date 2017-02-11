import React from 'react'
import styled from 'styled-components'

import CalendarMonth from 'CalendarMonth'
import {CalendarWeekdays} from 'CalendarWeekdays'
import CalendarDatesContainer from 'CalendarDatesContainer'

const Wrapper = styled.div`
  background: #fefefe;
  margin: 0 auto;
  max-width: 26rem;

  @media screen and (min-width: 768px) {
    margin-right: 0;
    max-width: 27rem;
    min-width: 25rem;
    padding: 0 1vw 0 2vw;
  }
`

export let Calendar = props =>
  <Wrapper>
    <CalendarMonth />
    <CalendarWeekdays />
    <CalendarDatesContainer />
  </Wrapper>
