import React from 'react'
import styled from 'styled-components'

import TransactionNewCategoryIcon from 'TransactionNewCategoryIcon'

const Categories = styled.div`
  border-bottom: 1px solid #ddd;
  border-top: 1px solid #eee;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 0 auto;
  max-width: 26rem;
  padding: 1rem 0;
  width: 100%;
`

const Para = styled.div`
  box-sizing: border-box;
  color: rgba(0, 0, 0, .75);
  font-size: .9rem;
  margin: 0;
  margin-bottom: .65rem;
  padding-left: 16px;
  width: 100%;
`

const CategoryIcons = styled.div`
  align-items: center;
  box-sizing: border-box;
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
