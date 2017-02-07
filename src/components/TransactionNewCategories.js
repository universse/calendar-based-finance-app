import React from 'react'
import styled from 'styled-components'

import TransactionNewCategoryIcon from 'TransactionNewCategoryIcon'

const Categories = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  padding: 1rem 0;
`

const Para = styled.div`
  font-size: .9rem;
  margin: 0;
  margin-bottom: .65rem;
  padding-left: 16px;
  width: 100%;
`

const CategoryIcons = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  padding: 0 12px;
  width: 100%;
`

let TransactionNewCategories = ({dispatch}) => {
  let transactionCategories = ['home', 'restaurant_menu', 'glass', 'directions_transit', 'automobile', 'medkit', 'shopping_cart', 'plane', 'book', 'gift']

  return (
    <Categories>
      <Para>Choose a Category</Para>
      <CategoryIcons>
        {transactionCategories.map((category, i) => <TransactionNewCategoryIcon key={i} category={category} />)}
      </CategoryIcons>
    </Categories>

  )
}

export default TransactionNewCategories
