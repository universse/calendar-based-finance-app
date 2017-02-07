import React from 'react'
import {connect} from 'react-redux'

import styled from 'styled-components'

import Li from 'Li'

const DateLi = styled(Li)`
  background: ${props => props.selected && '#f1f1f8'};
  color: ${props => props.today ? '#FF5252' : '#000'};
  font-weight: ${props => (props.today || props.selected) && 700};
  opacity: ${props => ((props.selected || props.today) && 0.95) || (props.currentMonth && 0.55) || 0.2};
  padding: 1.25rem 0;
  text-align: center;
  width: calc(100% / 7);
`

let CalendarDate = ({d, currentDateString}) => {
  var date = d.date
  var dateString = date.toLocaleDateString()

  return <DateLi key={dateString}
    today={dateString === new Date().toLocaleDateString()}
    currentMonth={d.current}
    selected={dateString === currentDateString}>{date.getDate()}</DateLi>
}

export default connect(
  state => ({
    currentDateString: state.currentDate.toLocaleDateString()
  })
)(CalendarDate)
