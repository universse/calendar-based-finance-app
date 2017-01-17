import React from 'react'

export let CalendarWeekdays = props => {
  let weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  return (
    <ul className='weekdays'>
      {weekdays.map(weekday => <li key={weekday}>{weekday}</li>)}
    </ul>
  )
}
