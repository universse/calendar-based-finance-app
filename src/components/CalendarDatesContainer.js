import React from 'react'
import {connect} from 'react-redux'

import CalendarDates from 'CalendarDates'
import {generateDateList} from '../helpers'

let CalendarDatesContainer = ({currentDate, weekview}) => {
  let dates = generateDateList(currentDate)
  let currentDateIndex = dates.findIndex(date => date.date.toLocaleDateString() === currentDate.toLocaleDateString())
  let currentWeek = (_date, i) => Math.floor(i / 7) === Math.floor(currentDateIndex / 7)

  return (
    <CalendarDates dates={weekview ? dates.filter(currentWeek) : dates} />
  )
}

export default connect(
  state => ({
    currentDate: state.currentDate,
    weekview: state.weekview
  })
)(CalendarDatesContainer)
