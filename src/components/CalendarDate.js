import React from 'react'
import {connect} from 'react-redux'

import styled from 'styled-components'

const DateLi = styled.li`
  color: ${props => (props.selected && '#fff') || (props.today && '#ff5252') || '#000'};
  display: flex;
  justify-content: center;
  margin: 0.3em 0;
  opacity: ${props => ((props.selected || props.today) && 0.95) || (props.currentMonth && 0.55) || 0.1};
  text-align: center;
  width: calc(100% / 7);
`

const DateWrapper = styled.span`
  align-items: center;
  background: ${props => props.selected ? '#f44336' : '#fefefe'};
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  height: 3em;
  justify-content: center;
  width: 3em;

  @media screen and (min-width: 416px) {
    font-size: 16px;
  }
`

let CalendarDate = ({d, currentDateString}) => {
  var date = d.date
  var dateString = date.toLocaleDateString()
  var props = {
    key: dateString,
    today: dateString === new Date().toLocaleDateString(),
    currentMonth: d.current,
    selected: dateString === currentDateString
  }

  return (
    <DateLi {...props}>
      <DateWrapper selected={props.selected}>{date.getDate()}</DateWrapper>
    </DateLi>)
}

export default connect(
  state => ({
    currentDateString: state.currentDate.toLocaleDateString()
  })
)(CalendarDate)
