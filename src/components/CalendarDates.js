import React from 'react'
import {connect} from 'react-redux'

import styled from 'styled-components'

import {selectDate, transactionsFetch} from 'actions'

import Ul from 'Ul'
import Li from 'Li'

const DateUl = styled(Ul)`
  border-top: 1px solid #ddd
  flex-wrap: wrap
  border-bottom: 1px solid #ddd
`

const DateLi = styled(Li)`
  text-align: center
  width: calc(100% / 7)
  padding: 1.25rem 0
`

class CalendarDates extends React.Component {
  constructor (props) {
    super(props)
    this._setCurrentDate = this._setCurrentDate.bind(this)
  }

  _setCurrentDate (e) {
    let ul = e.currentTarget
    let i = Array.prototype.indexOf.call(ul.children, e.target)

    let {dates, dispatch} = this.props
    dispatch(selectDate(dates[i].date))
    dispatch(transactionsFetch())
  }

  render () {
    let {dates, currentDateString} = this.props

    return (
      <DateUl onClick={this._setCurrentDate}>
        {dates.map(d => {
          var date = d.date
          var dateString = date.toLocaleDateString()

          var todayStyle = dateString === new Date().toLocaleDateString() && {color: '#FF5252', fontWeight: 700}
          var currentMonthStyle = d.current && {color: '#000', opacity: 0.55}
          var selectedDateStyle = dateString === currentDateString && {background: '#f1f1f8', fontWeight: 700, opacity: 0.95}

          var style = todayStyle || currentMonthStyle || {color: '#000', opacity: 0.2}
          style = Object.assign(style, selectedDateStyle)

          return <DateLi key={dateString} style={style}>{date.getDate()}</DateLi>
        })}
      </DateUl>
    )
  }
}

export default connect(
  state => ({
    currentDateString: state.currentDate.toLocaleDateString()
  })
)(CalendarDates)
