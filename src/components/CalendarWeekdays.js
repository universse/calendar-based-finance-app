import React from 'react'
import styled from 'styled-components'

import Ul from 'Ul'

const WeekdayUl = styled(Ul)`
  flex-wrap: wrap;
  opacity: .6;
`

const WeekdayLi = styled.li`
  font-size: .8rem;
  font-weight: 600;
  padding: 0.8em 0;
  text-align: center;
  width: calc(100% / 7);
`

export let CalendarWeekdays = props => {
  let weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
  return (
    <WeekdayUl>
      {weekdays.map((weekday, i) => <WeekdayLi key={i}>{weekday}</WeekdayLi>)}
    </WeekdayUl>
  )
}
