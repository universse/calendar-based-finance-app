import React from 'react'

import TransactionNewTopbar from 'TransactionNewTopbar'
import TransactionNewValue from 'TransactionNewValue'
import TransactionNewCategories from 'TransactionNewCategories'
import TransactionNewInput from 'TransactionNewInput'
import Main from 'Main'

export let TransactionNew = props =>
  <Main>
    <TransactionNewTopbar />
    <TransactionNewValue />
    <TransactionNewCategories />
    <TransactionNewInput />
  </Main>
