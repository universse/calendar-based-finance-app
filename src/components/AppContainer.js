import React from 'react'
import {Provider} from 'react-redux'
import {Route, Router, IndexRoute} from 'react-router'

import {AppLayout} from 'AppLayout'
import {Calendar} from 'Calendar'

export let AppContainer = ({store, history}) =>
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' components={AppLayout}>
        <IndexRoute component={Calendar} />
        <Route path='calendar' component={Calendar} />
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
