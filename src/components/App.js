import React from 'react'

import {Calendar} from 'Calendar'
import {Transaction} from 'Transaction'
import {TransactionAdd} from 'TransactionAdd'

export let App = props =>
  <main>
    <Calendar />
    <Transaction />
    <TransactionAdd />
  </main>
