import React from 'react'
import {IndexLink, Link} from 'react-router'

export let AppNav = props =>
  <nav>
    <IndexLink to='/calendar' activeClassName='active'>Login</IndexLink>
    <Link to='/calendar' activeClassName='active'>Calendar</Link>
  </nav>
