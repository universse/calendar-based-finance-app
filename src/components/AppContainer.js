import React from 'react'
import {Provider} from 'react-redux'
import {Route, Router, IndexRoute} from 'react-router'

import {AppLayout} from 'AppLayout'
import {App} from 'App'
import {TransactionNew} from 'TransactionNew'

export let AppContainer = ({store, history}) =>
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' components={AppLayout}>
        <IndexRoute component={App} />
        <Route path='app' component={App} />
        <Route path='add' component={TransactionNew} />
      </Route>
    </Router>
  </Provider>

// import React from 'react'
// import {Provider} from 'react-redux'
//
// import {store, AppRouter} from 'AppRouter'
//
// export let AppContainer = props =>
//   <Provider store={store}>
//     <AppRouter />
//   </Provider>
