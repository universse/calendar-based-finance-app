import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'

import {weekviewToggle} from 'actions'

const Wrapper = styled.div`
  color: #000;
  opacity: .8;
  text-align: center;
  border-bottom: 1px solid #000;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

let CalendarWeekviewToggler = ({weekview, dispatch}) => {
  let _toggleWeekview = () => dispatch(weekviewToggle())

  return (
    <Wrapper onClick={_toggleWeekview}>
      {weekview ? 'week' : 'month'}
    </Wrapper>
  )
}

export default connect(
  state => ({
    weekview: state.weekview
  })
)(CalendarWeekviewToggler)
