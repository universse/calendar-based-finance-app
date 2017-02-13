import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: none;
  margin: 2rem 0;
  flex-shrink: 0;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`

const Date = styled.p`
  font-size: 4rem;
  opacity: .96;
  margin: 0;
  padding-left: 1.75rem;
  padding-right: .75rem;
  text-align: right;
  width: 5rem;
`
const MonthAndWeekday = styled.div`
  display: flex;
  flex-direction: column;
  height: 4rem;
  justify-content: flex-end;
`

const Month = styled.p`
  font-size: 1.8rem;
  margin: 0;
  opacity: .9;
`

const Weekday = styled.p`
  font-size: 1.25rem;
  margin: 0;
  opacity: .5;
`

let TransactionPanelDate = ({weekday, month, date}) =>
  <Wrapper>
    <Date>{date < 10 ? '0' + date : date}</Date>
    <MonthAndWeekday>
      <Month>{month}</Month>
      <Weekday>{weekday}</Weekday>
    </MonthAndWeekday>
  </Wrapper>

export default TransactionPanelDate
