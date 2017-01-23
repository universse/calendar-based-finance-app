import React from 'react'
import {Provider} from 'react-redux'
import {Route, Router, IndexRoute} from 'react-router'

import Login from 'Login'
import {AppLayout} from 'AppLayout'
import {App} from 'App'
import {TransactionNew} from 'TransactionNew'

export let AppContainer = ({store, history}) =>
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' components={AppLayout}>
        <IndexRoute component={Login} />
        <Route path='app' component={App} />
        <Route path='add' component={TransactionNew} />
        <Route path='edit' component={TransactionNew} />
      </Route>
    </Router>
  </Provider>
