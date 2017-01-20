import React from 'react'

export let TransactionCategories = props => {
  let transactionCategories = ['home', 'home', 'home', 'home', 'home', 'home', 'home', 'home', 'home', 'home']

  return (
    <div className='transaction-categories'>
      <p>Choose a Category</p>
      <div className='transaction-categories-icons'>
        {transactionCategories.map((category, i) => <i key={i} className='material-icons md-36'>{category}</i>)}
      </div>
    </div>

  )
}
