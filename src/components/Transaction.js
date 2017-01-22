import React from 'react'

export let Transaction = ({category, note, value}) =>
  <li>
    <i className='material-icons md-36'>{category}</i>
    <span className='note'>Housing</span>
    <span className='value'>${value}</span>
  </li>
