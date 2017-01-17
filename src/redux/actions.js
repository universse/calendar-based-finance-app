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
