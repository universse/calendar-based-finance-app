import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import styled from 'styled-components'

import {startLogout} from 'actions'

const Nav = styled.nav`
  background-color: #f44336;
  width: 100%;
  margin: 0 auto;
  max-width: 26rem;

  @media screen and (min-width: 768px) {
    max-width: none;
  }
`

const NavLink = styled(Link)`
  align-items: center;
  color: white;
  display: inline-flex;
  font-size: 12px;
  height: 48px;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  width: 25%;

  &.active {
    background-color: #D32F2F;
  }
`

let AppNav = ({loggedIn, dispatch}) => {
  let _logOut = () => dispatch(startLogout())

  return (
    <Nav>
      <NavLink to='/app' activeClassName='active'>Calendar</NavLink>
      <NavLink to='/dashboard' activeClassName='active'>Dashboard</NavLink>
      <NavLink to='/add' activeClassName='active'>Add</NavLink>
      <NavLink to='/' onClick={_logOut}>Sign Out!</NavLink>
    </Nav>
  )
}

export default connect(
  state => ({
    loggedIn: state.user
  })
)(AppNav)
