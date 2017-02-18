import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'

import {prevMonth, nextMonth} from 'actions'
import Ul from 'Ul'
import {backgroundColor} from 'variables'

const MonthUl = styled(Ul)`
  align-items: center;
  background-color: ${backgroundColor};
  box-shadow: 0 3px 6px rgba(0, 0, 0, .16), 0 3px 6px rgba(0, 0, 0, .23);
  color: #fff;
  height: 64px;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    background: #fefefe;
    box-shadow: none;
    color: #000;
    height: 8rem;
    opacity: .9;
  }
`

const MonthLi = styled.li`
  cursor: pointer;
  font-size: 1rem;
  padding: 1.25em;

  &:nth-child(2) {
    cursor: default;
    font-size: 1.2rem;

    @media screen and (min-width: 48rem) {
      font-size: 1.5rem;
    }
  }

  @media screen and (min-width: 48rem) {
    padding-bottom: 2.5em;
    padding-top: 2.5em;
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
