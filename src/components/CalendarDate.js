import React from 'react'
import {connect} from 'react-redux'

import styled from 'styled-components'

const DateLi = styled.li`
  display: flex;
  justify-content: center;
  margin: 0.4em 0;
  text-align: center;
  width: calc(100% / 7);
`

const DateWrapper = styled.span`
  align-items: center;
  background-color: ${({selected}) => selected ? '#f44336' : '#fefefe'};
  border-radius: 50%;
  color: ${({selected, today}) => (selected && '#fff') || (today && '#ff5252') || '#000'};
  cursor: pointer;
  display: flex;
  font-size: 14px;
  font-weight: ${({selected, today}) => today && !selected && 700};
  height: 3.1em;
  justify-content: center;
  opacity: ${({currentMonth, selected, today}) => ((selected || today) && 0.95) || (currentMonth && 0.55) || 0.1};
  width: 3.1em;

  @media screen and (min-width: 26rem) {
    font-size: 18px;
    height: 3em;
    width: 3em;
  }
`

let CalendarDate = ({d, currentDateString}) => {
  var date = d.date
  var dateString = date.toLocaleDateString()
  var props = {
    key: dateString,
    today: dateString === new Date().toLocaleDateString(),
    currentMonth: d.currentMonth,
    selected: dateString === currentDateString
  }

  return (
    <DateLi>
      <DateWrapper {...props}>{date.getDate()}</DateWrapper>
    </DateLi>)
}

export default connect(
  state => ({
    currentDateString: state.currentDate.toLocaleDateString()
  })
)(CalendarDate)
