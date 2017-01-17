import React from 'react'

export let CalendarMonth = ({month, year}) => {
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  return (
    <ul className='month'>
      <li>{months[month]} {year}</li>
    </ul>
  )
}
