import React from 'react'

import {Main} from 'AppHome'
import TransactionNewTopbar from 'TransactionNewTopbar'
import TransactionNewValue from 'TransactionNewValue'
import TransactionNewCategories from 'TransactionNewCategories'
import TransactionNewInput from 'TransactionNewInput'

export let TransactionNew = props =>
  <Main>
    <TransactionNewTopbar />
    <TransactionNewValue />
    <TransactionNewCategories />
    <TransactionNewInput />
  </Main>
