import React from 'react'
import styled from 'styled-components'

import Ul from 'Ul'
import Li from 'Li'

const WeekdayUl = styled(Ul)`
  border-top: 1px solid #ddd
  flex-wrap: wrap
  opacity: .4
  padding: 1rem 0
`

const WeekdayLi = styled(Li)`
  text-align: center
  width: calc(100% / 7)
  cursor: default
  font-size: .8rem
  font-weight: 600
`

export let CalendarWeekdays = props => {
  let weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
  return (
    <WeekdayUl>
      {weekdays.map((weekday, i) => <WeekdayLi key={i}>{weekday}</WeekdayLi>)}
    </WeekdayUl>
  )
}
