// import axios from 'axios'
// import firebase, {firebaseRef, githubProvider} from 'firebase.main'

export const prevMonth = () => ({
  type: 'PREVIOUS_MONTH'
})

export const nextMonth = () => ({
  type: 'NEXT_MONTH'
})

export const selectDate = date => ({
  type: 'SELECT_DATE',
  date
})

export const transactionInput = value => ({
  type: 'INPUT_TRANSACTION',
  value
})

export const transactionClearInput = () => ({
  type: 'CLEAR_TRANSACTION_INPUT'
})
