import React from 'react'
import {connect} from 'react-redux'

import TransactionPanelDate from 'TransactionPanelDate'

let TransactionPanelDateContainer = ({currentDate}) => {
  var weekdays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
  var months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']

  let props = {
    weekday: weekdays[currentDate.getDay()],
    month: months[currentDate.getMonth()],
    date: currentDate.getDate()
  }

  return <TransactionPanelDate {...props} />
}

export default connect(
  state => ({
    currentDate: state.currentDate
  })
)(TransactionPanelDateContainer)
