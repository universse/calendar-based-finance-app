import React from 'react'
import {connect} from 'react-redux'

import {editStateStartSetting} from 'actions'

let Transaction = ({id, category, note, value, dispatch}) =>
  <li onClick={() => dispatch(editStateStartSetting(id))}>
    <i className={`fa fa-${category} fa-2x`} />
    <span className='note'>Housing</span>
    <span className='value'>${value}</span>
  </li>

export default connect()(Transaction)
