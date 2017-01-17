import React from 'react'

export let CalendarDates = ({date, dates}) =>
  <ul className='dates'>
    {dates.map(d => {
      if (d.date === date) {
        return <li style={{color: '#d32f2f', fontWeight: 700}}>{d.date}</li>
      } else if (d.current) {
        return <li style={{color: '#444'}}>{d.date}</li>
      }
      return <li>{d.date}</li>
    })}
  </ul>
