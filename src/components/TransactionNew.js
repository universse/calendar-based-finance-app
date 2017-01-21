import React from 'react'

import TransactionNewTopbar from 'TransactionNewTopbar'
import TransactionNewValue from 'TransactionNewValue'
import TransactionNewCategories from 'TransactionNewCategories'
import TransactionNewInput from 'TransactionNewInput'

export let TransactionNew = props =>
  <div className='transaction-new'>
    <TransactionNewTopbar />
    <TransactionNewValue />
    <TransactionNewCategories />
    <TransactionNewInput />
  </div>
