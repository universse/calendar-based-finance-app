import React from 'react'

export let CalendarDates = ({todayDate, dates}) =>
  <ul className='dates'>
    {dates.map(d => {
      var date = d.date.getDate()
      if (d.date.toLocaleDateString() === todayDate) {
        return <li style={{color: '#d32f2f', fontWeight: 700}}>{date}</li>
      } else if (d.current) {
        return <li style={{color: '#444'}}>{date}</li>
      }
      return <li>{date}</li>
    })}
  </ul>
