import React from 'react'
import {AppNav} from 'AppNav'

export let AppLayout = ({children}) =>
  <div>
    <AppNav />
    {children}
  </div>
