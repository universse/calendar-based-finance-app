import React from 'react'

import {Calendar} from 'Calendar'
import Transactions from 'Transactions'
import {TransactionAdd} from 'TransactionAdd'
import Logout from 'Logout'

export let App = props =>
  <main>
    <Calendar />
    <Transactions />
    <TransactionAdd />
    <Logout />
  </main>
