import React from 'react'
import {connect} from 'react-redux'

import styled from 'styled-components'

import Li from 'Li'

const DateLi = styled(Li)`
  text-align: center
  width: calc(100% / 7)
  padding: 1.25rem 0
`

let CalendarDate = ({d, currentDateString}) => {
  var date = d.date
  var dateString = date.toLocaleDateString()

  var todayStyle = dateString === new Date().toLocaleDateString() && {color: '#FF5252', fontWeight: 700}
  var currentMonthStyle = d.current && {color: '#000', opacity: 0.55}
  var selectedDateStyle = dateString === currentDateString && {background: '#f1f1f8', fontWeight: 700, opacity: 0.95}

  var style = todayStyle || currentMonthStyle || {color: '#000', opacity: 0.2}
  style = Object.assign(style, selectedDateStyle)

  return <DateLi key={dateString} style={style}>{date.getDate()}</DateLi>
}

export default connect(
  state => ({
    currentDateString: state.currentDate.toLocaleDateString()
  })
)(CalendarDate)
