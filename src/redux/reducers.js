import {routerReducer} from 'react-router-redux'
import {combineReducers} from 'redux'

const currentDate = (state = new Date(), action) => {
  var d = new Date(state)
  var currentMonth = d.getMonth()
  var currentDate = d.getDate()
  switch (action.type) {
    case 'PREVIOUS_MONTH':
      if (currentDate === 31 || (currentDate > 28 && currentMonth === 2)) {
        d.setDate(0)
      } else {
        d.setMonth(currentMonth - 1)
      }
      return new Date(d)
    case 'NEXT_MONTH':
      d.setMonth(currentMonth + 1)
      if (currentDate === 31 && currentMonth !== 6) {
        d.setDate(0)
      }
      return new Date(d)
    case 'SELECT_DATE':
      return action.date
    default:
      return state
  }
}

const newTransactionValue = (state = '0', action) => {
  switch (action.type) {
    case 'INPUT_TRANSACTION':
      let value = action.value
      let dotPosition = state.indexOf('.')

      if (value.length !== 1) {
        return state.length === 1 ? '0' : state.slice(0, -1)
      } else if (state === '0' && /[1-9]/.test(value)) {
        return value
      } else if (state === '0' && value === '0') {
        return state
      } else if (value === '.') {
        return dotPosition === -1 ? state + value : state
      } else if (dotPosition > -1 && state.slice(dotPosition).length > 2) {
        return state
      } else {
        return state + action.value
      }
    case 'CLEAR_TRANSACTION_INPUT':
      return '0'
    default:
      return state
  }
}

const reducer = combineReducers({
  currentDate,
  newTransactionValue,
  routing: routerReducer
})

export default reducer
