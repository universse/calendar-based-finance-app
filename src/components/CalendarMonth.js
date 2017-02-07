import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'

import {prevMonth, nextMonth} from 'actions'
import Ul from 'Ul'
import Li from 'Li'

const MonthUl = styled(Ul)`
  align-items: center;
  height: 64px;
  justify-content: space-between;
  padding: 0;
`

const MonthLi = styled(Li)`
  font-size: 1rem;
  padding: 20px;

  &:nth-child(2) {
    cursor: default;
    font-size: 1.2rem;
  }
`

let CalendarMonth = ({currentDate, prevMonth, nextMonth}) => {
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  var d = new Date(currentDate)
  var month = d.getMonth()
  var year = d.getFullYear()

  return (
    <MonthUl>
      <MonthLi onClick={prevMonth}>&#10094;</MonthLi>
      <MonthLi>{months[month]} {year}</MonthLi>
      <MonthLi onClick={nextMonth}>&#10095;</MonthLi>
    </MonthUl>
  )
}

export default connect(
  state => ({
    currentDate: state.currentDate
  }),
  dispatch => ({
    prevMonth: () => dispatch(prevMonth()),
    nextMonth: () => dispatch(nextMonth())
  })
)(CalendarMonth)
