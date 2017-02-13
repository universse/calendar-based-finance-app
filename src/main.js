import React from 'react'
import {render} from 'react-dom'
import {browserHistory} from 'react-router'
import {syncHistoryWithStore, push} from 'react-router-redux'
import {AppContainer} from 'react-hot-loader'
import 'normalize.css'

import {App} from 'App'
import {logIn, logOut, selectDate, transactionsFetch, weekviewToggle} from 'actions'
import firebase from './firebase'
import configureStore from 'store'
import 'globalStyle'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)
const dispatch = store.dispatch

if (!firebase.auth().currentUser) {
  dispatch(push(''))
}

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    dispatch(logIn(user.uid))
    dispatch(push('app'))
    dispatch(selectDate(new Date()))
    dispatch(transactionsFetch())
  } else {
    dispatch(logOut())
    dispatch(push(''))
  }
})

window.addEventListener('resize', () => {
  window.innerWidth >= 768 && store.getState().weekview && dispatch(weekviewToggle())
})

render(
  <AppContainer>
    <App store={store} history={history} />
  </AppContainer>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('App', () => {
    render(
      <AppContainer>
        <App />
      </AppContainer>,
      document.getElementById('root')
    )
  })
}
