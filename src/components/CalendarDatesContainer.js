import React from 'react'
import {connect} from 'react-redux'

import {CalendarDates} from 'CalendarDates'

let CalendarDatesContainer = ({currentDate}) => {
  var d = new Date(currentDate)
  var month = d.getMonth()
  var year = d.getFullYear()

  var firstDay = new Date(year, month, 1)
  var firstWeekday = firstDay.getDay()

  var lastDay = new Date(year, month + 1, 0)
  var lastWeekday = lastDay.getDay()
  var lastDate = lastDay.getDate()

  var dates = []

  var last = 0
  while (firstWeekday !== 0) {
    dates.unshift({
      date: new Date(year, month, last),
      current: false
    })
    last--
    firstWeekday--
  }

  for (var i = 0; i < lastDate; i++) {
    dates.push({
      date: new Date(year, month, i + 1),
      current: true
    })
  }

  var first = 1
  while (lastWeekday !== 6) {
    dates.push({
      date: new Date(year, month + 1, first),
      current: false
    })
    first++
    lastWeekday++
  }

  return (
    <CalendarDates todayDate={new Date().toLocaleDateString()} dates={dates} />
  )
}

export default connect(
  state => ({
    currentDate: state.currentDate
  })
)(CalendarDatesContainer)
