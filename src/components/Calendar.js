import React from 'react'
import styled from 'styled-components'

import CalendarMonth from 'CalendarMonth'
import {CalendarWeekdays} from 'CalendarWeekdays'
import CalendarDatesContainer from 'CalendarDatesContainer'

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 26rem;

  @media screen and (min-width: 48rem) {
    min-width: 25rem;
    max-width: 27rem;
    margin-right: 10px;
  }
`

export let Calendar = props =>
  <Wrapper>
    <CalendarMonth />
    <CalendarWeekdays />
    <CalendarDatesContainer />
  </Wrapper>
