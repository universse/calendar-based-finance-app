import React from 'react'
import {connect} from 'react-redux'
import {selectDate} from 'actions'

let CalendarDates = ({dates, currentDate, dispatch}) =>
  <ul className='dates'>
    {dates.map(d => {
      var date = d.date

      var todayStyle = date.toLocaleDateString() === new Date().toLocaleDateString() && {color: '#d32f2f', fontWeight: 700}
      var selectedDateStyle = date.toLocaleDateString() === currentDate.toLocaleDateString() && {color: '#111', fontWeight: 700}
      var currentMonthStyle = d.current && {color: '#464646'}

      var style = todayStyle || selectedDateStyle || currentMonthStyle || {color: '#ccc'}
      console.log(style)
      return <li key={date} onClick={() => dispatch(selectDate(date))} style={style}>{date.getDate()}</li>
    })}
  </ul>

export default connect(
  state => ({
    currentDate: state.currentDate
  })
)(CalendarDates)
