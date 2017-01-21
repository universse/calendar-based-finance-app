import React from 'react'
import {connect} from 'react-redux'

import {transactionCategoryInput} from 'actions'

let TransactionNewCategories = ({dispatch}) => {
  let transactionCategories = ['home', 'home', 'home', 'home', 'home', 'home', 'home', 'home', 'home', 'home', 'home', 'home', 'home', 'home', 'home']

  return (
    <div className='transaction-categories'>
      <p>Choose a Category</p>
      <div className='transaction-categories-icons' onClick={(e) => dispatch(transactionCategoryInput(e.target.innerHTML))}>
        {transactionCategories.map((category, i) => <i key={i} className='material-icons md-36'>{category}</i>)}
      </div>
    </div>

  )
}

export default connect()(TransactionNewCategories)
