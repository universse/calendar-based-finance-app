import React from 'react'
import {CalendarMonth} from 'CalendarMonth'
import {CalendarWeekdays} from 'CalendarWeekdays'
import {CalendarDatesContainer} from 'CalendarDatesContainer'

export class Calendar extends React.Component {
  constructor (props) {
    super(props)
    var d = new Date()
    this.state = {
      currentMonth: d.getMonth(),
      currentDate: d.getDate(),
      currentYear: d.getFullYear()
    }
  }

  render () {
    let {currentMonth, currentDate, currentYear} = this.state

    return (
      <main>
        <CalendarMonth month={currentMonth} year={currentYear} />
        <CalendarWeekdays />
        <CalendarDatesContainer month={currentMonth} date={currentDate} year={currentYear} />
      </main>
    )
  }
}
