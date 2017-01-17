import React from 'react'
import {CalendarDates} from 'CalendarDates'

export let CalendarDatesContainer = ({month, date, year}) => {
  var firstDay = new Date(year, month, 1)
  var firstWeekday = firstDay.getDay()
  var lastDay = new Date(year, month + 1, 0)
  var lastWeekday = lastDay.getDay()
  var lastDate = lastDay.getDate()

  var dates = []

  var last = 0
  while (firstWeekday !== 0) {
    dates.unshift({
      date: new Date(year, month, last).getDate(),
      current: false
    })
    last--
    firstWeekday--
  }

  for (var i = 0; i < lastDate; i++) {
    dates.push({
      date: i + 1,
      current: true
    })
  }

  var first = 1
  while (lastWeekday !== 6) {
    dates.push({
      date: new Date(year, month + 1, first).getDate(),
      current: false
    })
    first++
    lastWeekday++
  }

  return (
    <CalendarDates date={date} dates={dates} />
  )
}
