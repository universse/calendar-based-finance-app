import React from 'react'

export let CalendarWeekdays = props => {
  let weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
  return (
    <ul className='weekdays'>
      {weekdays.map((weekday, i) => <li key={i}>{weekday}</li>)}
    </ul>
  )
}
