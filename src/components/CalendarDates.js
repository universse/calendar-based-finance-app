import React from 'react'
import {connect} from 'react-redux'

import styled from 'styled-components'

import {selectDate} from 'actions'
import CalendarDate from 'CalendarDate'

import Ul from 'Ul'

const DateUl = styled(Ul)`
  border-top: 1px solid #eee;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    border-bottom: none;
  }
`

let CalendarDates = ({dates, dispatch}) => {
  let _setCurrentDate = e => {
    let target = e.target
    if (target.tagName === 'SPAN') {
      let ul = e.currentTarget
      let index = Array.prototype.indexOf.call(ul.children, target.parentElement)

      dispatch(selectDate(dates[index].date))
    }
  }

  return (
    <DateUl onClick={_setCurrentDate}>
      {dates.map(d => <CalendarDate key={d.date.toLocaleDateString()} d={d} />)}
    </DateUl>
  )
}

export default connect()(CalendarDates)
