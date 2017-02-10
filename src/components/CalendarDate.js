import React from 'react'
import {connect} from 'react-redux'

import styled from 'styled-components'

const DateLi = styled.li`
  color: ${({selected, today}) => (selected && '#fff') || (today && '#ff5252') || '#000'};
  display: flex;
  font-weight: ${({selected, today}) => today && !selected && 700};
  justify-content: center;
  margin: 0.4em 0;
  opacity: ${({currentMonth, selected, today}) => ((selected || today) && 0.95) || (currentMonth && 0.55) || 0.1};
  text-align: center;
  width: calc(100% / 7);
`

const DateWrapper = styled.span`
  align-items: center;
  background: ${({selected}) => selected ? '#f44336' : '#fefefe'};
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  height: 3.1em;
  justify-content: center;
  width: 3.1em;

  @media screen and (min-width: 26rem) {
    font-size: 18px;
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
