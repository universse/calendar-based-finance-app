import {routerReducer} from 'react-router-redux'
import {combineReducers} from 'redux'

const currentDate = (state = new Date(), action) => {
  var d = new Date(state)
  var currentMonth = d.getMonth()
  switch (action.type) {
    case 'PREVIOUS_MONTH':
      d.setMonth(currentMonth - 1)
      d.setDate(1)
      return new Date(d)

    case 'NEXT_MONTH':
      d.setMonth(currentMonth + 1)
      d.setDate(1)
      return new Date(d)

    case 'SELECT_DATE':
      return action.date

    default:
      return state
  }
}

const transactionIdEdit = (state = false, action) => {
  switch (action.type) {
    case 'SWITCH_EDIT_STATE':
      return action.id

    default:
      return state
  }
}

const newTransactionCategory = (state = '', action) => {
  switch (action.type) {
    case 'INPUT_CATEGORY':
      return action.category

    case 'CLEAR_CATEGORY':
    case 'LOG_OUT':
      return ''

    default:
      return state
  }
}

const newTransactionNote = (state = '', action) => {
  switch (action.type) {
    case 'CLEAR_NOTE':
    case 'LOG_OUT':
      return ''

    default:
      return state
  }
}

const newTransactionValue = (state = '0', action) => {
  switch (action.type) {
    case 'INPUT_VALUE':
      let value = action.value
      let dotPosition = state.indexOf('.')

      if (value.length !== 1 && /[1-9]{2,}/.test(value)) {
        return value
      } else if (value.length !== 1) {
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

    case 'CLEAR_VALUE':
    case 'LOG_OUT':
      return '0'

    default:
      return state
  }
}

const transactionList = (state = {}, action) => {
  let date = action.date
  let dailyListObj = {}

  switch (action.type) {
    case 'ADD_TRANSACTION':
      let transaction = action.transaction
      let dailyList = state[date] || []
      dailyList = dailyList.concat(transaction)

      dailyListObj[date] = dailyList
      return Object.assign({}, state, dailyListObj)

    case 'EDIT_TRANSACTION':
      let updatedDailyList = state[date].map(transaction => {
        if (transaction.id === action.transaction.id) {
          return action.transaction
        }
        return transaction
      })

      dailyListObj[date] = updatedDailyList
      return Object.assign({}, state, dailyListObj)

    case 'LOG_OUT':
      return {}

    default:
      return state
  }
}

const user = (state = '', action) => {
  switch (action.type) {
    case 'LOG_IN':
      return action.uid

    case 'LOG_OUT':
      return ''

    default:
      return state
  }
}

const reducer = combineReducers({
  currentDate,
  transactionIdEdit,
  newTransactionCategory,
  newTransactionNote,
  newTransactionValue,
  transactionList,
  routing: routerReducer,
  user
})

export default reducer
