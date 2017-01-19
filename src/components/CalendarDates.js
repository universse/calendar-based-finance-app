import React from 'react'
import {connect} from 'react-redux'

import {selectDate} from 'actions'

class CalendarDates extends React.Component {
  constructor (props) {
    super(props)
    this._setCurrentDate = this._setCurrentDate.bind(this)
  }

  _setCurrentDate (e) {
    let ul = e.target.parentElement
    let i = Array.prototype.indexOf.call(ul.children, e.target)

    let {dates, dispatch} = this.props
    dispatch(selectDate(dates[i].date))
  }

  render () {
    let {dates, currentDate} = this.props

    return (
      <ul className='dates' onClick={this._setCurrentDate}>
        {dates.map(d => {
          var date = d.date

          var todayStyle = date.toLocaleDateString() === new Date().toLocaleDateString() && {color: '#F54235', fontWeight: 700}
          var currentMonthStyle = d.current && {color: '#000', opacity: 0.55}
          var selectedDateStyle = date.toLocaleDateString() === currentDate.toLocaleDateString() && {background: '#f1f1f8', fontWeight: 700, opacity: 0.95}

          var style = todayStyle || currentMonthStyle || {color: '#000', opacity: 0.2}
          style = Object.assign(style, selectedDateStyle)
          return <li key={date} style={style}>{date.getDate()}</li>
        })}
      </ul>
    )
  }
}

export default connect(
  state => ({
    currentDate: state.currentDate
  })
)(CalendarDates)
