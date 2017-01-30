import React from 'react'
import {connect} from 'react-redux'

import styled from 'styled-components'

import {selectDate, transactionsFetch} from 'actions'
import CalendarDate from 'CalendarDate'

import Ul from 'Ul'

const DateUl = styled(Ul)`
  border-top: 1px solid #ddd
  flex-wrap: wrap
  border-bottom: 1px solid #ddd
`

let CalendarDates = ({dates, dispatch}) => {
  let _setCurrentDate = e => {
    let ul = e.currentTarget
    let index = Array.prototype.indexOf.call(ul.children, e.target)

    dispatch(selectDate(dates[index].date))
    dispatch(transactionsFetch())
  }

  return (
    <DateUl onClick={_setCurrentDate}>
      {dates.map(d => <CalendarDate key={d.date.toLocaleDateString()} d={d} />)}
    </DateUl>
  )
}

export default connect()(CalendarDates)
