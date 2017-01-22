// import axios from 'axios'
import firebase, {firebaseRef, githubProvider} from 'firebase.main'
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
  let uid = getState().user
  let date = getState().currentDate.toDateString()
  let transactionRef = firebaseRef.child(uid + '/' + date).push(transaction)

  transactionRef.then(() => {
    dispatch(transactionAdd({id: transactionRef.key, ...transaction}, date))
    dispatch(transactionClear())
  })
}

export const transactionsFetch = () => (dispatch, getState) => {
  let uid = getState().user
  let date = getState().currentDate.toDateString()
  firebaseRef.child(uid).once('value').then(snapshot => {
    let savedDailyList = snapshot.val()[date] || {}
    let formattedList = Object.keys(savedDailyList).map(id => ({id, ...savedDailyList[id]}))
    dispatch(transactionAdd(formattedList, date))
  })
}

export const logIn = uid => ({
  type: 'LOG_IN',
  uid
})

export const startLogin = () => (dispatch, getState) =>
  firebase.auth().signInWithPopup(githubProvider)

export const logOut = () => ({
  type: 'LOG_OUT'
})

export const startLogout = () => (dispatch, getState) =>
  firebase.auth().signOut()
