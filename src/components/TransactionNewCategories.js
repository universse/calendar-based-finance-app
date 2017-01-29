import React from 'react'
import {connect} from 'react-redux'

import {transactionCategoryInput} from 'actions'

let TransactionNewCategories = ({dispatch}) => {
  let transactionCategories = ['home', 'restaurant_menu', 'glass', 'directions_transit', 'automobile', 'medkit', 'shopping_cart', 'plane', 'book', 'gift']

  return (
    <div className='transaction-categories'>
      <p>Choose a Category</p>
      <div className='transaction-categories-icons'>
        {transactionCategories.map((category, i) => <span key={i} onClick={() => dispatch(transactionCategoryInput(category))}><i className={`icon-${category} icons-custom`} /></span>)}
      </div>
    </div>

  )
}

export default connect()(TransactionNewCategories)
