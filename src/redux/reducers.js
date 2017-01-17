import {routerReducer} from 'react-router-redux'
import {combineReducers} from 'redux'

const currentDate = (state = new Date(), action) => {
  var d = new Date(state)
  var currentMonth = d.getMonth()

  switch (action.type) {
    case 'PREVIOUS_MONTH':
      d.setMonth(currentMonth - 1)
      return new Date(d)
    case 'NEXT_MONTH':
      d.setMonth(currentMonth + 1)
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
