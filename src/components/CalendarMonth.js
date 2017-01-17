import React from 'react'
import {connect} from 'react-redux'

import {prevMonth, nextMonth} from 'actions'

let CalendarMonth = ({currentDate, prevMonth, nextMonth}) => {
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  var d = new Date(currentDate)
  var month = d.getMonth()
  var year = d.getFullYear()

  return (
    <ul className='month'>
      <li onClick={prevMonth}>&#10094;</li>
      <li>{months[month]} {year}</li>
      <li onClick={nextMonth}>&#10095;</li>
    </ul>
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
