import React from 'react'
import {render} from 'react-dom'
import {browserHistory} from 'react-router'
import {syncHistoryWithStore, push} from 'react-router-redux'
import {AppContainer} from 'react-hot-loader'
import 'normalize.css'

import {App} from 'App'
import {logIn, logOut, selectDate, transactionsFetch} from 'actions'
import firebase from './firebase'
import configureStore from 'store'
import 'globalStyle'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

if (!firebase.auth().currentUser) {
  store.dispatch(push(''))
}

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
