// import axios from 'axios'
// import firebase, {firebaseRef, githubProvider} from 'firebase.main'
import {push} from 'react-router-redux'

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

export const transactionCategoryInput = category => ({
  type: 'INPUT_CATEGORY',
  category
})

const transactionCategoryClear = () => ({
  type: 'CLEAR_CATEGORY'
})

export const transactionNoteInput = note => ({
  type: 'INPUT_NOTE',
  note
})

const transactionNoteClear = () => ({
  type: 'CLEAR_NOTE'
})

export const transactionValueInput = value => ({
  type: 'INPUT_VALUE',
  value
})

const transactionValueClear = () => ({
  type: 'CLEAR_VALUE'
})

const transactionAdd = (transaction, date) => ({
  type: 'ADD_TRANSACTION',
  transaction,
  date
})

export const transactionClear = () => (dispatch) => {
  dispatch(transactionCategoryClear())
  dispatch(transactionNoteClear())
  dispatch(transactionValueClear())
  dispatch(push('/app'))
}

export const transactionStartAdding = transaction => (dispatch, getState) => {
  let date = getState().currentDate.toLocaleDateString()
  dispatch(transactionAdd(transaction, date))
  dispatch(transactionClear())
}
