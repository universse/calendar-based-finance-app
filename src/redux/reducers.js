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

const reducer = combineReducers({
  currentDate,
  routing: routerReducer
})

export default reducer
