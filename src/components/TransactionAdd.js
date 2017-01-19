import React from 'react'
import {Link} from 'react-router'

export let TransactionAdd = props =>
  <Link to='/add' style={{bottom: '30px', position: 'fixed', right: '30px'}} className='mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored'>
    <i className='material-icons'>add</i>
  </Link>
