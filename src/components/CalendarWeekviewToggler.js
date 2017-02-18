import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'

import {weekviewToggle} from 'actions'

const Wrapper = styled.div`
  box-shadow: 0 4px 4px 0px rgba(0, 0, 0, .12), 0 4px 4px -5px rgba(0, 0, 0, .24);
  color: #000;
  opacity: .8;
  text-align: center;
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
