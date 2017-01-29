import React from 'react'
import {Link} from 'react-router'

export let TransactionAdd = props =>
  <Link to='/add' style={{bottom: '30px', position: 'fixed', right: '30px'}}>
    <i className='icon-add' />
  </Link>
