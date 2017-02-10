import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'

import AppNav from 'AppNav'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 26rem;
  max-height: 100vh;
  width: 100%;
`

let AppLayout = ({children, location}) =>
  <Wrapper>
    {children}
    {location === 'app' && <AppNav />}
  </Wrapper>

export default connect(
  state => ({
    location: state.routing.locationBeforeTransitions.pathname
  })
)(AppLayout)
