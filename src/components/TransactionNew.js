import React from 'react'

import TransactionNewTopbar from 'TransactionNewTopbar'
import TransactionValue from 'TransactionValue'
import {TransactionCategories} from 'TransactionCategories'
import TransactionInput from 'TransactionInput'

export let TransactionNew = props =>
  <div className='transaction-new'>
    <TransactionNewTopbar />
    <TransactionValue />
    <TransactionCategories />
    <TransactionInput />
  </div>
