import firebase, {firebaseRef, githubProvider} from '../firebase'
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

export const weekviewToggle = () => ({
  type: 'TOGGLE_WEEKVIEW'
})

const editStateSet = id => ({
  type: 'SWITCH_EDIT_STATE',
  id
})

export const editStateStartSetting = id => (dispatch, getState) => {
  dispatch(editStateSet(id))
  let date = getState().currentDate.toDateString()
  let transactionList = getState().transactionList

  let currentTransaction = transactionList[date].find(transaction => transaction.id === id)
  let {category, note, value} = currentTransaction

  dispatch(transactionCategoryInput(category))
  dispatch(transactionNoteInput(note))
  dispatch(transactionValueInput(value))
}

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

export const transactionNoteCancel = currentNote => ({
  type: 'CANCEL_NOTE',
  currentNote
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

const transactionListUpdate = (transactions, date) => ({
  type: 'UPDATE_TRANSACTIONS',
  transactions
})

const transactionEdit = (transaction, date) => ({
  type: 'EDIT_TRANSACTION',
  transaction,
  date
})

export const transactionClear = () => (dispatch) => {
  dispatch(transactionCategoryClear())
  dispatch(transactionNoteClear())
  dispatch(transactionValueClear())
  dispatch(editStateSet(false))
  dispatch(push('app'))
}

export const transactionStartAdding = transaction => (dispatch, getState) => {
  let uid = getState().user
  let date = getState().currentDate.toDateString()
  let transactionRef = firebaseRef.child(uid + '/' + date).push(transaction)

  return transactionRef.then(() => {
    dispatch(transactionAdd({id: transactionRef.key, ...transaction}, date))
    dispatch(transactionClear())
  })
}

export const transactionStartEditting = transaction => (dispatch, getState) => {
  let uid = getState().user
  let date = getState().currentDate.toDateString()
  let id = getState().transactionIdEdit

  let transactionRef = firebaseRef.child(`${uid}/${date}/${id}`)

  return transactionRef.update({...transaction}).then(() => {
    dispatch(transactionEdit({id, ...transaction}, date))
    dispatch(transactionClear())
  })
}

export const transactionsFetch = () => (dispatch, getState) => {
  let uid = getState().user
  let transactionList = getState().transactionList

  firebaseRef.child(uid).once('value').then(snapshot => {
    let allTransactions = snapshot.val()
    if (allTransactions) {
      Object.keys(allTransactions).map(date => {
        let savedDailyList = snapshot.val()[date]
        let formattedList = Object.keys(savedDailyList).map(id => ({id, ...savedDailyList[id]}))

        if (!transactionList[date]) {
          dispatch(transactionAdd(formattedList, date))
        } else {
          dispatch(transactionListUpdate({[date]: formattedList}))
        }
      })
    }
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
