import React from 'react'
import {render} from 'react-dom'
import {browserHistory} from 'react-router'
import {syncHistoryWithStore, push} from 'react-router-redux'

import {AppContainer} from 'AppContainer'
import {logIn, logOut, selectDate, transactionsFetch} from 'actions'
import firebase from 'firebase.main'
import configureStore from 'store'

require('applicationStyle')
// require('material-design-lite/material.min.js')

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(logIn(user.uid))
    store.dispatch(push('app'))
    store.dispatch(selectDate(new Date()))
    store.dispatch(transactionsFetch())
  } else {
    store.dispatch(logOut())
    store.dispatch(push(''))
  }
})

render(
  <AppContainer store={store} history={history} />,
  document.getElementById('root')
)
